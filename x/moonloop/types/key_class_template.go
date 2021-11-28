package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ClassTemplateKeyPrefix is the prefix to retrieve all ClassTemplate
	ClassTemplateKeyPrefix = "ClassTemplate/value/"
)

// ClassTemplateKey returns the store key to retrieve a ClassTemplate from the index fields
func ClassTemplateKey(
	collectionIndex string,
	classTemplateIndex string,
) []byte {
	var key []byte

	collectionIndexBytes := []byte(collectionIndex)
	key = append(key, collectionIndexBytes...)
	key = append(key, []byte("/")...)

	classTemplateIndexBytes := []byte(classTemplateIndex)
	key = append(key, classTemplateIndexBytes...)
	key = append(key, []byte("/")...)

	return key
}
