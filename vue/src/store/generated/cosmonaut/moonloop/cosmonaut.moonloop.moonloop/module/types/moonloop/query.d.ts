import { Reader, Writer } from 'protobufjs/minimal';
import { Collection } from '../moonloop/collection';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Class } from '../moonloop/class';
import { MintStrategy } from '../moonloop/mint_strategy';
import { Contribution } from '../moonloop/contribution';
import { PowerupTemplate } from '../moonloop/powerup_template';
import { Powerup } from '../moonloop/powerup';
export declare const protobufPackage = "cosmonaut.moonloop.moonloop";
export interface QueryGetCollectionRequest {
    index: string;
}
export interface QueryGetCollectionResponse {
    collection: Collection | undefined;
}
export interface QueryAllCollectionRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllCollectionResponse {
    collection: Collection[];
    pagination: PageResponse | undefined;
}
export interface QueryGetClassRequest {
    collectionIndex: string;
    classIndex: string;
}
export interface QueryGetClassResponse {
    class: Class | undefined;
}
export interface QueryAllClassRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllClassResponse {
    class: Class[];
    pagination: PageResponse | undefined;
}
export interface QueryGetMintStrategyRequest {
    index: string;
}
export interface QueryGetMintStrategyResponse {
    mintStrategy: MintStrategy | undefined;
}
export interface QueryAllMintStrategyRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllMintStrategyResponse {
    mintStrategy: MintStrategy[];
    pagination: PageResponse | undefined;
}
export interface QueryGetContributionRequest {
    collectionIndex: string;
    classIndex: string;
    powerupTemplateIndex: string;
    instanceIndex: string;
}
export interface QueryGetContributionResponse {
    contribution: Contribution | undefined;
}
export interface QueryAllContributionRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllContributionResponse {
    contribution: Contribution[];
    pagination: PageResponse | undefined;
}
export interface QueryGetPowerupTemplateRequest {
    collectionIndex: string;
    classIndex: string;
    powerupTemplateIndex: string;
}
export interface QueryGetPowerupTemplateResponse {
    powerupTemplate: PowerupTemplate | undefined;
}
export interface QueryAllPowerupTemplateRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllPowerupTemplateResponse {
    powerupTemplate: PowerupTemplate[];
    pagination: PageResponse | undefined;
}
export interface QueryGetPowerupRequest {
    collectionIndex: string;
    classIndex: string;
    powerupTemplateIndex: string;
    instanceIndex: string;
}
export interface QueryGetPowerupResponse {
    powerup: Powerup | undefined;
}
export interface QueryAllPowerupRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllPowerupResponse {
    powerup: Powerup[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetCollectionRequest: {
    encode(message: QueryGetCollectionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCollectionRequest;
    fromJSON(object: any): QueryGetCollectionRequest;
    toJSON(message: QueryGetCollectionRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCollectionRequest>): QueryGetCollectionRequest;
};
export declare const QueryGetCollectionResponse: {
    encode(message: QueryGetCollectionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCollectionResponse;
    fromJSON(object: any): QueryGetCollectionResponse;
    toJSON(message: QueryGetCollectionResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCollectionResponse>): QueryGetCollectionResponse;
};
export declare const QueryAllCollectionRequest: {
    encode(message: QueryAllCollectionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCollectionRequest;
    fromJSON(object: any): QueryAllCollectionRequest;
    toJSON(message: QueryAllCollectionRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCollectionRequest>): QueryAllCollectionRequest;
};
export declare const QueryAllCollectionResponse: {
    encode(message: QueryAllCollectionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCollectionResponse;
    fromJSON(object: any): QueryAllCollectionResponse;
    toJSON(message: QueryAllCollectionResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCollectionResponse>): QueryAllCollectionResponse;
};
export declare const QueryGetClassRequest: {
    encode(message: QueryGetClassRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetClassRequest;
    fromJSON(object: any): QueryGetClassRequest;
    toJSON(message: QueryGetClassRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetClassRequest>): QueryGetClassRequest;
};
export declare const QueryGetClassResponse: {
    encode(message: QueryGetClassResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetClassResponse;
    fromJSON(object: any): QueryGetClassResponse;
    toJSON(message: QueryGetClassResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetClassResponse>): QueryGetClassResponse;
};
export declare const QueryAllClassRequest: {
    encode(message: QueryAllClassRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllClassRequest;
    fromJSON(object: any): QueryAllClassRequest;
    toJSON(message: QueryAllClassRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllClassRequest>): QueryAllClassRequest;
};
export declare const QueryAllClassResponse: {
    encode(message: QueryAllClassResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllClassResponse;
    fromJSON(object: any): QueryAllClassResponse;
    toJSON(message: QueryAllClassResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllClassResponse>): QueryAllClassResponse;
};
export declare const QueryGetMintStrategyRequest: {
    encode(message: QueryGetMintStrategyRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMintStrategyRequest;
    fromJSON(object: any): QueryGetMintStrategyRequest;
    toJSON(message: QueryGetMintStrategyRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetMintStrategyRequest>): QueryGetMintStrategyRequest;
};
export declare const QueryGetMintStrategyResponse: {
    encode(message: QueryGetMintStrategyResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMintStrategyResponse;
    fromJSON(object: any): QueryGetMintStrategyResponse;
    toJSON(message: QueryGetMintStrategyResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetMintStrategyResponse>): QueryGetMintStrategyResponse;
};
export declare const QueryAllMintStrategyRequest: {
    encode(message: QueryAllMintStrategyRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMintStrategyRequest;
    fromJSON(object: any): QueryAllMintStrategyRequest;
    toJSON(message: QueryAllMintStrategyRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllMintStrategyRequest>): QueryAllMintStrategyRequest;
};
export declare const QueryAllMintStrategyResponse: {
    encode(message: QueryAllMintStrategyResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMintStrategyResponse;
    fromJSON(object: any): QueryAllMintStrategyResponse;
    toJSON(message: QueryAllMintStrategyResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllMintStrategyResponse>): QueryAllMintStrategyResponse;
};
export declare const QueryGetContributionRequest: {
    encode(message: QueryGetContributionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetContributionRequest;
    fromJSON(object: any): QueryGetContributionRequest;
    toJSON(message: QueryGetContributionRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetContributionRequest>): QueryGetContributionRequest;
};
export declare const QueryGetContributionResponse: {
    encode(message: QueryGetContributionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetContributionResponse;
    fromJSON(object: any): QueryGetContributionResponse;
    toJSON(message: QueryGetContributionResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetContributionResponse>): QueryGetContributionResponse;
};
export declare const QueryAllContributionRequest: {
    encode(message: QueryAllContributionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllContributionRequest;
    fromJSON(object: any): QueryAllContributionRequest;
    toJSON(message: QueryAllContributionRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllContributionRequest>): QueryAllContributionRequest;
};
export declare const QueryAllContributionResponse: {
    encode(message: QueryAllContributionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllContributionResponse;
    fromJSON(object: any): QueryAllContributionResponse;
    toJSON(message: QueryAllContributionResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllContributionResponse>): QueryAllContributionResponse;
};
export declare const QueryGetPowerupTemplateRequest: {
    encode(message: QueryGetPowerupTemplateRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPowerupTemplateRequest;
    fromJSON(object: any): QueryGetPowerupTemplateRequest;
    toJSON(message: QueryGetPowerupTemplateRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPowerupTemplateRequest>): QueryGetPowerupTemplateRequest;
};
export declare const QueryGetPowerupTemplateResponse: {
    encode(message: QueryGetPowerupTemplateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPowerupTemplateResponse;
    fromJSON(object: any): QueryGetPowerupTemplateResponse;
    toJSON(message: QueryGetPowerupTemplateResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPowerupTemplateResponse>): QueryGetPowerupTemplateResponse;
};
export declare const QueryAllPowerupTemplateRequest: {
    encode(message: QueryAllPowerupTemplateRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPowerupTemplateRequest;
    fromJSON(object: any): QueryAllPowerupTemplateRequest;
    toJSON(message: QueryAllPowerupTemplateRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPowerupTemplateRequest>): QueryAllPowerupTemplateRequest;
};
export declare const QueryAllPowerupTemplateResponse: {
    encode(message: QueryAllPowerupTemplateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPowerupTemplateResponse;
    fromJSON(object: any): QueryAllPowerupTemplateResponse;
    toJSON(message: QueryAllPowerupTemplateResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPowerupTemplateResponse>): QueryAllPowerupTemplateResponse;
};
export declare const QueryGetPowerupRequest: {
    encode(message: QueryGetPowerupRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPowerupRequest;
    fromJSON(object: any): QueryGetPowerupRequest;
    toJSON(message: QueryGetPowerupRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPowerupRequest>): QueryGetPowerupRequest;
};
export declare const QueryGetPowerupResponse: {
    encode(message: QueryGetPowerupResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPowerupResponse;
    fromJSON(object: any): QueryGetPowerupResponse;
    toJSON(message: QueryGetPowerupResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPowerupResponse>): QueryGetPowerupResponse;
};
export declare const QueryAllPowerupRequest: {
    encode(message: QueryAllPowerupRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPowerupRequest;
    fromJSON(object: any): QueryAllPowerupRequest;
    toJSON(message: QueryAllPowerupRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPowerupRequest>): QueryAllPowerupRequest;
};
export declare const QueryAllPowerupResponse: {
    encode(message: QueryAllPowerupResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPowerupResponse;
    fromJSON(object: any): QueryAllPowerupResponse;
    toJSON(message: QueryAllPowerupResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPowerupResponse>): QueryAllPowerupResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a collection by index. */
    Collection(request: QueryGetCollectionRequest): Promise<QueryGetCollectionResponse>;
    /** Queries a list of collection items. */
    CollectionAll(request: QueryAllCollectionRequest): Promise<QueryAllCollectionResponse>;
    /** Queries a class by index. */
    Class(request: QueryGetClassRequest): Promise<QueryGetClassResponse>;
    /** Queries a list of class items. */
    ClassAll(request: QueryAllClassRequest): Promise<QueryAllClassResponse>;
    /** Queries a mintStrategy by index. */
    MintStrategy(request: QueryGetMintStrategyRequest): Promise<QueryGetMintStrategyResponse>;
    /** Queries a list of mintStrategy items. */
    MintStrategyAll(request: QueryAllMintStrategyRequest): Promise<QueryAllMintStrategyResponse>;
    /** Queries a contribution by index. */
    Contribution(request: QueryGetContributionRequest): Promise<QueryGetContributionResponse>;
    /** Queries a list of contribution items. */
    ContributionAll(request: QueryAllContributionRequest): Promise<QueryAllContributionResponse>;
    /** Queries a powerupTemplate by index. */
    PowerupTemplate(request: QueryGetPowerupTemplateRequest): Promise<QueryGetPowerupTemplateResponse>;
    /** Queries a list of powerupTemplate items. */
    PowerupTemplateAll(request: QueryAllPowerupTemplateRequest): Promise<QueryAllPowerupTemplateResponse>;
    /** Queries a powerup by index. */
    Powerup(request: QueryGetPowerupRequest): Promise<QueryGetPowerupResponse>;
    /** Queries a list of powerup items. */
    PowerupAll(request: QueryAllPowerupRequest): Promise<QueryAllPowerupResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Collection(request: QueryGetCollectionRequest): Promise<QueryGetCollectionResponse>;
    CollectionAll(request: QueryAllCollectionRequest): Promise<QueryAllCollectionResponse>;
    Class(request: QueryGetClassRequest): Promise<QueryGetClassResponse>;
    ClassAll(request: QueryAllClassRequest): Promise<QueryAllClassResponse>;
    MintStrategy(request: QueryGetMintStrategyRequest): Promise<QueryGetMintStrategyResponse>;
    MintStrategyAll(request: QueryAllMintStrategyRequest): Promise<QueryAllMintStrategyResponse>;
    Contribution(request: QueryGetContributionRequest): Promise<QueryGetContributionResponse>;
    ContributionAll(request: QueryAllContributionRequest): Promise<QueryAllContributionResponse>;
    PowerupTemplate(request: QueryGetPowerupTemplateRequest): Promise<QueryGetPowerupTemplateResponse>;
    PowerupTemplateAll(request: QueryAllPowerupTemplateRequest): Promise<QueryAllPowerupTemplateResponse>;
    Powerup(request: QueryGetPowerupRequest): Promise<QueryGetPowerupResponse>;
    PowerupAll(request: QueryAllPowerupRequest): Promise<QueryAllPowerupResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
