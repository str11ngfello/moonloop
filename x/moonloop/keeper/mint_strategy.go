package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

// SetMintStrategy set a specific mintStrategy in the store from its index
func (k Keeper) SetMintStrategy(ctx sdk.Context, mintStrategy types.MintStrategy) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MintStrategyKeyPrefix))
	b := k.cdc.MustMarshal(&mintStrategy)
	store.Set(types.MintStrategyKey(
		mintStrategy.Index,
	), b)
}

// GetMintStrategy returns a mintStrategy from its index
func (k Keeper) GetMintStrategy(
	ctx sdk.Context,
	index string,

) (val types.MintStrategy, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MintStrategyKeyPrefix))

	b := store.Get(types.MintStrategyKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMintStrategy removes a mintStrategy from the store
func (k Keeper) RemoveMintStrategy(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MintStrategyKeyPrefix))
	store.Delete(types.MintStrategyKey(
		index,
	))
}

// GetAllMintStrategy returns all mintStrategy
func (k Keeper) GetAllMintStrategy(ctx sdk.Context) (list []types.MintStrategy) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MintStrategyKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.MintStrategy
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
