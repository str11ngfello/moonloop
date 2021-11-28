package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateContribution{}

func NewMsgCreateContribution(
	creator string,
	collectionIndex string,
	classTemplateIndex string,
	powerupTemplateIndex string,
	instanceIndex string,
	contributors []string,
	amounts sdk.Coins,

) *MsgCreateContribution {
	return &MsgCreateContribution{
		Creator:              creator,
		CollectionIndex:      collectionIndex,
		ClassTemplateIndex:   classTemplateIndex,
		PowerupTemplateIndex: powerupTemplateIndex,
		InstanceIndex:        instanceIndex,
		Contributors:         contributors,
		Amounts:              amounts,
	}
}

func (msg *MsgCreateContribution) Route() string {
	return RouterKey
}

func (msg *MsgCreateContribution) Type() string {
	return "CreateContribution"
}

func (msg *MsgCreateContribution) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateContribution) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateContribution) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateContribution{}

func NewMsgUpdateContribution(
	creator string,
	collectionIndex string,
	classTemplateIndex string,
	powerupTemplateIndex string,
	instanceIndex string,
	contributors []string,
	amounts sdk.Coins,

) *MsgUpdateContribution {
	return &MsgUpdateContribution{
		Creator:              creator,
		CollectionIndex:      collectionIndex,
		ClassTemplateIndex:   classTemplateIndex,
		PowerupTemplateIndex: powerupTemplateIndex,
		InstanceIndex:        instanceIndex,
		Contributors:         contributors,
		Amounts:              amounts,
	}
}

func (msg *MsgUpdateContribution) Route() string {
	return RouterKey
}

func (msg *MsgUpdateContribution) Type() string {
	return "UpdateContribution"
}

func (msg *MsgUpdateContribution) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateContribution) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateContribution) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteContribution{}

func NewMsgDeleteContribution(
	creator string,
	collectionIndex string,
	classTemplateIndex string,
	powerupTemplateIndex string,
	instanceIndex string,

) *MsgDeleteContribution {
	return &MsgDeleteContribution{
		Creator:              creator,
		CollectionIndex:      collectionIndex,
		ClassTemplateIndex:   classTemplateIndex,
		PowerupTemplateIndex: powerupTemplateIndex,
		InstanceIndex:        instanceIndex,
	}
}
func (msg *MsgDeleteContribution) Route() string {
	return RouterKey
}

func (msg *MsgDeleteContribution) Type() string {
	return "DeleteContribution"
}

func (msg *MsgDeleteContribution) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteContribution) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteContribution) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
