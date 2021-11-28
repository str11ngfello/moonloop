package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

func CmdListClassTemplate() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-class-template",
		Short: "list all classTemplate",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllClassTemplateRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.ClassTemplateAll(context.Background(), params)
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

func CmdShowClassTemplate() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-class-template [collection-index] [class-template-index]",
		Short: "shows a classTemplate",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argCollectionIndex := args[0]
			argClassTemplateIndex := args[1]

			params := &types.QueryGetClassTemplateRequest{
				CollectionIndex:    argCollectionIndex,
				ClassTemplateIndex: argClassTemplateIndex,
			}

			res, err := queryClient.ClassTemplate(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
