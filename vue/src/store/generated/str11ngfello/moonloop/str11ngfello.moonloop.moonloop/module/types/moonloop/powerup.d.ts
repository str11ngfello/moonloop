import { Coin } from '../cosmos/base/v1beta1/coin';
import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "str11ngfello.moonloop.moonloop";
export interface Powerup {
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
    creator: string;
}
export declare const Powerup: {
    encode(message: Powerup, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Powerup;
    fromJSON(object: any): Powerup;
    toJSON(message: Powerup): unknown;
    fromPartial(object: DeepPartial<Powerup>): Powerup;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
