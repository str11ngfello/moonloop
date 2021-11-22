package keeper

import (
	"context"

	"github.com/cosmonaut/moonloop/x/moonloop/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreatePowerup(goCtx context.Context, msg *types.MsgCreatePowerup) (*types.MsgCreatePowerupResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetPowerup(
		ctx,
		msg.CollectionIndex,
		msg.ClassIndex,
		msg.PowerupTemplateIndex,
		msg.InstanceIndex,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var powerup = types.Powerup{
		Creator:              msg.Creator,
		CollectionIndex:      msg.CollectionIndex,
		ClassIndex:           msg.ClassIndex,
		PowerupTemplateIndex: msg.PowerupTemplateIndex,
		InstanceIndex:        msg.InstanceIndex,
		Balance:              msg.Balance,
		StartTime:            msg.StartTime,
		EndTime:              msg.EndTime,
		NumActivations:       msg.NumActivations,
		Fees:                 msg.Fees,
		AcceptingPower:       msg.AcceptingPower,
	}

	k.SetPowerup(
		ctx,
		powerup,
	)
	return &types.MsgCreatePowerupResponse{}, nil
}

func (k msgServer) UpdatePowerup(goCtx context.Context, msg *types.MsgUpdatePowerup) (*types.MsgUpdatePowerupResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetPowerup(
		ctx,
		msg.CollectionIndex,
		msg.ClassIndex,
		msg.PowerupTemplateIndex,
		msg.InstanceIndex,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var powerup = types.Powerup{
		Creator:              msg.Creator,
		CollectionIndex:      msg.CollectionIndex,
		ClassIndex:           msg.ClassIndex,
		PowerupTemplateIndex: msg.PowerupTemplateIndex,
		InstanceIndex:        msg.InstanceIndex,
		Balance:              msg.Balance,
		StartTime:            msg.StartTime,
		EndTime:              msg.EndTime,
		NumActivations:       msg.NumActivations,
		Fees:                 msg.Fees,
		AcceptingPower:       msg.AcceptingPower,
	}

	k.SetPowerup(ctx, powerup)

	return &types.MsgUpdatePowerupResponse{}, nil
}

func (k msgServer) DeletePowerup(goCtx context.Context, msg *types.MsgDeletePowerup) (*types.MsgDeletePowerupResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetPowerup(
		ctx,
		msg.CollectionIndex,
		msg.ClassIndex,
		msg.PowerupTemplateIndex,
		msg.InstanceIndex,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePowerup(
		ctx,
		msg.CollectionIndex,
		msg.ClassIndex,
		msg.PowerupTemplateIndex,
		msg.InstanceIndex,
	)

	return &types.MsgDeletePowerupResponse{}, nil
}
