package keeper

import (
	"context"

	"github.com/cosmonaut/moonloop/x/moonloop/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	authTypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	"github.com/tendermint/tendermint/types/time"
)

func (k msgServer) FreePower(goCtx context.Context, msg *types.MsgFreePower) (*types.MsgFreePowerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Find the powerup
	powerup, found := k.GetPowerup(ctx, msg.CollectionIndex, msg.ClassIndex, msg.PowerupTemplateIndex, msg.InstanceIndex)
	if !found {
		return nil, types.ErrPowerupInvalidPowerup
	}

	// Find the powerup template
	powerupTemplate, found := k.GetPowerupTemplate(ctx, msg.CollectionIndex, msg.ClassIndex, msg.PowerupTemplateIndex)
	if !found {
		return nil, types.ErrPowerupInvalidPowerup
	}

	// Powerup still activated?
	if time.Now().Unix() < int64(powerup.EndTime) {
		return nil, types.ErrPowerupIsActivated
	}

	// Find contributions
	contribution, found := k.GetContribution(ctx, msg.CollectionIndex, msg.ClassIndex, msg.PowerupTemplateIndex, msg.InstanceIndex)
	if !found || len(contribution.Contributors) == 0 {
		return &types.MsgFreePowerResponse{}, nil
	}

	// Is refund available?
	if time.Now().Unix()-contribution.Timestamps[0] < int64(powerupTemplate.RefundDuration) {
		return nil, types.ErrPowerupRefundDuration
	}

	//Return contributor balances
	moduleAddress := authTypes.NewModuleAddress(types.ModuleName)
	for i, contributorAddress := range contribution.Contributors {
		coinsToReturn := contribution.Amounts[i]
		contributorSdkAddress, err := sdk.AccAddressFromBech32(contributorAddress)
		if err != nil {
			return &types.MsgFreePowerResponse{}, err
		}
		err = k.bankKeeper.SendCoins(ctx, moduleAddress, contributorSdkAddress, sdk.NewCoins(coinsToReturn))
		if err != nil {
			return &types.MsgFreePowerResponse{}, err
		}
		// sendReclaimEvent(player->id, powerUp->id, contribution->total_power, player->balance);
	}
	contribution.Amounts = make([]sdk.Coin, 0)
	contribution.Contributors = make([]string, 0)
	contribution.Timestamps = make([]int64, 0)
	powerup.Balance = sdk.NewCoin("upower", sdk.NewInt(0))

	// switch (reason) {
	//     case 0: // deactivate
	//         sendDeactivateEvent(powerUp->id, powerUp->fees);
	//         break;
	//     case 1: // refund
	//         sendRefundEvent(powerUp->id);
	//         break;
	//     default:
	//         break;
	//

	k.SetContribution(ctx, contribution)
	k.SetPowerup(ctx, powerup)

	return &types.MsgFreePowerResponse{}, nil
}
