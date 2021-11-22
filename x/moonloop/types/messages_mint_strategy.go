package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateMintStrategy{}

func NewMsgCreateMintStrategy(
	creator string,
	index string,
	minters []string,
	instanceLevels []int32,
	priceLevels []int32,
	paused bool,

) *MsgCreateMintStrategy {
	return &MsgCreateMintStrategy{
		Creator:        creator,
		Index:          index,
		Minters:        minters,
		InstanceLevels: instanceLevels,
		PriceLevels:    priceLevels,
		Paused:         paused,
	}
}

func (msg *MsgCreateMintStrategy) Route() string {
	return RouterKey
}

func (msg *MsgCreateMintStrategy) Type() string {
	return "CreateMintStrategy"
}

func (msg *MsgCreateMintStrategy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateMintStrategy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateMintStrategy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateMintStrategy{}

func NewMsgUpdateMintStrategy(
	creator string,
	index string,
	minters []string,
	instanceLevels []int32,
	priceLevels []int32,
	paused bool,

) *MsgUpdateMintStrategy {
	return &MsgUpdateMintStrategy{
		Creator:        creator,
		Index:          index,
		Minters:        minters,
		InstanceLevels: instanceLevels,
		PriceLevels:    priceLevels,
		Paused:         paused,
	}
}

func (msg *MsgUpdateMintStrategy) Route() string {
	return RouterKey
}

func (msg *MsgUpdateMintStrategy) Type() string {
	return "UpdateMintStrategy"
}

func (msg *MsgUpdateMintStrategy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateMintStrategy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateMintStrategy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteMintStrategy{}

func NewMsgDeleteMintStrategy(
	creator string,
	index string,

) *MsgDeleteMintStrategy {
	return &MsgDeleteMintStrategy{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteMintStrategy) Route() string {
	return RouterKey
}

func (msg *MsgDeleteMintStrategy) Type() string {
	return "DeleteMintStrategy"
}

func (msg *MsgDeleteMintStrategy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteMintStrategy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteMintStrategy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
