import { Reader, Writer } from 'protobufjs/minimal';
import { Collection } from '../moonloop/collection';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Class } from '../moonloop/class';
import { MintStrategy } from '../moonloop/mint_strategy';
import { Contribution } from '../moonloop/contribution';
import { PowerupTemplate } from '../moonloop/powerup_template';
import { Powerup } from '../moonloop/powerup';
import { ClassTemplate } from '../moonloop/class_template';
import { CollectionOwner } from '../moonloop/collection_owner';
import { InstanceOwner } from '../moonloop/instance_owner';
export declare const protobufPackage = "str11ngfello.moonloop.moonloop";
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
    classTemplateIndex: string;
    instanceIndex: string;
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
    classTemplateIndex: string;
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
    classTemplateIndex: string;
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
    classTemplateIndex: string;
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
export interface QueryGetInstanceRequest {
    collectionIndex: string;
    classTemplateIndex: string;
    instanceIndex: string;
}
export interface QueryGetInstanceResponse {
    collection: Collection | undefined;
    classTemplate: ClassTemplate | undefined;
    powerupTemplates: PowerupTemplate[];
    powerups: Powerup[];
}
export interface QueryGetClassTemplateRequest {
    collectionIndex: string;
    classTemplateIndex: string;
}
export interface QueryGetClassTemplateResponse {
    classTemplate: ClassTemplate | undefined;
}
export interface QueryAllClassTemplateRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllClassTemplateResponse {
    classTemplate: ClassTemplate[];
    pagination: PageResponse | undefined;
}
export interface QueryGetCollectionOwnerRequest {
    index: string;
}
export interface QueryGetCollectionOwnerResponse {
    collectionOwner: CollectionOwner | undefined;
}
export interface QueryAllCollectionOwnerRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllCollectionOwnerResponse {
    collectionOwner: CollectionOwner[];
    pagination: PageResponse | undefined;
}
export interface QueryGetInstanceOwnerRequest {
    index: string;
}
export interface QueryGetInstanceOwnerResponse {
    instanceOwner: InstanceOwner | undefined;
}
export interface QueryAllInstanceOwnerRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllInstanceOwnerResponse {
    instanceOwner: InstanceOwner[];
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
export declare const QueryGetInstanceRequest: {
    encode(message: QueryGetInstanceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetInstanceRequest;
    fromJSON(object: any): QueryGetInstanceRequest;
    toJSON(message: QueryGetInstanceRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetInstanceRequest>): QueryGetInstanceRequest;
};
export declare const QueryGetInstanceResponse: {
    encode(message: QueryGetInstanceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetInstanceResponse;
    fromJSON(object: any): QueryGetInstanceResponse;
    toJSON(message: QueryGetInstanceResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetInstanceResponse>): QueryGetInstanceResponse;
};
export declare const QueryGetClassTemplateRequest: {
    encode(message: QueryGetClassTemplateRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetClassTemplateRequest;
    fromJSON(object: any): QueryGetClassTemplateRequest;
    toJSON(message: QueryGetClassTemplateRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetClassTemplateRequest>): QueryGetClassTemplateRequest;
};
export declare const QueryGetClassTemplateResponse: {
    encode(message: QueryGetClassTemplateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetClassTemplateResponse;
    fromJSON(object: any): QueryGetClassTemplateResponse;
    toJSON(message: QueryGetClassTemplateResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetClassTemplateResponse>): QueryGetClassTemplateResponse;
};
export declare const QueryAllClassTemplateRequest: {
    encode(message: QueryAllClassTemplateRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllClassTemplateRequest;
    fromJSON(object: any): QueryAllClassTemplateRequest;
    toJSON(message: QueryAllClassTemplateRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllClassTemplateRequest>): QueryAllClassTemplateRequest;
};
export declare const QueryAllClassTemplateResponse: {
    encode(message: QueryAllClassTemplateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllClassTemplateResponse;
    fromJSON(object: any): QueryAllClassTemplateResponse;
    toJSON(message: QueryAllClassTemplateResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllClassTemplateResponse>): QueryAllClassTemplateResponse;
};
export declare const QueryGetCollectionOwnerRequest: {
    encode(message: QueryGetCollectionOwnerRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCollectionOwnerRequest;
    fromJSON(object: any): QueryGetCollectionOwnerRequest;
    toJSON(message: QueryGetCollectionOwnerRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCollectionOwnerRequest>): QueryGetCollectionOwnerRequest;
};
export declare const QueryGetCollectionOwnerResponse: {
    encode(message: QueryGetCollectionOwnerResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCollectionOwnerResponse;
    fromJSON(object: any): QueryGetCollectionOwnerResponse;
    toJSON(message: QueryGetCollectionOwnerResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCollectionOwnerResponse>): QueryGetCollectionOwnerResponse;
};
export declare const QueryAllCollectionOwnerRequest: {
    encode(message: QueryAllCollectionOwnerRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCollectionOwnerRequest;
    fromJSON(object: any): QueryAllCollectionOwnerRequest;
    toJSON(message: QueryAllCollectionOwnerRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCollectionOwnerRequest>): QueryAllCollectionOwnerRequest;
};
export declare const QueryAllCollectionOwnerResponse: {
    encode(message: QueryAllCollectionOwnerResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCollectionOwnerResponse;
    fromJSON(object: any): QueryAllCollectionOwnerResponse;
    toJSON(message: QueryAllCollectionOwnerResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCollectionOwnerResponse>): QueryAllCollectionOwnerResponse;
};
export declare const QueryGetInstanceOwnerRequest: {
    encode(message: QueryGetInstanceOwnerRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetInstanceOwnerRequest;
    fromJSON(object: any): QueryGetInstanceOwnerRequest;
    toJSON(message: QueryGetInstanceOwnerRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetInstanceOwnerRequest>): QueryGetInstanceOwnerRequest;
};
export declare const QueryGetInstanceOwnerResponse: {
    encode(message: QueryGetInstanceOwnerResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetInstanceOwnerResponse;
    fromJSON(object: any): QueryGetInstanceOwnerResponse;
    toJSON(message: QueryGetInstanceOwnerResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetInstanceOwnerResponse>): QueryGetInstanceOwnerResponse;
};
export declare const QueryAllInstanceOwnerRequest: {
    encode(message: QueryAllInstanceOwnerRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllInstanceOwnerRequest;
    fromJSON(object: any): QueryAllInstanceOwnerRequest;
    toJSON(message: QueryAllInstanceOwnerRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllInstanceOwnerRequest>): QueryAllInstanceOwnerRequest;
};
export declare const QueryAllInstanceOwnerResponse: {
    encode(message: QueryAllInstanceOwnerResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllInstanceOwnerResponse;
    fromJSON(object: any): QueryAllInstanceOwnerResponse;
    toJSON(message: QueryAllInstanceOwnerResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllInstanceOwnerResponse>): QueryAllInstanceOwnerResponse;
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
    /** Queries a list of getInstance items. */
    GetInstance(request: QueryGetInstanceRequest): Promise<QueryGetInstanceResponse>;
    /** Queries a classTemplate by index. */
    ClassTemplate(request: QueryGetClassTemplateRequest): Promise<QueryGetClassTemplateResponse>;
    /** Queries a list of classTemplate items. */
    ClassTemplateAll(request: QueryAllClassTemplateRequest): Promise<QueryAllClassTemplateResponse>;
    /** Queries a collectionOwner by index. */
    CollectionOwner(request: QueryGetCollectionOwnerRequest): Promise<QueryGetCollectionOwnerResponse>;
    /** Queries a list of collectionOwner items. */
    CollectionOwnerAll(request: QueryAllCollectionOwnerRequest): Promise<QueryAllCollectionOwnerResponse>;
    /** Queries a instanceOwner by index. */
    InstanceOwner(request: QueryGetInstanceOwnerRequest): Promise<QueryGetInstanceOwnerResponse>;
    /** Queries a list of instanceOwner items. */
    InstanceOwnerAll(request: QueryAllInstanceOwnerRequest): Promise<QueryAllInstanceOwnerResponse>;
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
    GetInstance(request: QueryGetInstanceRequest): Promise<QueryGetInstanceResponse>;
    ClassTemplate(request: QueryGetClassTemplateRequest): Promise<QueryGetClassTemplateResponse>;
    ClassTemplateAll(request: QueryAllClassTemplateRequest): Promise<QueryAllClassTemplateResponse>;
    CollectionOwner(request: QueryGetCollectionOwnerRequest): Promise<QueryGetCollectionOwnerResponse>;
    CollectionOwnerAll(request: QueryAllCollectionOwnerRequest): Promise<QueryAllCollectionOwnerResponse>;
    InstanceOwner(request: QueryGetInstanceOwnerRequest): Promise<QueryGetInstanceOwnerResponse>;
    InstanceOwnerAll(request: QueryAllInstanceOwnerRequest): Promise<QueryAllInstanceOwnerResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
