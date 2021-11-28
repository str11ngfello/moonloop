/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'str11ngfello.moonloop.moonloop';
const baseClass = { collectionIndex: '', classTemplateIndex: '', instanceIndex: '', creator: '', owner: '' };
export const Class = {
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
        if (message.creator !== '') {
            writer.uint32(34).string(message.creator);
        }
        if (message.owner !== '') {
            writer.uint32(42).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClass };
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
                case 4:
                    message.creator = reader.string();
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
        const message = { ...baseClass };
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
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
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
        message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex);
        message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex);
        message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex);
        message.creator !== undefined && (obj.creator = message.creator);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseClass };
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
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
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
