package moonloop

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/str11ngfello/moonloop/x/moonloop/keeper"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the collection
	for _, elem := range genState.CollectionList {
		k.SetCollection(ctx, elem)
	}
	// Set all the class
	for _, elem := range genState.ClassList {
		k.SetClass(ctx, elem)
	}
	// Set all the mintStrategy
	for _, elem := range genState.MintStrategyList {
		k.SetMintStrategy(ctx, elem)
	}
	// Set all the contribution
	for _, elem := range genState.ContributionList {
		k.SetContribution(ctx, elem)
	}
	// Set all the powerupTemplate
	for _, elem := range genState.PowerupTemplateList {
		k.SetPowerupTemplate(ctx, elem)
	}
	// Set all the powerup
	for _, elem := range genState.PowerupList {
		k.SetPowerup(ctx, elem)
	}
	// Set all the classTemplate
	for _, elem := range genState.ClassTemplateList {
		k.SetClassTemplate(ctx, elem)
	}
	// Set all the collectionOwner
	for _, elem := range genState.CollectionOwnerList {
		k.SetCollectionOwner(ctx, elem)
	}
	// Set all the instanceOwner
	for _, elem := range genState.InstanceOwnerList {
		k.SetInstanceOwner(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	genesis.CollectionList = k.GetAllCollection(ctx)
	genesis.ClassList = k.GetAllClass(ctx)
	genesis.MintStrategyList = k.GetAllMintStrategy(ctx)
	genesis.ContributionList = k.GetAllContribution(ctx)
	genesis.PowerupTemplateList = k.GetAllPowerupTemplate(ctx)
	genesis.PowerupList = k.GetAllPowerup(ctx)
	genesis.ClassTemplateList = k.GetAllClassTemplate(ctx)
	genesis.CollectionOwnerList = k.GetAllCollectionOwner(ctx)
	genesis.InstanceOwnerList = k.GetAllInstanceOwner(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
