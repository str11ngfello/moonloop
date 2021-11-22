package moonloop_test

import (
	"testing"

	keepertest "github.com/str11ngfello/moonloop/testutil/keeper"
	"github.com/str11ngfello/moonloop/testutil/nullify"
	"github.com/str11ngfello/moonloop/x/moonloop"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{

		CollectionList: []types.Collection{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		ClassList: []types.Class{
			{
				CollectionIndex: "0",
				ClassIndex:      "0",
			},
			{
				CollectionIndex: "1",
				ClassIndex:      "1",
			},
		},
		MintStrategyList: []types.MintStrategy{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		ContributionList: []types.Contribution{
			{
				CollectionIndex:      "0",
				ClassIndex:           "0",
				PowerupTemplateIndex: "0",
				InstanceIndex:        "0",
			},
			{
				CollectionIndex:      "1",
				ClassIndex:           "1",
				PowerupTemplateIndex: "1",
				InstanceIndex:        "1",
			},
		},
		PowerupTemplateList: []types.PowerupTemplate{
			{
				CollectionIndex:      "0",
				ClassIndex:           "0",
				PowerupTemplateIndex: "0",
			},
			{
				CollectionIndex:      "1",
				ClassIndex:           "1",
				PowerupTemplateIndex: "1",
			},
		},
		PowerupList: []types.Powerup{
			{
				CollectionIndex:      "0",
				ClassIndex:           "0",
				PowerupTemplateIndex: "0",
				InstanceIndex:        "0",
			},
			{
				CollectionIndex:      "1",
				ClassIndex:           "1",
				PowerupTemplateIndex: "1",
				InstanceIndex:        "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MoonloopKeeper(t)
	moonloop.InitGenesis(ctx, *k, genesisState)
	got := moonloop.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.CollectionList, got.CollectionList)
	require.ElementsMatch(t, genesisState.ClassList, got.ClassList)
	require.ElementsMatch(t, genesisState.MintStrategyList, got.MintStrategyList)
	require.ElementsMatch(t, genesisState.ContributionList, got.ContributionList)
	require.ElementsMatch(t, genesisState.PowerupTemplateList, got.PowerupTemplateList)
	require.ElementsMatch(t, genesisState.PowerupList, got.PowerupList)
	// this line is used by starport scaffolding # genesis/test/assert
}
