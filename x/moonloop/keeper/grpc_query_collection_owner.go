package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) CollectionOwnerAll(c context.Context, req *types.QueryAllCollectionOwnerRequest) (*types.QueryAllCollectionOwnerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var collectionOwners []types.CollectionOwner
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	collectionOwnerStore := prefix.NewStore(store, types.KeyPrefix(types.CollectionOwnerKeyPrefix))

	pageRes, err := query.Paginate(collectionOwnerStore, req.Pagination, func(key []byte, value []byte) error {
		var collectionOwner types.CollectionOwner
		if err := k.cdc.Unmarshal(value, &collectionOwner); err != nil {
			return err
		}

		collectionOwners = append(collectionOwners, collectionOwner)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCollectionOwnerResponse{CollectionOwner: collectionOwners, Pagination: pageRes}, nil
}

func (k Keeper) CollectionOwner(c context.Context, req *types.QueryGetCollectionOwnerRequest) (*types.QueryGetCollectionOwnerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCollectionOwner(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetCollectionOwnerResponse{CollectionOwner: val}, nil
}
