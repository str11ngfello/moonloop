package cli

import (
	"strings"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

func CmdCreateClassTemplate() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-class-template [collection-index] [class-template-index] [name] [description] [mint-strategy] [gltf-hash] [metadata] [max-instances]",
		Short: "Create a new classTemplate",
		Args:  cobra.ExactArgs(8),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCollectionIndex := args[0]
			indexClassTemplateIndex := args[1]

			// Get value arguments
			argName := args[2]
			argDescription := args[3]
			argMintStrategy := args[4]
			argGltfHash := args[5]
			argMetadata := args[6]
			argMaxInstances, err := cast.ToInt32E(args[7])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateClassTemplate(
				clientCtx.GetFromAddress().String(),
				indexCollectionIndex,
				indexClassTemplateIndex,
				argName,
				argDescription,
				argMintStrategy,
				argGltfHash,
				argMetadata,
				argMaxInstances,
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

func CmdUpdateClassTemplate() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-class-template [collection-index] [class-template-index] [name] [description] [mint-strategy] [gltf-hash] [metadata] [max-instances] [count] [powerup-templates]",
		Short: "Update a classTemplate",
		Args:  cobra.ExactArgs(10),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCollectionIndex := args[0]
			indexClassTemplateIndex := args[1]

			// Get value arguments
			argName := args[2]
			argDescription := args[3]
			argMintStrategy := args[4]
			argGltfHash := args[5]
			argMetadata := args[6]
			argMaxInstances, err := cast.ToInt32E(args[7])
			if err != nil {
				return err
			}
			argCount, err := cast.ToInt32E(args[8])
			if err != nil {
				return err
			}
			argPowerupTemplates := strings.Split(args[9], listSeparator)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateClassTemplate(
				clientCtx.GetFromAddress().String(),
				indexCollectionIndex,
				indexClassTemplateIndex,
				argName,
				argDescription,
				argMintStrategy,
				argGltfHash,
				argMetadata,
				argMaxInstances,
				argCount,
				argPowerupTemplates,
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

func CmdDeleteClassTemplate() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-class-template [collection-index] [class-template-index]",
		Short: "Delete a classTemplate",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexCollectionIndex := args[0]
			indexClassTemplateIndex := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteClassTemplate(
				clientCtx.GetFromAddress().String(),
				indexCollectionIndex,
				indexClassTemplateIndex,
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
