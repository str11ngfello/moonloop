package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgSetCollectionMintStrategy{}

func NewMsgSetCollectionMintStrategy(creator string, collectionIndex string, mintStrategyIndex string) *MsgSetCollectionMintStrategy {
	return &MsgSetCollectionMintStrategy{
		Creator:           creator,
		CollectionIndex:   collectionIndex,
		MintStrategyIndex: mintStrategyIndex,
	}
}

func (msg *MsgSetCollectionMintStrategy) Route() string {
	return RouterKey
}

func (msg *MsgSetCollectionMintStrategy) Type() string {
	return "SetCollectionMintStrategy"
}

func (msg *MsgSetCollectionMintStrategy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSetCollectionMintStrategy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSetCollectionMintStrategy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
