package lottery_test

import (
	"testing"

	keepertest "github.com/Mrfogg/lottery/testutil/keeper"
	"github.com/Mrfogg/lottery/testutil/nullify"
	"github.com/Mrfogg/lottery/x/lottery"
	"github.com/Mrfogg/lottery/x/lottery/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		GameInfoList: []types.GameInfo{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.LotteryKeeper(t)
	lottery.InitGenesis(ctx, *k, genesisState)
	got := lottery.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.GameInfoList, got.GameInfoList)
	// this line is used by starport scaffolding # genesis/test/assert
}
