package keeper

import (
	"context"
	"github.com/Mrfogg/lottery/x/lottery/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Bid(goCtx context.Context, msg *types.MsgBid) (*types.MsgBidResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	//rand.Seed(time.Now().UnixNano())

	// TODO: Handling the message
	_ = ctx
	return &types.MsgBidResponse{IsWin: "you win!"}, nil
}
