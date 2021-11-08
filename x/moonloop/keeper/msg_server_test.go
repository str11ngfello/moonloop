package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/cosmonaut/moonloop/testutil/keeper"
	"github.com/cosmonaut/moonloop/x/moonloop/keeper"
	"github.com/cosmonaut/moonloop/x/moonloop/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.MoonloopKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
