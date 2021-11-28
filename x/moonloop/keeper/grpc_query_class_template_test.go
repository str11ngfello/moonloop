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

func TestClassTemplateQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNClassTemplate(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetClassTemplateRequest
		response *types.QueryGetClassTemplateResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetClassTemplateRequest{
				CollectionIndex:    msgs[0].CollectionIndex,
				ClassTemplateIndex: msgs[0].ClassTemplateIndex,
			},
			response: &types.QueryGetClassTemplateResponse{ClassTemplate: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetClassTemplateRequest{
				CollectionIndex:    msgs[1].CollectionIndex,
				ClassTemplateIndex: msgs[1].ClassTemplateIndex,
			},
			response: &types.QueryGetClassTemplateResponse{ClassTemplate: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetClassTemplateRequest{
				CollectionIndex:    strconv.Itoa(100000),
				ClassTemplateIndex: strconv.Itoa(100000),
			},
			err: status.Error(codes.InvalidArgument, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.ClassTemplate(wctx, tc.request)
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

func TestClassTemplateQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.MoonloopKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNClassTemplate(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllClassTemplateRequest {
		return &types.QueryAllClassTemplateRequest{
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
			resp, err := keeper.ClassTemplateAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.ClassTemplate), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.ClassTemplate),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.ClassTemplateAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.ClassTemplate), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.ClassTemplate),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.ClassTemplateAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.ClassTemplate),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.ClassTemplateAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
