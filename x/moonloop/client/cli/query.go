package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group moonloop queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdListCollection())
	cmd.AddCommand(CmdShowCollection())
	cmd.AddCommand(CmdListClass())
	cmd.AddCommand(CmdShowClass())
	cmd.AddCommand(CmdListMintStrategy())
	cmd.AddCommand(CmdShowMintStrategy())
	cmd.AddCommand(CmdListContribution())
	cmd.AddCommand(CmdShowContribution())
	cmd.AddCommand(CmdListPowerupTemplate())
	cmd.AddCommand(CmdShowPowerupTemplate())
	cmd.AddCommand(CmdListPowerup())
	cmd.AddCommand(CmdShowPowerup())
	cmd.AddCommand(CmdGetInstance())

	// this line is used by starport scaffolding # 1

	return cmd
}
