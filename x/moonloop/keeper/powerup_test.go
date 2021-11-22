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

func createNPowerup(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Powerup {
	items := make([]types.Powerup, n)
	for i := range items {
		items[i].CollectionIndex = strconv.Itoa(i)
		items[i].ClassIndex = strconv.Itoa(i)
		items[i].PowerupTemplateIndex = strconv.Itoa(i)
		items[i].InstanceIndex = strconv.Itoa(i)

		keeper.SetPowerup(ctx, items[i])
	}
	return items
}

func TestPowerupGet(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNPowerup(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetPowerup(ctx,
			item.CollectionIndex,
			item.ClassIndex,
			item.PowerupTemplateIndex,
			item.InstanceIndex,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestPowerupRemove(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNPowerup(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePowerup(ctx,
			item.CollectionIndex,
			item.ClassIndex,
			item.PowerupTemplateIndex,
			item.InstanceIndex,
		)
		_, found := keeper.GetPowerup(ctx,
			item.CollectionIndex,
			item.ClassIndex,
			item.PowerupTemplateIndex,
			item.InstanceIndex,
		)
		require.False(t, found)
	}
}

func TestPowerupGetAll(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNPowerup(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllPowerup(ctx)),
	)
}
