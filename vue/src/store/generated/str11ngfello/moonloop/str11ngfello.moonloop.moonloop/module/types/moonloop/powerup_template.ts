/* eslint-disable */
import { Coin } from '../cosmos/base/v1beta1/coin'
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'str11ngfello.moonloop.moonloop'

export interface PowerupTemplate {
  collectionIndex: string
  classTemplateIndex: string
  powerupTemplateIndex: string
  name: string
  description: string
  count: number
  activationBalance: Coin | undefined
  maxBalance: Coin | undefined
  duration: number
  maxDuration: number
  refundDuration: number
  maxActivations: number
  coolDownDuration: number
  rechargeRate: Coin | undefined
  feeRate: string
  activationType: number
  eventData: string
  creator: string
}

const basePowerupTemplate: object = {
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
  feeRate: '',
  activationType: 0,
  eventData: '',
  creator: ''
}

export const PowerupTemplate = {
  encode(message: PowerupTemplate, writer: Writer = Writer.create()): Writer {
    if (message.collectionIndex !== '') {
      writer.uint32(10).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(18).string(message.classTemplateIndex)
    }
    if (message.powerupTemplateIndex !== '') {
      writer.uint32(26).string(message.powerupTemplateIndex)
    }
    if (message.name !== '') {
      writer.uint32(34).string(message.name)
    }
    if (message.description !== '') {
      writer.uint32(42).string(message.description)
    }
    if (message.count !== 0) {
      writer.uint32(48).int32(message.count)
    }
    if (message.activationBalance !== undefined) {
      Coin.encode(message.activationBalance, writer.uint32(58).fork()).ldelim()
    }
    if (message.maxBalance !== undefined) {
      Coin.encode(message.maxBalance, writer.uint32(66).fork()).ldelim()
    }
    if (message.duration !== 0) {
      writer.uint32(72).int32(message.duration)
    }
    if (message.maxDuration !== 0) {
      writer.uint32(80).int32(message.maxDuration)
    }
    if (message.refundDuration !== 0) {
      writer.uint32(88).int32(message.refundDuration)
    }
    if (message.maxActivations !== 0) {
      writer.uint32(96).int32(message.maxActivations)
    }
    if (message.coolDownDuration !== 0) {
      writer.uint32(104).int32(message.coolDownDuration)
    }
    if (message.rechargeRate !== undefined) {
      Coin.encode(message.rechargeRate, writer.uint32(114).fork()).ldelim()
    }
    if (message.feeRate !== '') {
      writer.uint32(122).string(message.feeRate)
    }
    if (message.activationType !== 0) {
      writer.uint32(128).int32(message.activationType)
    }
    if (message.eventData !== '') {
      writer.uint32(138).string(message.eventData)
    }
    if (message.creator !== '') {
      writer.uint32(146).string(message.creator)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): PowerupTemplate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePowerupTemplate } as PowerupTemplate
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.collectionIndex = reader.string()
          break
        case 2:
          message.classTemplateIndex = reader.string()
          break
        case 3:
          message.powerupTemplateIndex = reader.string()
          break
        case 4:
          message.name = reader.string()
          break
        case 5:
          message.description = reader.string()
          break
        case 6:
          message.count = reader.int32()
          break
        case 7:
          message.activationBalance = Coin.decode(reader, reader.uint32())
          break
        case 8:
          message.maxBalance = Coin.decode(reader, reader.uint32())
          break
        case 9:
          message.duration = reader.int32()
          break
        case 10:
          message.maxDuration = reader.int32()
          break
        case 11:
          message.refundDuration = reader.int32()
          break
        case 12:
          message.maxActivations = reader.int32()
          break
        case 13:
          message.coolDownDuration = reader.int32()
          break
        case 14:
          message.rechargeRate = Coin.decode(reader, reader.uint32())
          break
        case 15:
          message.feeRate = reader.string()
          break
        case 16:
          message.activationType = reader.int32()
          break
        case 17:
          message.eventData = reader.string()
          break
        case 18:
          message.creator = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PowerupTemplate {
    const message = { ...basePowerupTemplate } as PowerupTemplate
    if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
      message.collectionIndex = String(object.collectionIndex)
    } else {
      message.collectionIndex = ''
    }
    if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
      message.classTemplateIndex = String(object.classTemplateIndex)
    } else {
      message.classTemplateIndex = ''
    }
    if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
      message.powerupTemplateIndex = String(object.powerupTemplateIndex)
    } else {
      message.powerupTemplateIndex = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description)
    } else {
      message.description = ''
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count)
    } else {
      message.count = 0
    }
    if (object.activationBalance !== undefined && object.activationBalance !== null) {
      message.activationBalance = Coin.fromJSON(object.activationBalance)
    } else {
      message.activationBalance = undefined
    }
    if (object.maxBalance !== undefined && object.maxBalance !== null) {
      message.maxBalance = Coin.fromJSON(object.maxBalance)
    } else {
      message.maxBalance = undefined
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Number(object.duration)
    } else {
      message.duration = 0
    }
    if (object.maxDuration !== undefined && object.maxDuration !== null) {
      message.maxDuration = Number(object.maxDuration)
    } else {
      message.maxDuration = 0
    }
    if (object.refundDuration !== undefined && object.refundDuration !== null) {
      message.refundDuration = Number(object.refundDuration)
    } else {
      message.refundDuration = 0
    }
    if (object.maxActivations !== undefined && object.maxActivations !== null) {
      message.maxActivations = Number(object.maxActivations)
    } else {
      message.maxActivations = 0
    }
    if (object.coolDownDuration !== undefined && object.coolDownDuration !== null) {
      message.coolDownDuration = Number(object.coolDownDuration)
    } else {
      message.coolDownDuration = 0
    }
    if (object.rechargeRate !== undefined && object.rechargeRate !== null) {
      message.rechargeRate = Coin.fromJSON(object.rechargeRate)
    } else {
      message.rechargeRate = undefined
    }
    if (object.feeRate !== undefined && object.feeRate !== null) {
      message.feeRate = String(object.feeRate)
    } else {
      message.feeRate = ''
    }
    if (object.activationType !== undefined && object.activationType !== null) {
      message.activationType = Number(object.activationType)
    } else {
      message.activationType = 0
    }
    if (object.eventData !== undefined && object.eventData !== null) {
      message.eventData = String(object.eventData)
    } else {
      message.eventData = ''
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    return message
  },

  toJSON(message: PowerupTemplate): unknown {
    const obj: any = {}
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex)
    message.name !== undefined && (obj.name = message.name)
    message.description !== undefined && (obj.description = message.description)
    message.count !== undefined && (obj.count = message.count)
    message.activationBalance !== undefined && (obj.activationBalance = message.activationBalance ? Coin.toJSON(message.activationBalance) : undefined)
    message.maxBalance !== undefined && (obj.maxBalance = message.maxBalance ? Coin.toJSON(message.maxBalance) : undefined)
    message.duration !== undefined && (obj.duration = message.duration)
    message.maxDuration !== undefined && (obj.maxDuration = message.maxDuration)
    message.refundDuration !== undefined && (obj.refundDuration = message.refundDuration)
    message.maxActivations !== undefined && (obj.maxActivations = message.maxActivations)
    message.coolDownDuration !== undefined && (obj.coolDownDuration = message.coolDownDuration)
    message.rechargeRate !== undefined && (obj.rechargeRate = message.rechargeRate ? Coin.toJSON(message.rechargeRate) : undefined)
    message.feeRate !== undefined && (obj.feeRate = message.feeRate)
    message.activationType !== undefined && (obj.activationType = message.activationType)
    message.eventData !== undefined && (obj.eventData = message.eventData)
    message.creator !== undefined && (obj.creator = message.creator)
    return obj
  },

  fromPartial(object: DeepPartial<PowerupTemplate>): PowerupTemplate {
    const message = { ...basePowerupTemplate } as PowerupTemplate
    if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
      message.collectionIndex = object.collectionIndex
    } else {
      message.collectionIndex = ''
    }
    if (object.classTemplateIndex !== undefined && object.classTemplateIndex !== null) {
      message.classTemplateIndex = object.classTemplateIndex
    } else {
      message.classTemplateIndex = ''
    }
    if (object.powerupTemplateIndex !== undefined && object.powerupTemplateIndex !== null) {
      message.powerupTemplateIndex = object.powerupTemplateIndex
    } else {
      message.powerupTemplateIndex = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description
    } else {
      message.description = ''
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count
    } else {
      message.count = 0
    }
    if (object.activationBalance !== undefined && object.activationBalance !== null) {
      message.activationBalance = Coin.fromPartial(object.activationBalance)
    } else {
      message.activationBalance = undefined
    }
    if (object.maxBalance !== undefined && object.maxBalance !== null) {
      message.maxBalance = Coin.fromPartial(object.maxBalance)
    } else {
      message.maxBalance = undefined
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration
    } else {
      message.duration = 0
    }
    if (object.maxDuration !== undefined && object.maxDuration !== null) {
      message.maxDuration = object.maxDuration
    } else {
      message.maxDuration = 0
    }
    if (object.refundDuration !== undefined && object.refundDuration !== null) {
      message.refundDuration = object.refundDuration
    } else {
      message.refundDuration = 0
    }
    if (object.maxActivations !== undefined && object.maxActivations !== null) {
      message.maxActivations = object.maxActivations
    } else {
      message.maxActivations = 0
    }
    if (object.coolDownDuration !== undefined && object.coolDownDuration !== null) {
      message.coolDownDuration = object.coolDownDuration
    } else {
      message.coolDownDuration = 0
    }
    if (object.rechargeRate !== undefined && object.rechargeRate !== null) {
      message.rechargeRate = Coin.fromPartial(object.rechargeRate)
    } else {
      message.rechargeRate = undefined
    }
    if (object.feeRate !== undefined && object.feeRate !== null) {
      message.feeRate = object.feeRate
    } else {
      message.feeRate = ''
    }
    if (object.activationType !== undefined && object.activationType !== null) {
      message.activationType = object.activationType
    } else {
      message.activationType = 0
    }
    if (object.eventData !== undefined && object.eventData !== null) {
      message.eventData = object.eventData
    } else {
      message.eventData = ''
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    return message
  }
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
