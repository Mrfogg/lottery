package lottery

import (
	"github.com/Mrfogg/lottery/x/lottery/keeper"
	"github.com/Mrfogg/lottery/x/lottery/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the gameInfo
	for _, elem := range genState.GameInfoList {
		k.SetGameInfo(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.GameInfoList = k.GetAllGameInfo(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
