/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
import { Collection } from '../moonloop/collection';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Class } from '../moonloop/class';
import { MintStrategy } from '../moonloop/mint_strategy';
import { Contribution } from '../moonloop/contribution';
import { PowerupTemplate } from '../moonloop/powerup_template';
import { Powerup } from '../moonloop/powerup';
import { ClassTemplate } from '../moonloop/class_template';
export const protobufPackage = 'str11ngfello.moonloop.moonloop';
const baseQueryGetCollectionRequest = { index: '' };
export const QueryGetCollectionRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetCollectionRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = { ...baseQueryGetCollectionRequest };
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
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetCollectionRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetCollectionResponse = {};
export const QueryGetCollectionResponse = {
    encode(message, writer = Writer.create()) {
        if (message.collection !== undefined) {
            Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetCollectionResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collection = Collection.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetCollectionResponse };
        if (object.collection !== undefined && object.collection !== null) {
            message.collection = Collection.fromJSON(object.collection);
        }
        else {
            message.collection = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.collection !== undefined && (obj.collection = message.collection ? Collection.toJSON(message.collection) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetCollectionResponse };
        if (object.collection !== undefined && object.collection !== null) {
            message.collection = Collection.fromPartial(object.collection);
        }
        else {
            message.collection = undefined;
        }
        return message;
    }
};
const baseQueryAllCollectionRequest = {};
export const QueryAllCollectionRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllCollectionRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllCollectionRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllCollectionRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllCollectionResponse = {};
export const QueryAllCollectionResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.collection) {
            Collection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllCollectionResponse };
        message.collection = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collection.push(Collection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllCollectionResponse };
        message.collection = [];
        if (object.collection !== undefined && object.collection !== null) {
            for (const e of object.collection) {
                message.collection.push(Collection.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.collection) {
            obj.collection = message.collection.map((e) => (e ? Collection.toJSON(e) : undefined));
        }
        else {
            obj.collection = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllCollectionResponse };
        message.collection = [];
        if (object.collection !== undefined && object.collection !== null) {
            for (const e of object.collection) {
                message.collection.push(Collection.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetClassRequest = { collectionIndex: '', classTemplateIndex: '' };
export const QueryGetClassRequest = {
    encode(message, writer = Writer.create()) {
        if (message.collectionIndex !== '') {
            writer.uint32(10).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(18).string(message.classTemplateIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetClassRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionIndex = reader.string();
                    break;
                case 2:
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
        const message = { ...baseQueryGetClassRequest };
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
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetClassRequest };
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
const baseQueryGetClassResponse = {};
export const QueryGetClassResponse = {
    encode(message, writer = Writer.create()) {
        if (message.class !== undefined) {
            Class.encode(message.class, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetClassResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.class = Class.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetClassResponse };
        if (object.class !== undefined && object.class !== null) {
            message.class = Class.fromJSON(object.class);
        }
        else {
            message.class = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.class !== undefined && (obj.class = message.class ? Class.toJSON(message.class) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetClassResponse };
        if (object.class !== undefined && object.class !== null) {
            message.class = Class.fromPartial(object.class);
        }
        else {
            message.class = undefined;
        }
        return message;
    }
};
const baseQueryAllClassRequest = {};
export const QueryAllClassRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllClassRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllClassRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllClassRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllClassResponse = {};
export const QueryAllClassResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.class) {
            Class.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllClassResponse };
        message.class = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.class.push(Class.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllClassResponse };
        message.class = [];
        if (object.class !== undefined && object.class !== null) {
            for (const e of object.class) {
                message.class.push(Class.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.class) {
            obj.class = message.class.map((e) => (e ? Class.toJSON(e) : undefined));
        }
        else {
            obj.class = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllClassResponse };
        message.class = [];
        if (object.class !== undefined && object.class !== null) {
            for (const e of object.class) {
                message.class.push(Class.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetMintStrategyRequest = { index: '' };
export const QueryGetMintStrategyRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetMintStrategyRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = { ...baseQueryGetMintStrategyRequest };
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
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetMintStrategyRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetMintStrategyResponse = {};
export const QueryGetMintStrategyResponse = {
    encode(message, writer = Writer.create()) {
        if (message.mintStrategy !== undefined) {
            MintStrategy.encode(message.mintStrategy, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetMintStrategyResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mintStrategy = MintStrategy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetMintStrategyResponse };
        if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
            message.mintStrategy = MintStrategy.fromJSON(object.mintStrategy);
        }
        else {
            message.mintStrategy = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mintStrategy !== undefined && (obj.mintStrategy = message.mintStrategy ? MintStrategy.toJSON(message.mintStrategy) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetMintStrategyResponse };
        if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
            message.mintStrategy = MintStrategy.fromPartial(object.mintStrategy);
        }
        else {
            message.mintStrategy = undefined;
        }
        return message;
    }
};
const baseQueryAllMintStrategyRequest = {};
export const QueryAllMintStrategyRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllMintStrategyRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllMintStrategyRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllMintStrategyRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllMintStrategyResponse = {};
export const QueryAllMintStrategyResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.mintStrategy) {
            MintStrategy.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllMintStrategyResponse };
        message.mintStrategy = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mintStrategy.push(MintStrategy.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllMintStrategyResponse };
        message.mintStrategy = [];
        if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
            for (const e of object.mintStrategy) {
                message.mintStrategy.push(MintStrategy.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.mintStrategy) {
            obj.mintStrategy = message.mintStrategy.map((e) => (e ? MintStrategy.toJSON(e) : undefined));
        }
        else {
            obj.mintStrategy = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllMintStrategyResponse };
        message.mintStrategy = [];
        if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
            for (const e of object.mintStrategy) {
                message.mintStrategy.push(MintStrategy.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetContributionRequest = { collectionIndex: '', classTemplateIndex: '', powerupTemplateIndex: '', instanceIndex: '' };
export const QueryGetContributionRequest = {
    encode(message, writer = Writer.create()) {
        if (message.collectionIndex !== '') {
            writer.uint32(10).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(18).string(message.classTemplateIndex);
        }
        if (message.powerupTemplateIndex !== '') {
            writer.uint32(26).string(message.powerupTemplateIndex);
        }
        if (message.instanceIndex !== '') {
            writer.uint32(34).string(message.instanceIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetContributionRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionIndex = reader.string();
                    break;
                case 2:
                    message.classTemplateIndex = reader.string();
                    break;
                case 3:
                    message.powerupTemplateIndex = reader.string();
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
        const message = { ...baseQueryGetContributionRequest };
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
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex);
        message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetContributionRequest };
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
const baseQueryGetContributionResponse = {};
export const QueryGetContributionResponse = {
    encode(message, writer = Writer.create()) {
        if (message.contribution !== undefined) {
            Contribution.encode(message.contribution, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetContributionResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contribution = Contribution.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetContributionResponse };
        if (object.contribution !== undefined && object.contribution !== null) {
            message.contribution = Contribution.fromJSON(object.contribution);
        }
        else {
            message.contribution = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.contribution !== undefined && (obj.contribution = message.contribution ? Contribution.toJSON(message.contribution) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetContributionResponse };
        if (object.contribution !== undefined && object.contribution !== null) {
            message.contribution = Contribution.fromPartial(object.contribution);
        }
        else {
            message.contribution = undefined;
        }
        return message;
    }
};
const baseQueryAllContributionRequest = {};
export const QueryAllContributionRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllContributionRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllContributionRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllContributionRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllContributionResponse = {};
export const QueryAllContributionResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.contribution) {
            Contribution.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllContributionResponse };
        message.contribution = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contribution.push(Contribution.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllContributionResponse };
        message.contribution = [];
        if (object.contribution !== undefined && object.contribution !== null) {
            for (const e of object.contribution) {
                message.contribution.push(Contribution.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.contribution) {
            obj.contribution = message.contribution.map((e) => (e ? Contribution.toJSON(e) : undefined));
        }
        else {
            obj.contribution = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllContributionResponse };
        message.contribution = [];
        if (object.contribution !== undefined && object.contribution !== null) {
            for (const e of object.contribution) {
                message.contribution.push(Contribution.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetPowerupTemplateRequest = { collectionIndex: '', classTemplateIndex: '', powerupTemplateIndex: '' };
export const QueryGetPowerupTemplateRequest = {
    encode(message, writer = Writer.create()) {
        if (message.collectionIndex !== '') {
            writer.uint32(10).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(18).string(message.classTemplateIndex);
        }
        if (message.powerupTemplateIndex !== '') {
            writer.uint32(26).string(message.powerupTemplateIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPowerupTemplateRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionIndex = reader.string();
                    break;
                case 2:
                    message.classTemplateIndex = reader.string();
                    break;
                case 3:
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
        const message = { ...baseQueryGetPowerupTemplateRequest };
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
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPowerupTemplateRequest };
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
const baseQueryGetPowerupTemplateResponse = {};
export const QueryGetPowerupTemplateResponse = {
    encode(message, writer = Writer.create()) {
        if (message.powerupTemplate !== undefined) {
            PowerupTemplate.encode(message.powerupTemplate, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPowerupTemplateResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.powerupTemplate = PowerupTemplate.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetPowerupTemplateResponse };
        if (object.powerupTemplate !== undefined && object.powerupTemplate !== null) {
            message.powerupTemplate = PowerupTemplate.fromJSON(object.powerupTemplate);
        }
        else {
            message.powerupTemplate = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.powerupTemplate !== undefined && (obj.powerupTemplate = message.powerupTemplate ? PowerupTemplate.toJSON(message.powerupTemplate) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPowerupTemplateResponse };
        if (object.powerupTemplate !== undefined && object.powerupTemplate !== null) {
            message.powerupTemplate = PowerupTemplate.fromPartial(object.powerupTemplate);
        }
        else {
            message.powerupTemplate = undefined;
        }
        return message;
    }
};
const baseQueryAllPowerupTemplateRequest = {};
export const QueryAllPowerupTemplateRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPowerupTemplateRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllPowerupTemplateRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPowerupTemplateRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllPowerupTemplateResponse = {};
export const QueryAllPowerupTemplateResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.powerupTemplate) {
            PowerupTemplate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPowerupTemplateResponse };
        message.powerupTemplate = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.powerupTemplate.push(PowerupTemplate.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllPowerupTemplateResponse };
        message.powerupTemplate = [];
        if (object.powerupTemplate !== undefined && object.powerupTemplate !== null) {
            for (const e of object.powerupTemplate) {
                message.powerupTemplate.push(PowerupTemplate.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.powerupTemplate) {
            obj.powerupTemplate = message.powerupTemplate.map((e) => (e ? PowerupTemplate.toJSON(e) : undefined));
        }
        else {
            obj.powerupTemplate = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPowerupTemplateResponse };
        message.powerupTemplate = [];
        if (object.powerupTemplate !== undefined && object.powerupTemplate !== null) {
            for (const e of object.powerupTemplate) {
                message.powerupTemplate.push(PowerupTemplate.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetPowerupRequest = { collectionIndex: '', classTemplateIndex: '', powerupTemplateIndex: '', instanceIndex: '' };
export const QueryGetPowerupRequest = {
    encode(message, writer = Writer.create()) {
        if (message.collectionIndex !== '') {
            writer.uint32(10).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(18).string(message.classTemplateIndex);
        }
        if (message.powerupTemplateIndex !== '') {
            writer.uint32(26).string(message.powerupTemplateIndex);
        }
        if (message.instanceIndex !== '') {
            writer.uint32(34).string(message.instanceIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPowerupRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionIndex = reader.string();
                    break;
                case 2:
                    message.classTemplateIndex = reader.string();
                    break;
                case 3:
                    message.powerupTemplateIndex = reader.string();
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
        const message = { ...baseQueryGetPowerupRequest };
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
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex);
        message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPowerupRequest };
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
const baseQueryGetPowerupResponse = {};
export const QueryGetPowerupResponse = {
    encode(message, writer = Writer.create()) {
        if (message.powerup !== undefined) {
            Powerup.encode(message.powerup, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPowerupResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.powerup = Powerup.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetPowerupResponse };
        if (object.powerup !== undefined && object.powerup !== null) {
            message.powerup = Powerup.fromJSON(object.powerup);
        }
        else {
            message.powerup = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.powerup !== undefined && (obj.powerup = message.powerup ? Powerup.toJSON(message.powerup) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPowerupResponse };
        if (object.powerup !== undefined && object.powerup !== null) {
            message.powerup = Powerup.fromPartial(object.powerup);
        }
        else {
            message.powerup = undefined;
        }
        return message;
    }
};
const baseQueryAllPowerupRequest = {};
export const QueryAllPowerupRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPowerupRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllPowerupRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPowerupRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllPowerupResponse = {};
export const QueryAllPowerupResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.powerup) {
            Powerup.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPowerupResponse };
        message.powerup = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.powerup.push(Powerup.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllPowerupResponse };
        message.powerup = [];
        if (object.powerup !== undefined && object.powerup !== null) {
            for (const e of object.powerup) {
                message.powerup.push(Powerup.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.powerup) {
            obj.powerup = message.powerup.map((e) => (e ? Powerup.toJSON(e) : undefined));
        }
        else {
            obj.powerup = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPowerupResponse };
        message.powerup = [];
        if (object.powerup !== undefined && object.powerup !== null) {
            for (const e of object.powerup) {
                message.powerup.push(Powerup.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetInstanceRequest = { collectionIndex: '', classTemplateIndex: '', instanceIndex: '' };
export const QueryGetInstanceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.collectionIndex !== '') {
            writer.uint32(10).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(18).string(message.classTemplateIndex);
        }
        if (message.instanceIndex !== '') {
            writer.uint32(26).string(message.instanceIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetInstanceRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionIndex = reader.string();
                    break;
                case 2:
                    message.classTemplateIndex = reader.string();
                    break;
                case 3:
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
        const message = { ...baseQueryGetInstanceRequest };
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
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetInstanceRequest };
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
const baseQueryGetInstanceResponse = {};
export const QueryGetInstanceResponse = {
    encode(message, writer = Writer.create()) {
        if (message.collection !== undefined) {
            Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
        }
        if (message.classTemplate !== undefined) {
            ClassTemplate.encode(message.classTemplate, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.powerupTemplates) {
            PowerupTemplate.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.powerups) {
            Powerup.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetInstanceResponse };
        message.powerupTemplates = [];
        message.powerups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collection = Collection.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.classTemplate = ClassTemplate.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.powerupTemplates.push(PowerupTemplate.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.powerups.push(Powerup.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetInstanceResponse };
        message.powerupTemplates = [];
        message.powerups = [];
        if (object.collection !== undefined && object.collection !== null) {
            message.collection = Collection.fromJSON(object.collection);
        }
        else {
            message.collection = undefined;
        }
        if (object.classTemplate !== undefined && object.classTemplate !== null) {
            message.classTemplate = ClassTemplate.fromJSON(object.classTemplate);
        }
        else {
            message.classTemplate = undefined;
        }
        if (object.powerupTemplates !== undefined && object.powerupTemplates !== null) {
            for (const e of object.powerupTemplates) {
                message.powerupTemplates.push(PowerupTemplate.fromJSON(e));
            }
        }
        if (object.powerups !== undefined && object.powerups !== null) {
            for (const e of object.powerups) {
                message.powerups.push(Powerup.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.collection !== undefined && (obj.collection = message.collection ? Collection.toJSON(message.collection) : undefined);
        message.classTemplate !== undefined && (obj.classTemplate = message.classTemplate ? ClassTemplate.toJSON(message.classTemplate) : undefined);
        if (message.powerupTemplates) {
            obj.powerupTemplates = message.powerupTemplates.map((e) => (e ? PowerupTemplate.toJSON(e) : undefined));
        }
        else {
            obj.powerupTemplates = [];
        }
        if (message.powerups) {
            obj.powerups = message.powerups.map((e) => (e ? Powerup.toJSON(e) : undefined));
        }
        else {
            obj.powerups = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetInstanceResponse };
        message.powerupTemplates = [];
        message.powerups = [];
        if (object.collection !== undefined && object.collection !== null) {
            message.collection = Collection.fromPartial(object.collection);
        }
        else {
            message.collection = undefined;
        }
        if (object.classTemplate !== undefined && object.classTemplate !== null) {
            message.classTemplate = ClassTemplate.fromPartial(object.classTemplate);
        }
        else {
            message.classTemplate = undefined;
        }
        if (object.powerupTemplates !== undefined && object.powerupTemplates !== null) {
            for (const e of object.powerupTemplates) {
                message.powerupTemplates.push(PowerupTemplate.fromPartial(e));
            }
        }
        if (object.powerups !== undefined && object.powerups !== null) {
            for (const e of object.powerups) {
                message.powerups.push(Powerup.fromPartial(e));
            }
        }
        return message;
    }
};
const baseQueryGetClassTemplateRequest = { collectionIndex: '', classTemplateIndex: '' };
export const QueryGetClassTemplateRequest = {
    encode(message, writer = Writer.create()) {
        if (message.collectionIndex !== '') {
            writer.uint32(10).string(message.collectionIndex);
        }
        if (message.classTemplateIndex !== '') {
            writer.uint32(18).string(message.classTemplateIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetClassTemplateRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionIndex = reader.string();
                    break;
                case 2:
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
        const message = { ...baseQueryGetClassTemplateRequest };
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
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetClassTemplateRequest };
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
const baseQueryGetClassTemplateResponse = {};
export const QueryGetClassTemplateResponse = {
    encode(message, writer = Writer.create()) {
        if (message.classTemplate !== undefined) {
            ClassTemplate.encode(message.classTemplate, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetClassTemplateResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classTemplate = ClassTemplate.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetClassTemplateResponse };
        if (object.classTemplate !== undefined && object.classTemplate !== null) {
            message.classTemplate = ClassTemplate.fromJSON(object.classTemplate);
        }
        else {
            message.classTemplate = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.classTemplate !== undefined && (obj.classTemplate = message.classTemplate ? ClassTemplate.toJSON(message.classTemplate) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetClassTemplateResponse };
        if (object.classTemplate !== undefined && object.classTemplate !== null) {
            message.classTemplate = ClassTemplate.fromPartial(object.classTemplate);
        }
        else {
            message.classTemplate = undefined;
        }
        return message;
    }
};
const baseQueryAllClassTemplateRequest = {};
export const QueryAllClassTemplateRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllClassTemplateRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllClassTemplateRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllClassTemplateRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllClassTemplateResponse = {};
export const QueryAllClassTemplateResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.classTemplate) {
            ClassTemplate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllClassTemplateResponse };
        message.classTemplate = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classTemplate.push(ClassTemplate.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllClassTemplateResponse };
        message.classTemplate = [];
        if (object.classTemplate !== undefined && object.classTemplate !== null) {
            for (const e of object.classTemplate) {
                message.classTemplate.push(ClassTemplate.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.classTemplate) {
            obj.classTemplate = message.classTemplate.map((e) => (e ? ClassTemplate.toJSON(e) : undefined));
        }
        else {
            obj.classTemplate = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllClassTemplateResponse };
        message.classTemplate = [];
        if (object.classTemplate !== undefined && object.classTemplate !== null) {
            for (const e of object.classTemplate) {
                message.classTemplate.push(ClassTemplate.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Collection(request) {
        const data = QueryGetCollectionRequest.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'Collection', data);
        return promise.then((data) => QueryGetCollectionResponse.decode(new Reader(data)));
    }
    CollectionAll(request) {
        const data = QueryAllCollectionRequest.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'CollectionAll', data);
        return promise.then((data) => QueryAllCollectionResponse.decode(new Reader(data)));
    }
    Class(request) {
        const data = QueryGetClassRequest.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'Class', data);
        return promise.then((data) => QueryGetClassResponse.decode(new Reader(data)));
    }
    ClassAll(request) {
        const data = QueryAllClassRequest.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'ClassAll', data);
        return promise.then((data) => QueryAllClassResponse.decode(new Reader(data)));
    }
    MintStrategy(request) {
        const data = QueryGetMintStrategyRequest.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'MintStrategy', data);
        return promise.then((data) => QueryGetMintStrategyResponse.decode(new Reader(data)));
    }
    MintStrategyAll(request) {
        const data = QueryAllMintStrategyRequest.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'MintStrategyAll', data);
        return promise.then((data) => QueryAllMintStrategyResponse.decode(new Reader(data)));
    }
    Contribution(request) {
        const data = QueryGetContributionRequest.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'Contribution', data);
        return promise.then((data) => QueryGetContributionResponse.decode(new Reader(data)));
    }
    ContributionAll(request) {
        const data = QueryAllContributionRequest.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'ContributionAll', data);
        return promise.then((data) => QueryAllContributionResponse.decode(new Reader(data)));
    }
    PowerupTemplate(request) {
        const data = QueryGetPowerupTemplateRequest.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'PowerupTemplate', data);
        return promise.then((data) => QueryGetPowerupTemplateResponse.decode(new Reader(data)));
    }
    PowerupTemplateAll(request) {
        const data = QueryAllPowerupTemplateRequest.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'PowerupTemplateAll', data);
        return promise.then((data) => QueryAllPowerupTemplateResponse.decode(new Reader(data)));
    }
    Powerup(request) {
        const data = QueryGetPowerupRequest.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'Powerup', data);
        return promise.then((data) => QueryGetPowerupResponse.decode(new Reader(data)));
    }
    PowerupAll(request) {
        const data = QueryAllPowerupRequest.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'PowerupAll', data);
        return promise.then((data) => QueryAllPowerupResponse.decode(new Reader(data)));
    }
    GetInstance(request) {
        const data = QueryGetInstanceRequest.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'GetInstance', data);
        return promise.then((data) => QueryGetInstanceResponse.decode(new Reader(data)));
    }
    ClassTemplate(request) {
        const data = QueryGetClassTemplateRequest.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'ClassTemplate', data);
        return promise.then((data) => QueryGetClassTemplateResponse.decode(new Reader(data)));
    }
    ClassTemplateAll(request) {
        const data = QueryAllClassTemplateRequest.encode(request).finish();
        const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'ClassTemplateAll', data);
        return promise.then((data) => QueryAllClassTemplateResponse.decode(new Reader(data)));
    }
}
