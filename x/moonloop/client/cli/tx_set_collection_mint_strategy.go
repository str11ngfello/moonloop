package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

var _ = strconv.Itoa(0)

func CmdSetCollectionMintStrategy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "set-collection-mint-strategy [collection-index] [mint-strategy-index]",
		Short: "Broadcast message setCollectionMintStrategy",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argCollectionIndex := args[0]
			argMintStrategyIndex := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSetCollectionMintStrategy(
				clientCtx.GetFromAddress().String(),
				argCollectionIndex,
				argMintStrategyIndex,
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
