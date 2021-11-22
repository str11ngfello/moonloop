package cli

import (
	"context"

	"github.com/cosmonaut/moonloop/x/moonloop/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListClass() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-class",
		Short: "list all class",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllClassRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.ClassAll(context.Background(), params)
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

func CmdShowClass() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-class [collection-index] [class-index]",
		Short: "shows a class",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argCollectionIndex := args[0]
			argClassIndex := args[1]

			params := &types.QueryGetClassRequest{
				CollectionIndex: argCollectionIndex,
				ClassIndex:      argClassIndex,
			}

			res, err := queryClient.Class(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
