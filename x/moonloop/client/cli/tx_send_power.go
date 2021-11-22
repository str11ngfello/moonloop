package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/spf13/cobra"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

var _ = strconv.Itoa(0)

func CmdSendPower() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "send-power [collection-index] [class-index] [powerup-template-index] [instance-index] [power]",
		Short: "Broadcast message sendPower",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argCollectionIndex := args[0]
			argClassIndex := args[1]
			argPowerupTemplateIndex := args[2]
			argInstanceIndex := args[3]
			argPower, err := sdk.ParseCoinNormalized(args[4])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSendPower(
				clientCtx.GetFromAddress().String(),
				argCollectionIndex,
				argClassIndex,
				argPowerupTemplateIndex,
				argInstanceIndex,
				argPower,
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
