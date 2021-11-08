package moonloop_test

import (
	"testing"

	keepertest "github.com/cosmonaut/moonloop/testutil/keeper"
	"github.com/cosmonaut/moonloop/testutil/nullify"
	"github.com/cosmonaut/moonloop/x/moonloop"
	"github.com/cosmonaut/moonloop/x/moonloop/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MoonloopKeeper(t)
	moonloop.InitGenesis(ctx, *k, genesisState)
	got := moonloop.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
