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

func createNCollection(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Collection {
	items := make([]types.Collection, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetCollection(ctx, items[i])
	}
	return items
}

func TestCollectionGet(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNCollection(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCollection(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestCollectionRemove(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNCollection(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCollection(ctx,
			item.Index,
		)
		_, found := keeper.GetCollection(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestCollectionGetAll(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNCollection(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCollection(ctx)),
	)
}
