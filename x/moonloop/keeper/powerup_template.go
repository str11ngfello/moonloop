package keeper

import (
	"github.com/cosmonaut/moonloop/x/moonloop/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetPowerupTemplate set a specific powerupTemplate in the store from its index
func (k Keeper) SetPowerupTemplate(ctx sdk.Context, powerupTemplate types.PowerupTemplate) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PowerupTemplateKeyPrefix))
	b := k.cdc.MustMarshal(&powerupTemplate)
	store.Set(types.PowerupTemplateKey(
		powerupTemplate.CollectionIndex,
		powerupTemplate.ClassIndex,
		powerupTemplate.PowerupTemplateIndex,
	), b)
}

// GetPowerupTemplate returns a powerupTemplate from its index
func (k Keeper) GetPowerupTemplate(
	ctx sdk.Context,
	collectionIndex string,
	classIndex string,
	powerupTemplateIndex string,

) (val types.PowerupTemplate, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PowerupTemplateKeyPrefix))

	b := store.Get(types.PowerupTemplateKey(
		collectionIndex,
		classIndex,
		powerupTemplateIndex,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePowerupTemplate removes a powerupTemplate from the store
func (k Keeper) RemovePowerupTemplate(
	ctx sdk.Context,
	collectionIndex string,
	classIndex string,
	powerupTemplateIndex string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PowerupTemplateKeyPrefix))
	store.Delete(types.PowerupTemplateKey(
		collectionIndex,
		classIndex,
		powerupTemplateIndex,
	))
}

// GetAllPowerupTemplate returns all powerupTemplate
func (k Keeper) GetAllPowerupTemplate(ctx sdk.Context) (list []types.PowerupTemplate) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PowerupTemplateKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.PowerupTemplate
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
