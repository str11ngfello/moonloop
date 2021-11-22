import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "cosmonaut.moonloop.moonloop";
export interface MintStrategy {
    index: string;
    minters: string[];
    instanceLevels: number[];
    priceLevels: number[];
    paused: boolean;
    creator: string;
}
export declare const MintStrategy: {
    encode(message: MintStrategy, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MintStrategy;
    fromJSON(object: any): MintStrategy;
    toJSON(message: MintStrategy): unknown;
    fromPartial(object: DeepPartial<MintStrategy>): MintStrategy;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
