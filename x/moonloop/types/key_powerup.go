package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// PowerupKeyPrefix is the prefix to retrieve all Powerup
	PowerupKeyPrefix = "Powerup/value/"
)

// PowerupKey returns the store key to retrieve a Powerup from the index fields
func PowerupKey(
	collectionIndex string,
	classTemplateIndex string,
	powerupTemplateIndex string,
	instanceIndex string,
) []byte {
	var key []byte

	collectionIndexBytes := []byte(collectionIndex)
	key = append(key, collectionIndexBytes...)
	key = append(key, []byte("/")...)

	classIndexBytes := []byte(classTemplateIndex)
	key = append(key, classIndexBytes...)
	key = append(key, []byte("/")...)

	powerupTemplateIndexBytes := []byte(powerupTemplateIndex)
	key = append(key, powerupTemplateIndexBytes...)
	key = append(key, []byte("/")...)

	instanceIndexBytes := []byte(instanceIndex)
	key = append(key, instanceIndexBytes...)
	key = append(key, []byte("/")...)

	return key
}
