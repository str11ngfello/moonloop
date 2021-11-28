/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
import { Coin } from '../cosmos/base/v1beta1/coin';
export const protobufPackage = 'str11ngfello.moonloop.moonloop';
const baseMsgCreateCollection = { creator: '', index: '', name: '', description: '', mintStrategy: '', classes: '' };
export const MsgCreateCollection = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.mintStrategy !== '') {
            writer.uint32(42).string(message.mintStrategy);
        }
        for (const v of message.classes) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCollection };
        message.classes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.mintStrategy = reader.string();
                    break;
                case 6:
                    message.classes.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateCollection };
        message.classes = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
            message.mintStrategy = String(object.mintStrategy);
        }
        else {
            message.mintStrategy = '';
        }
        if (object.classes !== undefined && object.classes !== null) {
            for (const e of object.classes) {
                message.classes.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.mintStrategy !== undefined && (obj.mintStrategy = message.mintStrategy);
        if (message.classes) {
            obj.classes = message.classes.map((e) => e);
        }
        else {
            obj.classes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateCollection };
        message.classes = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
            message.mintStrategy = object.mintStrategy;
        }
        else {
            message.mintStrategy = '';
        }
        if (object.classes !== undefined && object.classes !== null) {
            for (const e of object.classes) {
                message.classes.push(e);
            }
        }
        return message;
    }
};
const baseMsgCreateCollectionResponse = {};
export const MsgCreateCollectionResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCollectionResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateCollectionResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateCollectionResponse };
        return message;
    }
};
const baseMsgUpdateCollection = { creator: '', index: '', name: '', description: '', mintStrategy: '', classes: '' };
export const MsgUpdateCollection = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.mintStrategy !== '') {
            writer.uint32(42).string(message.mintStrategy);
        }
        for (const v of message.classes) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateCollection };
        message.classes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.mintStrategy = reader.string();
                    break;
                case 6:
                    message.classes.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateCollection };
        message.classes = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
            message.mintStrategy = String(object.mintStrategy);
        }
        else {
            message.mintStrategy = '';
        }
        if (object.classes !== undefined && object.classes !== null) {
            for (const e of object.classes) {
                message.classes.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.mintStrategy !== undefined && (obj.mintStrategy = message.mintStrategy);
        if (message.classes) {
            obj.classes = message.classes.map((e) => e);
        }
        else {
            obj.classes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateCollection };
        message.classes = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
            message.mintStrategy = object.mintStrategy;
        }
        else {
            message.mintStrategy = '';
        }
        if (object.classes !== undefined && object.classes !== null) {
            for (const e of object.classes) {
                message.classes.push(e);
            }
        }
        return message;
    }
};
const baseMsgUpdateCollectionResponse = {};
export const MsgUpdateCollectionResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateCollectionResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateCollectionResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateCollectionResponse };
        return message;
    }
};
const baseMsgDeleteCollection = { creator: '', index: '' };
export const MsgDeleteCollection = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteCollection };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteCollection };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteCollection };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseMsgDeleteCollectionResponse = {};
export const MsgDeleteCollectionResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteCollectionResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteCollectionResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteCollectionResponse };
        return message;
    }
};
const baseMsgCreateClass = { creator: '', collectionIndex: '', classTemplateIndex: '', instanceIndex: '', owner: '' };
export const MsgCreateClass = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionIndex !== '') {
            writer.uint32(18).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(26).string(message.classTemplateIndex);
        }
        if (message.instanceIndex !== '') {
            writer.uint32(34).string(message.instanceIndex);
        }
        if (message.owner !== '') {
            writer.uint32(42).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateClass };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionIndex = reader.string();
                    break;
                case 3:
                    message.classTemplateIndex = reader.string();
                    break;
                case 4:
                    message.instanceIndex = reader.string();
                    break;
                case 5:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateClass };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = String(object.collectionIndex);
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = String(object.classTemplateIndex);
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
            message.instanceIndex = String(object.instanceIndex);
        }
        else {
            message.instanceIndex = '';
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateClass };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = object.collectionIndex;
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = object.classTemplateIndex;
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
            message.instanceIndex = object.instanceIndex;
        }
        else {
            message.instanceIndex = '';
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        return message;
    }
};
const baseMsgCreateClassResponse = {};
export const MsgCreateClassResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateClassResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateClassResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateClassResponse };
        return message;
    }
};
const baseMsgUpdateClass = { creator: '', collectionIndex: '', classTemplateIndex: '', instanceIndex: '', owner: '' };
export const MsgUpdateClass = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionIndex !== '') {
            writer.uint32(18).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(26).string(message.classTemplateIndex);
        }
        if (message.instanceIndex !== '') {
            writer.uint32(34).string(message.instanceIndex);
        }
        if (message.owner !== '') {
            writer.uint32(42).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateClass };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionIndex = reader.string();
                    break;
                case 3:
                    message.classTemplateIndex = reader.string();
                    break;
                case 4:
                    message.instanceIndex = reader.string();
                    break;
                case 5:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateClass };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = String(object.collectionIndex);
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = String(object.classTemplateIndex);
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
            message.instanceIndex = String(object.instanceIndex);
        }
        else {
            message.instanceIndex = '';
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateClass };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = object.collectionIndex;
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = object.classTemplateIndex;
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
            message.instanceIndex = object.instanceIndex;
        }
        else {
            message.instanceIndex = '';
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        return message;
    }
};
const baseMsgUpdateClassResponse = {};
export const MsgUpdateClassResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateClassResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateClassResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateClassResponse };
        return message;
    }
};
const baseMsgDeleteClass = { creator: '', collectionIndex: '', classTemplateIndex: '', instanceIndex: '' };
export const MsgDeleteClass = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionIndex !== '') {
            writer.uint32(18).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(26).string(message.classTemplateIndex);
        }
        if (message.instanceIndex !== '') {
            writer.uint32(34).string(message.instanceIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteClass };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionIndex = reader.string();
                    break;
                case 3:
                    message.classTemplateIndex = reader.string();
                    break;
                case 4:
                    message.instanceIndex = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteClass };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = String(object.collectionIndex);
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = String(object.classTemplateIndex);
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
            message.instanceIndex = String(object.instanceIndex);
        }
        else {
            message.instanceIndex = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteClass };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = object.collectionIndex;
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = object.classTemplateIndex;
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
            message.instanceIndex = object.instanceIndex;
        }
        else {
            message.instanceIndex = '';
        }
        return message;
    }
};
const baseMsgDeleteClassResponse = {};
export const MsgDeleteClassResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteClassResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteClassResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteClassResponse };
        return message;
    }
};
const baseMsgCreateMintStrategy = { creator: '', index: '', minters: '', instanceLevels: 0, priceLevels: 0, paused: false };
export const MsgCreateMintStrategy = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        for (const v of message.minters) {
            writer.uint32(26).string(v);
        }
        writer.uint32(34).fork();
        for (const v of message.instanceLevels) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(42).fork();
        for (const v of message.priceLevels) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.paused === true) {
            writer.uint32(48).bool(message.paused);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateMintStrategy };
        message.minters = [];
        message.instanceLevels = [];
        message.priceLevels = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.minters.push(reader.string());
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.instanceLevels.push(reader.int32());
                        }
                    }
                    else {
                        message.instanceLevels.push(reader.int32());
                    }
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.priceLevels.push(reader.int32());
                        }
                    }
                    else {
                        message.priceLevels.push(reader.int32());
                    }
                    break;
                case 6:
                    message.paused = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateMintStrategy };
        message.minters = [];
        message.instanceLevels = [];
        message.priceLevels = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.minters !== undefined && object.minters !== null) {
            for (const e of object.minters) {
                message.minters.push(String(e));
            }
        }
        if (object.instanceLevels !== undefined && object.instanceLevels !== null) {
            for (const e of object.instanceLevels) {
                message.instanceLevels.push(Number(e));
            }
        }
        if (object.priceLevels !== undefined && object.priceLevels !== null) {
            for (const e of object.priceLevels) {
                message.priceLevels.push(Number(e));
            }
        }
        if (object.paused !== undefined && object.paused !== null) {
            message.paused = Boolean(object.paused);
        }
        else {
            message.paused = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        if (message.minters) {
            obj.minters = message.minters.map((e) => e);
        }
        else {
            obj.minters = [];
        }
        if (message.instanceLevels) {
            obj.instanceLevels = message.instanceLevels.map((e) => e);
        }
        else {
            obj.instanceLevels = [];
        }
        if (message.priceLevels) {
            obj.priceLevels = message.priceLevels.map((e) => e);
        }
        else {
            obj.priceLevels = [];
        }
        message.paused !== undefined && (obj.paused = message.paused);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateMintStrategy };
        message.minters = [];
        message.instanceLevels = [];
        message.priceLevels = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.minters !== undefined && object.minters !== null) {
            for (const e of object.minters) {
                message.minters.push(e);
            }
        }
        if (object.instanceLevels !== undefined && object.instanceLevels !== null) {
            for (const e of object.instanceLevels) {
                message.instanceLevels.push(e);
            }
        }
        if (object.priceLevels !== undefined && object.priceLevels !== null) {
            for (const e of object.priceLevels) {
                message.priceLevels.push(e);
            }
        }
        if (object.paused !== undefined && object.paused !== null) {
            message.paused = object.paused;
        }
        else {
            message.paused = false;
        }
        return message;
    }
};
const baseMsgCreateMintStrategyResponse = {};
export const MsgCreateMintStrategyResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateMintStrategyResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateMintStrategyResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateMintStrategyResponse };
        return message;
    }
};
const baseMsgUpdateMintStrategy = { creator: '', index: '', minters: '', instanceLevels: 0, priceLevels: 0, paused: false };
export const MsgUpdateMintStrategy = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        for (const v of message.minters) {
            writer.uint32(26).string(v);
        }
        writer.uint32(34).fork();
        for (const v of message.instanceLevels) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(42).fork();
        for (const v of message.priceLevels) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.paused === true) {
            writer.uint32(48).bool(message.paused);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateMintStrategy };
        message.minters = [];
        message.instanceLevels = [];
        message.priceLevels = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.minters.push(reader.string());
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.instanceLevels.push(reader.int32());
                        }
                    }
                    else {
                        message.instanceLevels.push(reader.int32());
                    }
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.priceLevels.push(reader.int32());
                        }
                    }
                    else {
                        message.priceLevels.push(reader.int32());
                    }
                    break;
                case 6:
                    message.paused = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateMintStrategy };
        message.minters = [];
        message.instanceLevels = [];
        message.priceLevels = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.minters !== undefined && object.minters !== null) {
            for (const e of object.minters) {
                message.minters.push(String(e));
            }
        }
        if (object.instanceLevels !== undefined && object.instanceLevels !== null) {
            for (const e of object.instanceLevels) {
                message.instanceLevels.push(Number(e));
            }
        }
        if (object.priceLevels !== undefined && object.priceLevels !== null) {
            for (const e of object.priceLevels) {
                message.priceLevels.push(Number(e));
            }
        }
        if (object.paused !== undefined && object.paused !== null) {
            message.paused = Boolean(object.paused);
        }
        else {
            message.paused = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        if (message.minters) {
            obj.minters = message.minters.map((e) => e);
        }
        else {
            obj.minters = [];
        }
        if (message.instanceLevels) {
            obj.instanceLevels = message.instanceLevels.map((e) => e);
        }
        else {
            obj.instanceLevels = [];
        }
        if (message.priceLevels) {
            obj.priceLevels = message.priceLevels.map((e) => e);
        }
        else {
            obj.priceLevels = [];
        }
        message.paused !== undefined && (obj.paused = message.paused);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateMintStrategy };
        message.minters = [];
        message.instanceLevels = [];
        message.priceLevels = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.minters !== undefined && object.minters !== null) {
            for (const e of object.minters) {
                message.minters.push(e);
            }
        }
        if (object.instanceLevels !== undefined && object.instanceLevels !== null) {
            for (const e of object.instanceLevels) {
                message.instanceLevels.push(e);
            }
        }
        if (object.priceLevels !== undefined && object.priceLevels !== null) {
            for (const e of object.priceLevels) {
                message.priceLevels.push(e);
            }
        }
        if (object.paused !== undefined && object.paused !== null) {
            message.paused = object.paused;
        }
        else {
            message.paused = false;
        }
        return message;
    }
};
const baseMsgUpdateMintStrategyResponse = {};
export const MsgUpdateMintStrategyResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateMintStrategyResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateMintStrategyResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateMintStrategyResponse };
        return message;
    }
};
const baseMsgDeleteMintStrategy = { creator: '', index: '' };
export const MsgDeleteMintStrategy = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteMintStrategy };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteMintStrategy };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteMintStrategy };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseMsgDeleteMintStrategyResponse = {};
export const MsgDeleteMintStrategyResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteMintStrategyResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteMintStrategyResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteMintStrategyResponse };
        return message;
    }
};
const baseMsgCreateContribution = {
    creator: '',
    collectionIndex: '',
    classTemplateIndex: '',
    powerupTemplateIndex: '',
    instanceIndex: '',
    contributors: ''
};
export const MsgCreateContribution = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionIndex !== '') {
            writer.uint32(18).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(26).string(message.classTemplateIndex);
        }
        if (message.powerupTemplateIndex !== '') {
            writer.uint32(34).string(message.powerupTemplateIndex);
        }
        if (message.instanceIndex !== '') {
            writer.uint32(42).string(message.instanceIndex);
        }
        for (const v of message.contributors) {
            writer.uint32(50).string(v);
        }
        for (const v of message.amounts) {
            Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateContribution };
        message.contributors = [];
        message.amounts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionIndex = reader.string();
                    break;
                case 3:
                    message.classTemplateIndex = reader.string();
                    break;
                case 4:
                    message.powerupTemplateIndex = reader.string();
                    break;
                case 5:
                    message.instanceIndex = reader.string();
                    break;
                case 6:
                    message.contributors.push(reader.string());
                    break;
                case 7:
                    message.amounts.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateContribution };
        message.contributors = [];
        message.amounts = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = String(object.collectionIndex);
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = String(object.classTemplateIndex);
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
            message.powerupTemplateIndex = String(object.powerupTemplateIndex);
        }
        else {
            message.powerupTemplateIndex = '';
        }
        if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
            message.instanceIndex = String(object.instanceIndex);
        }
        else {
            message.instanceIndex = '';
        }
        if (object.contributors !== undefined && object.contributors !== null) {
            for (const e of object.contributors) {
                message.contributors.push(String(e));
            }
        }
        if (object.amounts !== undefined && object.amounts !== null) {
            for (const e of object.amounts) {
                message.amounts.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex);
        message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex);
        if (message.contributors) {
            obj.contributors = message.contributors.map((e) => e);
        }
        else {
            obj.contributors = [];
        }
        if (message.amounts) {
            obj.amounts = message.amounts.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.amounts = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateContribution };
        message.contributors = [];
        message.amounts = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = object.collectionIndex;
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = object.classTemplateIndex;
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
            message.powerupTemplateIndex = object.powerupTemplateIndex;
        }
        else {
            message.powerupTemplateIndex = '';
        }
        if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
            message.instanceIndex = object.instanceIndex;
        }
        else {
            message.instanceIndex = '';
        }
        if (object.contributors !== undefined && object.contributors !== null) {
            for (const e of object.contributors) {
                message.contributors.push(e);
            }
        }
        if (object.amounts !== undefined && object.amounts !== null) {
            for (const e of object.amounts) {
                message.amounts.push(Coin.fromPartial(e));
            }
        }
        return message;
    }
};
const baseMsgCreateContributionResponse = {};
export const MsgCreateContributionResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateContributionResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateContributionResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateContributionResponse };
        return message;
    }
};
const baseMsgUpdateContribution = {
    creator: '',
    collectionIndex: '',
    classTemplateIndex: '',
    powerupTemplateIndex: '',
    instanceIndex: '',
    contributors: ''
};
export const MsgUpdateContribution = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionIndex !== '') {
            writer.uint32(18).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(26).string(message.classTemplateIndex);
        }
        if (message.powerupTemplateIndex !== '') {
            writer.uint32(34).string(message.powerupTemplateIndex);
        }
        if (message.instanceIndex !== '') {
            writer.uint32(42).string(message.instanceIndex);
        }
        for (const v of message.contributors) {
            writer.uint32(50).string(v);
        }
        for (const v of message.amounts) {
            Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateContribution };
        message.contributors = [];
        message.amounts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionIndex = reader.string();
                    break;
                case 3:
                    message.classTemplateIndex = reader.string();
                    break;
                case 4:
                    message.powerupTemplateIndex = reader.string();
                    break;
                case 5:
                    message.instanceIndex = reader.string();
                    break;
                case 6:
                    message.contributors.push(reader.string());
                    break;
                case 7:
                    message.amounts.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateContribution };
        message.contributors = [];
        message.amounts = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = String(object.collectionIndex);
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = String(object.classTemplateIndex);
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
            message.powerupTemplateIndex = String(object.powerupTemplateIndex);
        }
        else {
            message.powerupTemplateIndex = '';
        }
        if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
            message.instanceIndex = String(object.instanceIndex);
        }
        else {
            message.instanceIndex = '';
        }
        if (object.contributors !== undefined && object.contributors !== null) {
            for (const e of object.contributors) {
                message.contributors.push(String(e));
            }
        }
        if (object.amounts !== undefined && object.amounts !== null) {
            for (const e of object.amounts) {
                message.amounts.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex);
        message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex);
        if (message.contributors) {
            obj.contributors = message.contributors.map((e) => e);
        }
        else {
            obj.contributors = [];
        }
        if (message.amounts) {
            obj.amounts = message.amounts.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.amounts = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateContribution };
        message.contributors = [];
        message.amounts = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = object.collectionIndex;
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = object.classTemplateIndex;
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
            message.powerupTemplateIndex = object.powerupTemplateIndex;
        }
        else {
            message.powerupTemplateIndex = '';
        }
        if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
            message.instanceIndex = object.instanceIndex;
        }
        else {
            message.instanceIndex = '';
        }
        if (object.contributors !== undefined && object.contributors !== null) {
            for (const e of object.contributors) {
                message.contributors.push(e);
            }
        }
        if (object.amounts !== undefined && object.amounts !== null) {
            for (const e of object.amounts) {
                message.amounts.push(Coin.fromPartial(e));
            }
        }
        return message;
    }
};
const baseMsgUpdateContributionResponse = {};
export const MsgUpdateContributionResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateContributionResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateContributionResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateContributionResponse };
        return message;
    }
};
const baseMsgDeleteContribution = { creator: '', collectionIndex: '', classTemplateIndex: '', powerupTemplateIndex: '', instanceIndex: '' };
export const MsgDeleteContribution = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionIndex !== '') {
            writer.uint32(18).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(26).string(message.classTemplateIndex);
        }
        if (message.powerupTemplateIndex !== '') {
            writer.uint32(34).string(message.powerupTemplateIndex);
        }
        if (message.instanceIndex !== '') {
            writer.uint32(42).string(message.instanceIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteContribution };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionIndex = reader.string();
                    break;
                case 3:
                    message.classTemplateIndex = reader.string();
                    break;
                case 4:
                    message.powerupTemplateIndex = reader.string();
                    break;
                case 5:
                    message.instanceIndex = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteContribution };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = String(object.collectionIndex);
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = String(object.classTemplateIndex);
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
            message.powerupTemplateIndex = String(object.powerupTemplateIndex);
        }
        else {
            message.powerupTemplateIndex = '';
        }
        if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
            message.instanceIndex = String(object.instanceIndex);
        }
        else {
            message.instanceIndex = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex);
        message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteContribution };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = object.collectionIndex;
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = object.classTemplateIndex;
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
            message.powerupTemplateIndex = object.powerupTemplateIndex;
        }
        else {
            message.powerupTemplateIndex = '';
        }
        if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
            message.instanceIndex = object.instanceIndex;
        }
        else {
            message.instanceIndex = '';
        }
        return message;
    }
};
const baseMsgDeleteContributionResponse = {};
export const MsgDeleteContributionResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteContributionResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteContributionResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteContributionResponse };
        return message;
    }
};
const baseMsgCreatePowerupTemplate = {
    creator: '',
    collectionIndex: '',
    classTemplateIndex: '',
    powerupTemplateIndex: '',
    name: '',
    description: '',
    count: 0,
    duration: 0,
    maxDuration: 0,
    refundDuration: 0,
    maxActivations: 0,
    coolDownDuration: 0,
    activationType: 0,
    eventData: ''
};
export const MsgCreatePowerupTemplate = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionIndex !== '') {
            writer.uint32(18).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(26).string(message.classTemplateIndex);
        }
        if (message.powerupTemplateIndex !== '') {
            writer.uint32(34).string(message.powerupTemplateIndex);
        }
        if (message.name !== '') {
            writer.uint32(42).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(50).string(message.description);
        }
        if (message.count !== 0) {
            writer.uint32(56).int32(message.count);
        }
        if (message.activationBalance !== undefined) {
            Coin.encode(message.activationBalance, writer.uint32(66).fork()).ldelim();
        }
        if (message.maxBalance !== undefined) {
            Coin.encode(message.maxBalance, writer.uint32(74).fork()).ldelim();
        }
        if (message.duration !== 0) {
            writer.uint32(80).int32(message.duration);
        }
        if (message.maxDuration !== 0) {
            writer.uint32(88).int32(message.maxDuration);
        }
        if (message.refundDuration !== 0) {
            writer.uint32(96).int32(message.refundDuration);
        }
        if (message.maxActivations !== 0) {
            writer.uint32(104).int32(message.maxActivations);
        }
        if (message.coolDownDuration !== 0) {
            writer.uint32(112).int32(message.coolDownDuration);
        }
        if (message.rechargeRate !== undefined) {
            Coin.encode(message.rechargeRate, writer.uint32(122).fork()).ldelim();
        }
        if (message.feeRate !== undefined) {
            Coin.encode(message.feeRate, writer.uint32(130).fork()).ldelim();
        }
        if (message.activationType !== 0) {
            writer.uint32(136).int32(message.activationType);
        }
        if (message.eventData !== '') {
            writer.uint32(146).string(message.eventData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePowerupTemplate };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionIndex = reader.string();
                    break;
                case 3:
                    message.classTemplateIndex = reader.string();
                    break;
                case 4:
                    message.powerupTemplateIndex = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    message.count = reader.int32();
                    break;
                case 8:
                    message.activationBalance = Coin.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.maxBalance = Coin.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.duration = reader.int32();
                    break;
                case 11:
                    message.maxDuration = reader.int32();
                    break;
                case 12:
                    message.refundDuration = reader.int32();
                    break;
                case 13:
                    message.maxActivations = reader.int32();
                    break;
                case 14:
                    message.coolDownDuration = reader.int32();
                    break;
                case 15:
                    message.rechargeRate = Coin.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.feeRate = Coin.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.activationType = reader.int32();
                    break;
                case 18:
                    message.eventData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreatePowerupTemplate };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = String(object.collectionIndex);
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = String(object.classTemplateIndex);
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
            message.powerupTemplateIndex = String(object.powerupTemplateIndex);
        }
        else {
            message.powerupTemplateIndex = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = Number(object.count);
        }
        else {
            message.count = 0;
        }
        if (object.activationBalance !== undefined && object.activationBalance !== null) {
            message.activationBalance = Coin.fromJSON(object.activationBalance);
        }
        else {
            message.activationBalance = undefined;
        }
        if (object.maxBalance !== undefined && object.maxBalance !== null) {
            message.maxBalance = Coin.fromJSON(object.maxBalance);
        }
        else {
            message.maxBalance = undefined;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Number(object.duration);
        }
        else {
            message.duration = 0;
        }
        if (object.maxDuration !== undefined && object.maxDuration !== null) {
            message.maxDuration = Number(object.maxDuration);
        }
        else {
            message.maxDuration = 0;
        }
        if (object.refundDuration !== undefined && object.refundDuration !== null) {
            message.refundDuration = Number(object.refundDuration);
        }
        else {
            message.refundDuration = 0;
        }
        if (object.maxActivations !== undefined && object.maxActivations !== null) {
            message.maxActivations = Number(object.maxActivations);
        }
        else {
            message.maxActivations = 0;
        }
        if (object.coolDownDuration !== undefined && object.coolDownDuration !== null) {
            message.coolDownDuration = Number(object.coolDownDuration);
        }
        else {
            message.coolDownDuration = 0;
        }
        if (object.rechargeRate !== undefined && object.rechargeRate !== null) {
            message.rechargeRate = Coin.fromJSON(object.rechargeRate);
        }
        else {
            message.rechargeRate = undefined;
        }
        if (object.feeRate !== undefined && object.feeRate !== null) {
            message.feeRate = Coin.fromJSON(object.feeRate);
        }
        else {
            message.feeRate = undefined;
        }
        if (object.activationType !== undefined && object.activationType !== null) {
            message.activationType = Number(object.activationType);
        }
        else {
            message.activationType = 0;
        }
        if (object.eventData !== undefined && object.eventData !== null) {
            message.eventData = String(object.eventData);
        }
        else {
            message.eventData = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.count !== undefined && (obj.count = message.count);
        message.activationBalance !== undefined && (obj.activationBalance = message.activationBalance ? Coin.toJSON(message.activationBalance) : undefined);
        message.maxBalance !== undefined && (obj.maxBalance = message.maxBalance ? Coin.toJSON(message.maxBalance) : undefined);
        message.duration !== undefined && (obj.duration = message.duration);
        message.maxDuration !== undefined && (obj.maxDuration = message.maxDuration);
        message.refundDuration !== undefined && (obj.refundDuration = message.refundDuration);
        message.maxActivations !== undefined && (obj.maxActivations = message.maxActivations);
        message.coolDownDuration !== undefined && (obj.coolDownDuration = message.coolDownDuration);
        message.rechargeRate !== undefined && (obj.rechargeRate = message.rechargeRate ? Coin.toJSON(message.rechargeRate) : undefined);
        message.feeRate !== undefined && (obj.feeRate = message.feeRate ? Coin.toJSON(message.feeRate) : undefined);
        message.activationType !== undefined && (obj.activationType = message.activationType);
        message.eventData !== undefined && (obj.eventData = message.eventData);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreatePowerupTemplate };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = object.collectionIndex;
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = object.classTemplateIndex;
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
            message.powerupTemplateIndex = object.powerupTemplateIndex;
        }
        else {
            message.powerupTemplateIndex = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = object.count;
        }
        else {
            message.count = 0;
        }
        if (object.activationBalance !== undefined && object.activationBalance !== null) {
            message.activationBalance = Coin.fromPartial(object.activationBalance);
        }
        else {
            message.activationBalance = undefined;
        }
        if (object.maxBalance !== undefined && object.maxBalance !== null) {
            message.maxBalance = Coin.fromPartial(object.maxBalance);
        }
        else {
            message.maxBalance = undefined;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = object.duration;
        }
        else {
            message.duration = 0;
        }
        if (object.maxDuration !== undefined && object.maxDuration !== null) {
            message.maxDuration = object.maxDuration;
        }
        else {
            message.maxDuration = 0;
        }
        if (object.refundDuration !== undefined && object.refundDuration !== null) {
            message.refundDuration = object.refundDuration;
        }
        else {
            message.refundDuration = 0;
        }
        if (object.maxActivations !== undefined && object.maxActivations !== null) {
            message.maxActivations = object.maxActivations;
        }
        else {
            message.maxActivations = 0;
        }
        if (object.coolDownDuration !== undefined && object.coolDownDuration !== null) {
            message.coolDownDuration = object.coolDownDuration;
        }
        else {
            message.coolDownDuration = 0;
        }
        if (object.rechargeRate !== undefined && object.rechargeRate !== null) {
            message.rechargeRate = Coin.fromPartial(object.rechargeRate);
        }
        else {
            message.rechargeRate = undefined;
        }
        if (object.feeRate !== undefined && object.feeRate !== null) {
            message.feeRate = Coin.fromPartial(object.feeRate);
        }
        else {
            message.feeRate = undefined;
        }
        if (object.activationType !== undefined && object.activationType !== null) {
            message.activationType = object.activationType;
        }
        else {
            message.activationType = 0;
        }
        if (object.eventData !== undefined && object.eventData !== null) {
            message.eventData = object.eventData;
        }
        else {
            message.eventData = '';
        }
        return message;
    }
};
const baseMsgCreatePowerupTemplateResponse = {};
export const MsgCreatePowerupTemplateResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePowerupTemplateResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreatePowerupTemplateResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreatePowerupTemplateResponse };
        return message;
    }
};
const baseMsgUpdatePowerupTemplate = {
    creator: '',
    collectionIndex: '',
    classTemplateIndex: '',
    powerupTemplateIndex: '',
    name: '',
    description: '',
    count: 0,
    duration: 0,
    maxDuration: 0,
    refundDuration: 0,
    maxActivations: 0,
    coolDownDuration: 0,
    activationType: 0,
    eventData: ''
};
export const MsgUpdatePowerupTemplate = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionIndex !== '') {
            writer.uint32(18).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(26).string(message.classTemplateIndex);
        }
        if (message.powerupTemplateIndex !== '') {
            writer.uint32(34).string(message.powerupTemplateIndex);
        }
        if (message.name !== '') {
            writer.uint32(42).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(50).string(message.description);
        }
        if (message.count !== 0) {
            writer.uint32(56).int32(message.count);
        }
        if (message.activationBalance !== undefined) {
            Coin.encode(message.activationBalance, writer.uint32(66).fork()).ldelim();
        }
        if (message.maxBalance !== undefined) {
            Coin.encode(message.maxBalance, writer.uint32(74).fork()).ldelim();
        }
        if (message.duration !== 0) {
            writer.uint32(80).int32(message.duration);
        }
        if (message.maxDuration !== 0) {
            writer.uint32(88).int32(message.maxDuration);
        }
        if (message.refundDuration !== 0) {
            writer.uint32(96).int32(message.refundDuration);
        }
        if (message.maxActivations !== 0) {
            writer.uint32(104).int32(message.maxActivations);
        }
        if (message.coolDownDuration !== 0) {
            writer.uint32(112).int32(message.coolDownDuration);
        }
        if (message.rechargeRate !== undefined) {
            Coin.encode(message.rechargeRate, writer.uint32(122).fork()).ldelim();
        }
        if (message.feeRate !== undefined) {
            Coin.encode(message.feeRate, writer.uint32(130).fork()).ldelim();
        }
        if (message.activationType !== 0) {
            writer.uint32(136).int32(message.activationType);
        }
        if (message.eventData !== '') {
            writer.uint32(146).string(message.eventData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePowerupTemplate };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionIndex = reader.string();
                    break;
                case 3:
                    message.classTemplateIndex = reader.string();
                    break;
                case 4:
                    message.powerupTemplateIndex = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    message.count = reader.int32();
                    break;
                case 8:
                    message.activationBalance = Coin.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.maxBalance = Coin.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.duration = reader.int32();
                    break;
                case 11:
                    message.maxDuration = reader.int32();
                    break;
                case 12:
                    message.refundDuration = reader.int32();
                    break;
                case 13:
                    message.maxActivations = reader.int32();
                    break;
                case 14:
                    message.coolDownDuration = reader.int32();
                    break;
                case 15:
                    message.rechargeRate = Coin.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.feeRate = Coin.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.activationType = reader.int32();
                    break;
                case 18:
                    message.eventData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdatePowerupTemplate };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = String(object.collectionIndex);
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = String(object.classTemplateIndex);
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
            message.powerupTemplateIndex = String(object.powerupTemplateIndex);
        }
        else {
            message.powerupTemplateIndex = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = Number(object.count);
        }
        else {
            message.count = 0;
        }
        if (object.activationBalance !== undefined && object.activationBalance !== null) {
            message.activationBalance = Coin.fromJSON(object.activationBalance);
        }
        else {
            message.activationBalance = undefined;
        }
        if (object.maxBalance !== undefined && object.maxBalance !== null) {
            message.maxBalance = Coin.fromJSON(object.maxBalance);
        }
        else {
            message.maxBalance = undefined;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Number(object.duration);
        }
        else {
            message.duration = 0;
        }
        if (object.maxDuration !== undefined && object.maxDuration !== null) {
            message.maxDuration = Number(object.maxDuration);
        }
        else {
            message.maxDuration = 0;
        }
        if (object.refundDuration !== undefined && object.refundDuration !== null) {
            message.refundDuration = Number(object.refundDuration);
        }
        else {
            message.refundDuration = 0;
        }
        if (object.maxActivations !== undefined && object.maxActivations !== null) {
            message.maxActivations = Number(object.maxActivations);
        }
        else {
            message.maxActivations = 0;
        }
        if (object.coolDownDuration !== undefined && object.coolDownDuration !== null) {
            message.coolDownDuration = Number(object.coolDownDuration);
        }
        else {
            message.coolDownDuration = 0;
        }
        if (object.rechargeRate !== undefined && object.rechargeRate !== null) {
            message.rechargeRate = Coin.fromJSON(object.rechargeRate);
        }
        else {
            message.rechargeRate = undefined;
        }
        if (object.feeRate !== undefined && object.feeRate !== null) {
            message.feeRate = Coin.fromJSON(object.feeRate);
        }
        else {
            message.feeRate = undefined;
        }
        if (object.activationType !== undefined && object.activationType !== null) {
            message.activationType = Number(object.activationType);
        }
        else {
            message.activationType = 0;
        }
        if (object.eventData !== undefined && object.eventData !== null) {
            message.eventData = String(object.eventData);
        }
        else {
            message.eventData = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.count !== undefined && (obj.count = message.count);
        message.activationBalance !== undefined && (obj.activationBalance = message.activationBalance ? Coin.toJSON(message.activationBalance) : undefined);
        message.maxBalance !== undefined && (obj.maxBalance = message.maxBalance ? Coin.toJSON(message.maxBalance) : undefined);
        message.duration !== undefined && (obj.duration = message.duration);
        message.maxDuration !== undefined && (obj.maxDuration = message.maxDuration);
        message.refundDuration !== undefined && (obj.refundDuration = message.refundDuration);
        message.maxActivations !== undefined && (obj.maxActivations = message.maxActivations);
        message.coolDownDuration !== undefined && (obj.coolDownDuration = message.coolDownDuration);
        message.rechargeRate !== undefined && (obj.rechargeRate = message.rechargeRate ? Coin.toJSON(message.rechargeRate) : undefined);
        message.feeRate !== undefined && (obj.feeRate = message.feeRate ? Coin.toJSON(message.feeRate) : undefined);
        message.activationType !== undefined && (obj.activationType = message.activationType);
        message.eventData !== undefined && (obj.eventData = message.eventData);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdatePowerupTemplate };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = object.collectionIndex;
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = object.classTemplateIndex;
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
            message.powerupTemplateIndex = object.powerupTemplateIndex;
        }
        else {
            message.powerupTemplateIndex = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = object.count;
        }
        else {
            message.count = 0;
        }
        if (object.activationBalance !== undefined && object.activationBalance !== null) {
            message.activationBalance = Coin.fromPartial(object.activationBalance);
        }
        else {
            message.activationBalance = undefined;
        }
        if (object.maxBalance !== undefined && object.maxBalance !== null) {
            message.maxBalance = Coin.fromPartial(object.maxBalance);
        }
        else {
            message.maxBalance = undefined;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = object.duration;
        }
        else {
            message.duration = 0;
        }
        if (object.maxDuration !== undefined && object.maxDuration !== null) {
            message.maxDuration = object.maxDuration;
        }
        else {
            message.maxDuration = 0;
        }
        if (object.refundDuration !== undefined && object.refundDuration !== null) {
            message.refundDuration = object.refundDuration;
        }
        else {
            message.refundDuration = 0;
        }
        if (object.maxActivations !== undefined && object.maxActivations !== null) {
            message.maxActivations = object.maxActivations;
        }
        else {
            message.maxActivations = 0;
        }
        if (object.coolDownDuration !== undefined && object.coolDownDuration !== null) {
            message.coolDownDuration = object.coolDownDuration;
        }
        else {
            message.coolDownDuration = 0;
        }
        if (object.rechargeRate !== undefined && object.rechargeRate !== null) {
            message.rechargeRate = Coin.fromPartial(object.rechargeRate);
        }
        else {
            message.rechargeRate = undefined;
        }
        if (object.feeRate !== undefined && object.feeRate !== null) {
            message.feeRate = Coin.fromPartial(object.feeRate);
        }
        else {
            message.feeRate = undefined;
        }
        if (object.activationType !== undefined && object.activationType !== null) {
            message.activationType = object.activationType;
        }
        else {
            message.activationType = 0;
        }
        if (object.eventData !== undefined && object.eventData !== null) {
            message.eventData = object.eventData;
        }
        else {
            message.eventData = '';
        }
        return message;
    }
};
const baseMsgUpdatePowerupTemplateResponse = {};
export const MsgUpdatePowerupTemplateResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePowerupTemplateResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdatePowerupTemplateResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdatePowerupTemplateResponse };
        return message;
    }
};
const baseMsgDeletePowerupTemplate = { creator: '', collectionIndex: '', classTemplateIndex: '', powerupTemplateIndex: '' };
export const MsgDeletePowerupTemplate = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionIndex !== '') {
            writer.uint32(18).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(26).string(message.classTemplateIndex);
        }
        if (message.powerupTemplateIndex !== '') {
            writer.uint32(34).string(message.powerupTemplateIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeletePowerupTemplate };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionIndex = reader.string();
                    break;
                case 3:
                    message.classTemplateIndex = reader.string();
                    break;
                case 4:
                    message.powerupTemplateIndex = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeletePowerupTemplate };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = String(object.collectionIndex);
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = String(object.classTemplateIndex);
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
            message.powerupTemplateIndex = String(object.powerupTemplateIndex);
        }
        else {
            message.powerupTemplateIndex = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeletePowerupTemplate };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = object.collectionIndex;
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = object.classTemplateIndex;
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
            message.powerupTemplateIndex = object.powerupTemplateIndex;
        }
        else {
            message.powerupTemplateIndex = '';
        }
        return message;
    }
};
const baseMsgDeletePowerupTemplateResponse = {};
export const MsgDeletePowerupTemplateResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeletePowerupTemplateResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeletePowerupTemplateResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeletePowerupTemplateResponse };
        return message;
    }
};
const baseMsgCreatePowerup = {
    creator: '',
    collectionIndex: '',
    classTemplateIndex: '',
    powerupTemplateIndex: '',
    instanceIndex: '',
    startTime: 0,
    endTime: 0,
    numActivations: 0,
    acceptingPower: false
};
export const MsgCreatePowerup = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionIndex !== '') {
            writer.uint32(18).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(26).string(message.classTemplateIndex);
        }
        if (message.powerupTemplateIndex !== '') {
            writer.uint32(34).string(message.powerupTemplateIndex);
        }
        if (message.instanceIndex !== '') {
            writer.uint32(42).string(message.instanceIndex);
        }
        if (message.balance !== undefined) {
            Coin.encode(message.balance, writer.uint32(50).fork()).ldelim();
        }
        if (message.startTime !== 0) {
            writer.uint32(56).int32(message.startTime);
        }
        if (message.endTime !== 0) {
            writer.uint32(64).int32(message.endTime);
        }
        if (message.numActivations !== 0) {
            writer.uint32(72).int32(message.numActivations);
        }
        if (message.fees !== undefined) {
            Coin.encode(message.fees, writer.uint32(82).fork()).ldelim();
        }
        if (message.acceptingPower === true) {
            writer.uint32(88).bool(message.acceptingPower);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePowerup };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionIndex = reader.string();
                    break;
                case 3:
                    message.classTemplateIndex = reader.string();
                    break;
                case 4:
                    message.powerupTemplateIndex = reader.string();
                    break;
                case 5:
                    message.instanceIndex = reader.string();
                    break;
                case 6:
                    message.balance = Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.startTime = reader.int32();
                    break;
                case 8:
                    message.endTime = reader.int32();
                    break;
                case 9:
                    message.numActivations = reader.int32();
                    break;
                case 10:
                    message.fees = Coin.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.acceptingPower = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreatePowerup };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = String(object.collectionIndex);
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = String(object.classTemplateIndex);
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
            message.powerupTemplateIndex = String(object.powerupTemplateIndex);
        }
        else {
            message.powerupTemplateIndex = '';
        }
        if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
            message.instanceIndex = String(object.instanceIndex);
        }
        else {
            message.instanceIndex = '';
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = Coin.fromJSON(object.balance);
        }
        else {
            message.balance = undefined;
        }
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = Number(object.startTime);
        }
        else {
            message.startTime = 0;
        }
        if (object.endTime !== undefined && object.endTime !== null) {
            message.endTime = Number(object.endTime);
        }
        else {
            message.endTime = 0;
        }
        if (object.numActivations !== undefined && object.numActivations !== null) {
            message.numActivations = Number(object.numActivations);
        }
        else {
            message.numActivations = 0;
        }
        if (object.fees !== undefined && object.fees !== null) {
            message.fees = Coin.fromJSON(object.fees);
        }
        else {
            message.fees = undefined;
        }
        if (object.acceptingPower !== undefined && object.acceptingPower !== null) {
            message.acceptingPower = Boolean(object.acceptingPower);
        }
        else {
            message.acceptingPower = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex);
        message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex);
        message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
        message.startTime !== undefined && (obj.startTime = message.startTime);
        message.endTime !== undefined && (obj.endTime = message.endTime);
        message.numActivations !== undefined && (obj.numActivations = message.numActivations);
        message.fees !== undefined && (obj.fees = message.fees ? Coin.toJSON(message.fees) : undefined);
        message.acceptingPower !== undefined && (obj.acceptingPower = message.acceptingPower);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreatePowerup };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = object.collectionIndex;
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = object.classTemplateIndex;
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
            message.powerupTemplateIndex = object.powerupTemplateIndex;
        }
        else {
            message.powerupTemplateIndex = '';
        }
        if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
            message.instanceIndex = object.instanceIndex;
        }
        else {
            message.instanceIndex = '';
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = Coin.fromPartial(object.balance);
        }
        else {
            message.balance = undefined;
        }
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = object.startTime;
        }
        else {
            message.startTime = 0;
        }
        if (object.endTime !== undefined && object.endTime !== null) {
            message.endTime = object.endTime;
        }
        else {
            message.endTime = 0;
        }
        if (object.numActivations !== undefined && object.numActivations !== null) {
            message.numActivations = object.numActivations;
        }
        else {
            message.numActivations = 0;
        }
        if (object.fees !== undefined && object.fees !== null) {
            message.fees = Coin.fromPartial(object.fees);
        }
        else {
            message.fees = undefined;
        }
        if (object.acceptingPower !== undefined && object.acceptingPower !== null) {
            message.acceptingPower = object.acceptingPower;
        }
        else {
            message.acceptingPower = false;
        }
        return message;
    }
};
const baseMsgCreatePowerupResponse = {};
export const MsgCreatePowerupResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePowerupResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreatePowerupResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreatePowerupResponse };
        return message;
    }
};
const baseMsgUpdatePowerup = {
    creator: '',
    collectionIndex: '',
    classTemplateIndex: '',
    powerupTemplateIndex: '',
    instanceIndex: '',
    startTime: 0,
    endTime: 0,
    numActivations: 0,
    acceptingPower: false
};
export const MsgUpdatePowerup = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionIndex !== '') {
            writer.uint32(18).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(26).string(message.classTemplateIndex);
        }
        if (message.powerupTemplateIndex !== '') {
            writer.uint32(34).string(message.powerupTemplateIndex);
        }
        if (message.instanceIndex !== '') {
            writer.uint32(42).string(message.instanceIndex);
        }
        if (message.balance !== undefined) {
            Coin.encode(message.balance, writer.uint32(50).fork()).ldelim();
        }
        if (message.startTime !== 0) {
            writer.uint32(56).int32(message.startTime);
        }
        if (message.endTime !== 0) {
            writer.uint32(64).int32(message.endTime);
        }
        if (message.numActivations !== 0) {
            writer.uint32(72).int32(message.numActivations);
        }
        if (message.fees !== undefined) {
            Coin.encode(message.fees, writer.uint32(82).fork()).ldelim();
        }
        if (message.acceptingPower === true) {
            writer.uint32(88).bool(message.acceptingPower);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePowerup };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionIndex = reader.string();
                    break;
                case 3:
                    message.classTemplateIndex = reader.string();
                    break;
                case 4:
                    message.powerupTemplateIndex = reader.string();
                    break;
                case 5:
                    message.instanceIndex = reader.string();
                    break;
                case 6:
                    message.balance = Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.startTime = reader.int32();
                    break;
                case 8:
                    message.endTime = reader.int32();
                    break;
                case 9:
                    message.numActivations = reader.int32();
                    break;
                case 10:
                    message.fees = Coin.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.acceptingPower = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdatePowerup };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = String(object.collectionIndex);
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = String(object.classTemplateIndex);
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
            message.powerupTemplateIndex = String(object.powerupTemplateIndex);
        }
        else {
            message.powerupTemplateIndex = '';
        }
        if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
            message.instanceIndex = String(object.instanceIndex);
        }
        else {
            message.instanceIndex = '';
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = Coin.fromJSON(object.balance);
        }
        else {
            message.balance = undefined;
        }
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = Number(object.startTime);
        }
        else {
            message.startTime = 0;
        }
        if (object.endTime !== undefined && object.endTime !== null) {
            message.endTime = Number(object.endTime);
        }
        else {
            message.endTime = 0;
        }
        if (object.numActivations !== undefined && object.numActivations !== null) {
            message.numActivations = Number(object.numActivations);
        }
        else {
            message.numActivations = 0;
        }
        if (object.fees !== undefined && object.fees !== null) {
            message.fees = Coin.fromJSON(object.fees);
        }
        else {
            message.fees = undefined;
        }
        if (object.acceptingPower !== undefined && object.acceptingPower !== null) {
            message.acceptingPower = Boolean(object.acceptingPower);
        }
        else {
            message.acceptingPower = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex);
        message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex);
        message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
        message.startTime !== undefined && (obj.startTime = message.startTime);
        message.endTime !== undefined && (obj.endTime = message.endTime);
        message.numActivations !== undefined && (obj.numActivations = message.numActivations);
        message.fees !== undefined && (obj.fees = message.fees ? Coin.toJSON(message.fees) : undefined);
        message.acceptingPower !== undefined && (obj.acceptingPower = message.acceptingPower);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdatePowerup };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = object.collectionIndex;
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = object.classTemplateIndex;
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
            message.powerupTemplateIndex = object.powerupTemplateIndex;
        }
        else {
            message.powerupTemplateIndex = '';
        }
        if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
            message.instanceIndex = object.instanceIndex;
        }
        else {
            message.instanceIndex = '';
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = Coin.fromPartial(object.balance);
        }
        else {
            message.balance = undefined;
        }
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = object.startTime;
        }
        else {
            message.startTime = 0;
        }
        if (object.endTime !== undefined && object.endTime !== null) {
            message.endTime = object.endTime;
        }
        else {
            message.endTime = 0;
        }
        if (object.numActivations !== undefined && object.numActivations !== null) {
            message.numActivations = object.numActivations;
        }
        else {
            message.numActivations = 0;
        }
        if (object.fees !== undefined && object.fees !== null) {
            message.fees = Coin.fromPartial(object.fees);
        }
        else {
            message.fees = undefined;
        }
        if (object.acceptingPower !== undefined && object.acceptingPower !== null) {
            message.acceptingPower = object.acceptingPower;
        }
        else {
            message.acceptingPower = false;
        }
        return message;
    }
};
const baseMsgUpdatePowerupResponse = {};
export const MsgUpdatePowerupResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePowerupResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdatePowerupResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdatePowerupResponse };
        return message;
    }
};
const baseMsgDeletePowerup = { creator: '', collectionIndex: '', classTemplateIndex: '', powerupTemplateIndex: '', instanceIndex: '' };
export const MsgDeletePowerup = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionIndex !== '') {
            writer.uint32(18).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(26).string(message.classTemplateIndex);
        }
        if (message.powerupTemplateIndex !== '') {
            writer.uint32(34).string(message.powerupTemplateIndex);
        }
        if (message.instanceIndex !== '') {
            writer.uint32(42).string(message.instanceIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeletePowerup };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionIndex = reader.string();
                    break;
                case 3:
                    message.classTemplateIndex = reader.string();
                    break;
                case 4:
                    message.powerupTemplateIndex = reader.string();
                    break;
                case 5:
                    message.instanceIndex = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeletePowerup };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = String(object.collectionIndex);
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = String(object.classTemplateIndex);
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
            message.powerupTemplateIndex = String(object.powerupTemplateIndex);
        }
        else {
            message.powerupTemplateIndex = '';
        }
        if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
            message.instanceIndex = String(object.instanceIndex);
        }
        else {
            message.instanceIndex = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex);
        message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeletePowerup };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = object.collectionIndex;
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = object.classTemplateIndex;
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
            message.powerupTemplateIndex = object.powerupTemplateIndex;
        }
        else {
            message.powerupTemplateIndex = '';
        }
        if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
            message.instanceIndex = object.instanceIndex;
        }
        else {
            message.instanceIndex = '';
        }
        return message;
    }
};
const baseMsgDeletePowerupResponse = {};
export const MsgDeletePowerupResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeletePowerupResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeletePowerupResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeletePowerupResponse };
        return message;
    }
};
const baseMsgSetCollectionMintStrategy = { creator: '', collectionIndex: '', mintStrategyIndex: '' };
export const MsgSetCollectionMintStrategy = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionIndex !== '') {
            writer.uint32(18).string(message.collectionIndex);
        }
        if (message.mintStrategyIndex !== '') {
            writer.uint32(26).string(message.mintStrategyIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSetCollectionMintStrategy };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionIndex = reader.string();
                    break;
                case 3:
                    message.mintStrategyIndex = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSetCollectionMintStrategy };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = String(object.collectionIndex);
        }
        else {
            message.collectionIndex = '';
        }
        if (object.mintStrategyIndex !== undefined && object.mintStrategyIndex !== null) {
            message.mintStrategyIndex = String(object.mintStrategyIndex);
        }
        else {
            message.mintStrategyIndex = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.mintStrategyIndex !== undefined && (obj.mintStrategyIndex = message.mintStrategyIndex);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSetCollectionMintStrategy };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = object.collectionIndex;
        }
        else {
            message.collectionIndex = '';
        }
        if (object.mintStrategyIndex !== undefined && object.mintStrategyIndex !== null) {
            message.mintStrategyIndex = object.mintStrategyIndex;
        }
        else {
            message.mintStrategyIndex = '';
        }
        return message;
    }
};
const baseMsgSetCollectionMintStrategyResponse = {};
export const MsgSetCollectionMintStrategyResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSetCollectionMintStrategyResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgSetCollectionMintStrategyResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgSetCollectionMintStrategyResponse };
        return message;
    }
};
const baseMsgSendPower = { creator: '', collectionIndex: '', classTemplateIndex: '', powerupTemplateIndex: '', instanceIndex: '' };
export const MsgSendPower = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionIndex !== '') {
            writer.uint32(18).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(26).string(message.classTemplateIndex);
        }
        if (message.powerupTemplateIndex !== '') {
            writer.uint32(34).string(message.powerupTemplateIndex);
        }
        if (message.instanceIndex !== '') {
            writer.uint32(42).string(message.instanceIndex);
        }
        if (message.power !== undefined) {
            Coin.encode(message.power, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSendPower };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionIndex = reader.string();
                    break;
                case 3:
                    message.classTemplateIndex = reader.string();
                    break;
                case 4:
                    message.powerupTemplateIndex = reader.string();
                    break;
                case 5:
                    message.instanceIndex = reader.string();
                    break;
                case 6:
                    message.power = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSendPower };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = String(object.collectionIndex);
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = String(object.classTemplateIndex);
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
            message.powerupTemplateIndex = String(object.powerupTemplateIndex);
        }
        else {
            message.powerupTemplateIndex = '';
        }
        if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
            message.instanceIndex = String(object.instanceIndex);
        }
        else {
            message.instanceIndex = '';
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = Coin.fromJSON(object.power);
        }
        else {
            message.power = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex);
        message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex);
        message.power !== undefined && (obj.power = message.power ? Coin.toJSON(message.power) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSendPower };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = object.collectionIndex;
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = object.classTemplateIndex;
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
            message.powerupTemplateIndex = object.powerupTemplateIndex;
        }
        else {
            message.powerupTemplateIndex = '';
        }
        if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
            message.instanceIndex = object.instanceIndex;
        }
        else {
            message.instanceIndex = '';
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = Coin.fromPartial(object.power);
        }
        else {
            message.power = undefined;
        }
        return message;
    }
};
const baseMsgSendPowerResponse = {};
export const MsgSendPowerResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSendPowerResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgSendPowerResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgSendPowerResponse };
        return message;
    }
};
const baseMsgFreePower = { creator: '', collectionIndex: '', classTemplateIndex: '', powerupTemplateIndex: '', instanceIndex: '' };
export const MsgFreePower = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionIndex !== '') {
            writer.uint32(18).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(26).string(message.classTemplateIndex);
        }
        if (message.powerupTemplateIndex !== '') {
            writer.uint32(34).string(message.powerupTemplateIndex);
        }
        if (message.instanceIndex !== '') {
            writer.uint32(42).string(message.instanceIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgFreePower };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionIndex = reader.string();
                    break;
                case 3:
                    message.classTemplateIndex = reader.string();
                    break;
                case 4:
                    message.powerupTemplateIndex = reader.string();
                    break;
                case 5:
                    message.instanceIndex = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgFreePower };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = String(object.collectionIndex);
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = String(object.classTemplateIndex);
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
            message.powerupTemplateIndex = String(object.powerupTemplateIndex);
        }
        else {
            message.powerupTemplateIndex = '';
        }
        if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
            message.instanceIndex = String(object.instanceIndex);
        }
        else {
            message.instanceIndex = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex);
        message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgFreePower };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = object.collectionIndex;
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = object.classTemplateIndex;
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
            message.powerupTemplateIndex = object.powerupTemplateIndex;
        }
        else {
            message.powerupTemplateIndex = '';
        }
        if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
            message.instanceIndex = object.instanceIndex;
        }
        else {
            message.instanceIndex = '';
        }
        return message;
    }
};
const baseMsgFreePowerResponse = {};
export const MsgFreePowerResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgFreePowerResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgFreePowerResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgFreePowerResponse };
        return message;
    }
};
const baseMsgMint = { creator: '', collectionIndex: '', classTemplateIndex: '', numInstances: 0 };
export const MsgMint = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionIndex !== '') {
            writer.uint32(18).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(26).string(message.classTemplateIndex);
        }
        if (message.numInstances !== 0) {
            writer.uint32(32).int32(message.numInstances);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMint };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionIndex = reader.string();
                    break;
                case 3:
                    message.classTemplateIndex = reader.string();
                    break;
                case 4:
                    message.numInstances = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgMint };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = String(object.collectionIndex);
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = String(object.classTemplateIndex);
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.numInstances !== undefined && object.numInstances !== null) {
            message.numInstances = Number(object.numInstances);
        }
        else {
            message.numInstances = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        message.numInstances !== undefined && (obj.numInstances = message.numInstances);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMint };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = object.collectionIndex;
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = object.classTemplateIndex;
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.numInstances !== undefined && object.numInstances !== null) {
            message.numInstances = object.numInstances;
        }
        else {
            message.numInstances = 0;
        }
        return message;
    }
};
const baseMsgMintResponse = {};
export const MsgMintResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMintResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgMintResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgMintResponse };
        return message;
    }
};
const baseMsgCreateClassTemplate = {
    creator: '',
    collectionIndex: '',
    classTemplateIndex: '',
    name: '',
    description: '',
    mintStrategy: '',
    gltfHash: '',
    metadata: '',
    maxInstances: 0,
    count: 0,
    powerupTemplates: ''
};
export const MsgCreateClassTemplate = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionIndex !== '') {
            writer.uint32(18).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(26).string(message.classTemplateIndex);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.mintStrategy !== '') {
            writer.uint32(50).string(message.mintStrategy);
        }
        if (message.gltfHash !== '') {
            writer.uint32(58).string(message.gltfHash);
        }
        if (message.metadata !== '') {
            writer.uint32(66).string(message.metadata);
        }
        if (message.maxInstances !== 0) {
            writer.uint32(72).int32(message.maxInstances);
        }
        if (message.count !== 0) {
            writer.uint32(80).int32(message.count);
        }
        for (const v of message.powerupTemplates) {
            writer.uint32(90).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateClassTemplate };
        message.powerupTemplates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionIndex = reader.string();
                    break;
                case 3:
                    message.classTemplateIndex = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.mintStrategy = reader.string();
                    break;
                case 7:
                    message.gltfHash = reader.string();
                    break;
                case 8:
                    message.metadata = reader.string();
                    break;
                case 9:
                    message.maxInstances = reader.int32();
                    break;
                case 10:
                    message.count = reader.int32();
                    break;
                case 11:
                    message.powerupTemplates.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateClassTemplate };
        message.powerupTemplates = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = String(object.collectionIndex);
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = String(object.classTemplateIndex);
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
            message.mintStrategy = String(object.mintStrategy);
        }
        else {
            message.mintStrategy = '';
        }
        if (object.gltfHash !== undefined && object.gltfHash !== null) {
            message.gltfHash = String(object.gltfHash);
        }
        else {
            message.gltfHash = '';
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = String(object.metadata);
        }
        else {
            message.metadata = '';
        }
        if (object.maxInstances !== undefined && object.maxInstances !== null) {
            message.maxInstances = Number(object.maxInstances);
        }
        else {
            message.maxInstances = 0;
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = Number(object.count);
        }
        else {
            message.count = 0;
        }
        if (object.powerupTemplates !== undefined && object.powerupTemplates !== null) {
            for (const e of object.powerupTemplates) {
                message.powerupTemplates.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.mintStrategy !== undefined && (obj.mintStrategy = message.mintStrategy);
        message.gltfHash !== undefined && (obj.gltfHash = message.gltfHash);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.maxInstances !== undefined && (obj.maxInstances = message.maxInstances);
        message.count !== undefined && (obj.count = message.count);
        if (message.powerupTemplates) {
            obj.powerupTemplates = message.powerupTemplates.map((e) => e);
        }
        else {
            obj.powerupTemplates = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateClassTemplate };
        message.powerupTemplates = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = object.collectionIndex;
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = object.classTemplateIndex;
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
            message.mintStrategy = object.mintStrategy;
        }
        else {
            message.mintStrategy = '';
        }
        if (object.gltfHash !== undefined && object.gltfHash !== null) {
            message.gltfHash = object.gltfHash;
        }
        else {
            message.gltfHash = '';
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        else {
            message.metadata = '';
        }
        if (object.maxInstances !== undefined && object.maxInstances !== null) {
            message.maxInstances = object.maxInstances;
        }
        else {
            message.maxInstances = 0;
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = object.count;
        }
        else {
            message.count = 0;
        }
        if (object.powerupTemplates !== undefined && object.powerupTemplates !== null) {
            for (const e of object.powerupTemplates) {
                message.powerupTemplates.push(e);
            }
        }
        return message;
    }
};
const baseMsgCreateClassTemplateResponse = {};
export const MsgCreateClassTemplateResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateClassTemplateResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateClassTemplateResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateClassTemplateResponse };
        return message;
    }
};
const baseMsgUpdateClassTemplate = {
    creator: '',
    collectionIndex: '',
    classTemplateIndex: '',
    name: '',
    description: '',
    mintStrategy: '',
    gltfHash: '',
    metadata: '',
    maxInstances: 0,
    count: 0,
    powerupTemplates: ''
};
export const MsgUpdateClassTemplate = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionIndex !== '') {
            writer.uint32(18).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(26).string(message.classTemplateIndex);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.mintStrategy !== '') {
            writer.uint32(50).string(message.mintStrategy);
        }
        if (message.gltfHash !== '') {
            writer.uint32(58).string(message.gltfHash);
        }
        if (message.metadata !== '') {
            writer.uint32(66).string(message.metadata);
        }
        if (message.maxInstances !== 0) {
            writer.uint32(72).int32(message.maxInstances);
        }
        if (message.count !== 0) {
            writer.uint32(80).int32(message.count);
        }
        for (const v of message.powerupTemplates) {
            writer.uint32(90).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateClassTemplate };
        message.powerupTemplates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionIndex = reader.string();
                    break;
                case 3:
                    message.classTemplateIndex = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.mintStrategy = reader.string();
                    break;
                case 7:
                    message.gltfHash = reader.string();
                    break;
                case 8:
                    message.metadata = reader.string();
                    break;
                case 9:
                    message.maxInstances = reader.int32();
                    break;
                case 10:
                    message.count = reader.int32();
                    break;
                case 11:
                    message.powerupTemplates.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateClassTemplate };
        message.powerupTemplates = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = String(object.collectionIndex);
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = String(object.classTemplateIndex);
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
            message.mintStrategy = String(object.mintStrategy);
        }
        else {
            message.mintStrategy = '';
        }
        if (object.gltfHash !== undefined && object.gltfHash !== null) {
            message.gltfHash = String(object.gltfHash);
        }
        else {
            message.gltfHash = '';
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = String(object.metadata);
        }
        else {
            message.metadata = '';
        }
        if (object.maxInstances !== undefined && object.maxInstances !== null) {
            message.maxInstances = Number(object.maxInstances);
        }
        else {
            message.maxInstances = 0;
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = Number(object.count);
        }
        else {
            message.count = 0;
        }
        if (object.powerupTemplates !== undefined && object.powerupTemplates !== null) {
            for (const e of object.powerupTemplates) {
                message.powerupTemplates.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.mintStrategy !== undefined && (obj.mintStrategy = message.mintStrategy);
        message.gltfHash !== undefined && (obj.gltfHash = message.gltfHash);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.maxInstances !== undefined && (obj.maxInstances = message.maxInstances);
        message.count !== undefined && (obj.count = message.count);
        if (message.powerupTemplates) {
            obj.powerupTemplates = message.powerupTemplates.map((e) => e);
        }
        else {
            obj.powerupTemplates = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateClassTemplate };
        message.powerupTemplates = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = object.collectionIndex;
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = object.classTemplateIndex;
        }
        else {
            message.classTemplateIndex = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
            message.mintStrategy = object.mintStrategy;
        }
        else {
            message.mintStrategy = '';
        }
        if (object.gltfHash !== undefined && object.gltfHash !== null) {
            message.gltfHash = object.gltfHash;
        }
        else {
            message.gltfHash = '';
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        else {
            message.metadata = '';
        }
        if (object.maxInstances !== undefined && object.maxInstances !== null) {
            message.maxInstances = object.maxInstances;
        }
        else {
            message.maxInstances = 0;
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = object.count;
        }
        else {
            message.count = 0;
        }
        if (object.powerupTemplates !== undefined && object.powerupTemplates !== null) {
            for (const e of object.powerupTemplates) {
                message.powerupTemplates.push(e);
            }
        }
        return message;
    }
};
const baseMsgUpdateClassTemplateResponse = {};
export const MsgUpdateClassTemplateResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateClassTemplateResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateClassTemplateResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateClassTemplateResponse };
        return message;
    }
};
const baseMsgDeleteClassTemplate = { creator: '', collectionIndex: '', classTemplateIndex: '' };
export const MsgDeleteClassTemplate = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionIndex !== '') {
            writer.uint32(18).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(26).string(message.classTemplateIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteClassTemplate };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionIndex = reader.string();
                    break;
                case 3:
                    message.classTemplateIndex = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteClassTemplate };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = String(object.collectionIndex);
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = String(object.classTemplateIndex);
        }
        else {
            message.classTemplateIndex = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteClassTemplate };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
            message.collectionIndex = object.collectionIndex;
        }
        else {
            message.collectionIndex = '';
        }
        if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
            message.classTemplateIndex = object.classTemplateIndex;
        }
        else {
            message.classTemplateIndex = '';
        }
        return message;
    }
};
const baseMsgDeleteClassTemplateResponse = {};
export const MsgDeleteClassTemplateResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteClassTemplateResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteClassTemplateResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteClassTemplateResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateCollection(request) {
        const data = MsgCreateCollection.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'CreateCollection', data);
        return promise.then((data) => MsgCreateCollectionResponse.decode(new Reader(data)));
    }
    UpdateCollection(request) {
        const data = MsgUpdateCollection.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'UpdateCollection', data);
        return promise.then((data) => MsgUpdateCollectionResponse.decode(new Reader(data)));
    }
    DeleteCollection(request) {
        const data = MsgDeleteCollection.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'DeleteCollection', data);
        return promise.then((data) => MsgDeleteCollectionResponse.decode(new Reader(data)));
    }
    CreateClass(request) {
        const data = MsgCreateClass.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'CreateClass', data);
        return promise.then((data) => MsgCreateClassResponse.decode(new Reader(data)));
    }
    UpdateClass(request) {
        const data = MsgUpdateClass.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'UpdateClass', data);
        return promise.then((data) => MsgUpdateClassResponse.decode(new Reader(data)));
    }
    DeleteClass(request) {
        const data = MsgDeleteClass.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'DeleteClass', data);
        return promise.then((data) => MsgDeleteClassResponse.decode(new Reader(data)));
    }
    CreateMintStrategy(request) {
        const data = MsgCreateMintStrategy.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'CreateMintStrategy', data);
        return promise.then((data) => MsgCreateMintStrategyResponse.decode(new Reader(data)));
    }
    UpdateMintStrategy(request) {
        const data = MsgUpdateMintStrategy.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'UpdateMintStrategy', data);
        return promise.then((data) => MsgUpdateMintStrategyResponse.decode(new Reader(data)));
    }
    DeleteMintStrategy(request) {
        const data = MsgDeleteMintStrategy.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'DeleteMintStrategy', data);
        return promise.then((data) => MsgDeleteMintStrategyResponse.decode(new Reader(data)));
    }
    CreateContribution(request) {
        const data = MsgCreateContribution.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'CreateContribution', data);
        return promise.then((data) => MsgCreateContributionResponse.decode(new Reader(data)));
    }
    UpdateContribution(request) {
        const data = MsgUpdateContribution.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'UpdateContribution', data);
        return promise.then((data) => MsgUpdateContributionResponse.decode(new Reader(data)));
    }
    DeleteContribution(request) {
        const data = MsgDeleteContribution.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'DeleteContribution', data);
        return promise.then((data) => MsgDeleteContributionResponse.decode(new Reader(data)));
    }
    CreatePowerupTemplate(request) {
        const data = MsgCreatePowerupTemplate.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'CreatePowerupTemplate', data);
        return promise.then((data) => MsgCreatePowerupTemplateResponse.decode(new Reader(data)));
    }
    UpdatePowerupTemplate(request) {
        const data = MsgUpdatePowerupTemplate.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'UpdatePowerupTemplate', data);
        return promise.then((data) => MsgUpdatePowerupTemplateResponse.decode(new Reader(data)));
    }
    DeletePowerupTemplate(request) {
        const data = MsgDeletePowerupTemplate.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'DeletePowerupTemplate', data);
        return promise.then((data) => MsgDeletePowerupTemplateResponse.decode(new Reader(data)));
    }
    CreatePowerup(request) {
        const data = MsgCreatePowerup.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'CreatePowerup', data);
        return promise.then((data) => MsgCreatePowerupResponse.decode(new Reader(data)));
    }
    UpdatePowerup(request) {
        const data = MsgUpdatePowerup.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'UpdatePowerup', data);
        return promise.then((data) => MsgUpdatePowerupResponse.decode(new Reader(data)));
    }
    DeletePowerup(request) {
        const data = MsgDeletePowerup.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'DeletePowerup', data);
        return promise.then((data) => MsgDeletePowerupResponse.decode(new Reader(data)));
    }
    SetCollectionMintStrategy(request) {
        const data = MsgSetCollectionMintStrategy.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'SetCollectionMintStrategy', data);
        return promise.then((data) => MsgSetCollectionMintStrategyResponse.decode(new Reader(data)));
    }
    SendPower(request) {
        const data = MsgSendPower.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'SendPower', data);
        return promise.then((data) => MsgSendPowerResponse.decode(new Reader(data)));
    }
    FreePower(request) {
        const data = MsgFreePower.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'FreePower', data);
        return promise.then((data) => MsgFreePowerResponse.decode(new Reader(data)));
    }
    Mint(request) {
        const data = MsgMint.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'Mint', data);
        return promise.then((data) => MsgMintResponse.decode(new Reader(data)));
    }
    CreateClassTemplate(request) {
        const data = MsgCreateClassTemplate.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'CreateClassTemplate', data);
        return promise.then((data) => MsgCreateClassTemplateResponse.decode(new Reader(data)));
    }
    UpdateClassTemplate(request) {
        const data = MsgUpdateClassTemplate.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'UpdateClassTemplate', data);
        return promise.then((data) => MsgUpdateClassTemplateResponse.decode(new Reader(data)));
    }
    DeleteClassTemplate(request) {
        const data = MsgDeleteClassTemplate.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'DeleteClassTemplate', data);
        return promise.then((data) => MsgDeleteClassTemplateResponse.decode(new Reader(data)));
    }
}
