import { Collection } from '../moonloop/collection';
import { Class } from '../moonloop/class';
import { MintStrategy } from '../moonloop/mint_strategy';
import { Contribution } from '../moonloop/contribution';
import { PowerupTemplate } from '../moonloop/powerup_template';
import { Powerup } from '../moonloop/powerup';
import { ClassTemplate } from '../moonloop/class_template';
import { CollectionOwner } from '../moonloop/collection_owner';
import { InstanceOwner } from '../moonloop/instance_owner';
import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "str11ngfello.moonloop.moonloop";
/** GenesisState defines the moonloop module's genesis state. */
export interface GenesisState {
    collectionList: Collection[];
    classList: Class[];
    mintStrategyList: MintStrategy[];
    contributionList: Contribution[];
    powerupTemplateList: PowerupTemplate[];
    powerupList: Powerup[];
    classTemplateList: ClassTemplate[];
    collectionOwnerList: CollectionOwner[];
    /** this line is used by starport scaffolding # genesis/proto/state */
    instanceOwnerList: InstanceOwner[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
