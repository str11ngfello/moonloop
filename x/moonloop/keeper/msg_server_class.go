package keeper

import (
	"context"

	"github.com/cosmonaut/moonloop/x/moonloop/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
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
		msg.ClassIndex,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "class already exists")
	}

	var class = types.Class{
		Creator:          msg.Creator,
		CollectionIndex:  msg.CollectionIndex,
		ClassIndex:       msg.ClassIndex,
		Name:             msg.Name,
		Description:      msg.Description,
		MintStrategy:     msg.MintStrategy,
		GltfHash:         msg.GltfHash,
		Metadata:         msg.Metadata,
		MaxInstances:     msg.MaxInstances,
		Count:            0,
		PowerupTemplates: []string{},
		Owner:            msg.Creator,
	}

	k.SetClass(
		ctx,
		class,
	)

	collection.Classes = append(collection.Classes, msg.ClassIndex)
	k.SetCollection(ctx, collection)

	return &types.MsgCreateClassResponse{}, nil
}

func (k msgServer) UpdateClass(goCtx context.Context, msg *types.MsgUpdateClass) (*types.MsgUpdateClassResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetClass(
		ctx,
		msg.CollectionIndex,
		msg.ClassIndex,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var class = types.Class{
		Creator:          msg.Creator,
		CollectionIndex:  msg.CollectionIndex,
		ClassIndex:       msg.ClassIndex,
		Name:             msg.Name,
		Description:      msg.Description,
		MintStrategy:     msg.MintStrategy,
		GltfHash:         msg.GltfHash,
		Metadata:         msg.Metadata,
		Count:            msg.Count,
		PowerupTemplates: msg.PowerupTemplates,
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
		msg.ClassIndex,
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
		msg.ClassIndex,
	)

	return &types.MsgDeleteClassResponse{}, nil
}
