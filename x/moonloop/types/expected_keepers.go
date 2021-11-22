package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
)

type AccountKeeper interface {
	// Methods imported from account should be defined here
}

type BankKeeper interface {
	// Methods imported from bank should be defined here
	// SubtractCoins(ctx sdk.Context, addr sdk.AccAddress, amt sdk.Coins) error
	SendCoins(ctx sdk.Context, fromAddr sdk.AccAddress, toAddr sdk.AccAddress, amt sdk.Coins) error
}
