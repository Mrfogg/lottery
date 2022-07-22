package keeper

import (
	"github.com/Mrfogg/lottery/x/lottery/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetGameInfo set a specific gameInfo in the store from its index
func (k Keeper) SetGameInfo(ctx sdk.Context, gameInfo types.GameInfo) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GameInfoKeyPrefix))
	b := k.cdc.MustMarshal(&gameInfo)
	store.Set(types.GameInfoKey(
		gameInfo.Index,
	), b)
}

// GetGameInfo returns a gameInfo from its index
func (k Keeper) GetGameInfo(
	ctx sdk.Context,
	index string,

) (val types.GameInfo, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GameInfoKeyPrefix))

	b := store.Get(types.GameInfoKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveGameInfo removes a gameInfo from the store
func (k Keeper) RemoveGameInfo(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GameInfoKeyPrefix))
	store.Delete(types.GameInfoKey(
		index,
	))
}

// GetAllGameInfo returns all gameInfo
func (k Keeper) GetAllGameInfo(ctx sdk.Context) (list []types.GameInfo) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GameInfoKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.GameInfo
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
