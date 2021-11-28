package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateClassTemplate{}

func NewMsgCreateClassTemplate(
	creator string,
	collectionIndex string,
	classTemplateIndex string,
	name string,
	description string,
	mintStrategy string,
	gltfHash string,
	metadata string,
	maxInstances int32,

) *MsgCreateClassTemplate {
	return &MsgCreateClassTemplate{
		Creator:            creator,
		CollectionIndex:    collectionIndex,
		ClassTemplateIndex: classTemplateIndex,
		Name:               name,
		Description:        description,
		MintStrategy:       mintStrategy,
		GltfHash:           gltfHash,
		Metadata:           metadata,
		MaxInstances:       maxInstances,
	}
}

func (msg *MsgCreateClassTemplate) Route() string {
	return RouterKey
}

func (msg *MsgCreateClassTemplate) Type() string {
	return "CreateClassTemplate"
}

func (msg *MsgCreateClassTemplate) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateClassTemplate) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateClassTemplate) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateClassTemplate{}

func NewMsgUpdateClassTemplate(
	creator string,
	collectionIndex string,
	classTemplateIndex string,
	name string,
	description string,
	mintStrategy string,
	gltfHash string,
	metadata string,
	maxInstances int32,
	count int32,
	powerupTemplates []string,

) *MsgUpdateClassTemplate {
	return &MsgUpdateClassTemplate{
		Creator:            creator,
		CollectionIndex:    collectionIndex,
		ClassTemplateIndex: classTemplateIndex,
		Name:               name,
		Description:        description,
		MintStrategy:       mintStrategy,
		GltfHash:           gltfHash,
		Metadata:           metadata,
		MaxInstances:       maxInstances,
		Count:              count,
		PowerupTemplates:   powerupTemplates,
	}
}

func (msg *MsgUpdateClassTemplate) Route() string {
	return RouterKey
}

func (msg *MsgUpdateClassTemplate) Type() string {
	return "UpdateClassTemplate"
}

func (msg *MsgUpdateClassTemplate) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateClassTemplate) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateClassTemplate) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteClassTemplate{}

func NewMsgDeleteClassTemplate(
	creator string,
	collectionIndex string,
	classTemplateIndex string,

) *MsgDeleteClassTemplate {
	return &MsgDeleteClassTemplate{
		Creator:            creator,
		CollectionIndex:    collectionIndex,
		ClassTemplateIndex: classTemplateIndex,
	}
}
func (msg *MsgDeleteClassTemplate) Route() string {
	return RouterKey
}

func (msg *MsgDeleteClassTemplate) Type() string {
	return "DeleteClassTemplate"
}

func (msg *MsgDeleteClassTemplate) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteClassTemplate) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteClassTemplate) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
