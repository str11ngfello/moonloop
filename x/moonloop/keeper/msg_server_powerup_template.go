package keeper

import (
	"context"

	"github.com/cosmonaut/moonloop/x/moonloop/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreatePowerupTemplate(goCtx context.Context, msg *types.MsgCreatePowerupTemplate) (*types.MsgCreatePowerupTemplateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, isFound := k.GetCollection(ctx, msg.CollectionIndex)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "collection not found")
	}

	class, isFound := k.GetClass(ctx, msg.CollectionIndex, msg.ClassIndex)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "class not found")
	}

	// Check if the value already exists
	_, isFound = k.GetPowerupTemplate(
		ctx,
		msg.CollectionIndex,
		msg.ClassIndex,
		msg.PowerupTemplateIndex,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var powerupTemplate = types.PowerupTemplate{
		Creator:              msg.Creator,
		CollectionIndex:      msg.CollectionIndex,
		ClassIndex:           msg.ClassIndex,
		PowerupTemplateIndex: msg.PowerupTemplateIndex,
		Name:                 msg.Name,
		Description:          msg.Description,
		Count:                msg.Count,
		ActivationBalance:    msg.ActivationBalance,
		MaxBalance:           msg.MaxBalance,
		Duration:             msg.Duration,
		MaxDuration:          msg.MaxDuration,
		RefundDuration:       msg.RefundDuration,
		MaxActivations:       msg.MaxActivations,
		CoolDownDuration:     msg.CoolDownDuration,
		RechargeRate:         msg.RechargeRate,
		FeeRate:              msg.FeeRate,
		ActivationType:       msg.ActivationType,
		EventData:            msg.EventData,
	}

	k.SetPowerupTemplate(
		ctx,
		powerupTemplate,
	)

	class.PowerupTemplates = append(class.PowerupTemplates, msg.PowerupTemplateIndex)
	k.SetClass(ctx, class)

	return &types.MsgCreatePowerupTemplateResponse{}, nil
}

func (k msgServer) UpdatePowerupTemplate(goCtx context.Context, msg *types.MsgUpdatePowerupTemplate) (*types.MsgUpdatePowerupTemplateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetPowerupTemplate(
		ctx,
		msg.CollectionIndex,
		msg.ClassIndex,
		msg.PowerupTemplateIndex,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var powerupTemplate = types.PowerupTemplate{
		Creator:              msg.Creator,
		CollectionIndex:      msg.CollectionIndex,
		ClassIndex:           msg.ClassIndex,
		PowerupTemplateIndex: msg.PowerupTemplateIndex,
		Name:                 msg.Name,
		Description:          msg.Description,
		Count:                msg.Count,
		ActivationBalance:    msg.ActivationBalance,
		MaxBalance:           msg.MaxBalance,
		Duration:             msg.Duration,
		MaxDuration:          msg.MaxDuration,
		RefundDuration:       msg.RefundDuration,
		MaxActivations:       msg.MaxActivations,
		CoolDownDuration:     msg.CoolDownDuration,
		RechargeRate:         msg.RechargeRate,
		FeeRate:              msg.FeeRate,
		ActivationType:       msg.ActivationType,
		EventData:            msg.EventData,
	}

	k.SetPowerupTemplate(ctx, powerupTemplate)

	return &types.MsgUpdatePowerupTemplateResponse{}, nil
}

func (k msgServer) DeletePowerupTemplate(goCtx context.Context, msg *types.MsgDeletePowerupTemplate) (*types.MsgDeletePowerupTemplateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetPowerupTemplate(
		ctx,
		msg.CollectionIndex,
		msg.ClassIndex,
		msg.PowerupTemplateIndex,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePowerupTemplate(
		ctx,
		msg.CollectionIndex,
		msg.ClassIndex,
		msg.PowerupTemplateIndex,
	)

	return &types.MsgDeletePowerupTemplateResponse{}, nil
}
