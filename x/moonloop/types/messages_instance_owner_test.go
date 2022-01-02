package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/str11ngfello/moonloop/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateInstanceOwner_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateInstanceOwner
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateInstanceOwner{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateInstanceOwner{
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

func TestMsgUpdateInstanceOwner_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateInstanceOwner
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateInstanceOwner{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateInstanceOwner{
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

func TestMsgDeleteInstanceOwner_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteInstanceOwner
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteInstanceOwner{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteInstanceOwner{
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
