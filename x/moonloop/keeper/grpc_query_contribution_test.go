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

func TestContributionQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNContribution(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetContributionRequest
		response *types.QueryGetContributionResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetContributionRequest{
				CollectionIndex:      msgs[0].CollectionIndex,
				ClassTemplateIndex:   msgs[0].ClassTemplateIndex,
				PowerupTemplateIndex: msgs[0].PowerupTemplateIndex,
				InstanceIndex:        msgs[0].InstanceIndex,
			},
			response: &types.QueryGetContributionResponse{Contribution: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetContributionRequest{
				CollectionIndex:      msgs[1].CollectionIndex,
				ClassTemplateIndex:   msgs[1].ClassTemplateIndex,
				PowerupTemplateIndex: msgs[1].PowerupTemplateIndex,
				InstanceIndex:        msgs[1].InstanceIndex,
			},
			response: &types.QueryGetContributionResponse{Contribution: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetContributionRequest{
				CollectionIndex:      strconv.Itoa(100000),
				ClassTemplateIndex:   strconv.Itoa(100000),
				PowerupTemplateIndex: strconv.Itoa(100000),
				InstanceIndex:        strconv.Itoa(100000),
			},
			err: status.Error(codes.InvalidArgument, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Contribution(wctx, tc.request)
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

func TestContributionQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNContribution(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllContributionRequest {
		return &types.QueryAllContributionRequest{
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
			resp, err := keeper.ContributionAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Contribution), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Contribution),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.ContributionAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Contribution), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Contribution),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.ContributionAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Contribution),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.ContributionAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
