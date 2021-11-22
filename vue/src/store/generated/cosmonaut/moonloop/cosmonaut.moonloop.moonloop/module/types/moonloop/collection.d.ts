import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "cosmonaut.moonloop.moonloop";
export interface Collection {
    index: string;
    name: string;
    description: string;
    mintStrategy: string;
    classes: string[];
    creator: string;
}
export declare const Collection: {
    encode(message: Collection, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Collection;
    fromJSON(object: any): Collection;
    toJSON(message: Collection): unknown;
    fromPartial(object: DeepPartial<Collection>): Collection;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
