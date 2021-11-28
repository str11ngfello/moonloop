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

func (k Keeper) ClassTemplateAll(c context.Context, req *types.QueryAllClassTemplateRequest) (*types.QueryAllClassTemplateResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var classTemplates []types.ClassTemplate
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	classTemplateStore := prefix.NewStore(store, types.KeyPrefix(types.ClassTemplateKeyPrefix))

	pageRes, err := query.Paginate(classTemplateStore, req.Pagination, func(key []byte, value []byte) error {
		var classTemplate types.ClassTemplate
		if err := k.cdc.Unmarshal(value, &classTemplate); err != nil {
			return err
		}

		classTemplates = append(classTemplates, classTemplate)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllClassTemplateResponse{ClassTemplate: classTemplates, Pagination: pageRes}, nil
}

func (k Keeper) ClassTemplate(c context.Context, req *types.QueryGetClassTemplateRequest) (*types.QueryGetClassTemplateResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetClassTemplate(
		ctx,
		req.CollectionIndex,
		req.ClassTemplateIndex,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetClassTemplateResponse{ClassTemplate: val}, nil
}
