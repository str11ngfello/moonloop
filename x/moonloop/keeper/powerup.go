package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

// SetPowerup set a specific powerup in the store from its index
func (k Keeper) SetPowerup(ctx sdk.Context, powerup types.Powerup) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PowerupKeyPrefix))
	b := k.cdc.MustMarshal(&powerup)
	store.Set(types.PowerupKey(
		powerup.CollectionIndex,
		powerup.ClassTemplateIndex,
		powerup.PowerupTemplateIndex,
		powerup.InstanceIndex,
	), b)
}

// GetPowerup returns a powerup from its index
func (k Keeper) GetPowerup(
	ctx sdk.Context,
	collectionIndex string,
	classTemplateIndex string,
	powerupTemplateIndex string,
	instanceIndex string,

) (val types.Powerup, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PowerupKeyPrefix))

	b := store.Get(types.PowerupKey(
		collectionIndex,
		classTemplateIndex,
		powerupTemplateIndex,
		instanceIndex,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePowerup removes a powerup from the store
func (k Keeper) RemovePowerup(
	ctx sdk.Context,
	collectionIndex string,
	classTemplateIndex string,
	powerupTemplateIndex string,
	instanceIndex string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PowerupKeyPrefix))
	store.Delete(types.PowerupKey(
		collectionIndex,
		classTemplateIndex,
		powerupTemplateIndex,
		instanceIndex,
	))
}

// GetAllPowerup returns all powerup
func (k Keeper) GetAllPowerup(ctx sdk.Context) (list []types.Powerup) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PowerupKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Powerup
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
