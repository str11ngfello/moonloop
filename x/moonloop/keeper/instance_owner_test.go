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

func createNInstanceOwner(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.InstanceOwner {
	items := make([]types.InstanceOwner, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetInstanceOwner(ctx, items[i])
	}
	return items
}

func TestInstanceOwnerGet(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNInstanceOwner(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetInstanceOwner(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestInstanceOwnerRemove(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNInstanceOwner(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveInstanceOwner(ctx,
			item.Index,
		)
		_, found := keeper.GetInstanceOwner(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestInstanceOwnerGetAll(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNInstanceOwner(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllInstanceOwner(ctx)),
	)
}
