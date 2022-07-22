package keeper_test

import (
	"strconv"
	"testing"

	keepertest "github.com/Mrfogg/lottery/testutil/keeper"
	"github.com/Mrfogg/lottery/testutil/nullify"
	"github.com/Mrfogg/lottery/x/lottery/keeper"
	"github.com/Mrfogg/lottery/x/lottery/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNGameInfo(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.GameInfo {
	items := make([]types.GameInfo, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetGameInfo(ctx, items[i])
	}
	return items
}

func TestGameInfoGet(t *testing.T) {
	keeper, ctx := keepertest.LotteryKeeper(t)
	items := createNGameInfo(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetGameInfo(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestGameInfoRemove(t *testing.T) {
	keeper, ctx := keepertest.LotteryKeeper(t)
	items := createNGameInfo(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveGameInfo(ctx,
			item.Index,
		)
		_, found := keeper.GetGameInfo(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestGameInfoGetAll(t *testing.T) {
	keeper, ctx := keepertest.LotteryKeeper(t)
	items := createNGameInfo(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllGameInfo(ctx)),
	)
}
