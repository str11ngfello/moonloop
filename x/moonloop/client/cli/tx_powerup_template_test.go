package cli_test

import (
	"fmt"
	"strconv"
	"testing"

	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"github.com/cosmonaut/moonloop/testutil/network"
	"github.com/cosmonaut/moonloop/x/moonloop/client/cli"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestCreatePowerupTemplate(t *testing.T) {
	net := network.New(t)
	val := net.Validators[0]
	ctx := val.ClientCtx

	fields := []string{"xyz", "xyz", "111", "10token", "10token", "111", "111", "111", "111", "111", "10token", "10token", "111", "xyz"}
	for _, tc := range []struct {
		desc                   string
		idCollectionIndex      string
		idClassIndex           string
		idPowerupTemplateIndex string

		args []string
		err  error
		code uint32
	}{
		{
			idCollectionIndex:      strconv.Itoa(0),
			idClassIndex:           strconv.Itoa(0),
			idPowerupTemplateIndex: strconv.Itoa(0),

			desc: "valid",
			args: []string{
				fmt.Sprintf("--%s=%s", flags.FlagFrom, val.Address.String()),
				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastBlock),
				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin(net.Config.BondDenom, sdk.NewInt(10))).String()),
			},
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			args := []string{
				tc.idCollectionIndex,
				tc.idClassIndex,
				tc.idPowerupTemplateIndex,
			}
			args = append(args, fields...)
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdCreatePowerupTemplate(), args)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				var resp sdk.TxResponse
				require.NoError(t, ctx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				require.Equal(t, tc.code, resp.Code)
			}
		})
	}
}

func TestUpdatePowerupTemplate(t *testing.T) {
	net := network.New(t)
	val := net.Validators[0]
	ctx := val.ClientCtx

	fields := []string{"xyz", "xyz", "111", "10token", "10token", "111", "111", "111", "111", "111", "10token", "10token", "111", "xyz"}
	common := []string{
		fmt.Sprintf("--%s=%s", flags.FlagFrom, val.Address.String()),
		fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
		fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastBlock),
		fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin(net.Config.BondDenom, sdk.NewInt(10))).String()),
	}
	args := []string{
		"0",
		"0",
		"0",
	}
	args = append(args, fields...)
	args = append(args, common...)
	_, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdCreatePowerupTemplate(), args)
	require.NoError(t, err)

	for _, tc := range []struct {
		desc                   string
		idCollectionIndex      string
		idClassIndex           string
		idPowerupTemplateIndex string

		args []string
		code uint32
		err  error
	}{
		{
			desc:                   "valid",
			idCollectionIndex:      strconv.Itoa(0),
			idClassIndex:           strconv.Itoa(0),
			idPowerupTemplateIndex: strconv.Itoa(0),

			args: common,
		},
		{
			desc:                   "key not found",
			idCollectionIndex:      strconv.Itoa(100000),
			idClassIndex:           strconv.Itoa(100000),
			idPowerupTemplateIndex: strconv.Itoa(100000),

			args: common,
			code: sdkerrors.ErrKeyNotFound.ABCICode(),
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			args := []string{
				tc.idCollectionIndex,
				tc.idClassIndex,
				tc.idPowerupTemplateIndex,
			}
			args = append(args, fields...)
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdUpdatePowerupTemplate(), args)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				var resp sdk.TxResponse
				require.NoError(t, ctx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				require.Equal(t, tc.code, resp.Code)
			}
		})
	}
}

func TestDeletePowerupTemplate(t *testing.T) {
	net := network.New(t)

	val := net.Validators[0]
	ctx := val.ClientCtx

	fields := []string{"xyz", "xyz", "111", "10token", "10token", "111", "111", "111", "111", "111", "10token", "10token", "111", "xyz"}
	common := []string{
		fmt.Sprintf("--%s=%s", flags.FlagFrom, val.Address.String()),
		fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
		fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastBlock),
		fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin(net.Config.BondDenom, sdk.NewInt(10))).String()),
	}
	args := []string{
		"0",
		"0",
		"0",
	}
	args = append(args, fields...)
	args = append(args, common...)
	_, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdCreatePowerupTemplate(), args)
	require.NoError(t, err)

	for _, tc := range []struct {
		desc                   string
		idCollectionIndex      string
		idClassIndex           string
		idPowerupTemplateIndex string

		args []string
		code uint32
		err  error
	}{
		{
			desc:                   "valid",
			idCollectionIndex:      strconv.Itoa(0),
			idClassIndex:           strconv.Itoa(0),
			idPowerupTemplateIndex: strconv.Itoa(0),

			args: common,
		},
		{
			desc:                   "key not found",
			idCollectionIndex:      strconv.Itoa(100000),
			idClassIndex:           strconv.Itoa(100000),
			idPowerupTemplateIndex: strconv.Itoa(100000),

			args: common,
			code: sdkerrors.ErrKeyNotFound.ABCICode(),
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			args := []string{
				tc.idCollectionIndex,
				tc.idClassIndex,
				tc.idPowerupTemplateIndex,
			}
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdDeletePowerupTemplate(), args)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				var resp sdk.TxResponse
				require.NoError(t, ctx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				require.Equal(t, tc.code, resp.Code)
			}
		})
	}
}
