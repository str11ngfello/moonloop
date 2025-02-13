/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { Coin } from '../cosmos/base/v1beta1/coin';
export const protobufPackage = 'str11ngfello.moonloop.moonloop';
const baseContribution = {
    collectionIndex: '',
    classTemplateIndex: '',
    powerupTemplateIndex: '',
    instanceIndex: '',
    contributors: '',
    timestamps: 0,
    creator: ''
};
export const Contribution = {
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
        for (const v of message.contributors) {
            writer.uint32(42).string(v);
        }
        for (const v of message.amounts) {
            Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        writer.uint32(58).fork();
        for (const v of message.timestamps) {
            writer.int64(v);
        }
        writer.ldelim();
        if (message.creator !== '') {
            writer.uint32(66).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseContribution };
        message.contributors = [];
        message.amounts = [];
        message.timestamps = [];
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
                case 5:
                    message.contributors.push(reader.string());
                    break;
                case 6:
                    message.amounts.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.timestamps.push(longToNumber(reader.int64()));
                        }
                    }
                    else {
                        message.timestamps.push(longToNumber(reader.int64()));
                    }
                    break;
                case 8:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseContribution };
        message.contributors = [];
        message.amounts = [];
        message.timestamps = [];
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
        if (object.timestamps !== undefined && object.timestamps !== null) {
            for (const e of object.timestamps) {
                message.timestamps.push(Number(e));
            }
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
        if (message.timestamps) {
            obj.timestamps = message.timestamps.map((e) => e);
        }
        else {
            obj.timestamps = [];
        }
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseContribution };
        message.contributors = [];
        message.amounts = [];
        message.timestamps = [];
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
        if (object.timestamps !== undefined && object.timestamps !== null) {
            for (const e of object.timestamps) {
                message.timestamps.push(e);
            }
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        return message;
    }
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
