package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateCollection{}

func NewMsgCreateCollection(
	creator string,
	index string,
	name string,
	description string,
	mintStrategy string,

) *MsgCreateCollection {
	return &MsgCreateCollection{
		Creator:      creator,
		Index:        index,
		Name:         name,
		Description:  description,
		MintStrategy: mintStrategy,
	}
}

func (msg *MsgCreateCollection) Route() string {
	return RouterKey
}

func (msg *MsgCreateCollection) Type() string {
	return "CreateCollection"
}

func (msg *MsgCreateCollection) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCollection) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCollection) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCollection{}

func NewMsgUpdateCollection(
	creator string,
	index string,
	name string,
	description string,
	mintStrategy string,

) *MsgUpdateCollection {
	return &MsgUpdateCollection{
		Creator:      creator,
		Index:        index,
		Name:         name,
		Description:  description,
		MintStrategy: mintStrategy,
	}
}

func (msg *MsgUpdateCollection) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCollection) Type() string {
	return "UpdateCollection"
}

func (msg *MsgUpdateCollection) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCollection) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCollection) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCollection{}

func NewMsgDeleteCollection(
	creator string,
	index string,

) *MsgDeleteCollection {
	return &MsgDeleteCollection{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteCollection) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCollection) Type() string {
	return "DeleteCollection"
}

func (msg *MsgDeleteCollection) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCollection) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCollection) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
