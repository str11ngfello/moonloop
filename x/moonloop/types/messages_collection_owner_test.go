package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/str11ngfello/moonloop/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateCollectionOwner_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateCollectionOwner
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateCollectionOwner{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateCollectionOwner{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateCollectionOwner_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateCollectionOwner
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateCollectionOwner{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateCollectionOwner{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteCollectionOwner_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteCollectionOwner
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteCollectionOwner{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteCollectionOwner{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
