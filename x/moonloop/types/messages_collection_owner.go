package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateCollectionOwner{}

func NewMsgCreateCollectionOwner(
	creator string,
	index string,
	collections []string,

) *MsgCreateCollectionOwner {
	return &MsgCreateCollectionOwner{
		Creator:     creator,
		Index:       index,
		Collections: collections,
	}
}

func (msg *MsgCreateCollectionOwner) Route() string {
	return RouterKey
}

func (msg *MsgCreateCollectionOwner) Type() string {
	return "CreateCollectionOwner"
}

func (msg *MsgCreateCollectionOwner) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCollectionOwner) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCollectionOwner) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCollectionOwner{}

func NewMsgUpdateCollectionOwner(
	creator string,
	index string,
	collections []string,

) *MsgUpdateCollectionOwner {
	return &MsgUpdateCollectionOwner{
		Creator:     creator,
		Index:       index,
		Collections: collections,
	}
}

func (msg *MsgUpdateCollectionOwner) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCollectionOwner) Type() string {
	return "UpdateCollectionOwner"
}

func (msg *MsgUpdateCollectionOwner) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCollectionOwner) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCollectionOwner) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCollectionOwner{}

func NewMsgDeleteCollectionOwner(
	creator string,
	index string,

) *MsgDeleteCollectionOwner {
	return &MsgDeleteCollectionOwner{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteCollectionOwner) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCollectionOwner) Type() string {
	return "DeleteCollectionOwner"
}

func (msg *MsgDeleteCollectionOwner) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCollectionOwner) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCollectionOwner) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
