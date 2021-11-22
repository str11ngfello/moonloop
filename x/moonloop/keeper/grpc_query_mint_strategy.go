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

func (k Keeper) MintStrategyAll(c context.Context, req *types.QueryAllMintStrategyRequest) (*types.QueryAllMintStrategyResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var mintStrategys []types.MintStrategy
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	mintStrategyStore := prefix.NewStore(store, types.KeyPrefix(types.MintStrategyKeyPrefix))

	pageRes, err := query.Paginate(mintStrategyStore, req.Pagination, func(key []byte, value []byte) error {
		var mintStrategy types.MintStrategy
		if err := k.cdc.Unmarshal(value, &mintStrategy); err != nil {
			return err
		}

		mintStrategys = append(mintStrategys, mintStrategy)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMintStrategyResponse{MintStrategy: mintStrategys, Pagination: pageRes}, nil
}

func (k Keeper) MintStrategy(c context.Context, req *types.QueryGetMintStrategyRequest) (*types.QueryGetMintStrategyResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetMintStrategy(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetMintStrategyResponse{MintStrategy: val}, nil
}
