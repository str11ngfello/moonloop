package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

func CmdCreateClass() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-class [collection-index] [class-template-index] [instance-index] [owner]",
		Short: "Create a new class",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCollectionIndex := args[0]
			indexClassTemplateIndex := args[1]
			indexInstanceIndex := args[2]

			// Get value arguments
			argOwner := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateClass(
				clientCtx.GetFromAddress().String(),
				indexCollectionIndex,
				indexClassTemplateIndex,
				indexInstanceIndex,
				argOwner,
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

func CmdUpdateClass() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-class [collection-index] [class-template-index] [instance-index] [owner]",
		Short: "Update a class",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCollectionIndex := args[0]
			indexClassTemplateIndex := args[1]
			indexInstanceIndex := args[2]

			owner := args[3]
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateClass(
				clientCtx.GetFromAddress().String(),
				indexCollectionIndex,
				indexClassTemplateIndex,
				indexInstanceIndex,
				owner,
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

func CmdDeleteClass() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-class [collection-index] [class-template-index] [instance-index]",
		Short: "Delete a class",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexCollectionIndex := args[0]
			indexClassTemplateIndex := args[1]
			indexInstanceIndex := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteClass(
				clientCtx.GetFromAddress().String(),
				indexCollectionIndex,
				indexClassTemplateIndex,
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
