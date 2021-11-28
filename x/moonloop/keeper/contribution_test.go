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

func createNContribution(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Contribution {
	items := make([]types.Contribution, n)
	for i := range items {
		items[i].CollectionIndex = strconv.Itoa(i)
		items[i].ClassTemplateIndex = strconv.Itoa(i)
		items[i].PowerupTemplateIndex = strconv.Itoa(i)
		items[i].InstanceIndex = strconv.Itoa(i)

		keeper.SetContribution(ctx, items[i])
	}
	return items
}

func TestContributionGet(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNContribution(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetContribution(ctx,
			item.CollectionIndex,
			item.ClassTemplateIndex,
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
func TestContributionRemove(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNContribution(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveContribution(ctx,
			item.CollectionIndex,
			item.ClassTemplateIndex,
			item.PowerupTemplateIndex,
			item.InstanceIndex,
		)
		_, found := keeper.GetContribution(ctx,
			item.CollectionIndex,
			item.ClassTemplateIndex,
			item.PowerupTemplateIndex,
			item.InstanceIndex,
		)
		require.False(t, found)
	}
}

func TestContributionGetAll(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNContribution(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllContribution(ctx)),
	)
}
