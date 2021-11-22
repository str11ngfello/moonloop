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

func (k Keeper) ContributionAll(c context.Context, req *types.QueryAllContributionRequest) (*types.QueryAllContributionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var contributions []types.Contribution
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	contributionStore := prefix.NewStore(store, types.KeyPrefix(types.ContributionKeyPrefix))

	pageRes, err := query.Paginate(contributionStore, req.Pagination, func(key []byte, value []byte) error {
		var contribution types.Contribution
		if err := k.cdc.Unmarshal(value, &contribution); err != nil {
			return err
		}

		contributions = append(contributions, contribution)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllContributionResponse{Contribution: contributions, Pagination: pageRes}, nil
}

func (k Keeper) Contribution(c context.Context, req *types.QueryGetContributionRequest) (*types.QueryGetContributionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetContribution(
		ctx,
		req.CollectionIndex,
		req.ClassIndex,
		req.PowerupTemplateIndex,
		req.InstanceIndex,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetContributionResponse{Contribution: val}, nil
}
