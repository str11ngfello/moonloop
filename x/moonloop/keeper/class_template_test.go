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

func createNClassTemplate(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.ClassTemplate {
	items := make([]types.ClassTemplate, n)
	for i := range items {
		items[i].CollectionIndex = strconv.Itoa(i)
		items[i].ClassTemplateIndex = strconv.Itoa(i)

		keeper.SetClassTemplate(ctx, items[i])
	}
	return items
}

func TestClassTemplateGet(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNClassTemplate(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetClassTemplate(ctx,
			item.CollectionIndex,
			item.ClassTemplateIndex,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestClassTemplateRemove(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNClassTemplate(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveClassTemplate(ctx,
			item.CollectionIndex,
			item.ClassTemplateIndex,
		)
		_, found := keeper.GetClassTemplate(ctx,
			item.CollectionIndex,
			item.ClassTemplateIndex,
		)
		require.False(t, found)
	}
}

func TestClassTemplateGetAll(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	items := createNClassTemplate(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllClassTemplate(ctx)),
	)
}
