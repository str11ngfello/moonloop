export interface MoonloopClass {
    collectionIndex?: string;
    classIndex?: string;
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
    owner?: string;
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
    classIndex?: string;
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
export declare type MoonloopMsgCreateClassResponse = object;
export declare type MoonloopMsgCreateCollectionResponse = object;
export declare type MoonloopMsgCreateContributionResponse = object;
export declare type MoonloopMsgCreateMintStrategyResponse = object;
export declare type MoonloopMsgCreatePowerupResponse = object;
export declare type MoonloopMsgCreatePowerupTemplateResponse = object;
export declare type MoonloopMsgDeleteClassResponse = object;
export declare type MoonloopMsgDeleteCollectionResponse = object;
export declare type MoonloopMsgDeleteContributionResponse = object;
export declare type MoonloopMsgDeleteMintStrategyResponse = object;
export declare type MoonloopMsgDeletePowerupResponse = object;
export declare type MoonloopMsgDeletePowerupTemplateResponse = object;
export declare type MoonloopMsgFreePowerResponse = object;
export declare type MoonloopMsgMintResponse = object;
export declare type MoonloopMsgSendPowerResponse = object;
export declare type MoonloopMsgSetCollectionMintStrategyResponse = object;
export declare type MoonloopMsgUpdateClassResponse = object;
export declare type MoonloopMsgUpdateCollectionResponse = object;
export declare type MoonloopMsgUpdateContributionResponse = object;
export declare type MoonloopMsgUpdateMintStrategyResponse = object;
export declare type MoonloopMsgUpdatePowerupResponse = object;
export declare type MoonloopMsgUpdatePowerupTemplateResponse = object;
export interface MoonloopPowerup {
    collectionIndex?: string;
    classIndex?: string;
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
    classIndex?: string;
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
    /**
     * Coin defines a token with a denomination and an amount.
     *
     * NOTE: The amount field is an Int which implements the custom method
     * signatures required by gogoproto.
     */
    feeRate?: V1Beta1Coin;
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
export interface MoonloopQueryGetCollectionResponse {
    collection?: MoonloopCollection;
}
export interface MoonloopQueryGetContributionResponse {
    contribution?: MoonloopContribution;
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
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
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
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title moonloop/class.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryClassAll
     * @summary Queries a list of class items.
     * @request GET:/str11ngfello/moonloop/moonloop/class
     */
    queryClassAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MoonloopQueryAllClassResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryClass
     * @summary Queries a class by index.
     * @request GET:/str11ngfello/moonloop/moonloop/class/{collectionIndex}/{classIndex}
     */
    queryClass: (collectionIndex: string, classIndex: string, params?: RequestParams) => Promise<HttpResponse<MoonloopQueryGetClassResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryCollectionAll
     * @summary Queries a list of collection items.
     * @request GET:/str11ngfello/moonloop/moonloop/collection
     */
    queryCollectionAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MoonloopQueryAllCollectionResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryCollection
     * @summary Queries a collection by index.
     * @request GET:/str11ngfello/moonloop/moonloop/collection/{index}
     */
    queryCollection: (index: string, params?: RequestParams) => Promise<HttpResponse<MoonloopQueryGetCollectionResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryContributionAll
     * @summary Queries a list of contribution items.
     * @request GET:/str11ngfello/moonloop/moonloop/contribution
     */
    queryContributionAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MoonloopQueryAllContributionResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryContribution
     * @summary Queries a contribution by index.
     * @request GET:/str11ngfello/moonloop/moonloop/contribution/{collectionIndex}/{classIndex}/{powerupTemplateIndex}/{instanceIndex}
     */
    queryContribution: (collectionIndex: string, classIndex: string, powerupTemplateIndex: string, instanceIndex: string, params?: RequestParams) => Promise<HttpResponse<MoonloopQueryGetContributionResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryMintStrategyAll
     * @summary Queries a list of mintStrategy items.
     * @request GET:/str11ngfello/moonloop/moonloop/mintStrategy
     */
    queryMintStrategyAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MoonloopQueryAllMintStrategyResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryMintStrategy
     * @summary Queries a mintStrategy by index.
     * @request GET:/str11ngfello/moonloop/moonloop/mintStrategy/{index}
     */
    queryMintStrategy: (index: string, params?: RequestParams) => Promise<HttpResponse<MoonloopQueryGetMintStrategyResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPowerupAll
     * @summary Queries a list of powerup items.
     * @request GET:/str11ngfello/moonloop/moonloop/powerup
     */
    queryPowerupAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MoonloopQueryAllPowerupResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPowerup
     * @summary Queries a powerup by index.
     * @request GET:/str11ngfello/moonloop/moonloop/powerup/{collectionIndex}/{classIndex}/{powerupTemplateIndex}/{instanceIndex}
     */
    queryPowerup: (collectionIndex: string, classIndex: string, powerupTemplateIndex: string, instanceIndex: string, params?: RequestParams) => Promise<HttpResponse<MoonloopQueryGetPowerupResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPowerupTemplateAll
     * @summary Queries a list of powerupTemplate items.
     * @request GET:/str11ngfello/moonloop/moonloop/powerupTemplate
     */
    queryPowerupTemplateAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MoonloopQueryAllPowerupTemplateResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPowerupTemplate
     * @summary Queries a powerupTemplate by index.
     * @request GET:/str11ngfello/moonloop/moonloop/powerupTemplate/{collectionIndex}/{classIndex}/{powerupTemplateIndex}
     */
    queryPowerupTemplate: (collectionIndex: string, classIndex: string, powerupTemplateIndex: string, params?: RequestParams) => Promise<HttpResponse<MoonloopQueryGetPowerupTemplateResponse, RpcStatus>>;
}
export {};
