package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateClass{}

func NewMsgCreateClass(
	creator string,
	collectionIndex string,
	classTemplateIndex string,
	name string,
	description string,
	mintStrategy string,
	gltfHash string,
	metadata string,
	maxInstances int32,

) *MsgCreateClass {
	return &MsgCreateClass{
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

func (msg *MsgCreateClass) Route() string {
	return RouterKey
}

func (msg *MsgCreateClass) Type() string {
	return "CreateClass"
}

func (msg *MsgCreateClass) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateClass) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateClass) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateClass{}

func NewMsgUpdateClass(
	creator string,
	collectionIndex string,
	classTemplateIndex string,
	name string,
	description string,
	mintStrategy string,
	gltfHash string,
	metadata string,
	maxInstances int32,

) *MsgUpdateClass {
	return &MsgUpdateClass{
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

func (msg *MsgUpdateClass) Route() string {
	return RouterKey
}

func (msg *MsgUpdateClass) Type() string {
	return "UpdateClass"
}

func (msg *MsgUpdateClass) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateClass) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateClass) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteClass{}

func NewMsgDeleteClass(
	creator string,
	collectionIndex string,
	classTemplateIndex string,

) *MsgDeleteClass {
	return &MsgDeleteClass{
		Creator:            creator,
		CollectionIndex:    collectionIndex,
		ClassTemplateIndex: classTemplateIndex,
	}
}
func (msg *MsgDeleteClass) Route() string {
	return RouterKey
}

func (msg *MsgDeleteClass) Type() string {
	return "DeleteClass"
}

func (msg *MsgDeleteClass) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteClass) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteClass) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
