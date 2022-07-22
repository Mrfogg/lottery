package keeper

import (
	"github.com/Mrfogg/lottery/x/lottery/types"
)

var _ types.QueryServer = Keeper{}
