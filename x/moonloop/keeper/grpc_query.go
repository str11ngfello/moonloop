package keeper

import (
	"github.com/cosmonaut/moonloop/x/moonloop/types"
)

var _ types.QueryServer = Keeper{}
