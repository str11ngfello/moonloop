package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/moonloop module sentinel errors
var (
	ErrPowerupNotAcceptingPower  = sdkerrors.Register(ModuleName, 1100, "powerup not accepting power")
	ErrPowerupIsActivated        = sdkerrors.Register(ModuleName, 1101, "powerup is activated")
	ErrPowerupMaxDuration        = sdkerrors.Register(ModuleName, 1102, "cannot exceed max duration")
	ErrPowerupMaxPower           = sdkerrors.Register(ModuleName, 1103, "cannot exceed max power")
	ErrPowerupMaxActivations     = sdkerrors.Register(ModuleName, 1104, "cannot exceed max activations")
	ErrPowerupCoolingDown        = sdkerrors.Register(ModuleName, 1105, "cooling down")
	ErrPowerupInvalidPowerup     = sdkerrors.Register(ModuleName, 1106, "invalid powerup")
	ErrPowerupInvalidQuantity    = sdkerrors.Register(ModuleName, 1107, "invalid quantity")
	ErrPowerupInvalidInputs      = sdkerrors.Register(ModuleName, 1108, "invalid inputs")
	ErrPowerupInsuficientPower   = sdkerrors.Register(ModuleName, 1109, "insufficient power")
	ErrPowerupInvalidOwner       = sdkerrors.Register(ModuleName, 1110, "invalid owner")
	ErrPowerupContributionsExist = sdkerrors.Register(ModuleName, 1111, "contributions exist")
	ErrPowerupFeesExist          = sdkerrors.Register(ModuleName, 1112, "fees exist")
	ErrPowerupDuplicateAction    = sdkerrors.Register(ModuleName, 1113, "duplicate action")
	ErrPowerupRefundDuration     = sdkerrors.Register(ModuleName, 1114, "refund not available yet")
)
