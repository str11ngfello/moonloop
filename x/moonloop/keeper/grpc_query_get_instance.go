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
		return nil, types.ErrPowerupInvalidPowerup
	}

	// Find the class
	class, found := k.GetClass(ctx, req.CollectionIndex, req.ClassIndex)
	if !found {
		return nil, types.ErrPowerupInvalidPowerup
	}

	var powerupTemplates []types.PowerupTemplate
	var powerups []types.Powerup

	for _, powerupTemplateIndex := range class.PowerupTemplates {
		powerupTemplate, found := k.GetPowerupTemplate(ctx, req.CollectionIndex, req.ClassIndex, powerupTemplateIndex)
		if !found {
			return nil, types.ErrPowerupInvalidPowerup
		}
		powerup, found := k.GetPowerup(ctx, req.CollectionIndex, req.ClassIndex, powerupTemplateIndex, req.InstanceIndex)
		if !found {
			return nil, types.ErrPowerupInvalidPowerup
		}
		powerupTemplates = append(powerupTemplates, powerupTemplate)
		powerups = append(powerups, powerup)

	}

	return &types.QueryGetInstanceResponse{Collection: collection, Class: class, PowerupTemplates: powerupTemplates, Powerups: powerups}, nil
}
