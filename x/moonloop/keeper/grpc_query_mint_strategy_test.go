package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/str11ngfello/moonloop/testutil/keeper"
	"github.com/str11ngfello/moonloop/testutil/nullify"
	"github.com/str11ngfello/moonloop/x/moonloop/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestMintStrategyQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNMintStrategy(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetMintStrategyRequest
		response *types.QueryGetMintStrategyResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetMintStrategyRequest{
				Index: msgs[0].Index,
			},
			response: &types.QueryGetMintStrategyResponse{MintStrategy: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetMintStrategyRequest{
				Index: msgs[1].Index,
			},
			response: &types.QueryGetMintStrategyResponse{MintStrategy: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetMintStrategyRequest{
				Index: strconv.Itoa(100000),
			},
			err: status.Error(codes.InvalidArgument, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.MintStrategy(wctx, tc.request)
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

func TestMintStrategyQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNMintStrategy(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllMintStrategyRequest {
		return &types.QueryAllMintStrategyRequest{
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
			resp, err := keeper.MintStrategyAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.MintStrategy), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.MintStrategy),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.MintStrategyAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.MintStrategy), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.MintStrategy),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.MintStrategyAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.MintStrategy),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.MintStrategyAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
