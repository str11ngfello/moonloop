package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgSendPower{}

func NewMsgSendPower(creator string, collectionIndex string, classIndex string, powerupTemplateIndex string, instanceIndex string, power sdk.Coin) *MsgSendPower {
	return &MsgSendPower{
		Creator:              creator,
		CollectionIndex:      collectionIndex,
		ClassIndex:           classIndex,
		PowerupTemplateIndex: powerupTemplateIndex,
		InstanceIndex:        instanceIndex,
		Power:                power,
	}
}

func (msg *MsgSendPower) Route() string {
	return RouterKey
}

func (msg *MsgSendPower) Type() string {
	return "SendPower"
}

func (msg *MsgSendPower) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendPower) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendPower) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
