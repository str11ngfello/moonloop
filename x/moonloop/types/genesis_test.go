package types_test

import (
	"testing"

	"github.com/str11ngfello/moonloop/x/moonloop/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				CollectionList: []types.Collection{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				ClassList: []types.Class{
					{
						CollectionIndex:    "0",
						ClassTemplateIndex: "0",
					},
					{
						CollectionIndex:    "1",
						ClassTemplateIndex: "1",
					},
				},
				MintStrategyList: []types.MintStrategy{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				ContributionList: []types.Contribution{
					{
						CollectionIndex:      "0",
						ClassTemplateIndex:   "0",
						PowerupTemplateIndex: "0",
						InstanceIndex:        "0",
					},
					{
						CollectionIndex:      "1",
						ClassTemplateIndex:   "1",
						PowerupTemplateIndex: "1",
						InstanceIndex:        "1",
					},
				},
				PowerupTemplateList: []types.PowerupTemplate{
					{
						CollectionIndex:      "0",
						ClassTemplateIndex:   "0",
						PowerupTemplateIndex: "0",
					},
					{
						CollectionIndex:      "1",
						ClassTemplateIndex:   "1",
						PowerupTemplateIndex: "1",
					},
				},
				PowerupList: []types.Powerup{
					{
						CollectionIndex:      "0",
						ClassTemplateIndex:   "0",
						PowerupTemplateIndex: "0",
						InstanceIndex:        "0",
					},
					{
						CollectionIndex:      "1",
						ClassTemplateIndex:   "1",
						PowerupTemplateIndex: "1",
						InstanceIndex:        "1",
					},
				},
				ClassTemplateList: []types.ClassTemplate{
					{
						CollectionIndex:    "0",
						ClassTemplateIndex: "0",
					},
					{
						CollectionIndex:    "1",
						ClassTemplateIndex: "1",
					},
				},
				CollectionOwnerList: []types.CollectionOwner{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				InstanceOwnerList: []types.InstanceOwner{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated collection",
			genState: &types.GenesisState{
				CollectionList: []types.Collection{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated class",
			genState: &types.GenesisState{
				ClassList: []types.Class{
					{
						CollectionIndex:    "0",
						ClassTemplateIndex: "0",
					},
					{
						CollectionIndex:    "0",
						ClassTemplateIndex: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated mintStrategy",
			genState: &types.GenesisState{
				MintStrategyList: []types.MintStrategy{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated contribution",
			genState: &types.GenesisState{
				ContributionList: []types.Contribution{
					{
						CollectionIndex:      "0",
						ClassTemplateIndex:   "0",
						PowerupTemplateIndex: "0",
						InstanceIndex:        "0",
					},
					{
						CollectionIndex:      "0",
						ClassTemplateIndex:   "0",
						PowerupTemplateIndex: "0",
						InstanceIndex:        "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated powerupTemplate",
			genState: &types.GenesisState{
				PowerupTemplateList: []types.PowerupTemplate{
					{
						CollectionIndex:      "0",
						ClassTemplateIndex:   "0",
						PowerupTemplateIndex: "0",
					},
					{
						CollectionIndex:      "0",
						ClassTemplateIndex:   "0",
						PowerupTemplateIndex: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated powerup",
			genState: &types.GenesisState{
				PowerupList: []types.Powerup{
					{
						CollectionIndex:      "0",
						ClassTemplateIndex:   "0",
						PowerupTemplateIndex: "0",
						InstanceIndex:        "0",
					},
					{
						CollectionIndex:      "0",
						ClassTemplateIndex:   "0",
						PowerupTemplateIndex: "0",
						InstanceIndex:        "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated classTemplate",
			genState: &types.GenesisState{
				ClassTemplateList: []types.ClassTemplate{
					{
						CollectionIndex:    "0",
						ClassTemplateIndex: "0",
					},
					{
						CollectionIndex:    "0",
						ClassTemplateIndex: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated collectionOwner",
			genState: &types.GenesisState{
				CollectionOwnerList: []types.CollectionOwner{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated instanceOwner",
			genState: &types.GenesisState{
				InstanceOwnerList: []types.InstanceOwner{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
