package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CollectionOwnerKeyPrefix is the prefix to retrieve all CollectionOwner
	CollectionOwnerKeyPrefix = "CollectionOwner/value/"
)

// CollectionOwnerKey returns the store key to retrieve a CollectionOwner from the index fields
func CollectionOwnerKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
