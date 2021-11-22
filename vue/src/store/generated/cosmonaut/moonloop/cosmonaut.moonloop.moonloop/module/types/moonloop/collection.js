/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'cosmonaut.moonloop.moonloop';
const baseCollection = { index: '', name: '', description: '', mintStrategy: '', classes: '', creator: '' };
export const Collection = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.mintStrategy !== '') {
            writer.uint32(34).string(message.mintStrategy);
        }
        for (const v of message.classes) {
            writer.uint32(42).string(v);
        }
        if (message.creator !== '') {
            writer.uint32(50).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCollection };
        message.classes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.mintStrategy = reader.string();
                    break;
                case 5:
                    message.classes.push(reader.string());
                    break;
                case 6:
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
        const message = { ...baseCollection };
        message.classes = [];
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
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCollection };
        message.classes = [];
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
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        return message;
    }
};
