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

func (k Keeper) PowerupTemplateAll(c context.Context, req *types.QueryAllPowerupTemplateRequest) (*types.QueryAllPowerupTemplateResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var powerupTemplates []types.PowerupTemplate
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	powerupTemplateStore := prefix.NewStore(store, types.KeyPrefix(types.PowerupTemplateKeyPrefix))

	pageRes, err := query.Paginate(powerupTemplateStore, req.Pagination, func(key []byte, value []byte) error {
		var powerupTemplate types.PowerupTemplate
		if err := k.cdc.Unmarshal(value, &powerupTemplate); err != nil {
			return err
		}

		powerupTemplates = append(powerupTemplates, powerupTemplate)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPowerupTemplateResponse{PowerupTemplate: powerupTemplates, Pagination: pageRes}, nil
}

func (k Keeper) PowerupTemplate(c context.Context, req *types.QueryGetPowerupTemplateRequest) (*types.QueryGetPowerupTemplateResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetPowerupTemplate(
		ctx,
		req.CollectionIndex,
		req.ClassIndex,
		req.PowerupTemplateIndex,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetPowerupTemplateResponse{PowerupTemplate: val}, nil
}
