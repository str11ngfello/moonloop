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

func TestPowerupTemplateMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.MoonloopKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreatePowerupTemplate{Creator: creator,
			CollectionIndex:      strconv.Itoa(i),
			ClassIndex:           strconv.Itoa(i),
			PowerupTemplateIndex: strconv.Itoa(i),
		}
		_, err := srv.CreatePowerupTemplate(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetPowerupTemplate(ctx,
			expected.CollectionIndex,
			expected.ClassIndex,
			expected.PowerupTemplateIndex,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestPowerupTemplateMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdatePowerupTemplate
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdatePowerupTemplate{Creator: creator,
				CollectionIndex:      strconv.Itoa(0),
				ClassIndex:           strconv.Itoa(0),
				PowerupTemplateIndex: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdatePowerupTemplate{Creator: "B",
				CollectionIndex:      strconv.Itoa(0),
				ClassIndex:           strconv.Itoa(0),
				PowerupTemplateIndex: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdatePowerupTemplate{Creator: creator,
				CollectionIndex:      strconv.Itoa(100000),
				ClassIndex:           strconv.Itoa(100000),
				PowerupTemplateIndex: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MoonloopKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreatePowerupTemplate{Creator: creator,
				CollectionIndex:      strconv.Itoa(0),
				ClassIndex:           strconv.Itoa(0),
				PowerupTemplateIndex: strconv.Itoa(0),
			}
			_, err := srv.CreatePowerupTemplate(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdatePowerupTemplate(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetPowerupTemplate(ctx,
					expected.CollectionIndex,
					expected.ClassIndex,
					expected.PowerupTemplateIndex,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestPowerupTemplateMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeletePowerupTemplate
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeletePowerupTemplate{Creator: creator,
				CollectionIndex:      strconv.Itoa(0),
				ClassIndex:           strconv.Itoa(0),
				PowerupTemplateIndex: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeletePowerupTemplate{Creator: "B",
				CollectionIndex:      strconv.Itoa(0),
				ClassIndex:           strconv.Itoa(0),
				PowerupTemplateIndex: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeletePowerupTemplate{Creator: creator,
				CollectionIndex:      strconv.Itoa(100000),
				ClassIndex:           strconv.Itoa(100000),
				PowerupTemplateIndex: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MoonloopKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreatePowerupTemplate(wctx, &types.MsgCreatePowerupTemplate{Creator: creator,
				CollectionIndex:      strconv.Itoa(0),
				ClassIndex:           strconv.Itoa(0),
				PowerupTemplateIndex: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeletePowerupTemplate(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetPowerupTemplate(ctx,
					tc.request.CollectionIndex,
					tc.request.ClassIndex,
					tc.request.PowerupTemplateIndex,
				)
				require.False(t, found)
			}
		})
	}
}
