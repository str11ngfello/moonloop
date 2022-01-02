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

func (k Keeper) InstanceOwnerAll(c context.Context, req *types.QueryAllInstanceOwnerRequest) (*types.QueryAllInstanceOwnerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var instanceOwners []types.InstanceOwner
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	instanceOwnerStore := prefix.NewStore(store, types.KeyPrefix(types.InstanceOwnerKeyPrefix))

	pageRes, err := query.Paginate(instanceOwnerStore, req.Pagination, func(key []byte, value []byte) error {
		var instanceOwner types.InstanceOwner
		if err := k.cdc.Unmarshal(value, &instanceOwner); err != nil {
			return err
		}

		instanceOwners = append(instanceOwners, instanceOwner)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllInstanceOwnerResponse{InstanceOwner: instanceOwners, Pagination: pageRes}, nil
}

func (k Keeper) InstanceOwner(c context.Context, req *types.QueryGetInstanceOwnerRequest) (*types.QueryGetInstanceOwnerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetInstanceOwner(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetInstanceOwnerResponse{InstanceOwner: val}, nil
}
