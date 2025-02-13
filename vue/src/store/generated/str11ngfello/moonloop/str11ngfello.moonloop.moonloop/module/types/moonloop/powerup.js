/* eslint-disable */
import { Coin } from '../cosmos/base/v1beta1/coin';
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'str11ngfello.moonloop.moonloop';
const basePowerup = {
    collectionIndex: '',
    classTemplateIndex: '',
    powerupTemplateIndex: '',
    instanceIndex: '',
    startTime: 0,
    endTime: 0,
    numActivations: 0,
    acceptingPower: false,
    creator: ''
};
export const Powerup = {
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
        if (message.balance !== undefined) {
            Coin.encode(message.balance, writer.uint32(42).fork()).ldelim();
        }
        if (message.startTime !== 0) {
            writer.uint32(48).int32(message.startTime);
        }
        if (message.endTime !== 0) {
            writer.uint32(56).int32(message.endTime);
        }
        if (message.numActivations !== 0) {
            writer.uint32(64).int32(message.numActivations);
        }
        if (message.fees !== undefined) {
            Coin.encode(message.fees, writer.uint32(74).fork()).ldelim();
        }
        if (message.acceptingPower === true) {
            writer.uint32(80).bool(message.acceptingPower);
        }
        if (message.creator !== '') {
            writer.uint32(90).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePowerup };
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
                    message.balance = Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.startTime = reader.int32();
                    break;
                case 7:
                    message.endTime = reader.int32();
                    break;
                case 8:
                    message.numActivations = reader.int32();
                    break;
                case 9:
                    message.fees = Coin.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.acceptingPower = reader.bool();
                    break;
                case 11:
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
        const message = { ...basePowerup };
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
        message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
        message.startTime !== undefined && (obj.startTime = message.startTime);
        message.endTime !== undefined && (obj.endTime = message.endTime);
        message.numActivations !== undefined && (obj.numActivations = message.numActivations);
        message.fees !== undefined && (obj.fees = message.fees ? Coin.toJSON(message.fees) : undefined);
        message.acceptingPower !== undefined && (obj.acceptingPower = message.acceptingPower);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePowerup };
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
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        return message;
    }
};
