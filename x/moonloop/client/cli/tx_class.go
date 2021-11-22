package cli

import (
	"github.com/cosmonaut/moonloop/x/moonloop/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdCreateClass() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-class [collection-index] [class-index] [name] [description] [mint-strategy] [gltf-hash] [metadata] [max-instances]",
		Short: "Create a new class",
		Args:  cobra.ExactArgs(8),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCollectionIndex := args[0]
			indexClassIndex := args[1]

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

			msg := types.NewMsgCreateClass(
				clientCtx.GetFromAddress().String(),
				indexCollectionIndex,
				indexClassIndex,
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

func CmdUpdateClass() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-class [collection-index] [class-index] [name] [description] [mint-strategy] [gltf-hash] [metadata] [max-instances] [count] [powerup-templates]",
		Short: "Update a class",
		Args:  cobra.ExactArgs(10),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCollectionIndex := args[0]
			indexClassIndex := args[1]

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

			msg := types.NewMsgUpdateClass(
				clientCtx.GetFromAddress().String(),
				indexCollectionIndex,
				indexClassIndex,
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

func CmdDeleteClass() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-class [collection-index] [class-index]",
		Short: "Delete a class",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexCollectionIndex := args[0]
			indexClassIndex := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteClass(
				clientCtx.GetFromAddress().String(),
				indexCollectionIndex,
				indexClassIndex,
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
