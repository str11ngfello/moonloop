/* eslint-disable */
import { Collection } from '../moonloop/collection';
import { Class } from '../moonloop/class';
import { MintStrategy } from '../moonloop/mint_strategy';
import { Contribution } from '../moonloop/contribution';
import { PowerupTemplate } from '../moonloop/powerup_template';
import { Powerup } from '../moonloop/powerup';
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'cosmonaut.moonloop.moonloop';
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
        return message;
    }
};
