package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

func CmdCreatePowerup() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-powerup [collection-index] [class-index] [powerup-template-index] [instance-index] [balance] [start-time] [end-time] [num-activations] [fees] [accepting-power]",
		Short: "Create a new powerup",
		Args:  cobra.ExactArgs(10),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCollectionIndex := args[0]
			indexClassIndex := args[1]
			indexPowerupTemplateIndex := args[2]
			indexInstanceIndex := args[3]

			// Get value arguments
			argBalance, err := sdk.ParseCoinNormalized(args[4])
			if err != nil {
				return err
			}
			argStartTime, err := cast.ToInt32E(args[5])
			if err != nil {
				return err
			}
			argEndTime, err := cast.ToInt32E(args[6])
			if err != nil {
				return err
			}
			argNumActivations, err := cast.ToInt32E(args[7])
			if err != nil {
				return err
			}
			argFees, err := sdk.ParseCoinNormalized(args[8])
			if err != nil {
				return err
			}
			argAcceptingPower, err := cast.ToBoolE(args[9])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreatePowerup(
				clientCtx.GetFromAddress().String(),
				indexCollectionIndex,
				indexClassIndex,
				indexPowerupTemplateIndex,
				indexInstanceIndex,
				argBalance,
				argStartTime,
				argEndTime,
				argNumActivations,
				argFees,
				argAcceptingPower,
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

func CmdUpdatePowerup() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-powerup [collection-index] [class-index] [powerup-template-index] [instance-index] [balance] [start-time] [end-time] [num-activations] [fees] [accepting-power]",
		Short: "Update a powerup",
		Args:  cobra.ExactArgs(10),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCollectionIndex := args[0]
			indexClassIndex := args[1]
			indexPowerupTemplateIndex := args[2]
			indexInstanceIndex := args[3]

			// Get value arguments
			argBalance, err := sdk.ParseCoinNormalized(args[4])
			if err != nil {
				return err
			}
			argStartTime, err := cast.ToInt32E(args[5])
			if err != nil {
				return err
			}
			argEndTime, err := cast.ToInt32E(args[6])
			if err != nil {
				return err
			}
			argNumActivations, err := cast.ToInt32E(args[7])
			if err != nil {
				return err
			}
			argFees, err := sdk.ParseCoinNormalized(args[8])
			if err != nil {
				return err
			}
			argAcceptingPower, err := cast.ToBoolE(args[9])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdatePowerup(
				clientCtx.GetFromAddress().String(),
				indexCollectionIndex,
				indexClassIndex,
				indexPowerupTemplateIndex,
				indexInstanceIndex,
				argBalance,
				argStartTime,
				argEndTime,
				argNumActivations,
				argFees,
				argAcceptingPower,
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

func CmdDeletePowerup() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-powerup [collection-index] [class-index] [powerup-template-index] [instance-index]",
		Short: "Delete a powerup",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexCollectionIndex := args[0]
			indexClassIndex := args[1]
			indexPowerupTemplateIndex := args[2]
			indexInstanceIndex := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeletePowerup(
				clientCtx.GetFromAddress().String(),
				indexCollectionIndex,
				indexClassIndex,
				indexPowerupTemplateIndex,
				indexInstanceIndex,
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
