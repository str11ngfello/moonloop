package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

func (k msgServer) SetCollectionMintStrategy(goCtx context.Context, msg *types.MsgSetCollectionMintStrategy) (*types.MsgSetCollectionMintStrategyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	collection, isFound := k.GetCollection(ctx, msg.CollectionIndex)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "collection not found")
	}
	mintStrategy, isFound := k.GetMintStrategy(ctx, msg.MintStrategyIndex)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "mint strategy not found")
	}

	collection.MintStrategy = mintStrategy.Index
	k.SetCollection(ctx, collection)

	return &types.MsgSetCollectionMintStrategyResponse{}, nil
}
