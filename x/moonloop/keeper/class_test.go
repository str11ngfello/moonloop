package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/str11ngfello/moonloop/testutil/keeper"
	"github.com/str11ngfello/moonloop/testutil/nullify"
	"github.com/str11ngfello/moonloop/x/moonloop/keeper"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNClass(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Class {
	items := make([]types.Class, n)
	for i := range items {
		items[i].CollectionIndex = strconv.Itoa(i)
		items[i].ClassIndex = strconv.Itoa(i)

		keeper.SetClass(ctx, items[i])
	}
	return items
}

func TestClassGet(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNClass(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetClass(ctx,
			item.CollectionIndex,
			item.ClassIndex,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestClassRemove(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNClass(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveClass(ctx,
			item.CollectionIndex,
			item.ClassIndex,
		)
		_, found := keeper.GetClass(ctx,
			item.CollectionIndex,
			item.ClassIndex,
		)
		require.False(t, found)
	}
}

func TestClassGetAll(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNClass(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllClass(ctx)),
	)
}
