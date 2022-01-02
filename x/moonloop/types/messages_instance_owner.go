package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateInstanceOwner{}

func NewMsgCreateInstanceOwner(
	creator string,
	index string,
	instances []string,

) *MsgCreateInstanceOwner {
	return &MsgCreateInstanceOwner{
		Creator:   creator,
		Index:     index,
		Instances: instances,
	}
}

func (msg *MsgCreateInstanceOwner) Route() string {
	return RouterKey
}

func (msg *MsgCreateInstanceOwner) Type() string {
	return "CreateInstanceOwner"
}

func (msg *MsgCreateInstanceOwner) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateInstanceOwner) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateInstanceOwner) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateInstanceOwner{}

func NewMsgUpdateInstanceOwner(
	creator string,
	index string,
	instances []string,

) *MsgUpdateInstanceOwner {
	return &MsgUpdateInstanceOwner{
		Creator:   creator,
		Index:     index,
		Instances: instances,
	}
}

func (msg *MsgUpdateInstanceOwner) Route() string {
	return RouterKey
}

func (msg *MsgUpdateInstanceOwner) Type() string {
	return "UpdateInstanceOwner"
}

func (msg *MsgUpdateInstanceOwner) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateInstanceOwner) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateInstanceOwner) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteInstanceOwner{}

func NewMsgDeleteInstanceOwner(
	creator string,
	index string,

) *MsgDeleteInstanceOwner {
	return &MsgDeleteInstanceOwner{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteInstanceOwner) Route() string {
	return RouterKey
}

func (msg *MsgDeleteInstanceOwner) Type() string {
	return "DeleteInstanceOwner"
}

func (msg *MsgDeleteInstanceOwner) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteInstanceOwner) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteInstanceOwner) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
