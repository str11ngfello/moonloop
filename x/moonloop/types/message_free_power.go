package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgFreePower{}

func NewMsgFreePower(creator string, collectionIndex string, classTemplateIndex string, powerupTemplateIndex string, instanceIndex string) *MsgFreePower {
	return &MsgFreePower{
		Creator:              creator,
		CollectionIndex:      collectionIndex,
		ClassTemplateIndex:   classTemplateIndex,
		PowerupTemplateIndex: powerupTemplateIndex,
		InstanceIndex:        instanceIndex,
	}
}

func (msg *MsgFreePower) Route() string {
	return RouterKey
}

func (msg *MsgFreePower) Type() string {
	return "FreePower"
}

func (msg *MsgFreePower) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgFreePower) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgFreePower) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
