package types

import (
	"testing"

	"github.com/cosmonaut/moonloop/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreatePowerupTemplate_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreatePowerupTemplate
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreatePowerupTemplate{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreatePowerupTemplate{
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

func TestMsgUpdatePowerupTemplate_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdatePowerupTemplate
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdatePowerupTemplate{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdatePowerupTemplate{
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

func TestMsgDeletePowerupTemplate_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeletePowerupTemplate
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeletePowerupTemplate{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeletePowerupTemplate{
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
