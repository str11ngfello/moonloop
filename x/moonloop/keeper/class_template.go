package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

// SetClassTemplate set a specific classTemplate in the store from its index
func (k Keeper) SetClassTemplate(ctx sdk.Context, classTemplate types.ClassTemplate) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ClassTemplateKeyPrefix))
	b := k.cdc.MustMarshal(&classTemplate)
	store.Set(types.ClassTemplateKey(
		classTemplate.CollectionIndex,
		classTemplate.ClassTemplateIndex,
	), b)
}

// GetClassTemplate returns a classTemplate from its index
func (k Keeper) GetClassTemplate(
	ctx sdk.Context,
	collectionIndex string,
	classTemplateIndex string,

) (val types.ClassTemplate, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ClassTemplateKeyPrefix))

	b := store.Get(types.ClassTemplateKey(
		collectionIndex,
		classTemplateIndex,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveClassTemplate removes a classTemplate from the store
func (k Keeper) RemoveClassTemplate(
	ctx sdk.Context,
	collectionIndex string,
	classTemplateIndex string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ClassTemplateKeyPrefix))
	store.Delete(types.ClassTemplateKey(
		collectionIndex,
		classTemplateIndex,
	))
}

// GetAllClassTemplate returns all classTemplate
func (k Keeper) GetAllClassTemplate(ctx sdk.Context) (list []types.ClassTemplate) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ClassTemplateKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ClassTemplate
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
