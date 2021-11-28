package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

func (k msgServer) CreateClassTemplate(goCtx context.Context, msg *types.MsgCreateClassTemplate) (*types.MsgCreateClassTemplateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetClassTemplate(
		ctx,
		msg.CollectionIndex,
		msg.ClassTemplateIndex,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var classTemplate = types.ClassTemplate{
		Creator:            msg.Creator,
		CollectionIndex:    msg.CollectionIndex,
		ClassTemplateIndex: msg.ClassTemplateIndex,
		Name:               msg.Name,
		Description:        msg.Description,
		MintStrategy:       msg.MintStrategy,
		GltfHash:           msg.GltfHash,
		Metadata:           msg.Metadata,
		MaxInstances:       msg.MaxInstances,
		Count:              msg.Count,
		PowerupTemplates:   msg.PowerupTemplates,
	}

	k.SetClassTemplate(
		ctx,
		classTemplate,
	)
	return &types.MsgCreateClassTemplateResponse{}, nil
}

func (k msgServer) UpdateClassTemplate(goCtx context.Context, msg *types.MsgUpdateClassTemplate) (*types.MsgUpdateClassTemplateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetClassTemplate(
		ctx,
		msg.CollectionIndex,
		msg.ClassTemplateIndex,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var classTemplate = types.ClassTemplate{
		Creator:            msg.Creator,
		CollectionIndex:    msg.CollectionIndex,
		ClassTemplateIndex: msg.ClassTemplateIndex,
		Name:               msg.Name,
		Description:        msg.Description,
		MintStrategy:       msg.MintStrategy,
		GltfHash:           msg.GltfHash,
		Metadata:           msg.Metadata,
		MaxInstances:       msg.MaxInstances,
		Count:              msg.Count,
		PowerupTemplates:   msg.PowerupTemplates,
	}

	k.SetClassTemplate(ctx, classTemplate)

	return &types.MsgUpdateClassTemplateResponse{}, nil
}

func (k msgServer) DeleteClassTemplate(goCtx context.Context, msg *types.MsgDeleteClassTemplate) (*types.MsgDeleteClassTemplateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetClassTemplate(
		ctx,
		msg.CollectionIndex,
		msg.ClassTemplateIndex,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveClassTemplate(
		ctx,
		msg.CollectionIndex,
		msg.ClassTemplateIndex,
	)

	return &types.MsgDeleteClassTemplateResponse{}, nil
}
