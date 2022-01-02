import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "str11ngfello.moonloop.moonloop";
export interface CollectionOwner {
    index: string;
    collections: string[];
    creator: string;
}
export declare const CollectionOwner: {
    encode(message: CollectionOwner, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CollectionOwner;
    fromJSON(object: any): CollectionOwner;
    toJSON(message: CollectionOwner): unknown;
    fromPartial(object: DeepPartial<CollectionOwner>): CollectionOwner;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
