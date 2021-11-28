package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

var _ = strconv.Itoa(0)

func CmdGetInstance() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "get-instance [collection-index] [class-index] [instance-index]",
		Short: "Query get-instance",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqCollectionIndex := args[0]
			reqClassIndex := args[1]
			reqInstanceIndex := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetInstanceRequest{

				CollectionIndex:    reqCollectionIndex,
				ClassTemplateIndex: reqClassIndex,
				InstanceIndex:      reqInstanceIndex,
			}

			res, err := queryClient.GetInstance(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
