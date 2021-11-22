package cli

import (
	"context"

	"github.com/cosmonaut/moonloop/x/moonloop/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListPowerup() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-powerup",
		Short: "list all powerup",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllPowerupRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.PowerupAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowPowerup() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-powerup [collection-index] [class-index] [powerup-template-index] [instance-index]",
		Short: "shows a powerup",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argCollectionIndex := args[0]
			argClassIndex := args[1]
			argPowerupTemplateIndex := args[2]
			argInstanceIndex := args[3]

			params := &types.QueryGetPowerupRequest{
				CollectionIndex:      argCollectionIndex,
				ClassIndex:           argClassIndex,
				PowerupTemplateIndex: argPowerupTemplateIndex,
				InstanceIndex:        argInstanceIndex,
			}

			res, err := queryClient.Powerup(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
