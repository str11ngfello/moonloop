package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

func (k msgServer) CreateCollectionOwner(goCtx context.Context, msg *types.MsgCreateCollectionOwner) (*types.MsgCreateCollectionOwnerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetCollectionOwner(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var collectionOwner = types.CollectionOwner{
		Creator:     msg.Creator,
		Index:       msg.Index,
		Collections: msg.Collections,
	}

	k.SetCollectionOwner(
		ctx,
		collectionOwner,
	)
	return &types.MsgCreateCollectionOwnerResponse{}, nil
}

func (k msgServer) UpdateCollectionOwner(goCtx context.Context, msg *types.MsgUpdateCollectionOwner) (*types.MsgUpdateCollectionOwnerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCollectionOwner(
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

	var collectionOwner = types.CollectionOwner{
		Creator:     msg.Creator,
		Index:       msg.Index,
		Collections: msg.Collections,
	}

	k.SetCollectionOwner(ctx, collectionOwner)

	return &types.MsgUpdateCollectionOwnerResponse{}, nil
}

func (k msgServer) DeleteCollectionOwner(goCtx context.Context, msg *types.MsgDeleteCollectionOwner) (*types.MsgDeleteCollectionOwnerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCollectionOwner(
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

	k.RemoveCollectionOwner(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteCollectionOwnerResponse{}, nil
}
