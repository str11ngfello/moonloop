import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "str11ngfello.moonloop.moonloop";
export interface ClassTemplate {
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
    creator: string;
}
export declare const ClassTemplate: {
    encode(message: ClassTemplate, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ClassTemplate;
    fromJSON(object: any): ClassTemplate;
    toJSON(message: ClassTemplate): unknown;
    fromPartial(object: DeepPartial<ClassTemplate>): ClassTemplate;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
