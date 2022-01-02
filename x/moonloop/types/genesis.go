package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		CollectionList:      []Collection{},
		ClassList:           []Class{},
		MintStrategyList:    []MintStrategy{},
		ContributionList:    []Contribution{},
		PowerupTemplateList: []PowerupTemplate{},
		PowerupList:         []Powerup{},
		ClassTemplateList:   []ClassTemplate{},
		CollectionOwnerList: []CollectionOwner{},
		InstanceOwnerList:   []InstanceOwner{},
		// this line is used by starport scaffolding # genesis/types/default
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in collection
	collectionIndexMap := make(map[string]struct{})

	for _, elem := range gs.CollectionList {
		index := string(CollectionKey(elem.Index))
		if _, ok := collectionIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for collection")
		}
		collectionIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in class
	classIndexMap := make(map[string]struct{})

	for _, elem := range gs.ClassList {
		index := string(ClassKey(elem.CollectionIndex, elem.ClassTemplateIndex, elem.InstanceIndex))
		if _, ok := classIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for class")
		}
		classIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in mintStrategy
	mintStrategyIndexMap := make(map[string]struct{})

	for _, elem := range gs.MintStrategyList {
		index := string(MintStrategyKey(elem.Index))
		if _, ok := mintStrategyIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for mintStrategy")
		}
		mintStrategyIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in contribution
	contributionIndexMap := make(map[string]struct{})

	for _, elem := range gs.ContributionList {
		index := string(ContributionKey(elem.CollectionIndex, elem.ClassTemplateIndex, elem.PowerupTemplateIndex, elem.InstanceIndex))
		if _, ok := contributionIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for contribution")
		}
		contributionIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in powerupTemplate
	powerupTemplateIndexMap := make(map[string]struct{})

	for _, elem := range gs.PowerupTemplateList {
		index := string(PowerupTemplateKey(elem.CollectionIndex, elem.ClassTemplateIndex, elem.PowerupTemplateIndex))
		if _, ok := powerupTemplateIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for powerupTemplate")
		}
		powerupTemplateIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in powerup
	powerupIndexMap := make(map[string]struct{})

	for _, elem := range gs.PowerupList {
		index := string(PowerupKey(elem.CollectionIndex, elem.ClassTemplateIndex, elem.PowerupTemplateIndex, elem.InstanceIndex))
		if _, ok := powerupIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for powerup")
		}
		powerupIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in classTemplate
	classTemplateIndexMap := make(map[string]struct{})

	for _, elem := range gs.ClassTemplateList {
		index := string(ClassTemplateKey(elem.CollectionIndex, elem.ClassTemplateIndex))
		if _, ok := classTemplateIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for classTemplate")
		}
		classTemplateIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in collectionOwner
	collectionOwnerIndexMap := make(map[string]struct{})

	for _, elem := range gs.CollectionOwnerList {
		index := string(CollectionOwnerKey(elem.Index))
		if _, ok := collectionOwnerIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for collectionOwner")
		}
		collectionOwnerIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in instanceOwner
	instanceOwnerIndexMap := make(map[string]struct{})

	for _, elem := range gs.InstanceOwnerList {
		index := string(InstanceOwnerKey(elem.Index))
		if _, ok := instanceOwnerIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for instanceOwner")
		}
		instanceOwnerIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return nil
}
