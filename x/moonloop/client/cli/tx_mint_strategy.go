package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
	"strings"
)

func CmdCreateMintStrategy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-mint-strategy [index] [minters] [instance-levels] [price-levels] [paused]",
		Short: "Create a new mintStrategy",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argMinters := strings.Split(args[1], listSeparator)
			argCastInstanceLevels := strings.Split(args[2], listSeparator)
			argInstanceLevels := make([]int32, len(argCastInstanceLevels))
			for i, arg := range argCastInstanceLevels {
				value, err := cast.ToInt32E(arg)
				if err != nil {
					return err
				}
				argInstanceLevels[i] = value
			}
			argCastPriceLevels := strings.Split(args[3], listSeparator)
			argPriceLevels := make([]int32, len(argCastPriceLevels))
			for i, arg := range argCastPriceLevels {
				value, err := cast.ToInt32E(arg)
				if err != nil {
					return err
				}
				argPriceLevels[i] = value
			}
			argPaused, err := cast.ToBoolE(args[4])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateMintStrategy(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argMinters,
				argInstanceLevels,
				argPriceLevels,
				argPaused,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateMintStrategy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-mint-strategy [index] [minters] [instance-levels] [price-levels] [paused]",
		Short: "Update a mintStrategy",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argMinters := strings.Split(args[1], listSeparator)
			argCastInstanceLevels := strings.Split(args[2], listSeparator)
			argInstanceLevels := make([]int32, len(argCastInstanceLevels))
			for i, arg := range argCastInstanceLevels {
				value, err := cast.ToInt32E(arg)
				if err != nil {
					return err
				}
				argInstanceLevels[i] = value
			}
			argCastPriceLevels := strings.Split(args[3], listSeparator)
			argPriceLevels := make([]int32, len(argCastPriceLevels))
			for i, arg := range argCastPriceLevels {
				value, err := cast.ToInt32E(arg)
				if err != nil {
					return err
				}
				argPriceLevels[i] = value
			}
			argPaused, err := cast.ToBoolE(args[4])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateMintStrategy(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argMinters,
				argInstanceLevels,
				argPriceLevels,
				argPaused,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteMintStrategy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-mint-strategy [index]",
		Short: "Delete a mintStrategy",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexIndex := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteMintStrategy(
				clientCtx.GetFromAddress().String(),
				indexIndex,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
