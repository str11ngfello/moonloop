package keeper

import (
	"context"

	"github.com/cosmonaut/moonloop/x/moonloop/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateContribution(goCtx context.Context, msg *types.MsgCreateContribution) (*types.MsgCreateContributionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetContribution(
		ctx,
		msg.CollectionIndex,
		msg.ClassIndex,
		msg.PowerupTemplateIndex,
		msg.InstanceIndex,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var contribution = types.Contribution{
		Creator:              msg.Creator,
		CollectionIndex:      msg.CollectionIndex,
		ClassIndex:           msg.ClassIndex,
		PowerupTemplateIndex: msg.PowerupTemplateIndex,
		InstanceIndex:        msg.InstanceIndex,
		Contributors:         msg.Contributors,
		Amounts:              msg.Amounts,
	}

	k.SetContribution(
		ctx,
		contribution,
	)
	return &types.MsgCreateContributionResponse{}, nil
}

func (k msgServer) UpdateContribution(goCtx context.Context, msg *types.MsgUpdateContribution) (*types.MsgUpdateContributionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetContribution(
		ctx,
		msg.CollectionIndex,
		msg.ClassIndex,
		msg.PowerupTemplateIndex,
		msg.InstanceIndex,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var contribution = types.Contribution{
		Creator:              msg.Creator,
		CollectionIndex:      msg.CollectionIndex,
		ClassIndex:           msg.ClassIndex,
		PowerupTemplateIndex: msg.PowerupTemplateIndex,
		InstanceIndex:        msg.InstanceIndex,
		Contributors:         msg.Contributors,
		Amounts:              msg.Amounts,
	}

	k.SetContribution(ctx, contribution)

	return &types.MsgUpdateContributionResponse{}, nil
}

func (k msgServer) DeleteContribution(goCtx context.Context, msg *types.MsgDeleteContribution) (*types.MsgDeleteContributionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetContribution(
		ctx,
		msg.CollectionIndex,
		msg.ClassIndex,
		msg.PowerupTemplateIndex,
		msg.InstanceIndex,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveContribution(
		ctx,
		msg.CollectionIndex,
		msg.ClassIndex,
		msg.PowerupTemplateIndex,
		msg.InstanceIndex,
	)

	return &types.MsgDeleteContributionResponse{}, nil
}
