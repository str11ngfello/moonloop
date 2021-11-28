package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

func CmdListPowerupTemplate() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-powerup-template",
		Short: "list all powerupTemplate",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllPowerupTemplateRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.PowerupTemplateAll(context.Background(), params)
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

func CmdShowPowerupTemplate() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-powerup-template [collection-index] [class-index] [powerup-template-index]",
		Short: "shows a powerupTemplate",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argCollectionIndex := args[0]
			argClassIndex := args[1]
			argPowerupTemplateIndex := args[2]

			params := &types.QueryGetPowerupTemplateRequest{
				CollectionIndex:      argCollectionIndex,
				ClassTemplateIndex:   argClassIndex,
				PowerupTemplateIndex: argPowerupTemplateIndex,
			}

			res, err := queryClient.PowerupTemplate(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
