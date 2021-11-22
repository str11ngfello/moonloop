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

func CmdFreePower() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "free-power [collection-index] [class-index] [powerup-template-index] [instance-index]",
		Short: "Broadcast message freePower",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argCollectionIndex := args[0]
			argClassIndex := args[1]
			argPowerupTemplateIndex := args[2]
			argInstanceIndex := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgFreePower(
				clientCtx.GetFromAddress().String(),
				argCollectionIndex,
				argClassIndex,
				argPowerupTemplateIndex,
				argInstanceIndex,
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
