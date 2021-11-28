package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ClassKeyPrefix is the prefix to retrieve all Class
	ClassKeyPrefix = "Class/value/"
)

// ClassKey returns the store key to retrieve a Class from the index fields
func ClassKey(
	collectionIndex string,
	classTemplateIndex string,
	instanceIndex string,
) []byte {
	var key []byte

	collectionIndexBytes := []byte(collectionIndex)
	key = append(key, collectionIndexBytes...)
	key = append(key, []byte("/")...)

	classTemplateIndexBytes := []byte(classTemplateIndex)
	key = append(key, classTemplateIndexBytes...)
	key = append(key, []byte("/")...)

	instanceIndexBytes := []byte(instanceIndex)
	key = append(key, instanceIndexBytes...)
	key = append(key, []byte("/")...)

	return key
}
