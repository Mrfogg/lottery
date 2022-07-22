package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/Mrfogg/lottery/testutil/keeper"
	"github.com/Mrfogg/lottery/x/lottery/keeper"
	"github.com/Mrfogg/lottery/x/lottery/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.LotteryKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
