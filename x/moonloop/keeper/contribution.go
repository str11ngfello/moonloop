package keeper

import (
	"github.com/cosmonaut/moonloop/x/moonloop/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetContribution set a specific contribution in the store from its index
func (k Keeper) SetContribution(ctx sdk.Context, contribution types.Contribution) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ContributionKeyPrefix))
	b := k.cdc.MustMarshal(&contribution)
	store.Set(types.ContributionKey(
		contribution.CollectionIndex,
		contribution.ClassIndex,
		contribution.PowerupTemplateIndex,
		contribution.InstanceIndex,
	), b)
}

// GetContribution returns a contribution from its index
func (k Keeper) GetContribution(
	ctx sdk.Context,
	collectionIndex string,
	classIndex string,
	powerupTemplateIndex string,
	instanceIndex string,

) (val types.Contribution, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ContributionKeyPrefix))

	b := store.Get(types.ContributionKey(
		collectionIndex,
		classIndex,
		powerupTemplateIndex,
		instanceIndex,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveContribution removes a contribution from the store
func (k Keeper) RemoveContribution(
	ctx sdk.Context,
	collectionIndex string,
	classIndex string,
	powerupTemplateIndex string,
	instanceIndex string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ContributionKeyPrefix))
	store.Delete(types.ContributionKey(
		collectionIndex,
		classIndex,
		powerupTemplateIndex,
		instanceIndex,
	))
}

// GetAllContribution returns all contribution
func (k Keeper) GetAllContribution(ctx sdk.Context) (list []types.Contribution) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ContributionKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Contribution
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
