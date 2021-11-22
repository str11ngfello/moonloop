package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ContributionKeyPrefix is the prefix to retrieve all Contribution
	ContributionKeyPrefix = "Contribution/value/"
)

// ContributionKey returns the store key to retrieve a Contribution from the index fields
func ContributionKey(
	collectionIndex string,
	classIndex string,
	powerupTemplateIndex string,
	instanceIndex string,
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

	instanceIndexBytes := []byte(instanceIndex)
	key = append(key, instanceIndexBytes...)
	key = append(key, []byte("/")...)

	return key
}
