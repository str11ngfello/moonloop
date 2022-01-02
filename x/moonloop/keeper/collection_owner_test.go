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

func createNCollectionOwner(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.CollectionOwner {
	items := make([]types.CollectionOwner, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetCollectionOwner(ctx, items[i])
	}
	return items
}

func TestCollectionOwnerGet(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNCollectionOwner(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCollectionOwner(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestCollectionOwnerRemove(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNCollectionOwner(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCollectionOwner(ctx,
			item.Index,
		)
		_, found := keeper.GetCollectionOwner(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestCollectionOwnerGetAll(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNCollectionOwner(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCollectionOwner(ctx)),
	)
}
