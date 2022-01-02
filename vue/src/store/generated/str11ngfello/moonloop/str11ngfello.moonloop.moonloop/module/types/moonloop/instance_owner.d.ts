import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "str11ngfello.moonloop.moonloop";
export interface InstanceOwner {
    index: string;
    instances: string[];
    creator: string;
}
export declare const InstanceOwner: {
    encode(message: InstanceOwner, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): InstanceOwner;
    fromJSON(object: any): InstanceOwner;
    toJSON(message: InstanceOwner): unknown;
    fromPartial(object: DeepPartial<InstanceOwner>): InstanceOwner;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
