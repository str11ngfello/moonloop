package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

func (k msgServer) CreateClass(goCtx context.Context, msg *types.MsgCreateClass) (*types.MsgCreateClassResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	collection, isFound := k.GetCollection(ctx, msg.CollectionIndex)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "collection not found")
	}

	// Check if the value already exists
	_, isFound = k.GetClass(
		ctx,
		msg.CollectionIndex,
		msg.ClassTemplateIndex,
		msg.InstanceIndex,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "class already exists")
	}

	var class = types.Class{
		Creator:            msg.Creator,
		CollectionIndex:    msg.CollectionIndex,
		ClassTemplateIndex: msg.ClassTemplateIndex,
		Owner:              msg.Creator,
	}

	k.SetClass(
		ctx,
		class,
	)

	collection.Classes = append(collection.Classes, msg.ClassTemplateIndex)
	k.SetCollection(ctx, collection)

	return &types.MsgCreateClassResponse{}, nil
}

func (k msgServer) UpdateClass(goCtx context.Context, msg *types.MsgUpdateClass) (*types.MsgUpdateClassResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetClass(
		ctx,
		msg.CollectionIndex,
		msg.ClassTemplateIndex,
		msg.InstanceIndex,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var class = types.Class{
		Creator:            msg.Creator,
		CollectionIndex:    msg.CollectionIndex,
		ClassTemplateIndex: msg.ClassTemplateIndex,
	}

	k.SetClass(ctx, class)

	return &types.MsgUpdateClassResponse{}, nil
}

func (k msgServer) DeleteClass(goCtx context.Context, msg *types.MsgDeleteClass) (*types.MsgDeleteClassResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetClass(
		ctx,
		msg.CollectionIndex,
		msg.ClassTemplateIndex,
		msg.InstanceIndex,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveClass(
		ctx,
		msg.CollectionIndex,
		msg.ClassTemplateIndex,
		msg.InstanceIndex,
	)

	return &types.MsgDeleteClassResponse{}, nil
}
