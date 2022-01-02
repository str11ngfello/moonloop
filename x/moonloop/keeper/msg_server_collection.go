package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

func (k msgServer) CreateCollection(goCtx context.Context, msg *types.MsgCreateCollection) (*types.MsgCreateCollectionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetCollection(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var collection = types.Collection{
		Creator:      msg.Creator,
		Index:        msg.Index,
		Name:         msg.Name,
		Description:  msg.Description,
		MintStrategy: msg.MintStrategy,
		Classes:      msg.Classes,
	}

	k.SetCollection(
		ctx,
		collection,
	)

	// Update the collectionOwners index
	collectionOwner, isFound := k.GetCollectionOwner(
		ctx,
		msg.Creator,
	)
	if !isFound {
		var newCollectionOwner = types.CollectionOwner{
			Creator:     msg.Creator,
			Index:       msg.Creator,
			Collections: []string{msg.Index},
		}

		k.SetCollectionOwner(
			ctx,
			newCollectionOwner,
		)
	} else {
		collectionOwner.Collections = append(collectionOwner.Collections, msg.Creator)
		k.SetCollectionOwner(
			ctx,
			collectionOwner,
		)
	}

	return &types.MsgCreateCollectionResponse{}, nil
}

func (k msgServer) UpdateCollection(goCtx context.Context, msg *types.MsgUpdateCollection) (*types.MsgUpdateCollectionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCollection(
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

	var collection = types.Collection{
		Creator:      msg.Creator,
		Index:        msg.Index,
		Name:         msg.Name,
		Description:  msg.Description,
		MintStrategy: msg.MintStrategy,
		Classes:      msg.Classes,
	}

	k.SetCollection(ctx, collection)

	return &types.MsgUpdateCollectionResponse{}, nil
}

func (k msgServer) DeleteCollection(goCtx context.Context, msg *types.MsgDeleteCollection) (*types.MsgDeleteCollectionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCollection(
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

	k.RemoveCollection(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteCollectionResponse{}, nil
}
