package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "github.com/str11ngfello/moonloop/testutil/keeper"
	"github.com/str11ngfello/moonloop/x/moonloop/keeper"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestInstanceOwnerMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.MoonloopKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateInstanceOwner{Creator: creator,
			Index: strconv.Itoa(i),
		}
		_, err := srv.CreateInstanceOwner(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetInstanceOwner(ctx,
			expected.Index,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestInstanceOwnerMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateInstanceOwner
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateInstanceOwner{Creator: creator,
				Index: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateInstanceOwner{Creator: "B",
				Index: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateInstanceOwner{Creator: creator,
				Index: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MoonloopKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateInstanceOwner{Creator: creator,
				Index: strconv.Itoa(0),
			}
			_, err := srv.CreateInstanceOwner(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateInstanceOwner(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetInstanceOwner(ctx,
					expected.Index,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestInstanceOwnerMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteInstanceOwner
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteInstanceOwner{Creator: creator,
				Index: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteInstanceOwner{Creator: "B",
				Index: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteInstanceOwner{Creator: creator,
				Index: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MoonloopKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateInstanceOwner(wctx, &types.MsgCreateInstanceOwner{Creator: creator,
				Index: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteInstanceOwner(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetInstanceOwner(ctx,
					tc.request.Index,
				)
				require.False(t, found)
			}
		})
	}
}
