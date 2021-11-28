package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
	listSeparator              = ","
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdCreateCollection())
	cmd.AddCommand(CmdUpdateCollection())
	cmd.AddCommand(CmdDeleteCollection())
	cmd.AddCommand(CmdCreateClass())
	cmd.AddCommand(CmdUpdateClass())
	cmd.AddCommand(CmdDeleteClass())
	cmd.AddCommand(CmdCreateMintStrategy())
	cmd.AddCommand(CmdUpdateMintStrategy())
	cmd.AddCommand(CmdDeleteMintStrategy())
	cmd.AddCommand(CmdCreateContribution())
	cmd.AddCommand(CmdUpdateContribution())
	cmd.AddCommand(CmdDeleteContribution())
	cmd.AddCommand(CmdCreatePowerupTemplate())
	cmd.AddCommand(CmdUpdatePowerupTemplate())
	cmd.AddCommand(CmdDeletePowerupTemplate())
	cmd.AddCommand(CmdCreatePowerup())
	cmd.AddCommand(CmdUpdatePowerup())
	cmd.AddCommand(CmdDeletePowerup())
	cmd.AddCommand(CmdSetCollectionMintStrategy())
	cmd.AddCommand(CmdSendPower())
	cmd.AddCommand(CmdFreePower())
	cmd.AddCommand(CmdMint())
	cmd.AddCommand(CmdCreateClassTemplate())
	cmd.AddCommand(CmdUpdateClassTemplate())
	cmd.AddCommand(CmdDeleteClassTemplate())
	// this line is used by starport scaffolding # 1

	return cmd
}
