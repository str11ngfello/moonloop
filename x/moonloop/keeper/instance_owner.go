package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

// SetInstanceOwner set a specific instanceOwner in the store from its index
func (k Keeper) SetInstanceOwner(ctx sdk.Context, instanceOwner types.InstanceOwner) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InstanceOwnerKeyPrefix))
	b := k.cdc.MustMarshal(&instanceOwner)
	store.Set(types.InstanceOwnerKey(
		instanceOwner.Index,
	), b)
}

// GetInstanceOwner returns a instanceOwner from its index
func (k Keeper) GetInstanceOwner(
	ctx sdk.Context,
	index string,

) (val types.InstanceOwner, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InstanceOwnerKeyPrefix))

	b := store.Get(types.InstanceOwnerKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveInstanceOwner removes a instanceOwner from the store
func (k Keeper) RemoveInstanceOwner(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InstanceOwnerKeyPrefix))
	store.Delete(types.InstanceOwnerKey(
		index,
	))
}

// GetAllInstanceOwner returns all instanceOwner
func (k Keeper) GetAllInstanceOwner(ctx sdk.Context) (list []types.InstanceOwner) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InstanceOwnerKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.InstanceOwner
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
