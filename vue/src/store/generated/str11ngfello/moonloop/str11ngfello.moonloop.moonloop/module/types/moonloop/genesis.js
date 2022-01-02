/* eslint-disable */
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
export const protobufPackage = 'str11ngfello.moonloop.moonloop';
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.collectionList) {
            Collection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.classList) {
            Class.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.mintStrategyList) {
            MintStrategy.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.contributionList) {
            Contribution.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.powerupTemplateList) {
            PowerupTemplate.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.powerupList) {
            Powerup.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.classTemplateList) {
            ClassTemplate.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.collectionOwnerList) {
            CollectionOwner.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.instanceOwnerList) {
            InstanceOwner.encode(v, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.collectionList = [];
        message.classList = [];
        message.mintStrategyList = [];
        message.contributionList = [];
        message.powerupTemplateList = [];
        message.powerupList = [];
        message.classTemplateList = [];
        message.collectionOwnerList = [];
        message.instanceOwnerList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionList.push(Collection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.classList.push(Class.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.mintStrategyList.push(MintStrategy.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.contributionList.push(Contribution.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.powerupTemplateList.push(PowerupTemplate.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.powerupList.push(Powerup.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.classTemplateList.push(ClassTemplate.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.collectionOwnerList.push(CollectionOwner.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.instanceOwnerList.push(InstanceOwner.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.collectionList = [];
        message.classList = [];
        message.mintStrategyList = [];
        message.contributionList = [];
        message.powerupTemplateList = [];
        message.powerupList = [];
        message.classTemplateList = [];
        message.collectionOwnerList = [];
        message.instanceOwnerList = [];
        if (object.collectionList !== undefined && object.collectionList !== null) {
            for (const e of object.collectionList) {
                message.collectionList.push(Collection.fromJSON(e));
            }
        }
        if (object.classList !== undefined && object.classList !== null) {
            for (const e of object.classList) {
                message.classList.push(Class.fromJSON(e));
            }
        }
        if (object.mintStrategyList !== undefined && object.mintStrategyList !== null) {
            for (const e of object.mintStrategyList) {
                message.mintStrategyList.push(MintStrategy.fromJSON(e));
            }
        }
        if (object.contributionList !== undefined && object.contributionList !== null) {
            for (const e of object.contributionList) {
                message.contributionList.push(Contribution.fromJSON(e));
            }
        }
        if (object.powerupTemplateList !== undefined && object.powerupTemplateList !== null) {
            for (const e of object.powerupTemplateList) {
                message.powerupTemplateList.push(PowerupTemplate.fromJSON(e));
            }
        }
        if (object.powerupList !== undefined && object.powerupList !== null) {
            for (const e of object.powerupList) {
                message.powerupList.push(Powerup.fromJSON(e));
            }
        }
        if (object.classTemplateList !== undefined && object.classTemplateList !== null) {
            for (const e of object.classTemplateList) {
                message.classTemplateList.push(ClassTemplate.fromJSON(e));
            }
        }
        if (object.collectionOwnerList !== undefined && object.collectionOwnerList !== null) {
            for (const e of object.collectionOwnerList) {
                message.collectionOwnerList.push(CollectionOwner.fromJSON(e));
            }
        }
        if (object.instanceOwnerList !== undefined && object.instanceOwnerList !== null) {
            for (const e of object.instanceOwnerList) {
                message.instanceOwnerList.push(InstanceOwner.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.collectionList) {
            obj.collectionList = message.collectionList.map((e) => (e ? Collection.toJSON(e) : undefined));
        }
        else {
            obj.collectionList = [];
        }
        if (message.classList) {
            obj.classList = message.classList.map((e) => (e ? Class.toJSON(e) : undefined));
        }
        else {
            obj.classList = [];
        }
        if (message.mintStrategyList) {
            obj.mintStrategyList = message.mintStrategyList.map((e) => (e ? MintStrategy.toJSON(e) : undefined));
        }
        else {
            obj.mintStrategyList = [];
        }
        if (message.contributionList) {
            obj.contributionList = message.contributionList.map((e) => (e ? Contribution.toJSON(e) : undefined));
        }
        else {
            obj.contributionList = [];
        }
        if (message.powerupTemplateList) {
            obj.powerupTemplateList = message.powerupTemplateList.map((e) => (e ? PowerupTemplate.toJSON(e) : undefined));
        }
        else {
            obj.powerupTemplateList = [];
        }
        if (message.powerupList) {
            obj.powerupList = message.powerupList.map((e) => (e ? Powerup.toJSON(e) : undefined));
        }
        else {
            obj.powerupList = [];
        }
        if (message.classTemplateList) {
            obj.classTemplateList = message.classTemplateList.map((e) => (e ? ClassTemplate.toJSON(e) : undefined));
        }
        else {
            obj.classTemplateList = [];
        }
        if (message.collectionOwnerList) {
            obj.collectionOwnerList = message.collectionOwnerList.map((e) => (e ? CollectionOwner.toJSON(e) : undefined));
        }
        else {
            obj.collectionOwnerList = [];
        }
        if (message.instanceOwnerList) {
            obj.instanceOwnerList = message.instanceOwnerList.map((e) => (e ? InstanceOwner.toJSON(e) : undefined));
        }
        else {
            obj.instanceOwnerList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.collectionList = [];
        message.classList = [];
        message.mintStrategyList = [];
        message.contributionList = [];
        message.powerupTemplateList = [];
        message.powerupList = [];
        message.classTemplateList = [];
        message.collectionOwnerList = [];
        message.instanceOwnerList = [];
        if (object.collectionList !== undefined && object.collectionList !== null) {
            for (const e of object.collectionList) {
                message.collectionList.push(Collection.fromPartial(e));
            }
        }
        if (object.classList !== undefined && object.classList !== null) {
            for (const e of object.classList) {
                message.classList.push(Class.fromPartial(e));
            }
        }
        if (object.mintStrategyList !== undefined && object.mintStrategyList !== null) {
            for (const e of object.mintStrategyList) {
                message.mintStrategyList.push(MintStrategy.fromPartial(e));
            }
        }
        if (object.contributionList !== undefined && object.contributionList !== null) {
            for (const e of object.contributionList) {
                message.contributionList.push(Contribution.fromPartial(e));
            }
        }
        if (object.powerupTemplateList !== undefined && object.powerupTemplateList !== null) {
            for (const e of object.powerupTemplateList) {
                message.powerupTemplateList.push(PowerupTemplate.fromPartial(e));
            }
        }
        if (object.powerupList !== undefined && object.powerupList !== null) {
            for (const e of object.powerupList) {
                message.powerupList.push(Powerup.fromPartial(e));
            }
        }
        if (object.classTemplateList !== undefined && object.classTemplateList !== null) {
            for (const e of object.classTemplateList) {
                message.classTemplateList.push(ClassTemplate.fromPartial(e));
            }
        }
        if (object.collectionOwnerList !== undefined && object.collectionOwnerList !== null) {
            for (const e of object.collectionOwnerList) {
                message.collectionOwnerList.push(CollectionOwner.fromPartial(e));
            }
        }
        if (object.instanceOwnerList !== undefined && object.instanceOwnerList !== null) {
            for (const e of object.instanceOwnerList) {
                message.instanceOwnerList.push(InstanceOwner.fromPartial(e));
            }
        }
        return message;
    }
};
