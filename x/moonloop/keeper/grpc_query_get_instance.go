package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetInstance(goCtx context.Context, req *types.QueryGetInstanceRequest) (*types.QueryGetInstanceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// Find the collection
	collection, found := k.GetCollection(ctx, req.CollectionIndex)
	if !found {
		return nil, types.ErrMoonLoopCollectionNotFound
	}

	// Find the class template
	classTemplate, found := k.GetClassTemplate(ctx, req.CollectionIndex, req.ClassTemplateIndex)
	if !found {
		return nil, types.ErrMoonLoopClassNotFound
	}

	var powerupTemplates []types.PowerupTemplate
	var powerups []types.Powerup

	for _, powerupTemplateIndex := range classTemplate.PowerupTemplates {
		powerupTemplate, found := k.GetPowerupTemplate(ctx, req.CollectionIndex, req.ClassTemplateIndex, powerupTemplateIndex)
		if !found {
			return nil, types.ErrMoonLoopPowerupNotFound
		}
		powerup, found := k.GetPowerup(ctx, req.CollectionIndex, req.ClassTemplateIndex, powerupTemplateIndex, req.InstanceIndex)
		if !found {
			return nil, types.ErrMoonLoopPowerupNotFound
		}
		powerupTemplates = append(powerupTemplates, powerupTemplate)
		powerups = append(powerups, powerup)

	}

	return &types.QueryGetInstanceResponse{Collection: collection, ClassTemplate: classTemplate, PowerupTemplates: powerupTemplates, Powerups: powerups}, nil
}
