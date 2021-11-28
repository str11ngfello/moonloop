package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

func (k msgServer) CreatePowerupTemplate(goCtx context.Context, msg *types.MsgCreatePowerupTemplate) (*types.MsgCreatePowerupTemplateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, isFound := k.GetCollection(ctx, msg.CollectionIndex)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "collection not found")
	}

	classTemplate, isFound := k.GetClassTemplate(ctx, msg.CollectionIndex, msg.ClassTemplateIndex)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "class template not found")
	}

	// Check if the value already exists
	_, isFound = k.GetPowerupTemplate(
		ctx,
		msg.CollectionIndex,
		msg.ClassTemplateIndex,
		msg.PowerupTemplateIndex,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var powerupTemplate = types.PowerupTemplate{
		Creator:              msg.Creator,
		CollectionIndex:      msg.CollectionIndex,
		ClassTemplateIndex:   msg.ClassTemplateIndex,
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

	classTemplate.PowerupTemplates = append(classTemplate.PowerupTemplates, msg.PowerupTemplateIndex)
	k.SetClassTemplate(ctx, classTemplate)

	return &types.MsgCreatePowerupTemplateResponse{}, nil
}

func (k msgServer) UpdatePowerupTemplate(goCtx context.Context, msg *types.MsgUpdatePowerupTemplate) (*types.MsgUpdatePowerupTemplateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetPowerupTemplate(
		ctx,
		msg.CollectionIndex,
		msg.ClassTemplateIndex,
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
		ClassTemplateIndex:   msg.ClassTemplateIndex,
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
		msg.ClassTemplateIndex,
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
		msg.ClassTemplateIndex,
		msg.PowerupTemplateIndex,
	)

	return &types.MsgDeletePowerupTemplateResponse{}, nil
}
