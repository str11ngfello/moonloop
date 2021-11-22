package keeper_test

import (
	"strconv"
	"testing"

	keepertest "github.com/cosmonaut/moonloop/testutil/keeper"
	"github.com/cosmonaut/moonloop/testutil/nullify"
	"github.com/cosmonaut/moonloop/x/moonloop/keeper"
	"github.com/cosmonaut/moonloop/x/moonloop/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNMintStrategy(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.MintStrategy {
	items := make([]types.MintStrategy, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetMintStrategy(ctx, items[i])
	}
	return items
}

func TestMintStrategyGet(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNMintStrategy(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetMintStrategy(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestMintStrategyRemove(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNMintStrategy(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveMintStrategy(ctx,
			item.Index,
		)
		_, found := keeper.GetMintStrategy(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestMintStrategyGetAll(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNMintStrategy(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllMintStrategy(ctx)),
	)
}
