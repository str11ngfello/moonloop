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

func TestPowerupMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.MoonloopKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreatePowerup{Creator: creator,
			CollectionIndex:      strconv.Itoa(i),
			ClassIndex:           strconv.Itoa(i),
			PowerupTemplateIndex: strconv.Itoa(i),
			InstanceIndex:        strconv.Itoa(i),
		}
		_, err := srv.CreatePowerup(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetPowerup(ctx,
			expected.CollectionIndex,
			expected.ClassIndex,
			expected.PowerupTemplateIndex,
			expected.InstanceIndex,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestPowerupMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdatePowerup
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdatePowerup{Creator: creator,
				CollectionIndex:      strconv.Itoa(0),
				ClassIndex:           strconv.Itoa(0),
				PowerupTemplateIndex: strconv.Itoa(0),
				InstanceIndex:        strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdatePowerup{Creator: "B",
				CollectionIndex:      strconv.Itoa(0),
				ClassIndex:           strconv.Itoa(0),
				PowerupTemplateIndex: strconv.Itoa(0),
				InstanceIndex:        strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdatePowerup{Creator: creator,
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
			expected := &types.MsgCreatePowerup{Creator: creator,
				CollectionIndex:      strconv.Itoa(0),
				ClassIndex:           strconv.Itoa(0),
				PowerupTemplateIndex: strconv.Itoa(0),
				InstanceIndex:        strconv.Itoa(0),
			}
			_, err := srv.CreatePowerup(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdatePowerup(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetPowerup(ctx,
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

func TestPowerupMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeletePowerup
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeletePowerup{Creator: creator,
				CollectionIndex:      strconv.Itoa(0),
				ClassIndex:           strconv.Itoa(0),
				PowerupTemplateIndex: strconv.Itoa(0),
				InstanceIndex:        strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeletePowerup{Creator: "B",
				CollectionIndex:      strconv.Itoa(0),
				ClassIndex:           strconv.Itoa(0),
				PowerupTemplateIndex: strconv.Itoa(0),
				InstanceIndex:        strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeletePowerup{Creator: creator,
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

			_, err := srv.CreatePowerup(wctx, &types.MsgCreatePowerup{Creator: creator,
				CollectionIndex:      strconv.Itoa(0),
				ClassIndex:           strconv.Itoa(0),
				PowerupTemplateIndex: strconv.Itoa(0),
				InstanceIndex:        strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeletePowerup(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetPowerup(ctx,
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
