package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// GameInfoKeyPrefix is the prefix to retrieve all GameInfo
	GameInfoKeyPrefix = "GameInfo/value/"
)

// GameInfoKey returns the store key to retrieve a GameInfo from the index fields
func GameInfoKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
