package keeper

import (
	"context"

	"github.com/Mrfogg/lottery/x/lottery/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GameInfoAll(c context.Context, req *types.QueryAllGameInfoRequest) (*types.QueryAllGameInfoResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var gameInfos []types.GameInfo
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	gameInfoStore := prefix.NewStore(store, types.KeyPrefix(types.GameInfoKeyPrefix))

	pageRes, err := query.Paginate(gameInfoStore, req.Pagination, func(key []byte, value []byte) error {
		var gameInfo types.GameInfo
		if err := k.cdc.Unmarshal(value, &gameInfo); err != nil {
			return err
		}

		gameInfos = append(gameInfos, gameInfo)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllGameInfoResponse{GameInfo: gameInfos, Pagination: pageRes}, nil
}

func (k Keeper) GameInfo(c context.Context, req *types.QueryGetGameInfoRequest) (*types.QueryGetGameInfoResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetGameInfo(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetGameInfoResponse{GameInfo: val}, nil
}
