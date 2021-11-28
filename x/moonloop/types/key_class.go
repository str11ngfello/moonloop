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
) []byte {
	var key []byte

	collectionIndexBytes := []byte(collectionIndex)
	key = append(key, collectionIndexBytes...)
	key = append(key, []byte("/")...)

	classIndexBytes := []byte(classTemplateIndex)
	key = append(key, classIndexBytes...)
	key = append(key, []byte("/")...)

	return key
}
