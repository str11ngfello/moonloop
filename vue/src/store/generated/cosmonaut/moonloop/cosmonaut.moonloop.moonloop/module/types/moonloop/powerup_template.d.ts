import { Coin } from '../cosmos/base/v1beta1/coin';
import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "cosmonaut.moonloop.moonloop";
export interface PowerupTemplate {
    collectionIndex: string;
    classIndex: string;
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
    feeRate: Coin | undefined;
    activationType: number;
    eventData: string;
    creator: string;
}
export declare const PowerupTemplate: {
    encode(message: PowerupTemplate, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): PowerupTemplate;
    fromJSON(object: any): PowerupTemplate;
    toJSON(message: PowerupTemplate): unknown;
    fromPartial(object: DeepPartial<PowerupTemplate>): PowerupTemplate;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
