package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/str11ngfello/moonloop/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateMintStrategy_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateMintStrategy
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateMintStrategy{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateMintStrategy{
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

func TestMsgUpdateMintStrategy_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateMintStrategy
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateMintStrategy{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateMintStrategy{
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

func TestMsgDeleteMintStrategy_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteMintStrategy
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteMintStrategy{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteMintStrategy{
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
