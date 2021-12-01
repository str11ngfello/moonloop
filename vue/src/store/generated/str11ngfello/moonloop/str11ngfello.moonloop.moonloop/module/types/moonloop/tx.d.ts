import { Reader, Writer } from 'protobufjs/minimal';
import { Coin } from '../cosmos/base/v1beta1/coin';
export declare const protobufPackage = "str11ngfello.moonloop.moonloop";
export interface MsgCreateCollection {
    creator: string;
    index: string;
    name: string;
    description: string;
    mintStrategy: string;
    classes: string[];
}
export interface MsgCreateCollectionResponse {
}
export interface MsgUpdateCollection {
    creator: string;
    index: string;
    name: string;
    description: string;
    mintStrategy: string;
    classes: string[];
}
export interface MsgUpdateCollectionResponse {
}
export interface MsgDeleteCollection {
    creator: string;
    index: string;
}
export interface MsgDeleteCollectionResponse {
}
export interface MsgCreateClass {
    creator: string;
    collectionIndex: string;
    classTemplateIndex: string;
    instanceIndex: string;
    owner: string;
}
export interface MsgCreateClassResponse {
}
export interface MsgUpdateClass {
    creator: string;
    collectionIndex: string;
    classTemplateIndex: string;
    instanceIndex: string;
    owner: string;
}
export interface MsgUpdateClassResponse {
}
export interface MsgDeleteClass {
    creator: string;
    collectionIndex: string;
    classTemplateIndex: string;
    instanceIndex: string;
}
export interface MsgDeleteClassResponse {
}
export interface MsgCreateMintStrategy {
    creator: string;
    index: string;
    minters: string[];
    instanceLevels: number[];
    priceLevels: number[];
    paused: boolean;
}
export interface MsgCreateMintStrategyResponse {
}
export interface MsgUpdateMintStrategy {
    creator: string;
    index: string;
    minters: string[];
    instanceLevels: number[];
    priceLevels: number[];
    paused: boolean;
}
export interface MsgUpdateMintStrategyResponse {
}
export interface MsgDeleteMintStrategy {
    creator: string;
    index: string;
}
export interface MsgDeleteMintStrategyResponse {
}
export interface MsgCreateContribution {
    creator: string;
    collectionIndex: string;
    classTemplateIndex: string;
    powerupTemplateIndex: string;
    instanceIndex: string;
    contributors: string[];
    amounts: Coin[];
}
export interface MsgCreateContributionResponse {
}
export interface MsgUpdateContribution {
    creator: string;
    collectionIndex: string;
    classTemplateIndex: string;
    powerupTemplateIndex: string;
    instanceIndex: string;
    contributors: string[];
    amounts: Coin[];
}
export interface MsgUpdateContributionResponse {
}
export interface MsgDeleteContribution {
    creator: string;
    collectionIndex: string;
    classTemplateIndex: string;
    powerupTemplateIndex: string;
    instanceIndex: string;
}
export interface MsgDeleteContributionResponse {
}
export interface MsgCreatePowerupTemplate {
    creator: string;
    collectionIndex: string;
    classTemplateIndex: string;
    powerupTemplateIndex: string;
    name: string;
    description: string;
    count: number;
    activationBalance: Coin | undefined;
    maxBalance: Coin | undefined;
    duration: number;
    maxDuration: number;
    refundDuration: number;
    maxActivations: number;
    coolDownDuration: number;
    rechargeRate: Coin | undefined;
    feeRate: string;
    activationType: number;
    eventData: string;
}
export interface MsgCreatePowerupTemplateResponse {
}
export interface MsgUpdatePowerupTemplate {
    creator: string;
    collectionIndex: string;
    classTemplateIndex: string;
    powerupTemplateIndex: string;
    name: string;
    description: string;
    count: number;
    activationBalance: Coin | undefined;
    maxBalance: Coin | undefined;
    duration: number;
    maxDuration: number;
    refundDuration: number;
    maxActivations: number;
    coolDownDuration: number;
    rechargeRate: Coin | undefined;
    feeRate: string;
    activationType: number;
    eventData: string;
}
export interface MsgUpdatePowerupTemplateResponse {
}
export interface MsgDeletePowerupTemplate {
    creator: string;
    collectionIndex: string;
    classTemplateIndex: string;
    powerupTemplateIndex: string;
}
export interface MsgDeletePowerupTemplateResponse {
}
export interface MsgCreatePowerup {
    creator: string;
    collectionIndex: string;
    classTemplateIndex: string;
    powerupTemplateIndex: string;
    instanceIndex: string;
    balance: Coin | undefined;
    startTime: number;
    endTime: number;
    numActivations: number;
    fees: Coin | undefined;
    acceptingPower: boolean;
}
export interface MsgCreatePowerupResponse {
}
export interface MsgUpdatePowerup {
    creator: string;
    collectionIndex: string;
    classTemplateIndex: string;
    powerupTemplateIndex: string;
    instanceIndex: string;
    balance: Coin | undefined;
    startTime: number;
    endTime: number;
    numActivations: number;
    fees: Coin | undefined;
    acceptingPower: boolean;
}
export interface MsgUpdatePowerupResponse {
}
export interface MsgDeletePowerup {
    creator: string;
    collectionIndex: string;
    classTemplateIndex: string;
    powerupTemplateIndex: string;
    instanceIndex: string;
}
export interface MsgDeletePowerupResponse {
}
export interface MsgSetCollectionMintStrategy {
    creator: string;
    collectionIndex: string;
    mintStrategyIndex: string;
}
export interface MsgSetCollectionMintStrategyResponse {
}
export interface MsgSendPower {
    creator: string;
    collectionIndex: string;
    classTemplateIndex: string;
    powerupTemplateIndex: string;
    instanceIndex: string;
    power: Coin | undefined;
}
export interface MsgSendPowerResponse {
}
export interface MsgFreePower {
    creator: string;
    collectionIndex: string;
    classTemplateIndex: string;
    powerupTemplateIndex: string;
    instanceIndex: string;
}
export interface MsgFreePowerResponse {
}
export interface MsgMint {
    creator: string;
    collectionIndex: string;
    classTemplateIndex: string;
    numInstances: number;
}
export interface MsgMintResponse {
}
export interface MsgCreateClassTemplate {
    creator: string;
    collectionIndex: string;
    classTemplateIndex: string;
    name: string;
    description: string;
    mintStrategy: string;
    gltfHash: string;
    metadata: string;
    maxInstances: number;
    count: number;
    powerupTemplates: string[];
}
export interface MsgCreateClassTemplateResponse {
}
export interface MsgUpdateClassTemplate {
    creator: string;
    collectionIndex: string;
    classTemplateIndex: string;
    name: string;
    description: string;
    mintStrategy: string;
    gltfHash: string;
    metadata: string;
    maxInstances: number;
    count: number;
    powerupTemplates: string[];
}
export interface MsgUpdateClassTemplateResponse {
}
export interface MsgDeleteClassTemplate {
    creator: string;
    collectionIndex: string;
    classTemplateIndex: string;
}
export interface MsgDeleteClassTemplateResponse {
}
export declare const MsgCreateCollection: {
    encode(message: MsgCreateCollection, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCollection;
    fromJSON(object: any): MsgCreateCollection;
    toJSON(message: MsgCreateCollection): unknown;
    fromPartial(object: DeepPartial<MsgCreateCollection>): MsgCreateCollection;
};
export declare const MsgCreateCollectionResponse: {
    encode(_: MsgCreateCollectionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCollectionResponse;
    fromJSON(_: any): MsgCreateCollectionResponse;
    toJSON(_: MsgCreateCollectionResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateCollectionResponse>): MsgCreateCollectionResponse;
};
export declare const MsgUpdateCollection: {
    encode(message: MsgUpdateCollection, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCollection;
    fromJSON(object: any): MsgUpdateCollection;
    toJSON(message: MsgUpdateCollection): unknown;
    fromPartial(object: DeepPartial<MsgUpdateCollection>): MsgUpdateCollection;
};
export declare const MsgUpdateCollectionResponse: {
    encode(_: MsgUpdateCollectionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCollectionResponse;
    fromJSON(_: any): MsgUpdateCollectionResponse;
    toJSON(_: MsgUpdateCollectionResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateCollectionResponse>): MsgUpdateCollectionResponse;
};
export declare const MsgDeleteCollection: {
    encode(message: MsgDeleteCollection, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCollection;
    fromJSON(object: any): MsgDeleteCollection;
    toJSON(message: MsgDeleteCollection): unknown;
    fromPartial(object: DeepPartial<MsgDeleteCollection>): MsgDeleteCollection;
};
export declare const MsgDeleteCollectionResponse: {
    encode(_: MsgDeleteCollectionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCollectionResponse;
    fromJSON(_: any): MsgDeleteCollectionResponse;
    toJSON(_: MsgDeleteCollectionResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteCollectionResponse>): MsgDeleteCollectionResponse;
};
export declare const MsgCreateClass: {
    encode(message: MsgCreateClass, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateClass;
    fromJSON(object: any): MsgCreateClass;
    toJSON(message: MsgCreateClass): unknown;
    fromPartial(object: DeepPartial<MsgCreateClass>): MsgCreateClass;
};
export declare const MsgCreateClassResponse: {
    encode(_: MsgCreateClassResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateClassResponse;
    fromJSON(_: any): MsgCreateClassResponse;
    toJSON(_: MsgCreateClassResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateClassResponse>): MsgCreateClassResponse;
};
export declare const MsgUpdateClass: {
    encode(message: MsgUpdateClass, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateClass;
    fromJSON(object: any): MsgUpdateClass;
    toJSON(message: MsgUpdateClass): unknown;
    fromPartial(object: DeepPartial<MsgUpdateClass>): MsgUpdateClass;
};
export declare const MsgUpdateClassResponse: {
    encode(_: MsgUpdateClassResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateClassResponse;
    fromJSON(_: any): MsgUpdateClassResponse;
    toJSON(_: MsgUpdateClassResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateClassResponse>): MsgUpdateClassResponse;
};
export declare const MsgDeleteClass: {
    encode(message: MsgDeleteClass, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteClass;
    fromJSON(object: any): MsgDeleteClass;
    toJSON(message: MsgDeleteClass): unknown;
    fromPartial(object: DeepPartial<MsgDeleteClass>): MsgDeleteClass;
};
export declare const MsgDeleteClassResponse: {
    encode(_: MsgDeleteClassResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteClassResponse;
    fromJSON(_: any): MsgDeleteClassResponse;
    toJSON(_: MsgDeleteClassResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteClassResponse>): MsgDeleteClassResponse;
};
export declare const MsgCreateMintStrategy: {
    encode(message: MsgCreateMintStrategy, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateMintStrategy;
    fromJSON(object: any): MsgCreateMintStrategy;
    toJSON(message: MsgCreateMintStrategy): unknown;
    fromPartial(object: DeepPartial<MsgCreateMintStrategy>): MsgCreateMintStrategy;
};
export declare const MsgCreateMintStrategyResponse: {
    encode(_: MsgCreateMintStrategyResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateMintStrategyResponse;
    fromJSON(_: any): MsgCreateMintStrategyResponse;
    toJSON(_: MsgCreateMintStrategyResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateMintStrategyResponse>): MsgCreateMintStrategyResponse;
};
export declare const MsgUpdateMintStrategy: {
    encode(message: MsgUpdateMintStrategy, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateMintStrategy;
    fromJSON(object: any): MsgUpdateMintStrategy;
    toJSON(message: MsgUpdateMintStrategy): unknown;
    fromPartial(object: DeepPartial<MsgUpdateMintStrategy>): MsgUpdateMintStrategy;
};
export declare const MsgUpdateMintStrategyResponse: {
    encode(_: MsgUpdateMintStrategyResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateMintStrategyResponse;
    fromJSON(_: any): MsgUpdateMintStrategyResponse;
    toJSON(_: MsgUpdateMintStrategyResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateMintStrategyResponse>): MsgUpdateMintStrategyResponse;
};
export declare const MsgDeleteMintStrategy: {
    encode(message: MsgDeleteMintStrategy, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteMintStrategy;
    fromJSON(object: any): MsgDeleteMintStrategy;
    toJSON(message: MsgDeleteMintStrategy): unknown;
    fromPartial(object: DeepPartial<MsgDeleteMintStrategy>): MsgDeleteMintStrategy;
};
export declare const MsgDeleteMintStrategyResponse: {
    encode(_: MsgDeleteMintStrategyResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteMintStrategyResponse;
    fromJSON(_: any): MsgDeleteMintStrategyResponse;
    toJSON(_: MsgDeleteMintStrategyResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteMintStrategyResponse>): MsgDeleteMintStrategyResponse;
};
export declare const MsgCreateContribution: {
    encode(message: MsgCreateContribution, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateContribution;
    fromJSON(object: any): MsgCreateContribution;
    toJSON(message: MsgCreateContribution): unknown;
    fromPartial(object: DeepPartial<MsgCreateContribution>): MsgCreateContribution;
};
export declare const MsgCreateContributionResponse: {
    encode(_: MsgCreateContributionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateContributionResponse;
    fromJSON(_: any): MsgCreateContributionResponse;
    toJSON(_: MsgCreateContributionResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateContributionResponse>): MsgCreateContributionResponse;
};
export declare const MsgUpdateContribution: {
    encode(message: MsgUpdateContribution, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateContribution;
    fromJSON(object: any): MsgUpdateContribution;
    toJSON(message: MsgUpdateContribution): unknown;
    fromPartial(object: DeepPartial<MsgUpdateContribution>): MsgUpdateContribution;
};
export declare const MsgUpdateContributionResponse: {
    encode(_: MsgUpdateContributionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateContributionResponse;
    fromJSON(_: any): MsgUpdateContributionResponse;
    toJSON(_: MsgUpdateContributionResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateContributionResponse>): MsgUpdateContributionResponse;
};
export declare const MsgDeleteContribution: {
    encode(message: MsgDeleteContribution, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteContribution;
    fromJSON(object: any): MsgDeleteContribution;
    toJSON(message: MsgDeleteContribution): unknown;
    fromPartial(object: DeepPartial<MsgDeleteContribution>): MsgDeleteContribution;
};
export declare const MsgDeleteContributionResponse: {
    encode(_: MsgDeleteContributionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteContributionResponse;
    fromJSON(_: any): MsgDeleteContributionResponse;
    toJSON(_: MsgDeleteContributionResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteContributionResponse>): MsgDeleteContributionResponse;
};
export declare const MsgCreatePowerupTemplate: {
    encode(message: MsgCreatePowerupTemplate, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePowerupTemplate;
    fromJSON(object: any): MsgCreatePowerupTemplate;
    toJSON(message: MsgCreatePowerupTemplate): unknown;
    fromPartial(object: DeepPartial<MsgCreatePowerupTemplate>): MsgCreatePowerupTemplate;
};
export declare const MsgCreatePowerupTemplateResponse: {
    encode(_: MsgCreatePowerupTemplateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePowerupTemplateResponse;
    fromJSON(_: any): MsgCreatePowerupTemplateResponse;
    toJSON(_: MsgCreatePowerupTemplateResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreatePowerupTemplateResponse>): MsgCreatePowerupTemplateResponse;
};
export declare const MsgUpdatePowerupTemplate: {
    encode(message: MsgUpdatePowerupTemplate, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePowerupTemplate;
    fromJSON(object: any): MsgUpdatePowerupTemplate;
    toJSON(message: MsgUpdatePowerupTemplate): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePowerupTemplate>): MsgUpdatePowerupTemplate;
};
export declare const MsgUpdatePowerupTemplateResponse: {
    encode(_: MsgUpdatePowerupTemplateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePowerupTemplateResponse;
    fromJSON(_: any): MsgUpdatePowerupTemplateResponse;
    toJSON(_: MsgUpdatePowerupTemplateResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePowerupTemplateResponse>): MsgUpdatePowerupTemplateResponse;
};
export declare const MsgDeletePowerupTemplate: {
    encode(message: MsgDeletePowerupTemplate, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePowerupTemplate;
    fromJSON(object: any): MsgDeletePowerupTemplate;
    toJSON(message: MsgDeletePowerupTemplate): unknown;
    fromPartial(object: DeepPartial<MsgDeletePowerupTemplate>): MsgDeletePowerupTemplate;
};
export declare const MsgDeletePowerupTemplateResponse: {
    encode(_: MsgDeletePowerupTemplateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePowerupTemplateResponse;
    fromJSON(_: any): MsgDeletePowerupTemplateResponse;
    toJSON(_: MsgDeletePowerupTemplateResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeletePowerupTemplateResponse>): MsgDeletePowerupTemplateResponse;
};
export declare const MsgCreatePowerup: {
    encode(message: MsgCreatePowerup, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePowerup;
    fromJSON(object: any): MsgCreatePowerup;
    toJSON(message: MsgCreatePowerup): unknown;
    fromPartial(object: DeepPartial<MsgCreatePowerup>): MsgCreatePowerup;
};
export declare const MsgCreatePowerupResponse: {
    encode(_: MsgCreatePowerupResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePowerupResponse;
    fromJSON(_: any): MsgCreatePowerupResponse;
    toJSON(_: MsgCreatePowerupResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreatePowerupResponse>): MsgCreatePowerupResponse;
};
export declare const MsgUpdatePowerup: {
    encode(message: MsgUpdatePowerup, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePowerup;
    fromJSON(object: any): MsgUpdatePowerup;
    toJSON(message: MsgUpdatePowerup): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePowerup>): MsgUpdatePowerup;
};
export declare const MsgUpdatePowerupResponse: {
    encode(_: MsgUpdatePowerupResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePowerupResponse;
    fromJSON(_: any): MsgUpdatePowerupResponse;
    toJSON(_: MsgUpdatePowerupResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePowerupResponse>): MsgUpdatePowerupResponse;
};
export declare const MsgDeletePowerup: {
    encode(message: MsgDeletePowerup, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePowerup;
    fromJSON(object: any): MsgDeletePowerup;
    toJSON(message: MsgDeletePowerup): unknown;
    fromPartial(object: DeepPartial<MsgDeletePowerup>): MsgDeletePowerup;
};
export declare const MsgDeletePowerupResponse: {
    encode(_: MsgDeletePowerupResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePowerupResponse;
    fromJSON(_: any): MsgDeletePowerupResponse;
    toJSON(_: MsgDeletePowerupResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeletePowerupResponse>): MsgDeletePowerupResponse;
};
export declare const MsgSetCollectionMintStrategy: {
    encode(message: MsgSetCollectionMintStrategy, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetCollectionMintStrategy;
    fromJSON(object: any): MsgSetCollectionMintStrategy;
    toJSON(message: MsgSetCollectionMintStrategy): unknown;
    fromPartial(object: DeepPartial<MsgSetCollectionMintStrategy>): MsgSetCollectionMintStrategy;
};
export declare const MsgSetCollectionMintStrategyResponse: {
    encode(_: MsgSetCollectionMintStrategyResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetCollectionMintStrategyResponse;
    fromJSON(_: any): MsgSetCollectionMintStrategyResponse;
    toJSON(_: MsgSetCollectionMintStrategyResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetCollectionMintStrategyResponse>): MsgSetCollectionMintStrategyResponse;
};
export declare const MsgSendPower: {
    encode(message: MsgSendPower, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendPower;
    fromJSON(object: any): MsgSendPower;
    toJSON(message: MsgSendPower): unknown;
    fromPartial(object: DeepPartial<MsgSendPower>): MsgSendPower;
};
export declare const MsgSendPowerResponse: {
    encode(_: MsgSendPowerResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendPowerResponse;
    fromJSON(_: any): MsgSendPowerResponse;
    toJSON(_: MsgSendPowerResponse): unknown;
    fromPartial(_: DeepPartial<MsgSendPowerResponse>): MsgSendPowerResponse;
};
export declare const MsgFreePower: {
    encode(message: MsgFreePower, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgFreePower;
    fromJSON(object: any): MsgFreePower;
    toJSON(message: MsgFreePower): unknown;
    fromPartial(object: DeepPartial<MsgFreePower>): MsgFreePower;
};
export declare const MsgFreePowerResponse: {
    encode(_: MsgFreePowerResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgFreePowerResponse;
    fromJSON(_: any): MsgFreePowerResponse;
    toJSON(_: MsgFreePowerResponse): unknown;
    fromPartial(_: DeepPartial<MsgFreePowerResponse>): MsgFreePowerResponse;
};
export declare const MsgMint: {
    encode(message: MsgMint, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMint;
    fromJSON(object: any): MsgMint;
    toJSON(message: MsgMint): unknown;
    fromPartial(object: DeepPartial<MsgMint>): MsgMint;
};
export declare const MsgMintResponse: {
    encode(_: MsgMintResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMintResponse;
    fromJSON(_: any): MsgMintResponse;
    toJSON(_: MsgMintResponse): unknown;
    fromPartial(_: DeepPartial<MsgMintResponse>): MsgMintResponse;
};
export declare const MsgCreateClassTemplate: {
    encode(message: MsgCreateClassTemplate, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateClassTemplate;
    fromJSON(object: any): MsgCreateClassTemplate;
    toJSON(message: MsgCreateClassTemplate): unknown;
    fromPartial(object: DeepPartial<MsgCreateClassTemplate>): MsgCreateClassTemplate;
};
export declare const MsgCreateClassTemplateResponse: {
    encode(_: MsgCreateClassTemplateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateClassTemplateResponse;
    fromJSON(_: any): MsgCreateClassTemplateResponse;
    toJSON(_: MsgCreateClassTemplateResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateClassTemplateResponse>): MsgCreateClassTemplateResponse;
};
export declare const MsgUpdateClassTemplate: {
    encode(message: MsgUpdateClassTemplate, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateClassTemplate;
    fromJSON(object: any): MsgUpdateClassTemplate;
    toJSON(message: MsgUpdateClassTemplate): unknown;
    fromPartial(object: DeepPartial<MsgUpdateClassTemplate>): MsgUpdateClassTemplate;
};
export declare const MsgUpdateClassTemplateResponse: {
    encode(_: MsgUpdateClassTemplateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateClassTemplateResponse;
    fromJSON(_: any): MsgUpdateClassTemplateResponse;
    toJSON(_: MsgUpdateClassTemplateResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateClassTemplateResponse>): MsgUpdateClassTemplateResponse;
};
export declare const MsgDeleteClassTemplate: {
    encode(message: MsgDeleteClassTemplate, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteClassTemplate;
    fromJSON(object: any): MsgDeleteClassTemplate;
    toJSON(message: MsgDeleteClassTemplate): unknown;
    fromPartial(object: DeepPartial<MsgDeleteClassTemplate>): MsgDeleteClassTemplate;
};
export declare const MsgDeleteClassTemplateResponse: {
    encode(_: MsgDeleteClassTemplateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteClassTemplateResponse;
    fromJSON(_: any): MsgDeleteClassTemplateResponse;
    toJSON(_: MsgDeleteClassTemplateResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteClassTemplateResponse>): MsgDeleteClassTemplateResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateCollection(request: MsgCreateCollection): Promise<MsgCreateCollectionResponse>;
    UpdateCollection(request: MsgUpdateCollection): Promise<MsgUpdateCollectionResponse>;
    DeleteCollection(request: MsgDeleteCollection): Promise<MsgDeleteCollectionResponse>;
    CreateClass(request: MsgCreateClass): Promise<MsgCreateClassResponse>;
    UpdateClass(request: MsgUpdateClass): Promise<MsgUpdateClassResponse>;
    DeleteClass(request: MsgDeleteClass): Promise<MsgDeleteClassResponse>;
    CreateMintStrategy(request: MsgCreateMintStrategy): Promise<MsgCreateMintStrategyResponse>;
    UpdateMintStrategy(request: MsgUpdateMintStrategy): Promise<MsgUpdateMintStrategyResponse>;
    DeleteMintStrategy(request: MsgDeleteMintStrategy): Promise<MsgDeleteMintStrategyResponse>;
    CreateContribution(request: MsgCreateContribution): Promise<MsgCreateContributionResponse>;
    UpdateContribution(request: MsgUpdateContribution): Promise<MsgUpdateContributionResponse>;
    DeleteContribution(request: MsgDeleteContribution): Promise<MsgDeleteContributionResponse>;
    CreatePowerupTemplate(request: MsgCreatePowerupTemplate): Promise<MsgCreatePowerupTemplateResponse>;
    UpdatePowerupTemplate(request: MsgUpdatePowerupTemplate): Promise<MsgUpdatePowerupTemplateResponse>;
    DeletePowerupTemplate(request: MsgDeletePowerupTemplate): Promise<MsgDeletePowerupTemplateResponse>;
    CreatePowerup(request: MsgCreatePowerup): Promise<MsgCreatePowerupResponse>;
    UpdatePowerup(request: MsgUpdatePowerup): Promise<MsgUpdatePowerupResponse>;
    DeletePowerup(request: MsgDeletePowerup): Promise<MsgDeletePowerupResponse>;
    SetCollectionMintStrategy(request: MsgSetCollectionMintStrategy): Promise<MsgSetCollectionMintStrategyResponse>;
    SendPower(request: MsgSendPower): Promise<MsgSendPowerResponse>;
    FreePower(request: MsgFreePower): Promise<MsgFreePowerResponse>;
    Mint(request: MsgMint): Promise<MsgMintResponse>;
    CreateClassTemplate(request: MsgCreateClassTemplate): Promise<MsgCreateClassTemplateResponse>;
    UpdateClassTemplate(request: MsgUpdateClassTemplate): Promise<MsgUpdateClassTemplateResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteClassTemplate(request: MsgDeleteClassTemplate): Promise<MsgDeleteClassTemplateResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateCollection(request: MsgCreateCollection): Promise<MsgCreateCollectionResponse>;
    UpdateCollection(request: MsgUpdateCollection): Promise<MsgUpdateCollectionResponse>;
    DeleteCollection(request: MsgDeleteCollection): Promise<MsgDeleteCollectionResponse>;
    CreateClass(request: MsgCreateClass): Promise<MsgCreateClassResponse>;
    UpdateClass(request: MsgUpdateClass): Promise<MsgUpdateClassResponse>;
    DeleteClass(request: MsgDeleteClass): Promise<MsgDeleteClassResponse>;
    CreateMintStrategy(request: MsgCreateMintStrategy): Promise<MsgCreateMintStrategyResponse>;
    UpdateMintStrategy(request: MsgUpdateMintStrategy): Promise<MsgUpdateMintStrategyResponse>;
    DeleteMintStrategy(request: MsgDeleteMintStrategy): Promise<MsgDeleteMintStrategyResponse>;
    CreateContribution(request: MsgCreateContribution): Promise<MsgCreateContributionResponse>;
    UpdateContribution(request: MsgUpdateContribution): Promise<MsgUpdateContributionResponse>;
    DeleteContribution(request: MsgDeleteContribution): Promise<MsgDeleteContributionResponse>;
    CreatePowerupTemplate(request: MsgCreatePowerupTemplate): Promise<MsgCreatePowerupTemplateResponse>;
    UpdatePowerupTemplate(request: MsgUpdatePowerupTemplate): Promise<MsgUpdatePowerupTemplateResponse>;
    DeletePowerupTemplate(request: MsgDeletePowerupTemplate): Promise<MsgDeletePowerupTemplateResponse>;
    CreatePowerup(request: MsgCreatePowerup): Promise<MsgCreatePowerupResponse>;
    UpdatePowerup(request: MsgUpdatePowerup): Promise<MsgUpdatePowerupResponse>;
    DeletePowerup(request: MsgDeletePowerup): Promise<MsgDeletePowerupResponse>;
    SetCollectionMintStrategy(request: MsgSetCollectionMintStrategy): Promise<MsgSetCollectionMintStrategyResponse>;
    SendPower(request: MsgSendPower): Promise<MsgSendPowerResponse>;
    FreePower(request: MsgFreePower): Promise<MsgFreePowerResponse>;
    Mint(request: MsgMint): Promise<MsgMintResponse>;
    CreateClassTemplate(request: MsgCreateClassTemplate): Promise<MsgCreateClassTemplateResponse>;
    UpdateClassTemplate(request: MsgUpdateClassTemplate): Promise<MsgUpdateClassTemplateResponse>;
    DeleteClassTemplate(request: MsgDeleteClassTemplate): Promise<MsgDeleteClassTemplateResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
