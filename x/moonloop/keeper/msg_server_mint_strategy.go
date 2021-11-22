package keeper

import (
	"context"

	"github.com/cosmonaut/moonloop/x/moonloop/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateMintStrategy(goCtx context.Context, msg *types.MsgCreateMintStrategy) (*types.MsgCreateMintStrategyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetMintStrategy(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var mintStrategy = types.MintStrategy{
		Creator:        msg.Creator,
		Index:          msg.Index,
		Minters:        msg.Minters,
		InstanceLevels: msg.InstanceLevels,
		PriceLevels:    msg.PriceLevels,
		Paused:         msg.Paused,
	}

	k.SetMintStrategy(
		ctx,
		mintStrategy,
	)
	return &types.MsgCreateMintStrategyResponse{}, nil
}

func (k msgServer) UpdateMintStrategy(goCtx context.Context, msg *types.MsgUpdateMintStrategy) (*types.MsgUpdateMintStrategyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetMintStrategy(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var mintStrategy = types.MintStrategy{
		Creator:        msg.Creator,
		Index:          msg.Index,
		Minters:        msg.Minters,
		InstanceLevels: msg.InstanceLevels,
		PriceLevels:    msg.PriceLevels,
		Paused:         msg.Paused,
	}

	k.SetMintStrategy(ctx, mintStrategy)

	return &types.MsgUpdateMintStrategyResponse{}, nil
}

func (k msgServer) DeleteMintStrategy(goCtx context.Context, msg *types.MsgDeleteMintStrategy) (*types.MsgDeleteMintStrategyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetMintStrategy(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveMintStrategy(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteMintStrategyResponse{}, nil
}
