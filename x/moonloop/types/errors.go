package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/moonloop module sentinel errors
var (
	ErrMoonLoopNotAcceptingPower  = sdkerrors.Register(ModuleName, 1100, "powerup not accepting power")
	ErrMoonLoopIsActivated        = sdkerrors.Register(ModuleName, 1101, "powerup is activated")
	ErrMoonLoopMaxDuration        = sdkerrors.Register(ModuleName, 1102, "cannot exceed max duration")
	ErrMoonLoopMaxPower           = sdkerrors.Register(ModuleName, 1103, "cannot exceed max power")
	ErrMoonLoopMaxActivations     = sdkerrors.Register(ModuleName, 1104, "cannot exceed max activations")
	ErrMoonLoopCoolingDown        = sdkerrors.Register(ModuleName, 1105, "cooling down")
	ErrMoonLoopInvalidPowerup     = sdkerrors.Register(ModuleName, 1106, "invalid powerup")
	ErrMoonLoopInvalidQuantity    = sdkerrors.Register(ModuleName, 1107, "invalid quantity")
	ErrMoonLoopInvalidInputs      = sdkerrors.Register(ModuleName, 1108, "invalid inputs")
	ErrMoonLoopInsuficientPower   = sdkerrors.Register(ModuleName, 1109, "insufficient power")
	ErrMoonLoopInvalidOwner       = sdkerrors.Register(ModuleName, 1110, "invalid owner")
	ErrMoonLoopContributionsExist = sdkerrors.Register(ModuleName, 1111, "contributions exist")
	ErrMoonLoopFeesExist          = sdkerrors.Register(ModuleName, 1112, "fees exist")
	ErrMoonLoopDuplicateAction    = sdkerrors.Register(ModuleName, 1113, "duplicate action")
	ErrMoonLoopRefundDuration     = sdkerrors.Register(ModuleName, 1114, "refund not available yet")
	ErrMoonLoopCollectionNotFound = sdkerrors.Register(ModuleName, 1115, "collection not found")
	ErrMoonLoopClassNotFound      = sdkerrors.Register(ModuleName, 1116, "class not found")
	ErrMoonLoopPowerupNotFound    = sdkerrors.Register(ModuleName, 1117, "powerup not found")
)
