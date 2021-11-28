package keeper

import (
	"context"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

func (k msgServer) Mint(goCtx context.Context, msg *types.MsgMint) (*types.MsgMintResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	collection, isFound := k.GetCollection(ctx, msg.CollectionIndex)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "collection not found")
	}

	classTemplate, isFound := k.GetClassTemplate(ctx, msg.CollectionIndex, msg.ClassTemplateIndex)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "class template not found")
	}

	// Do we have a class template mint strategy? If not, the collection must provide the strategy
	_, isFound = k.GetMintStrategy(ctx, classTemplate.MintStrategy)
	if !isFound {
		_, isFound = k.GetMintStrategy(ctx, collection.MintStrategy)
		if !isFound {
			return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "mint strategy not found")
		}
	}

	// Can we mint this amount?
	// if (msg.NumInstances + classTemplate.

	// For each instance we want to mint, create the powerups
	var startInstanceIndex int32 = int32(classTemplate.Count)
	var endCount int32 = startInstanceIndex + msg.NumInstances
	for startInstanceIndex < endCount {
		for _, powerupTemplateIndex := range classTemplate.PowerupTemplates {

			var powerup = types.Powerup{
				Creator:              msg.Creator,
				CollectionIndex:      msg.CollectionIndex,
				ClassTemplateIndex:   msg.ClassTemplateIndex,
				PowerupTemplateIndex: powerupTemplateIndex,
				InstanceIndex:        strconv.Itoa(int(startInstanceIndex)),
				Balance:              sdk.NewCoin("upower", sdk.NewInt(0)),
				StartTime:            0,
				EndTime:              0,
				NumActivations:       0,
				Fees:                 sdk.NewCoin("upower", sdk.NewInt(0)),
				AcceptingPower:       true,
			}

			k.SetPowerup(
				ctx,
				powerup,
			)
		}
		startInstanceIndex++
	}

	var class = types.Class{
		Creator:            msg.Creator,
		CollectionIndex:    msg.CollectionIndex,
		ClassTemplateIndex: msg.ClassTemplateIndex,
		Owner:              msg.Creator,
	}

	k.SetClass(
		ctx,
		class,
	)

	classTemplate.Count = endCount
	k.SetClassTemplate(ctx, classTemplate)

	return &types.MsgMintResponse{}, nil
}
