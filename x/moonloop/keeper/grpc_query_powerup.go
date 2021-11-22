package keeper

import (
	"context"

	"github.com/cosmonaut/moonloop/x/moonloop/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) PowerupAll(c context.Context, req *types.QueryAllPowerupRequest) (*types.QueryAllPowerupResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var powerups []types.Powerup
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	powerupStore := prefix.NewStore(store, types.KeyPrefix(types.PowerupKeyPrefix))

	pageRes, err := query.Paginate(powerupStore, req.Pagination, func(key []byte, value []byte) error {
		var powerup types.Powerup
		if err := k.cdc.Unmarshal(value, &powerup); err != nil {
			return err
		}

		powerups = append(powerups, powerup)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPowerupResponse{Powerup: powerups, Pagination: pageRes}, nil
}

func (k Keeper) Powerup(c context.Context, req *types.QueryGetPowerupRequest) (*types.QueryGetPowerupResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetPowerup(
		ctx,
		req.CollectionIndex,
		req.ClassIndex,
		req.PowerupTemplateIndex,
		req.InstanceIndex,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetPowerupResponse{Powerup: val}, nil
}
