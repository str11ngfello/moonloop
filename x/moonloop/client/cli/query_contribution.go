package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

func CmdListContribution() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-contribution",
		Short: "list all contribution",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllContributionRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.ContributionAll(context.Background(), params)
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

func CmdShowContribution() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-contribution [collection-index] [class-index] [powerup-template-index] [instance-index]",
		Short: "shows a contribution",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argCollectionIndex := args[0]
			argClassIndex := args[1]
			argPowerupTemplateIndex := args[2]
			argInstanceIndex := args[3]

			params := &types.QueryGetContributionRequest{
				CollectionIndex:      argCollectionIndex,
				ClassIndex:           argClassIndex,
				PowerupTemplateIndex: argPowerupTemplateIndex,
				InstanceIndex:        argInstanceIndex,
			}

			res, err := queryClient.Contribution(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
