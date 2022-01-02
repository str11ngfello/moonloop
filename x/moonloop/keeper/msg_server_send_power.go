package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	authTypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
	"github.com/tendermint/tendermint/types/time"
)

func (k msgServer) SendPower(goCtx context.Context, msg *types.MsgSendPower) (*types.MsgSendPowerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Find the powerup
	powerup, found := k.GetPowerup(ctx, msg.CollectionIndex, msg.ClassTemplateIndex, msg.PowerupTemplateIndex, msg.InstanceIndex)
	if !found {
		return nil, types.ErrMoonLoopPowerupNotFound
	}

	// Accepting more power?
	if !powerup.AcceptingPower {
		return nil, types.ErrMoonLoopNotAcceptingPower
	}

	// Find the powerup template
	powerupTemplate, found := k.GetPowerupTemplate(ctx, msg.CollectionIndex, msg.ClassTemplateIndex, msg.PowerupTemplateIndex)
	if !found {
		return nil, types.ErrMoonLoopPowerupNotFound
	}

	// Create coins and get sender address
	powerCoins := sdk.NewCoin("upower", msg.Power.Amount)
	sender, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return &types.MsgSendPowerResponse{}, err
	}

	// Currently activated, maybe it's time to recharge
	var timeToAdd int32 = 0
	currentlyActivated := time.Now().Unix() < int64(powerup.EndTime)
	if currentlyActivated {
		if powerupTemplate.RechargeRate == sdk.NewCoin("upower", sdk.NewInt(0)) {
			return nil, types.ErrMoonLoopNotAcceptingPower
		}
		timeToAdd = int32(msg.Power.Amount.Quo(powerupTemplate.RechargeRate.Amount).Int64())
		if powerupTemplate.MaxDuration != 0 {
			if (powerup.EndTime - powerup.StartTime + timeToAdd) >= powerupTemplate.MaxDuration {
				return nil, types.ErrMoonLoopMaxDuration
			}
		}
		ctx.EventManager().EmitEvent(
			types.NewPowerupRechargeEvent(msg.CollectionIndex, msg.ClassTemplateIndex, msg.PowerupTemplateIndex, msg.InstanceIndex, timeToAdd, powerup.EndTime+timeToAdd),
		)
	} else {
		// Not activated currently, make sure its not cooling down
		if time.Now().Unix() < int64(powerup.EndTime+powerupTemplate.CoolDownDuration) {
			return nil, types.ErrMoonLoopCoolingDown
		}

		if powerupTemplate.MaxActivations != 0 {
			if powerup.NumActivations >= powerupTemplate.MaxActivations {
				return nil, types.ErrMoonLoopMaxActivations
			}
		}
	}

	// Send power coins from sender to module
	err = k.bankKeeper.SendCoins(ctx, sender, authTypes.NewModuleAddress(types.ModuleName), sdk.NewCoins(powerCoins))
	if err != nil {
		return &types.MsgSendPowerResponse{}, err
	}

	// Add coins to powerup balance
	powerup.Balance = powerup.Balance.Add(powerCoins)

	//Add recharge time if any
	powerup.EndTime += timeToAdd

	if !currentlyActivated && powerup.Balance.IsGTE(powerupTemplate.ActivationBalance) {
		powerup.StartTime = int32(time.Now().Unix())
		powerup.EndTime = powerup.StartTime + powerupTemplate.Duration
		powerup.NumActivations++
		types.EmitPowerupActivatedEvents(ctx, msg.CollectionIndex, msg.ClassTemplateIndex, msg.PowerupTemplateIndex, msg.InstanceIndex, powerup.StartTime, powerup.EndTime)
	}

	// Record contribution
	contribution, found := k.GetContribution(ctx, msg.CollectionIndex, msg.ClassTemplateIndex, msg.PowerupTemplateIndex, msg.InstanceIndex)
	if !found {
		contribution = types.Contribution{
			Creator:              msg.Creator,
			CollectionIndex:      msg.CollectionIndex,
			ClassTemplateIndex:   msg.ClassTemplateIndex,
			PowerupTemplateIndex: msg.PowerupTemplateIndex,
			InstanceIndex:        msg.InstanceIndex,
			Contributors:         make([]string, 0),
			Amounts:              make([]sdk.Coin, 0),
			Timestamps:           make([]int64, 0),
		}
	}
	contribution.Contributors = append(contribution.Contributors, sender.String())
	contribution.Amounts = append(contribution.Amounts, msg.Power)
	contribution.Timestamps = append(contribution.Timestamps, time.Now().Unix())
	if len(contribution.Contributors) == 1 {
		ctx.EventManager().EmitEvent(
			types.NewPowerupRefundAtTimeEvent(msg.CollectionIndex, msg.ClassTemplateIndex, msg.PowerupTemplateIndex, msg.InstanceIndex, int32(time.Now().Unix())+powerupTemplate.RefundDuration),
		)
	}
	k.SetContribution(ctx, contribution)

	k.SetPowerup(ctx, powerup)
	return &types.MsgSendPowerResponse{}, nil
}
