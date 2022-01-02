package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// InstanceOwnerKeyPrefix is the prefix to retrieve all InstanceOwner
	InstanceOwnerKeyPrefix = "InstanceOwner/value/"
)

// InstanceOwnerKey returns the store key to retrieve a InstanceOwner from the index fields
func InstanceOwnerKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
