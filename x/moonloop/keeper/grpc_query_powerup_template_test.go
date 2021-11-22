package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/cosmonaut/moonloop/testutil/keeper"
	"github.com/cosmonaut/moonloop/testutil/nullify"
	"github.com/cosmonaut/moonloop/x/moonloop/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestPowerupTemplateQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNPowerupTemplate(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetPowerupTemplateRequest
		response *types.QueryGetPowerupTemplateResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetPowerupTemplateRequest{
				CollectionIndex:      msgs[0].CollectionIndex,
				ClassIndex:           msgs[0].ClassIndex,
				PowerupTemplateIndex: msgs[0].PowerupTemplateIndex,
			},
			response: &types.QueryGetPowerupTemplateResponse{PowerupTemplate: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetPowerupTemplateRequest{
				CollectionIndex:      msgs[1].CollectionIndex,
				ClassIndex:           msgs[1].ClassIndex,
				PowerupTemplateIndex: msgs[1].PowerupTemplateIndex,
			},
			response: &types.QueryGetPowerupTemplateResponse{PowerupTemplate: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetPowerupTemplateRequest{
				CollectionIndex:      strconv.Itoa(100000),
				ClassIndex:           strconv.Itoa(100000),
				PowerupTemplateIndex: strconv.Itoa(100000),
			},
			err: status.Error(codes.InvalidArgument, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.PowerupTemplate(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestPowerupTemplateQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNPowerupTemplate(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllPowerupTemplateRequest {
		return &types.QueryAllPowerupTemplateRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.PowerupTemplateAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.PowerupTemplate), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.PowerupTemplate),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.PowerupTemplateAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.PowerupTemplate), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.PowerupTemplate),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.PowerupTemplateAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.PowerupTemplate),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.PowerupTemplateAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
