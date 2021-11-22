package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/spf13/cobra"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
	"strings"
)

func CmdCreateContribution() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-contribution [collection-index] [class-index] [powerup-template-index] [instance-index] [contributors] [amounts]",
		Short: "Create a new contribution",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCollectionIndex := args[0]
			indexClassIndex := args[1]
			indexPowerupTemplateIndex := args[2]
			indexInstanceIndex := args[3]

			// Get value arguments
			argContributors := strings.Split(args[4], listSeparator)
			argAmounts, err := sdk.ParseCoinsNormalized(args[5])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateContribution(
				clientCtx.GetFromAddress().String(),
				indexCollectionIndex,
				indexClassIndex,
				indexPowerupTemplateIndex,
				indexInstanceIndex,
				argContributors,
				argAmounts,
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

func CmdUpdateContribution() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-contribution [collection-index] [class-index] [powerup-template-index] [instance-index] [contributors] [amounts]",
		Short: "Update a contribution",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCollectionIndex := args[0]
			indexClassIndex := args[1]
			indexPowerupTemplateIndex := args[2]
			indexInstanceIndex := args[3]

			// Get value arguments
			argContributors := strings.Split(args[4], listSeparator)
			argAmounts, err := sdk.ParseCoinsNormalized(args[5])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateContribution(
				clientCtx.GetFromAddress().String(),
				indexCollectionIndex,
				indexClassIndex,
				indexPowerupTemplateIndex,
				indexInstanceIndex,
				argContributors,
				argAmounts,
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

func CmdDeleteContribution() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-contribution [collection-index] [class-index] [powerup-template-index] [instance-index]",
		Short: "Delete a contribution",
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

			msg := types.NewMsgDeleteContribution(
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
