package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// MintStrategyKeyPrefix is the prefix to retrieve all MintStrategy
	MintStrategyKeyPrefix = "MintStrategy/value/"
)

// MintStrategyKey returns the store key to retrieve a MintStrategy from the index fields
func MintStrategyKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
