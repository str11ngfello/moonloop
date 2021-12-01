/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface MoonloopClass {
  collectionIndex?: string;
  classTemplateIndex?: string;
  instanceIndex?: string;
  creator?: string;
  owner?: string;
}

export interface MoonloopClassTemplate {
  collectionIndex?: string;
  classTemplateIndex?: string;
  name?: string;
  description?: string;
  mintStrategy?: string;
  gltfHash?: string;
  metadata?: string;

  /** @format int32 */
  maxInstances?: number;

  /** @format int32 */
  count?: number;
  powerupTemplates?: string[];
  creator?: string;
}

export interface MoonloopCollection {
  index?: string;
  name?: string;
  description?: string;
  mintStrategy?: string;
  classes?: string[];
  creator?: string;
}

export interface MoonloopContribution {
  collectionIndex?: string;
  classTemplateIndex?: string;
  powerupTemplateIndex?: string;
  instanceIndex?: string;
  contributors?: string[];
  amounts?: V1Beta1Coin[];
  timestamps?: string[];
  creator?: string;
}

export interface MoonloopMintStrategy {
  index?: string;
  minters?: string[];
  instanceLevels?: number[];
  priceLevels?: number[];
  paused?: boolean;
  creator?: string;
}

export type MoonloopMsgCreateClassResponse = object;

export type MoonloopMsgCreateClassTemplateResponse = object;

export type MoonloopMsgCreateCollectionResponse = object;

export type MoonloopMsgCreateContributionResponse = object;

export type MoonloopMsgCreateMintStrategyResponse = object;

export type MoonloopMsgCreatePowerupResponse = object;

export type MoonloopMsgCreatePowerupTemplateResponse = object;

export type MoonloopMsgDeleteClassResponse = object;

export type MoonloopMsgDeleteClassTemplateResponse = object;

export type MoonloopMsgDeleteCollectionResponse = object;

export type MoonloopMsgDeleteContributionResponse = object;

export type MoonloopMsgDeleteMintStrategyResponse = object;

export type MoonloopMsgDeletePowerupResponse = object;

export type MoonloopMsgDeletePowerupTemplateResponse = object;

export type MoonloopMsgFreePowerResponse = object;

export type MoonloopMsgMintResponse = object;

export type MoonloopMsgSendPowerResponse = object;

export type MoonloopMsgSetCollectionMintStrategyResponse = object;

export type MoonloopMsgUpdateClassResponse = object;

export type MoonloopMsgUpdateClassTemplateResponse = object;

export type MoonloopMsgUpdateCollectionResponse = object;

export type MoonloopMsgUpdateContributionResponse = object;

export type MoonloopMsgUpdateMintStrategyResponse = object;

export type MoonloopMsgUpdatePowerupResponse = object;

export type MoonloopMsgUpdatePowerupTemplateResponse = object;

export interface MoonloopPowerup {
  collectionIndex?: string;
  classTemplateIndex?: string;
  powerupTemplateIndex?: string;
  instanceIndex?: string;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  balance?: V1Beta1Coin;

  /** @format int32 */
  startTime?: number;

  /** @format int32 */
  endTime?: number;

  /** @format int32 */
  numActivations?: number;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  fees?: V1Beta1Coin;
  acceptingPower?: boolean;
  creator?: string;
}

export interface MoonloopPowerupTemplate {
  collectionIndex?: string;
  classTemplateIndex?: string;
  powerupTemplateIndex?: string;
  name?: string;
  description?: string;

  /** @format int32 */
  count?: number;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  activationBalance?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  maxBalance?: V1Beta1Coin;

  /** @format int32 */
  duration?: number;

  /** @format int32 */
  maxDuration?: number;

  /** @format int32 */
  refundDuration?: number;

  /** @format int32 */
  maxActivations?: number;

  /** @format int32 */
  coolDownDuration?: number;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  rechargeRate?: V1Beta1Coin;
  feeRate?: string;

  /** @format int32 */
  activationType?: number;
  eventData?: string;
  creator?: string;
}

export interface MoonloopQueryAllClassResponse {
  class?: MoonloopClass[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface MoonloopQueryAllClassTemplateResponse {
  classTemplate?: MoonloopClassTemplate[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface MoonloopQueryAllCollectionResponse {
  collection?: MoonloopCollection[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface MoonloopQueryAllContributionResponse {
  contribution?: MoonloopContribution[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface MoonloopQueryAllMintStrategyResponse {
  mintStrategy?: MoonloopMintStrategy[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface MoonloopQueryAllPowerupResponse {
  powerup?: MoonloopPowerup[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface MoonloopQueryAllPowerupTemplateResponse {
  powerupTemplate?: MoonloopPowerupTemplate[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface MoonloopQueryGetClassResponse {
  class?: MoonloopClass;
}

export interface MoonloopQueryGetClassTemplateResponse {
  classTemplate?: MoonloopClassTemplate;
}

export interface MoonloopQueryGetCollectionResponse {
  collection?: MoonloopCollection;
}

export interface MoonloopQueryGetContributionResponse {
  contribution?: MoonloopContribution;
}

export interface MoonloopQueryGetInstanceResponse {
  collection?: MoonloopCollection;
  classTemplate?: MoonloopClassTemplate;
  powerupTemplates?: MoonloopPowerupTemplate[];
  powerups?: MoonloopPowerup[];
}

export interface MoonloopQueryGetMintStrategyResponse {
  mintStrategy?: MoonloopMintStrategy;
}

export interface MoonloopQueryGetPowerupResponse {
  powerup?: MoonloopPowerup;
}

export interface MoonloopQueryGetPowerupTemplateResponse {
  powerupTemplate?: MoonloopPowerupTemplate;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
  denom?: string;
  amount?: string;
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  countTotal?: boolean;

  /** reverse is set to true if results are to be returned in the descending order. */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /** @format byte */
  nextKey?: string;

  /** @format uint64 */
  total?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title moonloop/class.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryClassAll
   * @summary Queries a list of class items.
   * @request GET:/str11ngfello/moonloop/moonloop/class
   */
  queryClassAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MoonloopQueryAllClassResponse, RpcStatus>({
      path: `/str11ngfello/moonloop/moonloop/class`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryClass
   * @summary Queries a class by index.
   * @request GET:/str11ngfello/moonloop/moonloop/class/{collectionIndex}/{classTemplateIndex}/{instanceIndex}
   */
  queryClass = (
    collectionIndex: string,
    classTemplateIndex: string,
    instanceIndex: string,
    params: RequestParams = {},
  ) =>
    this.request<MoonloopQueryGetClassResponse, RpcStatus>({
      path: `/str11ngfello/moonloop/moonloop/class/${collectionIndex}/${classTemplateIndex}/${instanceIndex}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryClassTemplateAll
   * @summary Queries a list of classTemplate items.
   * @request GET:/str11ngfello/moonloop/moonloop/classTemplate
   */
  queryClassTemplateAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MoonloopQueryAllClassTemplateResponse, RpcStatus>({
      path: `/str11ngfello/moonloop/moonloop/classTemplate`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryClassTemplate
   * @summary Queries a classTemplate by index.
   * @request GET:/str11ngfello/moonloop/moonloop/classTemplate/{collectionIndex}/{classTemplateIndex}
   */
  queryClassTemplate = (collectionIndex: string, classTemplateIndex: string, params: RequestParams = {}) =>
    this.request<MoonloopQueryGetClassTemplateResponse, RpcStatus>({
      path: `/str11ngfello/moonloop/moonloop/classTemplate/${collectionIndex}/${classTemplateIndex}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCollectionAll
   * @summary Queries a list of collection items.
   * @request GET:/str11ngfello/moonloop/moonloop/collection
   */
  queryCollectionAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MoonloopQueryAllCollectionResponse, RpcStatus>({
      path: `/str11ngfello/moonloop/moonloop/collection`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCollection
   * @summary Queries a collection by index.
   * @request GET:/str11ngfello/moonloop/moonloop/collection/{index}
   */
  queryCollection = (index: string, params: RequestParams = {}) =>
    this.request<MoonloopQueryGetCollectionResponse, RpcStatus>({
      path: `/str11ngfello/moonloop/moonloop/collection/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryContributionAll
   * @summary Queries a list of contribution items.
   * @request GET:/str11ngfello/moonloop/moonloop/contribution
   */
  queryContributionAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MoonloopQueryAllContributionResponse, RpcStatus>({
      path: `/str11ngfello/moonloop/moonloop/contribution`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryContribution
   * @summary Queries a contribution by index.
   * @request GET:/str11ngfello/moonloop/moonloop/contribution/{collectionIndex}/{classTemplateIndex}/{powerupTemplateIndex}/{instanceIndex}
   */
  queryContribution = (
    collectionIndex: string,
    classTemplateIndex: string,
    powerupTemplateIndex: string,
    instanceIndex: string,
    params: RequestParams = {},
  ) =>
    this.request<MoonloopQueryGetContributionResponse, RpcStatus>({
      path: `/str11ngfello/moonloop/moonloop/contribution/${collectionIndex}/${classTemplateIndex}/${powerupTemplateIndex}/${instanceIndex}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetInstance
   * @summary Queries a list of getInstance items.
   * @request GET:/str11ngfello/moonloop/moonloop/getInstance
   */
  queryGetInstance = (
    query?: { collectionIndex?: string; classTemplateIndex?: string; instanceIndex?: string },
    params: RequestParams = {},
  ) =>
    this.request<MoonloopQueryGetInstanceResponse, RpcStatus>({
      path: `/str11ngfello/moonloop/moonloop/getInstance`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMintStrategyAll
   * @summary Queries a list of mintStrategy items.
   * @request GET:/str11ngfello/moonloop/moonloop/mintStrategy
   */
  queryMintStrategyAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MoonloopQueryAllMintStrategyResponse, RpcStatus>({
      path: `/str11ngfello/moonloop/moonloop/mintStrategy`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMintStrategy
   * @summary Queries a mintStrategy by index.
   * @request GET:/str11ngfello/moonloop/moonloop/mintStrategy/{index}
   */
  queryMintStrategy = (index: string, params: RequestParams = {}) =>
    this.request<MoonloopQueryGetMintStrategyResponse, RpcStatus>({
      path: `/str11ngfello/moonloop/moonloop/mintStrategy/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPowerupAll
   * @summary Queries a list of powerup items.
   * @request GET:/str11ngfello/moonloop/moonloop/powerup
   */
  queryPowerupAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MoonloopQueryAllPowerupResponse, RpcStatus>({
      path: `/str11ngfello/moonloop/moonloop/powerup`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPowerup
   * @summary Queries a powerup by index.
   * @request GET:/str11ngfello/moonloop/moonloop/powerup/{collectionIndex}/{classTemplateIndex}/{powerupTemplateIndex}/{instanceIndex}
   */
  queryPowerup = (
    collectionIndex: string,
    classTemplateIndex: string,
    powerupTemplateIndex: string,
    instanceIndex: string,
    params: RequestParams = {},
  ) =>
    this.request<MoonloopQueryGetPowerupResponse, RpcStatus>({
      path: `/str11ngfello/moonloop/moonloop/powerup/${collectionIndex}/${classTemplateIndex}/${powerupTemplateIndex}/${instanceIndex}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPowerupTemplateAll
   * @summary Queries a list of powerupTemplate items.
   * @request GET:/str11ngfello/moonloop/moonloop/powerupTemplate
   */
  queryPowerupTemplateAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MoonloopQueryAllPowerupTemplateResponse, RpcStatus>({
      path: `/str11ngfello/moonloop/moonloop/powerupTemplate`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPowerupTemplate
   * @summary Queries a powerupTemplate by index.
   * @request GET:/str11ngfello/moonloop/moonloop/powerupTemplate/{collectionIndex}/{classTemplateIndex}/{powerupTemplateIndex}
   */
  queryPowerupTemplate = (
    collectionIndex: string,
    classTemplateIndex: string,
    powerupTemplateIndex: string,
    params: RequestParams = {},
  ) =>
    this.request<MoonloopQueryGetPowerupTemplateResponse, RpcStatus>({
      path: `/str11ngfello/moonloop/moonloop/powerupTemplate/${collectionIndex}/${classTemplateIndex}/${powerupTemplateIndex}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
