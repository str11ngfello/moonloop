import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "cosmonaut.moonloop.moonloop";
export interface Class {
    collectionIndex: string;
    classIndex: string;
    name: string;
    description: string;
    mintStrategy: string;
    gltfHash: string;
    metadata: string;
    maxInstances: number;
    count: number;
    powerupTemplates: string[];
    creator: string;
    owner: string;
}
export declare const Class: {
    encode(message: Class, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Class;
    fromJSON(object: any): Class;
    toJSON(message: Class): unknown;
    fromPartial(object: DeepPartial<Class>): Class;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
