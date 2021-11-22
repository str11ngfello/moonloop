package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

func CmdCreatePowerupTemplate() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-powerup-template [collection-index] [class-index] [powerup-template-index] [name] [description] [count] [activation-balance] [max-balance] [duration] [max-duration] [refund-duration] [max-activations] [cool-down-duration] [recharge-rate] [fee-rate] [activation-type] [event-data]",
		Short: "Create a new powerupTemplate",
		Args:  cobra.ExactArgs(17),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCollectionIndex := args[0]
			indexClassIndex := args[1]
			indexPowerupTemplateIndex := args[2]

			// Get value arguments
			argName := args[3]
			argDescription := args[4]
			argCount, err := cast.ToInt32E(args[5])
			if err != nil {
				return err
			}
			argActivationBalance, err := sdk.ParseCoinNormalized(args[6])
			if err != nil {
				return err
			}
			argMaxBalance, err := sdk.ParseCoinNormalized(args[7])
			if err != nil {
				return err
			}
			argDuration, err := cast.ToInt32E(args[8])
			if err != nil {
				return err
			}
			argMaxDuration, err := cast.ToInt32E(args[9])
			if err != nil {
				return err
			}
			argRefundDuration, err := cast.ToInt32E(args[10])
			if err != nil {
				return err
			}
			argMaxActivations, err := cast.ToInt32E(args[11])
			if err != nil {
				return err
			}
			argCoolDownDuration, err := cast.ToInt32E(args[12])
			if err != nil {
				return err
			}
			argRechargeRate, err := sdk.ParseCoinNormalized(args[13])
			if err != nil {
				return err
			}
			argFeeRate, err := sdk.ParseCoinNormalized(args[14])
			if err != nil {
				return err
			}
			argActivationType, err := cast.ToInt32E(args[15])
			if err != nil {
				return err
			}
			argEventData := args[16]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreatePowerupTemplate(
				clientCtx.GetFromAddress().String(),
				indexCollectionIndex,
				indexClassIndex,
				indexPowerupTemplateIndex,
				argName,
				argDescription,
				argCount,
				argActivationBalance,
				argMaxBalance,
				argDuration,
				argMaxDuration,
				argRefundDuration,
				argMaxActivations,
				argCoolDownDuration,
				argRechargeRate,
				argFeeRate,
				argActivationType,
				argEventData,
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

func CmdUpdatePowerupTemplate() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-powerup-template [collection-index] [class-index] [powerup-template-index] [name] [description] [count] [activation-balance] [max-balance] [duration] [max-duration] [refund-duration] [max-activations] [cool-down-duration] [recharge-rate] [fee-rate] [activation-type] [event-data]",
		Short: "Update a powerupTemplate",
		Args:  cobra.ExactArgs(17),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCollectionIndex := args[0]
			indexClassIndex := args[1]
			indexPowerupTemplateIndex := args[2]

			// Get value arguments
			argName := args[3]
			argDescription := args[4]
			argCount, err := cast.ToInt32E(args[5])
			if err != nil {
				return err
			}
			argActivationBalance, err := sdk.ParseCoinNormalized(args[6])
			if err != nil {
				return err
			}
			argMaxBalance, err := sdk.ParseCoinNormalized(args[7])
			if err != nil {
				return err
			}
			argDuration, err := cast.ToInt32E(args[8])
			if err != nil {
				return err
			}
			argMaxDuration, err := cast.ToInt32E(args[9])
			if err != nil {
				return err
			}
			argRefundDuration, err := cast.ToInt32E(args[10])
			if err != nil {
				return err
			}
			argMaxActivations, err := cast.ToInt32E(args[11])
			if err != nil {
				return err
			}
			argCoolDownDuration, err := cast.ToInt32E(args[12])
			if err != nil {
				return err
			}
			argRechargeRate, err := sdk.ParseCoinNormalized(args[13])
			if err != nil {
				return err
			}
			argFeeRate, err := sdk.ParseCoinNormalized(args[14])
			if err != nil {
				return err
			}
			argActivationType, err := cast.ToInt32E(args[15])
			if err != nil {
				return err
			}
			argEventData := args[16]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdatePowerupTemplate(
				clientCtx.GetFromAddress().String(),
				indexCollectionIndex,
				indexClassIndex,
				indexPowerupTemplateIndex,
				argName,
				argDescription,
				argCount,
				argActivationBalance,
				argMaxBalance,
				argDuration,
				argMaxDuration,
				argRefundDuration,
				argMaxActivations,
				argCoolDownDuration,
				argRechargeRate,
				argFeeRate,
				argActivationType,
				argEventData,
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

func CmdDeletePowerupTemplate() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-powerup-template [collection-index] [class-index] [powerup-template-index]",
		Short: "Delete a powerupTemplate",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexCollectionIndex := args[0]
			indexClassIndex := args[1]
			indexPowerupTemplateIndex := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeletePowerupTemplate(
				clientCtx.GetFromAddress().String(),
				indexCollectionIndex,
				indexClassIndex,
				indexPowerupTemplateIndex,
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
