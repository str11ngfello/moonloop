package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreatePowerupTemplate{}

func NewMsgCreatePowerupTemplate(
	creator string,
	collectionIndex string,
	classIndex string,
	powerupTemplateIndex string,
	name string,
	description string,
	count int32,
	activationBalance sdk.Coin,
	maxBalance sdk.Coin,
	duration int32,
	maxDuration int32,
	refundDuration int32,
	maxActivations int32,
	coolDownDuration int32,
	rechargeRate sdk.Coin,
	feeRate sdk.Coin,
	activationType int32,
	eventData string,

) *MsgCreatePowerupTemplate {
	return &MsgCreatePowerupTemplate{
		Creator:              creator,
		CollectionIndex:      collectionIndex,
		ClassIndex:           classIndex,
		PowerupTemplateIndex: powerupTemplateIndex,
		Name:                 name,
		Description:          description,
		Count:                count,
		ActivationBalance:    activationBalance,
		MaxBalance:           maxBalance,
		Duration:             duration,
		MaxDuration:          maxDuration,
		RefundDuration:       refundDuration,
		MaxActivations:       maxActivations,
		CoolDownDuration:     coolDownDuration,
		RechargeRate:         rechargeRate,
		FeeRate:              feeRate,
		ActivationType:       activationType,
		EventData:            eventData,
	}
}

func (msg *MsgCreatePowerupTemplate) Route() string {
	return RouterKey
}

func (msg *MsgCreatePowerupTemplate) Type() string {
	return "CreatePowerupTemplate"
}

func (msg *MsgCreatePowerupTemplate) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePowerupTemplate) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePowerupTemplate) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdatePowerupTemplate{}

func NewMsgUpdatePowerupTemplate(
	creator string,
	collectionIndex string,
	classIndex string,
	powerupTemplateIndex string,
	name string,
	description string,
	count int32,
	activationBalance sdk.Coin,
	maxBalance sdk.Coin,
	duration int32,
	maxDuration int32,
	refundDuration int32,
	maxActivations int32,
	coolDownDuration int32,
	rechargeRate sdk.Coin,
	feeRate sdk.Coin,
	activationType int32,
	eventData string,

) *MsgUpdatePowerupTemplate {
	return &MsgUpdatePowerupTemplate{
		Creator:              creator,
		CollectionIndex:      collectionIndex,
		ClassIndex:           classIndex,
		PowerupTemplateIndex: powerupTemplateIndex,
		Name:                 name,
		Description:          description,
		Count:                count,
		ActivationBalance:    activationBalance,
		MaxBalance:           maxBalance,
		Duration:             duration,
		MaxDuration:          maxDuration,
		RefundDuration:       refundDuration,
		MaxActivations:       maxActivations,
		CoolDownDuration:     coolDownDuration,
		RechargeRate:         rechargeRate,
		FeeRate:              feeRate,
		ActivationType:       activationType,
		EventData:            eventData,
	}
}

func (msg *MsgUpdatePowerupTemplate) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePowerupTemplate) Type() string {
	return "UpdatePowerupTemplate"
}

func (msg *MsgUpdatePowerupTemplate) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePowerupTemplate) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePowerupTemplate) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeletePowerupTemplate{}

func NewMsgDeletePowerupTemplate(
	creator string,
	collectionIndex string,
	classIndex string,
	powerupTemplateIndex string,

) *MsgDeletePowerupTemplate {
	return &MsgDeletePowerupTemplate{
		Creator:              creator,
		CollectionIndex:      collectionIndex,
		ClassIndex:           classIndex,
		PowerupTemplateIndex: powerupTemplateIndex,
	}
}
func (msg *MsgDeletePowerupTemplate) Route() string {
	return RouterKey
}

func (msg *MsgDeletePowerupTemplate) Type() string {
	return "DeletePowerupTemplate"
}

func (msg *MsgDeletePowerupTemplate) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePowerupTemplate) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePowerupTemplate) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
