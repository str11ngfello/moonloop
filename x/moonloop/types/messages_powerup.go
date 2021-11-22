package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreatePowerup{}

func NewMsgCreatePowerup(
	creator string,
	collectionIndex string,
	classIndex string,
	powerupTemplateIndex string,
	instanceIndex string,
	balance sdk.Coin,
	startTime int32,
	endTime int32,
	numActivations int32,
	fees sdk.Coin,
	acceptingPower bool,

) *MsgCreatePowerup {
	return &MsgCreatePowerup{
		Creator:              creator,
		CollectionIndex:      collectionIndex,
		ClassIndex:           classIndex,
		PowerupTemplateIndex: powerupTemplateIndex,
		InstanceIndex:        instanceIndex,
		Balance:              balance,
		StartTime:            startTime,
		EndTime:              endTime,
		NumActivations:       numActivations,
		Fees:                 fees,
		AcceptingPower:       acceptingPower,
	}
}

func (msg *MsgCreatePowerup) Route() string {
	return RouterKey
}

func (msg *MsgCreatePowerup) Type() string {
	return "CreatePowerup"
}

func (msg *MsgCreatePowerup) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePowerup) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePowerup) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdatePowerup{}

func NewMsgUpdatePowerup(
	creator string,
	collectionIndex string,
	classIndex string,
	powerupTemplateIndex string,
	instanceIndex string,
	balance sdk.Coin,
	startTime int32,
	endTime int32,
	numActivations int32,
	fees sdk.Coin,
	acceptingPower bool,

) *MsgUpdatePowerup {
	return &MsgUpdatePowerup{
		Creator:              creator,
		CollectionIndex:      collectionIndex,
		ClassIndex:           classIndex,
		PowerupTemplateIndex: powerupTemplateIndex,
		InstanceIndex:        instanceIndex,
		Balance:              balance,
		StartTime:            startTime,
		EndTime:              endTime,
		NumActivations:       numActivations,
		Fees:                 fees,
		AcceptingPower:       acceptingPower,
	}
}

func (msg *MsgUpdatePowerup) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePowerup) Type() string {
	return "UpdatePowerup"
}

func (msg *MsgUpdatePowerup) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePowerup) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePowerup) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeletePowerup{}

func NewMsgDeletePowerup(
	creator string,
	collectionIndex string,
	classIndex string,
	powerupTemplateIndex string,
	instanceIndex string,

) *MsgDeletePowerup {
	return &MsgDeletePowerup{
		Creator:              creator,
		CollectionIndex:      collectionIndex,
		ClassIndex:           classIndex,
		PowerupTemplateIndex: powerupTemplateIndex,
		InstanceIndex:        instanceIndex,
	}
}
func (msg *MsgDeletePowerup) Route() string {
	return RouterKey
}

func (msg *MsgDeletePowerup) Type() string {
	return "DeletePowerup"
}

func (msg *MsgDeletePowerup) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePowerup) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePowerup) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
