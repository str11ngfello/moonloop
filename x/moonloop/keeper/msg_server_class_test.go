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

func TestClassMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.MoonloopKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateClass{Creator: creator,
			CollectionIndex: strconv.Itoa(i),
			ClassIndex:      strconv.Itoa(i),
		}
		_, err := srv.CreateClass(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetClass(ctx,
			expected.CollectionIndex,
			expected.ClassIndex,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestClassMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateClass
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateClass{Creator: creator,
				CollectionIndex: strconv.Itoa(0),
				ClassIndex:      strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateClass{Creator: "B",
				CollectionIndex: strconv.Itoa(0),
				ClassIndex:      strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateClass{Creator: creator,
				CollectionIndex: strconv.Itoa(100000),
				ClassIndex:      strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MoonloopKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateClass{Creator: creator,
				CollectionIndex: strconv.Itoa(0),
				ClassIndex:      strconv.Itoa(0),
			}
			_, err := srv.CreateClass(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateClass(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetClass(ctx,
					expected.CollectionIndex,
					expected.ClassIndex,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestClassMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteClass
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteClass{Creator: creator,
				CollectionIndex: strconv.Itoa(0),
				ClassIndex:      strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteClass{Creator: "B",
				CollectionIndex: strconv.Itoa(0),
				ClassIndex:      strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteClass{Creator: creator,
				CollectionIndex: strconv.Itoa(100000),
				ClassIndex:      strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MoonloopKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateClass(wctx, &types.MsgCreateClass{Creator: creator,
				CollectionIndex: strconv.Itoa(0),
				ClassIndex:      strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteClass(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetClass(ctx,
					tc.request.CollectionIndex,
					tc.request.ClassIndex,
				)
				require.False(t, found)
			}
		})
	}
}
