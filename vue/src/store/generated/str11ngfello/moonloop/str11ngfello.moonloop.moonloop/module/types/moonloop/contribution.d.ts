import { Writer, Reader } from 'protobufjs/minimal';
import { Coin } from '../cosmos/base/v1beta1/coin';
export declare const protobufPackage = "str11ngfello.moonloop.moonloop";
export interface Contribution {
    collectionIndex: string;
    classIndex: string;
    powerupTemplateIndex: string;
    instanceIndex: string;
    contributors: string[];
    amounts: Coin[];
    timestamps: number[];
    creator: string;
}
export declare const Contribution: {
    encode(message: Contribution, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Contribution;
    fromJSON(object: any): Contribution;
    toJSON(message: Contribution): unknown;
    fromPartial(object: DeepPartial<Contribution>): Contribution;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
