package keeper_test

import (
	"testing"

	testkeeper "github.com/Mrfogg/lottery/testutil/keeper"
	"github.com/Mrfogg/lottery/x/lottery/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.LotteryKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
