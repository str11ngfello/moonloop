package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

func (k msgServer) CreateInstanceOwner(goCtx context.Context, msg *types.MsgCreateInstanceOwner) (*types.MsgCreateInstanceOwnerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetInstanceOwner(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var instanceOwner = types.InstanceOwner{
		Creator:   msg.Creator,
		Index:     msg.Index,
		Instances: msg.Instances,
	}

	k.SetInstanceOwner(
		ctx,
		instanceOwner,
	)
	return &types.MsgCreateInstanceOwnerResponse{}, nil
}

func (k msgServer) UpdateInstanceOwner(goCtx context.Context, msg *types.MsgUpdateInstanceOwner) (*types.MsgUpdateInstanceOwnerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetInstanceOwner(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var instanceOwner = types.InstanceOwner{
		Creator:   msg.Creator,
		Index:     msg.Index,
		Instances: msg.Instances,
	}

	k.SetInstanceOwner(ctx, instanceOwner)

	return &types.MsgUpdateInstanceOwnerResponse{}, nil
}

func (k msgServer) DeleteInstanceOwner(goCtx context.Context, msg *types.MsgDeleteInstanceOwner) (*types.MsgDeleteInstanceOwnerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetInstanceOwner(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveInstanceOwner(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteInstanceOwnerResponse{}, nil
}
