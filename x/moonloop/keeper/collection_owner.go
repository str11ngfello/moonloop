package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

// SetCollectionOwner set a specific collectionOwner in the store from its index
func (k Keeper) SetCollectionOwner(ctx sdk.Context, collectionOwner types.CollectionOwner) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CollectionOwnerKeyPrefix))
	b := k.cdc.MustMarshal(&collectionOwner)
	store.Set(types.CollectionOwnerKey(
		collectionOwner.Index,
	), b)
}

// GetCollectionOwner returns a collectionOwner from its index
func (k Keeper) GetCollectionOwner(
	ctx sdk.Context,
	index string,

) (val types.CollectionOwner, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CollectionOwnerKeyPrefix))

	b := store.Get(types.CollectionOwnerKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCollectionOwner removes a collectionOwner from the store
func (k Keeper) RemoveCollectionOwner(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CollectionOwnerKeyPrefix))
	store.Delete(types.CollectionOwnerKey(
		index,
	))
}

// GetAllCollectionOwner returns all collectionOwner
func (k Keeper) GetAllCollectionOwner(ctx sdk.Context) (list []types.CollectionOwner) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CollectionOwnerKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.CollectionOwner
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
