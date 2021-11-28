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

func TestClassTemplateMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.MoonloopKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateClassTemplate{Creator: creator,
			CollectionIndex:    strconv.Itoa(i),
			ClassTemplateIndex: strconv.Itoa(i),
		}
		_, err := srv.CreateClassTemplate(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetClassTemplate(ctx,
			expected.CollectionIndex,
			expected.ClassTemplateIndex,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestClassTemplateMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateClassTemplate
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateClassTemplate{Creator: creator,
				CollectionIndex:    strconv.Itoa(0),
				ClassTemplateIndex: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateClassTemplate{Creator: "B",
				CollectionIndex:    strconv.Itoa(0),
				ClassTemplateIndex: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateClassTemplate{Creator: creator,
				CollectionIndex:    strconv.Itoa(100000),
				ClassTemplateIndex: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MoonloopKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateClassTemplate{Creator: creator,
				CollectionIndex:    strconv.Itoa(0),
				ClassTemplateIndex: strconv.Itoa(0),
			}
			_, err := srv.CreateClassTemplate(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateClassTemplate(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetClassTemplate(ctx,
					expected.CollectionIndex,
					expected.ClassTemplateIndex,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestClassTemplateMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteClassTemplate
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteClassTemplate{Creator: creator,
				CollectionIndex:    strconv.Itoa(0),
				ClassTemplateIndex: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteClassTemplate{Creator: "B",
				CollectionIndex:    strconv.Itoa(0),
				ClassTemplateIndex: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteClassTemplate{Creator: creator,
				CollectionIndex:    strconv.Itoa(100000),
				ClassTemplateIndex: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MoonloopKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateClassTemplate(wctx, &types.MsgCreateClassTemplate{Creator: creator,
				CollectionIndex:    strconv.Itoa(0),
				ClassTemplateIndex: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteClassTemplate(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetClassTemplate(ctx,
					tc.request.CollectionIndex,
					tc.request.ClassTemplateIndex,
				)
				require.False(t, found)
			}
		})
	}
}
