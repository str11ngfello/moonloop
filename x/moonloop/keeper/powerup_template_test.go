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

func createNPowerupTemplate(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.PowerupTemplate {
	items := make([]types.PowerupTemplate, n)
	for i := range items {
		items[i].CollectionIndex = strconv.Itoa(i)
		items[i].ClassIndex = strconv.Itoa(i)
		items[i].PowerupTemplateIndex = strconv.Itoa(i)

		keeper.SetPowerupTemplate(ctx, items[i])
	}
	return items
}

func TestPowerupTemplateGet(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNPowerupTemplate(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetPowerupTemplate(ctx,
			item.CollectionIndex,
			item.ClassIndex,
			item.PowerupTemplateIndex,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestPowerupTemplateRemove(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNPowerupTemplate(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePowerupTemplate(ctx,
			item.CollectionIndex,
			item.ClassIndex,
			item.PowerupTemplateIndex,
		)
		_, found := keeper.GetPowerupTemplate(ctx,
			item.CollectionIndex,
			item.ClassIndex,
			item.PowerupTemplateIndex,
		)
		require.False(t, found)
	}
}

func TestPowerupTemplateGetAll(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNPowerupTemplate(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllPowerupTemplate(ctx)),
	)
}
