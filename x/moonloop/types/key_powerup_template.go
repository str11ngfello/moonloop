package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// PowerupTemplateKeyPrefix is the prefix to retrieve all PowerupTemplate
	PowerupTemplateKeyPrefix = "PowerupTemplate/value/"
)

// PowerupTemplateKey returns the store key to retrieve a PowerupTemplate from the index fields
func PowerupTemplateKey(
	collectionIndex string,
	classIndex string,
	powerupTemplateIndex string,
) []byte {
	var key []byte

	collectionIndexBytes := []byte(collectionIndex)
	key = append(key, collectionIndexBytes...)
	key = append(key, []byte("/")...)

	classIndexBytes := []byte(classIndex)
	key = append(key, classIndexBytes...)
	key = append(key, []byte("/")...)

	powerupTemplateIndexBytes := []byte(powerupTemplateIndex)
	key = append(key, powerupTemplateIndexBytes...)
	key = append(key, []byte("/")...)

	return key
}
