package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "github.com/cosmonaut/moonloop/testutil/keeper"
	"github.com/cosmonaut/moonloop/x/moonloop/keeper"
	"github.com/cosmonaut/moonloop/x/moonloop/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestContributionMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.MoonloopKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateContribution{Creator: creator,
			CollectionIndex:      strconv.Itoa(i),
			ClassIndex:           strconv.Itoa(i),
			PowerupTemplateIndex: strconv.Itoa(i),
			InstanceIndex:        strconv.Itoa(i),
		}
		_, err := srv.CreateContribution(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetContribution(ctx,
			expected.CollectionIndex,
			expected.ClassIndex,
			expected.PowerupTemplateIndex,
			expected.InstanceIndex,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestContributionMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateContribution
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateContribution{Creator: creator,
				CollectionIndex:      strconv.Itoa(0),
				ClassIndex:           strconv.Itoa(0),
				PowerupTemplateIndex: strconv.Itoa(0),
				InstanceIndex:        strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateContribution{Creator: "B",
				CollectionIndex:      strconv.Itoa(0),
				ClassIndex:           strconv.Itoa(0),
				PowerupTemplateIndex: strconv.Itoa(0),
				InstanceIndex:        strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateContribution{Creator: creator,
				CollectionIndex:      strconv.Itoa(100000),
				ClassIndex:           strconv.Itoa(100000),
				PowerupTemplateIndex: strconv.Itoa(100000),
				InstanceIndex:        strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MoonloopKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateContribution{Creator: creator,
				CollectionIndex:      strconv.Itoa(0),
				ClassIndex:           strconv.Itoa(0),
				PowerupTemplateIndex: strconv.Itoa(0),
				InstanceIndex:        strconv.Itoa(0),
			}
			_, err := srv.CreateContribution(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateContribution(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetContribution(ctx,
					expected.CollectionIndex,
					expected.ClassIndex,
					expected.PowerupTemplateIndex,
					expected.InstanceIndex,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestContributionMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteContribution
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteContribution{Creator: creator,
				CollectionIndex:      strconv.Itoa(0),
				ClassIndex:           strconv.Itoa(0),
				PowerupTemplateIndex: strconv.Itoa(0),
				InstanceIndex:        strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteContribution{Creator: "B",
				CollectionIndex:      strconv.Itoa(0),
				ClassIndex:           strconv.Itoa(0),
				PowerupTemplateIndex: strconv.Itoa(0),
				InstanceIndex:        strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteContribution{Creator: creator,
				CollectionIndex:      strconv.Itoa(100000),
				ClassIndex:           strconv.Itoa(100000),
				PowerupTemplateIndex: strconv.Itoa(100000),
				InstanceIndex:        strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MoonloopKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateContribution(wctx, &types.MsgCreateContribution{Creator: creator,
				CollectionIndex:      strconv.Itoa(0),
				ClassIndex:           strconv.Itoa(0),
				PowerupTemplateIndex: strconv.Itoa(0),
				InstanceIndex:        strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteContribution(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetContribution(ctx,
					tc.request.CollectionIndex,
					tc.request.ClassIndex,
					tc.request.PowerupTemplateIndex,
					tc.request.InstanceIndex,
				)
				require.False(t, found)
			}
		})
	}
}
