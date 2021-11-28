/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { Coin } from '../cosmos/base/v1beta1/coin'

export const protobufPackage = 'str11ngfello.moonloop.moonloop'

export interface MsgCreateCollection {
  creator: string
  index: string
  name: string
  description: string
  mintStrategy: string
  classes: string[]
}

export interface MsgCreateCollectionResponse {}

export interface MsgUpdateCollection {
  creator: string
  index: string
  name: string
  description: string
  mintStrategy: string
  classes: string[]
}

export interface MsgUpdateCollectionResponse {}

export interface MsgDeleteCollection {
  creator: string
  index: string
}

export interface MsgDeleteCollectionResponse {}

export interface MsgCreateClass {
  creator: string
  collectionIndex: string
  classTemplateIndex: string
  instanceIndex: string
  owner: string
}

export interface MsgCreateClassResponse {}

export interface MsgUpdateClass {
  creator: string
  collectionIndex: string
  classTemplateIndex: string
  instanceIndex: string
  owner: string
}

export interface MsgUpdateClassResponse {}

export interface MsgDeleteClass {
  creator: string
  collectionIndex: string
  classTemplateIndex: string
  instanceIndex: string
}

export interface MsgDeleteClassResponse {}

export interface MsgCreateMintStrategy {
  creator: string
  index: string
  minters: string[]
  instanceLevels: number[]
  priceLevels: number[]
  paused: boolean
}

export interface MsgCreateMintStrategyResponse {}

export interface MsgUpdateMintStrategy {
  creator: string
  index: string
  minters: string[]
  instanceLevels: number[]
  priceLevels: number[]
  paused: boolean
}

export interface MsgUpdateMintStrategyResponse {}

export interface MsgDeleteMintStrategy {
  creator: string
  index: string
}

export interface MsgDeleteMintStrategyResponse {}

export interface MsgCreateContribution {
  creator: string
  collectionIndex: string
  classTemplateIndex: string
  powerupTemplateIndex: string
  instanceIndex: string
  contributors: string[]
  amounts: Coin[]
}

export interface MsgCreateContributionResponse {}

export interface MsgUpdateContribution {
  creator: string
  collectionIndex: string
  classTemplateIndex: string
  powerupTemplateIndex: string
  instanceIndex: string
  contributors: string[]
  amounts: Coin[]
}

export interface MsgUpdateContributionResponse {}

export interface MsgDeleteContribution {
  creator: string
  collectionIndex: string
  classTemplateIndex: string
  powerupTemplateIndex: string
  instanceIndex: string
}

export interface MsgDeleteContributionResponse {}

export interface MsgCreatePowerupTemplate {
  creator: string
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
  feeRate: Coin | undefined
  activationType: number
  eventData: string
}

export interface MsgCreatePowerupTemplateResponse {}

export interface MsgUpdatePowerupTemplate {
  creator: string
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
  feeRate: Coin | undefined
  activationType: number
  eventData: string
}

export interface MsgUpdatePowerupTemplateResponse {}

export interface MsgDeletePowerupTemplate {
  creator: string
  collectionIndex: string
  classTemplateIndex: string
  powerupTemplateIndex: string
}

export interface MsgDeletePowerupTemplateResponse {}

export interface MsgCreatePowerup {
  creator: string
  collectionIndex: string
  classTemplateIndex: string
  powerupTemplateIndex: string
  instanceIndex: string
  balance: Coin | undefined
  startTime: number
  endTime: number
  numActivations: number
  fees: Coin | undefined
  acceptingPower: boolean
}

export interface MsgCreatePowerupResponse {}

export interface MsgUpdatePowerup {
  creator: string
  collectionIndex: string
  classTemplateIndex: string
  powerupTemplateIndex: string
  instanceIndex: string
  balance: Coin | undefined
  startTime: number
  endTime: number
  numActivations: number
  fees: Coin | undefined
  acceptingPower: boolean
}

export interface MsgUpdatePowerupResponse {}

export interface MsgDeletePowerup {
  creator: string
  collectionIndex: string
  classTemplateIndex: string
  powerupTemplateIndex: string
  instanceIndex: string
}

export interface MsgDeletePowerupResponse {}

export interface MsgSetCollectionMintStrategy {
  creator: string
  collectionIndex: string
  mintStrategyIndex: string
}

export interface MsgSetCollectionMintStrategyResponse {}

export interface MsgSendPower {
  creator: string
  collectionIndex: string
  classTemplateIndex: string
  powerupTemplateIndex: string
  instanceIndex: string
  power: Coin | undefined
}

export interface MsgSendPowerResponse {}

export interface MsgFreePower {
  creator: string
  collectionIndex: string
  classTemplateIndex: string
  powerupTemplateIndex: string
  instanceIndex: string
}

export interface MsgFreePowerResponse {}

export interface MsgMint {
  creator: string
  collectionIndex: string
  classTemplateIndex: string
  numInstances: number
}

export interface MsgMintResponse {}

export interface MsgCreateClassTemplate {
  creator: string
  collectionIndex: string
  classTemplateIndex: string
  name: string
  description: string
  mintStrategy: string
  gltfHash: string
  metadata: string
  maxInstances: number
  count: number
  powerupTemplates: string[]
}

export interface MsgCreateClassTemplateResponse {}

export interface MsgUpdateClassTemplate {
  creator: string
  collectionIndex: string
  classTemplateIndex: string
  name: string
  description: string
  mintStrategy: string
  gltfHash: string
  metadata: string
  maxInstances: number
  count: number
  powerupTemplates: string[]
}

export interface MsgUpdateClassTemplateResponse {}

export interface MsgDeleteClassTemplate {
  creator: string
  collectionIndex: string
  classTemplateIndex: string
}

export interface MsgDeleteClassTemplateResponse {}

const baseMsgCreateCollection: object = { creator: '', index: '', name: '', description: '', mintStrategy: '', classes: '' }

export const MsgCreateCollection = {
  encode(message: MsgCreateCollection, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    if (message.description !== '') {
      writer.uint32(34).string(message.description)
    }
    if (message.mintStrategy !== '') {
      writer.uint32(42).string(message.mintStrategy)
    }
    for (const v of message.classes) {
      writer.uint32(50).string(v!)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCollection {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateCollection } as MsgCreateCollection
    message.classes = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        case 3:
          message.name = reader.string()
          break
        case 4:
          message.description = reader.string()
          break
        case 5:
          message.mintStrategy = reader.string()
          break
        case 6:
          message.classes.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateCollection {
    const message = { ...baseMsgCreateCollection } as MsgCreateCollection
    message.classes = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
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
    if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
      message.mintStrategy = String(object.mintStrategy)
    } else {
      message.mintStrategy = ''
    }
    if (object.classes !== undefined && object.classes !== null) {
      for (const e of object.classes) {
        message.classes.push(String(e))
      }
    }
    return message
  },

  toJSON(message: MsgCreateCollection): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.name !== undefined && (obj.name = message.name)
    message.description !== undefined && (obj.description = message.description)
    message.mintStrategy !== undefined && (obj.mintStrategy = message.mintStrategy)
    if (message.classes) {
      obj.classes = message.classes.map((e) => e)
    } else {
      obj.classes = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateCollection>): MsgCreateCollection {
    const message = { ...baseMsgCreateCollection } as MsgCreateCollection
    message.classes = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
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
    if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
      message.mintStrategy = object.mintStrategy
    } else {
      message.mintStrategy = ''
    }
    if (object.classes !== undefined && object.classes !== null) {
      for (const e of object.classes) {
        message.classes.push(e)
      }
    }
    return message
  }
}

const baseMsgCreateCollectionResponse: object = {}

export const MsgCreateCollectionResponse = {
  encode(_: MsgCreateCollectionResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCollectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateCollectionResponse } as MsgCreateCollectionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreateCollectionResponse {
    const message = { ...baseMsgCreateCollectionResponse } as MsgCreateCollectionResponse
    return message
  },

  toJSON(_: MsgCreateCollectionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateCollectionResponse>): MsgCreateCollectionResponse {
    const message = { ...baseMsgCreateCollectionResponse } as MsgCreateCollectionResponse
    return message
  }
}

const baseMsgUpdateCollection: object = { creator: '', index: '', name: '', description: '', mintStrategy: '', classes: '' }

export const MsgUpdateCollection = {
  encode(message: MsgUpdateCollection, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    if (message.description !== '') {
      writer.uint32(34).string(message.description)
    }
    if (message.mintStrategy !== '') {
      writer.uint32(42).string(message.mintStrategy)
    }
    for (const v of message.classes) {
      writer.uint32(50).string(v!)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCollection {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateCollection } as MsgUpdateCollection
    message.classes = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        case 3:
          message.name = reader.string()
          break
        case 4:
          message.description = reader.string()
          break
        case 5:
          message.mintStrategy = reader.string()
          break
        case 6:
          message.classes.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateCollection {
    const message = { ...baseMsgUpdateCollection } as MsgUpdateCollection
    message.classes = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
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
    if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
      message.mintStrategy = String(object.mintStrategy)
    } else {
      message.mintStrategy = ''
    }
    if (object.classes !== undefined && object.classes !== null) {
      for (const e of object.classes) {
        message.classes.push(String(e))
      }
    }
    return message
  },

  toJSON(message: MsgUpdateCollection): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.name !== undefined && (obj.name = message.name)
    message.description !== undefined && (obj.description = message.description)
    message.mintStrategy !== undefined && (obj.mintStrategy = message.mintStrategy)
    if (message.classes) {
      obj.classes = message.classes.map((e) => e)
    } else {
      obj.classes = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateCollection>): MsgUpdateCollection {
    const message = { ...baseMsgUpdateCollection } as MsgUpdateCollection
    message.classes = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
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
    if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
      message.mintStrategy = object.mintStrategy
    } else {
      message.mintStrategy = ''
    }
    if (object.classes !== undefined && object.classes !== null) {
      for (const e of object.classes) {
        message.classes.push(e)
      }
    }
    return message
  }
}

const baseMsgUpdateCollectionResponse: object = {}

export const MsgUpdateCollectionResponse = {
  encode(_: MsgUpdateCollectionResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCollectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateCollectionResponse } as MsgUpdateCollectionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateCollectionResponse {
    const message = { ...baseMsgUpdateCollectionResponse } as MsgUpdateCollectionResponse
    return message
  },

  toJSON(_: MsgUpdateCollectionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateCollectionResponse>): MsgUpdateCollectionResponse {
    const message = { ...baseMsgUpdateCollectionResponse } as MsgUpdateCollectionResponse
    return message
  }
}

const baseMsgDeleteCollection: object = { creator: '', index: '' }

export const MsgDeleteCollection = {
  encode(message: MsgDeleteCollection, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCollection {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteCollection } as MsgDeleteCollection
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteCollection {
    const message = { ...baseMsgDeleteCollection } as MsgDeleteCollection
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: MsgDeleteCollection): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteCollection>): MsgDeleteCollection {
    const message = { ...baseMsgDeleteCollection } as MsgDeleteCollection
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseMsgDeleteCollectionResponse: object = {}

export const MsgDeleteCollectionResponse = {
  encode(_: MsgDeleteCollectionResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCollectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteCollectionResponse } as MsgDeleteCollectionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteCollectionResponse {
    const message = { ...baseMsgDeleteCollectionResponse } as MsgDeleteCollectionResponse
    return message
  },

  toJSON(_: MsgDeleteCollectionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteCollectionResponse>): MsgDeleteCollectionResponse {
    const message = { ...baseMsgDeleteCollectionResponse } as MsgDeleteCollectionResponse
    return message
  }
}

const baseMsgCreateClass: object = { creator: '', collectionIndex: '', classTemplateIndex: '', instanceIndex: '', owner: '' }

export const MsgCreateClass = {
  encode(message: MsgCreateClass, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.collectionIndex !== '') {
      writer.uint32(18).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(26).string(message.classTemplateIndex)
    }
    if (message.instanceIndex !== '') {
      writer.uint32(34).string(message.instanceIndex)
    }
    if (message.owner !== '') {
      writer.uint32(42).string(message.owner)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateClass {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateClass } as MsgCreateClass
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.collectionIndex = reader.string()
          break
        case 3:
          message.classTemplateIndex = reader.string()
          break
        case 4:
          message.instanceIndex = reader.string()
          break
        case 5:
          message.owner = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateClass {
    const message = { ...baseMsgCreateClass } as MsgCreateClass
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
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
    if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
      message.instanceIndex = String(object.instanceIndex)
    } else {
      message.instanceIndex = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    return message
  },

  toJSON(message: MsgCreateClass): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex)
    message.owner !== undefined && (obj.owner = message.owner)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateClass>): MsgCreateClass {
    const message = { ...baseMsgCreateClass } as MsgCreateClass
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
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
    if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
      message.instanceIndex = object.instanceIndex
    } else {
      message.instanceIndex = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    return message
  }
}

const baseMsgCreateClassResponse: object = {}

export const MsgCreateClassResponse = {
  encode(_: MsgCreateClassResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateClassResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateClassResponse } as MsgCreateClassResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreateClassResponse {
    const message = { ...baseMsgCreateClassResponse } as MsgCreateClassResponse
    return message
  },

  toJSON(_: MsgCreateClassResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateClassResponse>): MsgCreateClassResponse {
    const message = { ...baseMsgCreateClassResponse } as MsgCreateClassResponse
    return message
  }
}

const baseMsgUpdateClass: object = { creator: '', collectionIndex: '', classTemplateIndex: '', instanceIndex: '', owner: '' }

export const MsgUpdateClass = {
  encode(message: MsgUpdateClass, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.collectionIndex !== '') {
      writer.uint32(18).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(26).string(message.classTemplateIndex)
    }
    if (message.instanceIndex !== '') {
      writer.uint32(34).string(message.instanceIndex)
    }
    if (message.owner !== '') {
      writer.uint32(42).string(message.owner)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateClass {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateClass } as MsgUpdateClass
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.collectionIndex = reader.string()
          break
        case 3:
          message.classTemplateIndex = reader.string()
          break
        case 4:
          message.instanceIndex = reader.string()
          break
        case 5:
          message.owner = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateClass {
    const message = { ...baseMsgUpdateClass } as MsgUpdateClass
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
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
    if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
      message.instanceIndex = String(object.instanceIndex)
    } else {
      message.instanceIndex = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    return message
  },

  toJSON(message: MsgUpdateClass): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex)
    message.owner !== undefined && (obj.owner = message.owner)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateClass>): MsgUpdateClass {
    const message = { ...baseMsgUpdateClass } as MsgUpdateClass
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
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
    if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
      message.instanceIndex = object.instanceIndex
    } else {
      message.instanceIndex = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    return message
  }
}

const baseMsgUpdateClassResponse: object = {}

export const MsgUpdateClassResponse = {
  encode(_: MsgUpdateClassResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateClassResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateClassResponse } as MsgUpdateClassResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateClassResponse {
    const message = { ...baseMsgUpdateClassResponse } as MsgUpdateClassResponse
    return message
  },

  toJSON(_: MsgUpdateClassResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateClassResponse>): MsgUpdateClassResponse {
    const message = { ...baseMsgUpdateClassResponse } as MsgUpdateClassResponse
    return message
  }
}

const baseMsgDeleteClass: object = { creator: '', collectionIndex: '', classTemplateIndex: '', instanceIndex: '' }

export const MsgDeleteClass = {
  encode(message: MsgDeleteClass, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.collectionIndex !== '') {
      writer.uint32(18).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(26).string(message.classTemplateIndex)
    }
    if (message.instanceIndex !== '') {
      writer.uint32(34).string(message.instanceIndex)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteClass {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteClass } as MsgDeleteClass
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.collectionIndex = reader.string()
          break
        case 3:
          message.classTemplateIndex = reader.string()
          break
        case 4:
          message.instanceIndex = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteClass {
    const message = { ...baseMsgDeleteClass } as MsgDeleteClass
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
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
    if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
      message.instanceIndex = String(object.instanceIndex)
    } else {
      message.instanceIndex = ''
    }
    return message
  },

  toJSON(message: MsgDeleteClass): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteClass>): MsgDeleteClass {
    const message = { ...baseMsgDeleteClass } as MsgDeleteClass
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
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
    if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
      message.instanceIndex = object.instanceIndex
    } else {
      message.instanceIndex = ''
    }
    return message
  }
}

const baseMsgDeleteClassResponse: object = {}

export const MsgDeleteClassResponse = {
  encode(_: MsgDeleteClassResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteClassResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteClassResponse } as MsgDeleteClassResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteClassResponse {
    const message = { ...baseMsgDeleteClassResponse } as MsgDeleteClassResponse
    return message
  },

  toJSON(_: MsgDeleteClassResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteClassResponse>): MsgDeleteClassResponse {
    const message = { ...baseMsgDeleteClassResponse } as MsgDeleteClassResponse
    return message
  }
}

const baseMsgCreateMintStrategy: object = { creator: '', index: '', minters: '', instanceLevels: 0, priceLevels: 0, paused: false }

export const MsgCreateMintStrategy = {
  encode(message: MsgCreateMintStrategy, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    for (const v of message.minters) {
      writer.uint32(26).string(v!)
    }
    writer.uint32(34).fork()
    for (const v of message.instanceLevels) {
      writer.int32(v)
    }
    writer.ldelim()
    writer.uint32(42).fork()
    for (const v of message.priceLevels) {
      writer.int32(v)
    }
    writer.ldelim()
    if (message.paused === true) {
      writer.uint32(48).bool(message.paused)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateMintStrategy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateMintStrategy } as MsgCreateMintStrategy
    message.minters = []
    message.instanceLevels = []
    message.priceLevels = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        case 3:
          message.minters.push(reader.string())
          break
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.instanceLevels.push(reader.int32())
            }
          } else {
            message.instanceLevels.push(reader.int32())
          }
          break
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.priceLevels.push(reader.int32())
            }
          } else {
            message.priceLevels.push(reader.int32())
          }
          break
        case 6:
          message.paused = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateMintStrategy {
    const message = { ...baseMsgCreateMintStrategy } as MsgCreateMintStrategy
    message.minters = []
    message.instanceLevels = []
    message.priceLevels = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    if (object.minters !== undefined && object.minters !== null) {
      for (const e of object.minters) {
        message.minters.push(String(e))
      }
    }
    if (object.instanceLevels !== undefined && object.instanceLevels !== null) {
      for (const e of object.instanceLevels) {
        message.instanceLevels.push(Number(e))
      }
    }
    if (object.priceLevels !== undefined && object.priceLevels !== null) {
      for (const e of object.priceLevels) {
        message.priceLevels.push(Number(e))
      }
    }
    if (object.paused !== undefined && object.paused !== null) {
      message.paused = Boolean(object.paused)
    } else {
      message.paused = false
    }
    return message
  },

  toJSON(message: MsgCreateMintStrategy): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    if (message.minters) {
      obj.minters = message.minters.map((e) => e)
    } else {
      obj.minters = []
    }
    if (message.instanceLevels) {
      obj.instanceLevels = message.instanceLevels.map((e) => e)
    } else {
      obj.instanceLevels = []
    }
    if (message.priceLevels) {
      obj.priceLevels = message.priceLevels.map((e) => e)
    } else {
      obj.priceLevels = []
    }
    message.paused !== undefined && (obj.paused = message.paused)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateMintStrategy>): MsgCreateMintStrategy {
    const message = { ...baseMsgCreateMintStrategy } as MsgCreateMintStrategy
    message.minters = []
    message.instanceLevels = []
    message.priceLevels = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    if (object.minters !== undefined && object.minters !== null) {
      for (const e of object.minters) {
        message.minters.push(e)
      }
    }
    if (object.instanceLevels !== undefined && object.instanceLevels !== null) {
      for (const e of object.instanceLevels) {
        message.instanceLevels.push(e)
      }
    }
    if (object.priceLevels !== undefined && object.priceLevels !== null) {
      for (const e of object.priceLevels) {
        message.priceLevels.push(e)
      }
    }
    if (object.paused !== undefined && object.paused !== null) {
      message.paused = object.paused
    } else {
      message.paused = false
    }
    return message
  }
}

const baseMsgCreateMintStrategyResponse: object = {}

export const MsgCreateMintStrategyResponse = {
  encode(_: MsgCreateMintStrategyResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateMintStrategyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateMintStrategyResponse } as MsgCreateMintStrategyResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreateMintStrategyResponse {
    const message = { ...baseMsgCreateMintStrategyResponse } as MsgCreateMintStrategyResponse
    return message
  },

  toJSON(_: MsgCreateMintStrategyResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateMintStrategyResponse>): MsgCreateMintStrategyResponse {
    const message = { ...baseMsgCreateMintStrategyResponse } as MsgCreateMintStrategyResponse
    return message
  }
}

const baseMsgUpdateMintStrategy: object = { creator: '', index: '', minters: '', instanceLevels: 0, priceLevels: 0, paused: false }

export const MsgUpdateMintStrategy = {
  encode(message: MsgUpdateMintStrategy, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    for (const v of message.minters) {
      writer.uint32(26).string(v!)
    }
    writer.uint32(34).fork()
    for (const v of message.instanceLevels) {
      writer.int32(v)
    }
    writer.ldelim()
    writer.uint32(42).fork()
    for (const v of message.priceLevels) {
      writer.int32(v)
    }
    writer.ldelim()
    if (message.paused === true) {
      writer.uint32(48).bool(message.paused)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateMintStrategy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateMintStrategy } as MsgUpdateMintStrategy
    message.minters = []
    message.instanceLevels = []
    message.priceLevels = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        case 3:
          message.minters.push(reader.string())
          break
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.instanceLevels.push(reader.int32())
            }
          } else {
            message.instanceLevels.push(reader.int32())
          }
          break
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.priceLevels.push(reader.int32())
            }
          } else {
            message.priceLevels.push(reader.int32())
          }
          break
        case 6:
          message.paused = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateMintStrategy {
    const message = { ...baseMsgUpdateMintStrategy } as MsgUpdateMintStrategy
    message.minters = []
    message.instanceLevels = []
    message.priceLevels = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    if (object.minters !== undefined && object.minters !== null) {
      for (const e of object.minters) {
        message.minters.push(String(e))
      }
    }
    if (object.instanceLevels !== undefined && object.instanceLevels !== null) {
      for (const e of object.instanceLevels) {
        message.instanceLevels.push(Number(e))
      }
    }
    if (object.priceLevels !== undefined && object.priceLevels !== null) {
      for (const e of object.priceLevels) {
        message.priceLevels.push(Number(e))
      }
    }
    if (object.paused !== undefined && object.paused !== null) {
      message.paused = Boolean(object.paused)
    } else {
      message.paused = false
    }
    return message
  },

  toJSON(message: MsgUpdateMintStrategy): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    if (message.minters) {
      obj.minters = message.minters.map((e) => e)
    } else {
      obj.minters = []
    }
    if (message.instanceLevels) {
      obj.instanceLevels = message.instanceLevels.map((e) => e)
    } else {
      obj.instanceLevels = []
    }
    if (message.priceLevels) {
      obj.priceLevels = message.priceLevels.map((e) => e)
    } else {
      obj.priceLevels = []
    }
    message.paused !== undefined && (obj.paused = message.paused)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateMintStrategy>): MsgUpdateMintStrategy {
    const message = { ...baseMsgUpdateMintStrategy } as MsgUpdateMintStrategy
    message.minters = []
    message.instanceLevels = []
    message.priceLevels = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    if (object.minters !== undefined && object.minters !== null) {
      for (const e of object.minters) {
        message.minters.push(e)
      }
    }
    if (object.instanceLevels !== undefined && object.instanceLevels !== null) {
      for (const e of object.instanceLevels) {
        message.instanceLevels.push(e)
      }
    }
    if (object.priceLevels !== undefined && object.priceLevels !== null) {
      for (const e of object.priceLevels) {
        message.priceLevels.push(e)
      }
    }
    if (object.paused !== undefined && object.paused !== null) {
      message.paused = object.paused
    } else {
      message.paused = false
    }
    return message
  }
}

const baseMsgUpdateMintStrategyResponse: object = {}

export const MsgUpdateMintStrategyResponse = {
  encode(_: MsgUpdateMintStrategyResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateMintStrategyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateMintStrategyResponse } as MsgUpdateMintStrategyResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateMintStrategyResponse {
    const message = { ...baseMsgUpdateMintStrategyResponse } as MsgUpdateMintStrategyResponse
    return message
  },

  toJSON(_: MsgUpdateMintStrategyResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateMintStrategyResponse>): MsgUpdateMintStrategyResponse {
    const message = { ...baseMsgUpdateMintStrategyResponse } as MsgUpdateMintStrategyResponse
    return message
  }
}

const baseMsgDeleteMintStrategy: object = { creator: '', index: '' }

export const MsgDeleteMintStrategy = {
  encode(message: MsgDeleteMintStrategy, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteMintStrategy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteMintStrategy } as MsgDeleteMintStrategy
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteMintStrategy {
    const message = { ...baseMsgDeleteMintStrategy } as MsgDeleteMintStrategy
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: MsgDeleteMintStrategy): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteMintStrategy>): MsgDeleteMintStrategy {
    const message = { ...baseMsgDeleteMintStrategy } as MsgDeleteMintStrategy
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseMsgDeleteMintStrategyResponse: object = {}

export const MsgDeleteMintStrategyResponse = {
  encode(_: MsgDeleteMintStrategyResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteMintStrategyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteMintStrategyResponse } as MsgDeleteMintStrategyResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteMintStrategyResponse {
    const message = { ...baseMsgDeleteMintStrategyResponse } as MsgDeleteMintStrategyResponse
    return message
  },

  toJSON(_: MsgDeleteMintStrategyResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteMintStrategyResponse>): MsgDeleteMintStrategyResponse {
    const message = { ...baseMsgDeleteMintStrategyResponse } as MsgDeleteMintStrategyResponse
    return message
  }
}

const baseMsgCreateContribution: object = {
  creator: '',
  collectionIndex: '',
  classTemplateIndex: '',
  powerupTemplateIndex: '',
  instanceIndex: '',
  contributors: ''
}

export const MsgCreateContribution = {
  encode(message: MsgCreateContribution, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.collectionIndex !== '') {
      writer.uint32(18).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(26).string(message.classTemplateIndex)
    }
    if (message.powerupTemplateIndex !== '') {
      writer.uint32(34).string(message.powerupTemplateIndex)
    }
    if (message.instanceIndex !== '') {
      writer.uint32(42).string(message.instanceIndex)
    }
    for (const v of message.contributors) {
      writer.uint32(50).string(v!)
    }
    for (const v of message.amounts) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateContribution {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateContribution } as MsgCreateContribution
    message.contributors = []
    message.amounts = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.collectionIndex = reader.string()
          break
        case 3:
          message.classTemplateIndex = reader.string()
          break
        case 4:
          message.powerupTemplateIndex = reader.string()
          break
        case 5:
          message.instanceIndex = reader.string()
          break
        case 6:
          message.contributors.push(reader.string())
          break
        case 7:
          message.amounts.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateContribution {
    const message = { ...baseMsgCreateContribution } as MsgCreateContribution
    message.contributors = []
    message.amounts = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
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
    if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
      message.instanceIndex = String(object.instanceIndex)
    } else {
      message.instanceIndex = ''
    }
    if (object.contributors !== undefined && object.contributors !== null) {
      for (const e of object.contributors) {
        message.contributors.push(String(e))
      }
    }
    if (object.amounts !== undefined && object.amounts !== null) {
      for (const e of object.amounts) {
        message.amounts.push(Coin.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: MsgCreateContribution): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex)
    message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex)
    if (message.contributors) {
      obj.contributors = message.contributors.map((e) => e)
    } else {
      obj.contributors = []
    }
    if (message.amounts) {
      obj.amounts = message.amounts.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.amounts = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateContribution>): MsgCreateContribution {
    const message = { ...baseMsgCreateContribution } as MsgCreateContribution
    message.contributors = []
    message.amounts = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
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
    if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
      message.instanceIndex = object.instanceIndex
    } else {
      message.instanceIndex = ''
    }
    if (object.contributors !== undefined && object.contributors !== null) {
      for (const e of object.contributors) {
        message.contributors.push(e)
      }
    }
    if (object.amounts !== undefined && object.amounts !== null) {
      for (const e of object.amounts) {
        message.amounts.push(Coin.fromPartial(e))
      }
    }
    return message
  }
}

const baseMsgCreateContributionResponse: object = {}

export const MsgCreateContributionResponse = {
  encode(_: MsgCreateContributionResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateContributionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateContributionResponse } as MsgCreateContributionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreateContributionResponse {
    const message = { ...baseMsgCreateContributionResponse } as MsgCreateContributionResponse
    return message
  },

  toJSON(_: MsgCreateContributionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateContributionResponse>): MsgCreateContributionResponse {
    const message = { ...baseMsgCreateContributionResponse } as MsgCreateContributionResponse
    return message
  }
}

const baseMsgUpdateContribution: object = {
  creator: '',
  collectionIndex: '',
  classTemplateIndex: '',
  powerupTemplateIndex: '',
  instanceIndex: '',
  contributors: ''
}

export const MsgUpdateContribution = {
  encode(message: MsgUpdateContribution, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.collectionIndex !== '') {
      writer.uint32(18).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(26).string(message.classTemplateIndex)
    }
    if (message.powerupTemplateIndex !== '') {
      writer.uint32(34).string(message.powerupTemplateIndex)
    }
    if (message.instanceIndex !== '') {
      writer.uint32(42).string(message.instanceIndex)
    }
    for (const v of message.contributors) {
      writer.uint32(50).string(v!)
    }
    for (const v of message.amounts) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateContribution {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateContribution } as MsgUpdateContribution
    message.contributors = []
    message.amounts = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.collectionIndex = reader.string()
          break
        case 3:
          message.classTemplateIndex = reader.string()
          break
        case 4:
          message.powerupTemplateIndex = reader.string()
          break
        case 5:
          message.instanceIndex = reader.string()
          break
        case 6:
          message.contributors.push(reader.string())
          break
        case 7:
          message.amounts.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateContribution {
    const message = { ...baseMsgUpdateContribution } as MsgUpdateContribution
    message.contributors = []
    message.amounts = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
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
    if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
      message.instanceIndex = String(object.instanceIndex)
    } else {
      message.instanceIndex = ''
    }
    if (object.contributors !== undefined && object.contributors !== null) {
      for (const e of object.contributors) {
        message.contributors.push(String(e))
      }
    }
    if (object.amounts !== undefined && object.amounts !== null) {
      for (const e of object.amounts) {
        message.amounts.push(Coin.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: MsgUpdateContribution): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex)
    message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex)
    if (message.contributors) {
      obj.contributors = message.contributors.map((e) => e)
    } else {
      obj.contributors = []
    }
    if (message.amounts) {
      obj.amounts = message.amounts.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.amounts = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateContribution>): MsgUpdateContribution {
    const message = { ...baseMsgUpdateContribution } as MsgUpdateContribution
    message.contributors = []
    message.amounts = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
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
    if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
      message.instanceIndex = object.instanceIndex
    } else {
      message.instanceIndex = ''
    }
    if (object.contributors !== undefined && object.contributors !== null) {
      for (const e of object.contributors) {
        message.contributors.push(e)
      }
    }
    if (object.amounts !== undefined && object.amounts !== null) {
      for (const e of object.amounts) {
        message.amounts.push(Coin.fromPartial(e))
      }
    }
    return message
  }
}

const baseMsgUpdateContributionResponse: object = {}

export const MsgUpdateContributionResponse = {
  encode(_: MsgUpdateContributionResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateContributionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateContributionResponse } as MsgUpdateContributionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateContributionResponse {
    const message = { ...baseMsgUpdateContributionResponse } as MsgUpdateContributionResponse
    return message
  },

  toJSON(_: MsgUpdateContributionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateContributionResponse>): MsgUpdateContributionResponse {
    const message = { ...baseMsgUpdateContributionResponse } as MsgUpdateContributionResponse
    return message
  }
}

const baseMsgDeleteContribution: object = { creator: '', collectionIndex: '', classTemplateIndex: '', powerupTemplateIndex: '', instanceIndex: '' }

export const MsgDeleteContribution = {
  encode(message: MsgDeleteContribution, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.collectionIndex !== '') {
      writer.uint32(18).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(26).string(message.classTemplateIndex)
    }
    if (message.powerupTemplateIndex !== '') {
      writer.uint32(34).string(message.powerupTemplateIndex)
    }
    if (message.instanceIndex !== '') {
      writer.uint32(42).string(message.instanceIndex)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteContribution {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteContribution } as MsgDeleteContribution
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.collectionIndex = reader.string()
          break
        case 3:
          message.classTemplateIndex = reader.string()
          break
        case 4:
          message.powerupTemplateIndex = reader.string()
          break
        case 5:
          message.instanceIndex = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteContribution {
    const message = { ...baseMsgDeleteContribution } as MsgDeleteContribution
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
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
    if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
      message.instanceIndex = String(object.instanceIndex)
    } else {
      message.instanceIndex = ''
    }
    return message
  },

  toJSON(message: MsgDeleteContribution): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex)
    message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteContribution>): MsgDeleteContribution {
    const message = { ...baseMsgDeleteContribution } as MsgDeleteContribution
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
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
    if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
      message.instanceIndex = object.instanceIndex
    } else {
      message.instanceIndex = ''
    }
    return message
  }
}

const baseMsgDeleteContributionResponse: object = {}

export const MsgDeleteContributionResponse = {
  encode(_: MsgDeleteContributionResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteContributionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteContributionResponse } as MsgDeleteContributionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteContributionResponse {
    const message = { ...baseMsgDeleteContributionResponse } as MsgDeleteContributionResponse
    return message
  },

  toJSON(_: MsgDeleteContributionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteContributionResponse>): MsgDeleteContributionResponse {
    const message = { ...baseMsgDeleteContributionResponse } as MsgDeleteContributionResponse
    return message
  }
}

const baseMsgCreatePowerupTemplate: object = {
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
}

export const MsgCreatePowerupTemplate = {
  encode(message: MsgCreatePowerupTemplate, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.collectionIndex !== '') {
      writer.uint32(18).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(26).string(message.classTemplateIndex)
    }
    if (message.powerupTemplateIndex !== '') {
      writer.uint32(34).string(message.powerupTemplateIndex)
    }
    if (message.name !== '') {
      writer.uint32(42).string(message.name)
    }
    if (message.description !== '') {
      writer.uint32(50).string(message.description)
    }
    if (message.count !== 0) {
      writer.uint32(56).int32(message.count)
    }
    if (message.activationBalance !== undefined) {
      Coin.encode(message.activationBalance, writer.uint32(66).fork()).ldelim()
    }
    if (message.maxBalance !== undefined) {
      Coin.encode(message.maxBalance, writer.uint32(74).fork()).ldelim()
    }
    if (message.duration !== 0) {
      writer.uint32(80).int32(message.duration)
    }
    if (message.maxDuration !== 0) {
      writer.uint32(88).int32(message.maxDuration)
    }
    if (message.refundDuration !== 0) {
      writer.uint32(96).int32(message.refundDuration)
    }
    if (message.maxActivations !== 0) {
      writer.uint32(104).int32(message.maxActivations)
    }
    if (message.coolDownDuration !== 0) {
      writer.uint32(112).int32(message.coolDownDuration)
    }
    if (message.rechargeRate !== undefined) {
      Coin.encode(message.rechargeRate, writer.uint32(122).fork()).ldelim()
    }
    if (message.feeRate !== undefined) {
      Coin.encode(message.feeRate, writer.uint32(130).fork()).ldelim()
    }
    if (message.activationType !== 0) {
      writer.uint32(136).int32(message.activationType)
    }
    if (message.eventData !== '') {
      writer.uint32(146).string(message.eventData)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePowerupTemplate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreatePowerupTemplate } as MsgCreatePowerupTemplate
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.collectionIndex = reader.string()
          break
        case 3:
          message.classTemplateIndex = reader.string()
          break
        case 4:
          message.powerupTemplateIndex = reader.string()
          break
        case 5:
          message.name = reader.string()
          break
        case 6:
          message.description = reader.string()
          break
        case 7:
          message.count = reader.int32()
          break
        case 8:
          message.activationBalance = Coin.decode(reader, reader.uint32())
          break
        case 9:
          message.maxBalance = Coin.decode(reader, reader.uint32())
          break
        case 10:
          message.duration = reader.int32()
          break
        case 11:
          message.maxDuration = reader.int32()
          break
        case 12:
          message.refundDuration = reader.int32()
          break
        case 13:
          message.maxActivations = reader.int32()
          break
        case 14:
          message.coolDownDuration = reader.int32()
          break
        case 15:
          message.rechargeRate = Coin.decode(reader, reader.uint32())
          break
        case 16:
          message.feeRate = Coin.decode(reader, reader.uint32())
          break
        case 17:
          message.activationType = reader.int32()
          break
        case 18:
          message.eventData = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreatePowerupTemplate {
    const message = { ...baseMsgCreatePowerupTemplate } as MsgCreatePowerupTemplate
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
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
      message.feeRate = Coin.fromJSON(object.feeRate)
    } else {
      message.feeRate = undefined
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
    return message
  },

  toJSON(message: MsgCreatePowerupTemplate): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
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
    message.feeRate !== undefined && (obj.feeRate = message.feeRate ? Coin.toJSON(message.feeRate) : undefined)
    message.activationType !== undefined && (obj.activationType = message.activationType)
    message.eventData !== undefined && (obj.eventData = message.eventData)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreatePowerupTemplate>): MsgCreatePowerupTemplate {
    const message = { ...baseMsgCreatePowerupTemplate } as MsgCreatePowerupTemplate
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
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
      message.feeRate = Coin.fromPartial(object.feeRate)
    } else {
      message.feeRate = undefined
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
    return message
  }
}

const baseMsgCreatePowerupTemplateResponse: object = {}

export const MsgCreatePowerupTemplateResponse = {
  encode(_: MsgCreatePowerupTemplateResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePowerupTemplateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreatePowerupTemplateResponse } as MsgCreatePowerupTemplateResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreatePowerupTemplateResponse {
    const message = { ...baseMsgCreatePowerupTemplateResponse } as MsgCreatePowerupTemplateResponse
    return message
  },

  toJSON(_: MsgCreatePowerupTemplateResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreatePowerupTemplateResponse>): MsgCreatePowerupTemplateResponse {
    const message = { ...baseMsgCreatePowerupTemplateResponse } as MsgCreatePowerupTemplateResponse
    return message
  }
}

const baseMsgUpdatePowerupTemplate: object = {
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
}

export const MsgUpdatePowerupTemplate = {
  encode(message: MsgUpdatePowerupTemplate, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.collectionIndex !== '') {
      writer.uint32(18).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(26).string(message.classTemplateIndex)
    }
    if (message.powerupTemplateIndex !== '') {
      writer.uint32(34).string(message.powerupTemplateIndex)
    }
    if (message.name !== '') {
      writer.uint32(42).string(message.name)
    }
    if (message.description !== '') {
      writer.uint32(50).string(message.description)
    }
    if (message.count !== 0) {
      writer.uint32(56).int32(message.count)
    }
    if (message.activationBalance !== undefined) {
      Coin.encode(message.activationBalance, writer.uint32(66).fork()).ldelim()
    }
    if (message.maxBalance !== undefined) {
      Coin.encode(message.maxBalance, writer.uint32(74).fork()).ldelim()
    }
    if (message.duration !== 0) {
      writer.uint32(80).int32(message.duration)
    }
    if (message.maxDuration !== 0) {
      writer.uint32(88).int32(message.maxDuration)
    }
    if (message.refundDuration !== 0) {
      writer.uint32(96).int32(message.refundDuration)
    }
    if (message.maxActivations !== 0) {
      writer.uint32(104).int32(message.maxActivations)
    }
    if (message.coolDownDuration !== 0) {
      writer.uint32(112).int32(message.coolDownDuration)
    }
    if (message.rechargeRate !== undefined) {
      Coin.encode(message.rechargeRate, writer.uint32(122).fork()).ldelim()
    }
    if (message.feeRate !== undefined) {
      Coin.encode(message.feeRate, writer.uint32(130).fork()).ldelim()
    }
    if (message.activationType !== 0) {
      writer.uint32(136).int32(message.activationType)
    }
    if (message.eventData !== '') {
      writer.uint32(146).string(message.eventData)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePowerupTemplate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdatePowerupTemplate } as MsgUpdatePowerupTemplate
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.collectionIndex = reader.string()
          break
        case 3:
          message.classTemplateIndex = reader.string()
          break
        case 4:
          message.powerupTemplateIndex = reader.string()
          break
        case 5:
          message.name = reader.string()
          break
        case 6:
          message.description = reader.string()
          break
        case 7:
          message.count = reader.int32()
          break
        case 8:
          message.activationBalance = Coin.decode(reader, reader.uint32())
          break
        case 9:
          message.maxBalance = Coin.decode(reader, reader.uint32())
          break
        case 10:
          message.duration = reader.int32()
          break
        case 11:
          message.maxDuration = reader.int32()
          break
        case 12:
          message.refundDuration = reader.int32()
          break
        case 13:
          message.maxActivations = reader.int32()
          break
        case 14:
          message.coolDownDuration = reader.int32()
          break
        case 15:
          message.rechargeRate = Coin.decode(reader, reader.uint32())
          break
        case 16:
          message.feeRate = Coin.decode(reader, reader.uint32())
          break
        case 17:
          message.activationType = reader.int32()
          break
        case 18:
          message.eventData = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdatePowerupTemplate {
    const message = { ...baseMsgUpdatePowerupTemplate } as MsgUpdatePowerupTemplate
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
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
      message.feeRate = Coin.fromJSON(object.feeRate)
    } else {
      message.feeRate = undefined
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
    return message
  },

  toJSON(message: MsgUpdatePowerupTemplate): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
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
    message.feeRate !== undefined && (obj.feeRate = message.feeRate ? Coin.toJSON(message.feeRate) : undefined)
    message.activationType !== undefined && (obj.activationType = message.activationType)
    message.eventData !== undefined && (obj.eventData = message.eventData)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdatePowerupTemplate>): MsgUpdatePowerupTemplate {
    const message = { ...baseMsgUpdatePowerupTemplate } as MsgUpdatePowerupTemplate
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
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
      message.feeRate = Coin.fromPartial(object.feeRate)
    } else {
      message.feeRate = undefined
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
    return message
  }
}

const baseMsgUpdatePowerupTemplateResponse: object = {}

export const MsgUpdatePowerupTemplateResponse = {
  encode(_: MsgUpdatePowerupTemplateResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePowerupTemplateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdatePowerupTemplateResponse } as MsgUpdatePowerupTemplateResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdatePowerupTemplateResponse {
    const message = { ...baseMsgUpdatePowerupTemplateResponse } as MsgUpdatePowerupTemplateResponse
    return message
  },

  toJSON(_: MsgUpdatePowerupTemplateResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdatePowerupTemplateResponse>): MsgUpdatePowerupTemplateResponse {
    const message = { ...baseMsgUpdatePowerupTemplateResponse } as MsgUpdatePowerupTemplateResponse
    return message
  }
}

const baseMsgDeletePowerupTemplate: object = { creator: '', collectionIndex: '', classTemplateIndex: '', powerupTemplateIndex: '' }

export const MsgDeletePowerupTemplate = {
  encode(message: MsgDeletePowerupTemplate, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.collectionIndex !== '') {
      writer.uint32(18).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(26).string(message.classTemplateIndex)
    }
    if (message.powerupTemplateIndex !== '') {
      writer.uint32(34).string(message.powerupTemplateIndex)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePowerupTemplate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeletePowerupTemplate } as MsgDeletePowerupTemplate
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.collectionIndex = reader.string()
          break
        case 3:
          message.classTemplateIndex = reader.string()
          break
        case 4:
          message.powerupTemplateIndex = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeletePowerupTemplate {
    const message = { ...baseMsgDeletePowerupTemplate } as MsgDeletePowerupTemplate
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
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
    return message
  },

  toJSON(message: MsgDeletePowerupTemplate): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeletePowerupTemplate>): MsgDeletePowerupTemplate {
    const message = { ...baseMsgDeletePowerupTemplate } as MsgDeletePowerupTemplate
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
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
    return message
  }
}

const baseMsgDeletePowerupTemplateResponse: object = {}

export const MsgDeletePowerupTemplateResponse = {
  encode(_: MsgDeletePowerupTemplateResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePowerupTemplateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeletePowerupTemplateResponse } as MsgDeletePowerupTemplateResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeletePowerupTemplateResponse {
    const message = { ...baseMsgDeletePowerupTemplateResponse } as MsgDeletePowerupTemplateResponse
    return message
  },

  toJSON(_: MsgDeletePowerupTemplateResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeletePowerupTemplateResponse>): MsgDeletePowerupTemplateResponse {
    const message = { ...baseMsgDeletePowerupTemplateResponse } as MsgDeletePowerupTemplateResponse
    return message
  }
}

const baseMsgCreatePowerup: object = {
  creator: '',
  collectionIndex: '',
  classTemplateIndex: '',
  powerupTemplateIndex: '',
  instanceIndex: '',
  startTime: 0,
  endTime: 0,
  numActivations: 0,
  acceptingPower: false
}

export const MsgCreatePowerup = {
  encode(message: MsgCreatePowerup, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.collectionIndex !== '') {
      writer.uint32(18).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(26).string(message.classTemplateIndex)
    }
    if (message.powerupTemplateIndex !== '') {
      writer.uint32(34).string(message.powerupTemplateIndex)
    }
    if (message.instanceIndex !== '') {
      writer.uint32(42).string(message.instanceIndex)
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(50).fork()).ldelim()
    }
    if (message.startTime !== 0) {
      writer.uint32(56).int32(message.startTime)
    }
    if (message.endTime !== 0) {
      writer.uint32(64).int32(message.endTime)
    }
    if (message.numActivations !== 0) {
      writer.uint32(72).int32(message.numActivations)
    }
    if (message.fees !== undefined) {
      Coin.encode(message.fees, writer.uint32(82).fork()).ldelim()
    }
    if (message.acceptingPower === true) {
      writer.uint32(88).bool(message.acceptingPower)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePowerup {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreatePowerup } as MsgCreatePowerup
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.collectionIndex = reader.string()
          break
        case 3:
          message.classTemplateIndex = reader.string()
          break
        case 4:
          message.powerupTemplateIndex = reader.string()
          break
        case 5:
          message.instanceIndex = reader.string()
          break
        case 6:
          message.balance = Coin.decode(reader, reader.uint32())
          break
        case 7:
          message.startTime = reader.int32()
          break
        case 8:
          message.endTime = reader.int32()
          break
        case 9:
          message.numActivations = reader.int32()
          break
        case 10:
          message.fees = Coin.decode(reader, reader.uint32())
          break
        case 11:
          message.acceptingPower = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreatePowerup {
    const message = { ...baseMsgCreatePowerup } as MsgCreatePowerup
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
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
    if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
      message.instanceIndex = String(object.instanceIndex)
    } else {
      message.instanceIndex = ''
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromJSON(object.balance)
    } else {
      message.balance = undefined
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = Number(object.startTime)
    } else {
      message.startTime = 0
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = Number(object.endTime)
    } else {
      message.endTime = 0
    }
    if (object.numActivations !== undefined && object.numActivations !== null) {
      message.numActivations = Number(object.numActivations)
    } else {
      message.numActivations = 0
    }
    if (object.fees !== undefined && object.fees !== null) {
      message.fees = Coin.fromJSON(object.fees)
    } else {
      message.fees = undefined
    }
    if (object.acceptingPower !== undefined && object.acceptingPower !== null) {
      message.acceptingPower = Boolean(object.acceptingPower)
    } else {
      message.acceptingPower = false
    }
    return message
  },

  toJSON(message: MsgCreatePowerup): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex)
    message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex)
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined)
    message.startTime !== undefined && (obj.startTime = message.startTime)
    message.endTime !== undefined && (obj.endTime = message.endTime)
    message.numActivations !== undefined && (obj.numActivations = message.numActivations)
    message.fees !== undefined && (obj.fees = message.fees ? Coin.toJSON(message.fees) : undefined)
    message.acceptingPower !== undefined && (obj.acceptingPower = message.acceptingPower)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreatePowerup>): MsgCreatePowerup {
    const message = { ...baseMsgCreatePowerup } as MsgCreatePowerup
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
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
    if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
      message.instanceIndex = object.instanceIndex
    } else {
      message.instanceIndex = ''
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromPartial(object.balance)
    } else {
      message.balance = undefined
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = object.startTime
    } else {
      message.startTime = 0
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = object.endTime
    } else {
      message.endTime = 0
    }
    if (object.numActivations !== undefined && object.numActivations !== null) {
      message.numActivations = object.numActivations
    } else {
      message.numActivations = 0
    }
    if (object.fees !== undefined && object.fees !== null) {
      message.fees = Coin.fromPartial(object.fees)
    } else {
      message.fees = undefined
    }
    if (object.acceptingPower !== undefined && object.acceptingPower !== null) {
      message.acceptingPower = object.acceptingPower
    } else {
      message.acceptingPower = false
    }
    return message
  }
}

const baseMsgCreatePowerupResponse: object = {}

export const MsgCreatePowerupResponse = {
  encode(_: MsgCreatePowerupResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePowerupResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreatePowerupResponse } as MsgCreatePowerupResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreatePowerupResponse {
    const message = { ...baseMsgCreatePowerupResponse } as MsgCreatePowerupResponse
    return message
  },

  toJSON(_: MsgCreatePowerupResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreatePowerupResponse>): MsgCreatePowerupResponse {
    const message = { ...baseMsgCreatePowerupResponse } as MsgCreatePowerupResponse
    return message
  }
}

const baseMsgUpdatePowerup: object = {
  creator: '',
  collectionIndex: '',
  classTemplateIndex: '',
  powerupTemplateIndex: '',
  instanceIndex: '',
  startTime: 0,
  endTime: 0,
  numActivations: 0,
  acceptingPower: false
}

export const MsgUpdatePowerup = {
  encode(message: MsgUpdatePowerup, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.collectionIndex !== '') {
      writer.uint32(18).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(26).string(message.classTemplateIndex)
    }
    if (message.powerupTemplateIndex !== '') {
      writer.uint32(34).string(message.powerupTemplateIndex)
    }
    if (message.instanceIndex !== '') {
      writer.uint32(42).string(message.instanceIndex)
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(50).fork()).ldelim()
    }
    if (message.startTime !== 0) {
      writer.uint32(56).int32(message.startTime)
    }
    if (message.endTime !== 0) {
      writer.uint32(64).int32(message.endTime)
    }
    if (message.numActivations !== 0) {
      writer.uint32(72).int32(message.numActivations)
    }
    if (message.fees !== undefined) {
      Coin.encode(message.fees, writer.uint32(82).fork()).ldelim()
    }
    if (message.acceptingPower === true) {
      writer.uint32(88).bool(message.acceptingPower)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePowerup {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdatePowerup } as MsgUpdatePowerup
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.collectionIndex = reader.string()
          break
        case 3:
          message.classTemplateIndex = reader.string()
          break
        case 4:
          message.powerupTemplateIndex = reader.string()
          break
        case 5:
          message.instanceIndex = reader.string()
          break
        case 6:
          message.balance = Coin.decode(reader, reader.uint32())
          break
        case 7:
          message.startTime = reader.int32()
          break
        case 8:
          message.endTime = reader.int32()
          break
        case 9:
          message.numActivations = reader.int32()
          break
        case 10:
          message.fees = Coin.decode(reader, reader.uint32())
          break
        case 11:
          message.acceptingPower = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdatePowerup {
    const message = { ...baseMsgUpdatePowerup } as MsgUpdatePowerup
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
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
    if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
      message.instanceIndex = String(object.instanceIndex)
    } else {
      message.instanceIndex = ''
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromJSON(object.balance)
    } else {
      message.balance = undefined
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = Number(object.startTime)
    } else {
      message.startTime = 0
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = Number(object.endTime)
    } else {
      message.endTime = 0
    }
    if (object.numActivations !== undefined && object.numActivations !== null) {
      message.numActivations = Number(object.numActivations)
    } else {
      message.numActivations = 0
    }
    if (object.fees !== undefined && object.fees !== null) {
      message.fees = Coin.fromJSON(object.fees)
    } else {
      message.fees = undefined
    }
    if (object.acceptingPower !== undefined && object.acceptingPower !== null) {
      message.acceptingPower = Boolean(object.acceptingPower)
    } else {
      message.acceptingPower = false
    }
    return message
  },

  toJSON(message: MsgUpdatePowerup): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex)
    message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex)
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined)
    message.startTime !== undefined && (obj.startTime = message.startTime)
    message.endTime !== undefined && (obj.endTime = message.endTime)
    message.numActivations !== undefined && (obj.numActivations = message.numActivations)
    message.fees !== undefined && (obj.fees = message.fees ? Coin.toJSON(message.fees) : undefined)
    message.acceptingPower !== undefined && (obj.acceptingPower = message.acceptingPower)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdatePowerup>): MsgUpdatePowerup {
    const message = { ...baseMsgUpdatePowerup } as MsgUpdatePowerup
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
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
    if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
      message.instanceIndex = object.instanceIndex
    } else {
      message.instanceIndex = ''
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromPartial(object.balance)
    } else {
      message.balance = undefined
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = object.startTime
    } else {
      message.startTime = 0
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = object.endTime
    } else {
      message.endTime = 0
    }
    if (object.numActivations !== undefined && object.numActivations !== null) {
      message.numActivations = object.numActivations
    } else {
      message.numActivations = 0
    }
    if (object.fees !== undefined && object.fees !== null) {
      message.fees = Coin.fromPartial(object.fees)
    } else {
      message.fees = undefined
    }
    if (object.acceptingPower !== undefined && object.acceptingPower !== null) {
      message.acceptingPower = object.acceptingPower
    } else {
      message.acceptingPower = false
    }
    return message
  }
}

const baseMsgUpdatePowerupResponse: object = {}

export const MsgUpdatePowerupResponse = {
  encode(_: MsgUpdatePowerupResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePowerupResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdatePowerupResponse } as MsgUpdatePowerupResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdatePowerupResponse {
    const message = { ...baseMsgUpdatePowerupResponse } as MsgUpdatePowerupResponse
    return message
  },

  toJSON(_: MsgUpdatePowerupResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdatePowerupResponse>): MsgUpdatePowerupResponse {
    const message = { ...baseMsgUpdatePowerupResponse } as MsgUpdatePowerupResponse
    return message
  }
}

const baseMsgDeletePowerup: object = { creator: '', collectionIndex: '', classTemplateIndex: '', powerupTemplateIndex: '', instanceIndex: '' }

export const MsgDeletePowerup = {
  encode(message: MsgDeletePowerup, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.collectionIndex !== '') {
      writer.uint32(18).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(26).string(message.classTemplateIndex)
    }
    if (message.powerupTemplateIndex !== '') {
      writer.uint32(34).string(message.powerupTemplateIndex)
    }
    if (message.instanceIndex !== '') {
      writer.uint32(42).string(message.instanceIndex)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePowerup {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeletePowerup } as MsgDeletePowerup
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.collectionIndex = reader.string()
          break
        case 3:
          message.classTemplateIndex = reader.string()
          break
        case 4:
          message.powerupTemplateIndex = reader.string()
          break
        case 5:
          message.instanceIndex = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeletePowerup {
    const message = { ...baseMsgDeletePowerup } as MsgDeletePowerup
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
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
    if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
      message.instanceIndex = String(object.instanceIndex)
    } else {
      message.instanceIndex = ''
    }
    return message
  },

  toJSON(message: MsgDeletePowerup): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex)
    message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeletePowerup>): MsgDeletePowerup {
    const message = { ...baseMsgDeletePowerup } as MsgDeletePowerup
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
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
    if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
      message.instanceIndex = object.instanceIndex
    } else {
      message.instanceIndex = ''
    }
    return message
  }
}

const baseMsgDeletePowerupResponse: object = {}

export const MsgDeletePowerupResponse = {
  encode(_: MsgDeletePowerupResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePowerupResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeletePowerupResponse } as MsgDeletePowerupResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeletePowerupResponse {
    const message = { ...baseMsgDeletePowerupResponse } as MsgDeletePowerupResponse
    return message
  },

  toJSON(_: MsgDeletePowerupResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeletePowerupResponse>): MsgDeletePowerupResponse {
    const message = { ...baseMsgDeletePowerupResponse } as MsgDeletePowerupResponse
    return message
  }
}

const baseMsgSetCollectionMintStrategy: object = { creator: '', collectionIndex: '', mintStrategyIndex: '' }

export const MsgSetCollectionMintStrategy = {
  encode(message: MsgSetCollectionMintStrategy, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.collectionIndex !== '') {
      writer.uint32(18).string(message.collectionIndex)
    }
    if (message.mintStrategyIndex !== '') {
      writer.uint32(26).string(message.mintStrategyIndex)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetCollectionMintStrategy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSetCollectionMintStrategy } as MsgSetCollectionMintStrategy
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.collectionIndex = reader.string()
          break
        case 3:
          message.mintStrategyIndex = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgSetCollectionMintStrategy {
    const message = { ...baseMsgSetCollectionMintStrategy } as MsgSetCollectionMintStrategy
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
      message.collectionIndex = String(object.collectionIndex)
    } else {
      message.collectionIndex = ''
    }
    if (object.mintStrategyIndex !== undefined && object.mintStrategyIndex !== null) {
      message.mintStrategyIndex = String(object.mintStrategyIndex)
    } else {
      message.mintStrategyIndex = ''
    }
    return message
  },

  toJSON(message: MsgSetCollectionMintStrategy): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.mintStrategyIndex !== undefined && (obj.mintStrategyIndex = message.mintStrategyIndex)
    return obj
  },

  fromPartial(object: DeepPartial<MsgSetCollectionMintStrategy>): MsgSetCollectionMintStrategy {
    const message = { ...baseMsgSetCollectionMintStrategy } as MsgSetCollectionMintStrategy
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
      message.collectionIndex = object.collectionIndex
    } else {
      message.collectionIndex = ''
    }
    if (object.mintStrategyIndex !== undefined && object.mintStrategyIndex !== null) {
      message.mintStrategyIndex = object.mintStrategyIndex
    } else {
      message.mintStrategyIndex = ''
    }
    return message
  }
}

const baseMsgSetCollectionMintStrategyResponse: object = {}

export const MsgSetCollectionMintStrategyResponse = {
  encode(_: MsgSetCollectionMintStrategyResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetCollectionMintStrategyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSetCollectionMintStrategyResponse } as MsgSetCollectionMintStrategyResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgSetCollectionMintStrategyResponse {
    const message = { ...baseMsgSetCollectionMintStrategyResponse } as MsgSetCollectionMintStrategyResponse
    return message
  },

  toJSON(_: MsgSetCollectionMintStrategyResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgSetCollectionMintStrategyResponse>): MsgSetCollectionMintStrategyResponse {
    const message = { ...baseMsgSetCollectionMintStrategyResponse } as MsgSetCollectionMintStrategyResponse
    return message
  }
}

const baseMsgSendPower: object = { creator: '', collectionIndex: '', classTemplateIndex: '', powerupTemplateIndex: '', instanceIndex: '' }

export const MsgSendPower = {
  encode(message: MsgSendPower, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.collectionIndex !== '') {
      writer.uint32(18).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(26).string(message.classTemplateIndex)
    }
    if (message.powerupTemplateIndex !== '') {
      writer.uint32(34).string(message.powerupTemplateIndex)
    }
    if (message.instanceIndex !== '') {
      writer.uint32(42).string(message.instanceIndex)
    }
    if (message.power !== undefined) {
      Coin.encode(message.power, writer.uint32(50).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendPower {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSendPower } as MsgSendPower
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.collectionIndex = reader.string()
          break
        case 3:
          message.classTemplateIndex = reader.string()
          break
        case 4:
          message.powerupTemplateIndex = reader.string()
          break
        case 5:
          message.instanceIndex = reader.string()
          break
        case 6:
          message.power = Coin.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgSendPower {
    const message = { ...baseMsgSendPower } as MsgSendPower
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
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
    if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
      message.instanceIndex = String(object.instanceIndex)
    } else {
      message.instanceIndex = ''
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = Coin.fromJSON(object.power)
    } else {
      message.power = undefined
    }
    return message
  },

  toJSON(message: MsgSendPower): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex)
    message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex)
    message.power !== undefined && (obj.power = message.power ? Coin.toJSON(message.power) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<MsgSendPower>): MsgSendPower {
    const message = { ...baseMsgSendPower } as MsgSendPower
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
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
    if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
      message.instanceIndex = object.instanceIndex
    } else {
      message.instanceIndex = ''
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = Coin.fromPartial(object.power)
    } else {
      message.power = undefined
    }
    return message
  }
}

const baseMsgSendPowerResponse: object = {}

export const MsgSendPowerResponse = {
  encode(_: MsgSendPowerResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendPowerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSendPowerResponse } as MsgSendPowerResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgSendPowerResponse {
    const message = { ...baseMsgSendPowerResponse } as MsgSendPowerResponse
    return message
  },

  toJSON(_: MsgSendPowerResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgSendPowerResponse>): MsgSendPowerResponse {
    const message = { ...baseMsgSendPowerResponse } as MsgSendPowerResponse
    return message
  }
}

const baseMsgFreePower: object = { creator: '', collectionIndex: '', classTemplateIndex: '', powerupTemplateIndex: '', instanceIndex: '' }

export const MsgFreePower = {
  encode(message: MsgFreePower, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.collectionIndex !== '') {
      writer.uint32(18).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(26).string(message.classTemplateIndex)
    }
    if (message.powerupTemplateIndex !== '') {
      writer.uint32(34).string(message.powerupTemplateIndex)
    }
    if (message.instanceIndex !== '') {
      writer.uint32(42).string(message.instanceIndex)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgFreePower {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgFreePower } as MsgFreePower
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.collectionIndex = reader.string()
          break
        case 3:
          message.classTemplateIndex = reader.string()
          break
        case 4:
          message.powerupTemplateIndex = reader.string()
          break
        case 5:
          message.instanceIndex = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgFreePower {
    const message = { ...baseMsgFreePower } as MsgFreePower
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
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
    if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
      message.instanceIndex = String(object.instanceIndex)
    } else {
      message.instanceIndex = ''
    }
    return message
  },

  toJSON(message: MsgFreePower): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex)
    message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex)
    return obj
  },

  fromPartial(object: DeepPartial<MsgFreePower>): MsgFreePower {
    const message = { ...baseMsgFreePower } as MsgFreePower
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
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
    if (object.instanceIndex !== undefined && object.instanceIndex !== null) {
      message.instanceIndex = object.instanceIndex
    } else {
      message.instanceIndex = ''
    }
    return message
  }
}

const baseMsgFreePowerResponse: object = {}

export const MsgFreePowerResponse = {
  encode(_: MsgFreePowerResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgFreePowerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgFreePowerResponse } as MsgFreePowerResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgFreePowerResponse {
    const message = { ...baseMsgFreePowerResponse } as MsgFreePowerResponse
    return message
  },

  toJSON(_: MsgFreePowerResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgFreePowerResponse>): MsgFreePowerResponse {
    const message = { ...baseMsgFreePowerResponse } as MsgFreePowerResponse
    return message
  }
}

const baseMsgMint: object = { creator: '', collectionIndex: '', classTemplateIndex: '', numInstances: 0 }

export const MsgMint = {
  encode(message: MsgMint, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.collectionIndex !== '') {
      writer.uint32(18).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(26).string(message.classTemplateIndex)
    }
    if (message.numInstances !== 0) {
      writer.uint32(32).int32(message.numInstances)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgMint } as MsgMint
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.collectionIndex = reader.string()
          break
        case 3:
          message.classTemplateIndex = reader.string()
          break
        case 4:
          message.numInstances = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgMint {
    const message = { ...baseMsgMint } as MsgMint
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
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
    if (object.numInstances !== undefined && object.numInstances !== null) {
      message.numInstances = Number(object.numInstances)
    } else {
      message.numInstances = 0
    }
    return message
  },

  toJSON(message: MsgMint): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    message.numInstances !== undefined && (obj.numInstances = message.numInstances)
    return obj
  },

  fromPartial(object: DeepPartial<MsgMint>): MsgMint {
    const message = { ...baseMsgMint } as MsgMint
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
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
    if (object.numInstances !== undefined && object.numInstances !== null) {
      message.numInstances = object.numInstances
    } else {
      message.numInstances = 0
    }
    return message
  }
}

const baseMsgMintResponse: object = {}

export const MsgMintResponse = {
  encode(_: MsgMintResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgMintResponse } as MsgMintResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgMintResponse {
    const message = { ...baseMsgMintResponse } as MsgMintResponse
    return message
  },

  toJSON(_: MsgMintResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgMintResponse>): MsgMintResponse {
    const message = { ...baseMsgMintResponse } as MsgMintResponse
    return message
  }
}

const baseMsgCreateClassTemplate: object = {
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
}

export const MsgCreateClassTemplate = {
  encode(message: MsgCreateClassTemplate, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.collectionIndex !== '') {
      writer.uint32(18).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(26).string(message.classTemplateIndex)
    }
    if (message.name !== '') {
      writer.uint32(34).string(message.name)
    }
    if (message.description !== '') {
      writer.uint32(42).string(message.description)
    }
    if (message.mintStrategy !== '') {
      writer.uint32(50).string(message.mintStrategy)
    }
    if (message.gltfHash !== '') {
      writer.uint32(58).string(message.gltfHash)
    }
    if (message.metadata !== '') {
      writer.uint32(66).string(message.metadata)
    }
    if (message.maxInstances !== 0) {
      writer.uint32(72).int32(message.maxInstances)
    }
    if (message.count !== 0) {
      writer.uint32(80).int32(message.count)
    }
    for (const v of message.powerupTemplates) {
      writer.uint32(90).string(v!)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateClassTemplate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateClassTemplate } as MsgCreateClassTemplate
    message.powerupTemplates = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.collectionIndex = reader.string()
          break
        case 3:
          message.classTemplateIndex = reader.string()
          break
        case 4:
          message.name = reader.string()
          break
        case 5:
          message.description = reader.string()
          break
        case 6:
          message.mintStrategy = reader.string()
          break
        case 7:
          message.gltfHash = reader.string()
          break
        case 8:
          message.metadata = reader.string()
          break
        case 9:
          message.maxInstances = reader.int32()
          break
        case 10:
          message.count = reader.int32()
          break
        case 11:
          message.powerupTemplates.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateClassTemplate {
    const message = { ...baseMsgCreateClassTemplate } as MsgCreateClassTemplate
    message.powerupTemplates = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
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
    if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
      message.mintStrategy = String(object.mintStrategy)
    } else {
      message.mintStrategy = ''
    }
    if (object.gltfHash !== undefined && object.gltfHash !== null) {
      message.gltfHash = String(object.gltfHash)
    } else {
      message.gltfHash = ''
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = String(object.metadata)
    } else {
      message.metadata = ''
    }
    if (object.maxInstances !== undefined && object.maxInstances !== null) {
      message.maxInstances = Number(object.maxInstances)
    } else {
      message.maxInstances = 0
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count)
    } else {
      message.count = 0
    }
    if (object.powerupTemplates !== undefined && object.powerupTemplates !== null) {
      for (const e of object.powerupTemplates) {
        message.powerupTemplates.push(String(e))
      }
    }
    return message
  },

  toJSON(message: MsgCreateClassTemplate): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    message.name !== undefined && (obj.name = message.name)
    message.description !== undefined && (obj.description = message.description)
    message.mintStrategy !== undefined && (obj.mintStrategy = message.mintStrategy)
    message.gltfHash !== undefined && (obj.gltfHash = message.gltfHash)
    message.metadata !== undefined && (obj.metadata = message.metadata)
    message.maxInstances !== undefined && (obj.maxInstances = message.maxInstances)
    message.count !== undefined && (obj.count = message.count)
    if (message.powerupTemplates) {
      obj.powerupTemplates = message.powerupTemplates.map((e) => e)
    } else {
      obj.powerupTemplates = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateClassTemplate>): MsgCreateClassTemplate {
    const message = { ...baseMsgCreateClassTemplate } as MsgCreateClassTemplate
    message.powerupTemplates = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
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
    if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
      message.mintStrategy = object.mintStrategy
    } else {
      message.mintStrategy = ''
    }
    if (object.gltfHash !== undefined && object.gltfHash !== null) {
      message.gltfHash = object.gltfHash
    } else {
      message.gltfHash = ''
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata
    } else {
      message.metadata = ''
    }
    if (object.maxInstances !== undefined && object.maxInstances !== null) {
      message.maxInstances = object.maxInstances
    } else {
      message.maxInstances = 0
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count
    } else {
      message.count = 0
    }
    if (object.powerupTemplates !== undefined && object.powerupTemplates !== null) {
      for (const e of object.powerupTemplates) {
        message.powerupTemplates.push(e)
      }
    }
    return message
  }
}

const baseMsgCreateClassTemplateResponse: object = {}

export const MsgCreateClassTemplateResponse = {
  encode(_: MsgCreateClassTemplateResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateClassTemplateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateClassTemplateResponse } as MsgCreateClassTemplateResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreateClassTemplateResponse {
    const message = { ...baseMsgCreateClassTemplateResponse } as MsgCreateClassTemplateResponse
    return message
  },

  toJSON(_: MsgCreateClassTemplateResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateClassTemplateResponse>): MsgCreateClassTemplateResponse {
    const message = { ...baseMsgCreateClassTemplateResponse } as MsgCreateClassTemplateResponse
    return message
  }
}

const baseMsgUpdateClassTemplate: object = {
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
}

export const MsgUpdateClassTemplate = {
  encode(message: MsgUpdateClassTemplate, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.collectionIndex !== '') {
      writer.uint32(18).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(26).string(message.classTemplateIndex)
    }
    if (message.name !== '') {
      writer.uint32(34).string(message.name)
    }
    if (message.description !== '') {
      writer.uint32(42).string(message.description)
    }
    if (message.mintStrategy !== '') {
      writer.uint32(50).string(message.mintStrategy)
    }
    if (message.gltfHash !== '') {
      writer.uint32(58).string(message.gltfHash)
    }
    if (message.metadata !== '') {
      writer.uint32(66).string(message.metadata)
    }
    if (message.maxInstances !== 0) {
      writer.uint32(72).int32(message.maxInstances)
    }
    if (message.count !== 0) {
      writer.uint32(80).int32(message.count)
    }
    for (const v of message.powerupTemplates) {
      writer.uint32(90).string(v!)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateClassTemplate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateClassTemplate } as MsgUpdateClassTemplate
    message.powerupTemplates = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.collectionIndex = reader.string()
          break
        case 3:
          message.classTemplateIndex = reader.string()
          break
        case 4:
          message.name = reader.string()
          break
        case 5:
          message.description = reader.string()
          break
        case 6:
          message.mintStrategy = reader.string()
          break
        case 7:
          message.gltfHash = reader.string()
          break
        case 8:
          message.metadata = reader.string()
          break
        case 9:
          message.maxInstances = reader.int32()
          break
        case 10:
          message.count = reader.int32()
          break
        case 11:
          message.powerupTemplates.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateClassTemplate {
    const message = { ...baseMsgUpdateClassTemplate } as MsgUpdateClassTemplate
    message.powerupTemplates = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
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
    if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
      message.mintStrategy = String(object.mintStrategy)
    } else {
      message.mintStrategy = ''
    }
    if (object.gltfHash !== undefined && object.gltfHash !== null) {
      message.gltfHash = String(object.gltfHash)
    } else {
      message.gltfHash = ''
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = String(object.metadata)
    } else {
      message.metadata = ''
    }
    if (object.maxInstances !== undefined && object.maxInstances !== null) {
      message.maxInstances = Number(object.maxInstances)
    } else {
      message.maxInstances = 0
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count)
    } else {
      message.count = 0
    }
    if (object.powerupTemplates !== undefined && object.powerupTemplates !== null) {
      for (const e of object.powerupTemplates) {
        message.powerupTemplates.push(String(e))
      }
    }
    return message
  },

  toJSON(message: MsgUpdateClassTemplate): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    message.name !== undefined && (obj.name = message.name)
    message.description !== undefined && (obj.description = message.description)
    message.mintStrategy !== undefined && (obj.mintStrategy = message.mintStrategy)
    message.gltfHash !== undefined && (obj.gltfHash = message.gltfHash)
    message.metadata !== undefined && (obj.metadata = message.metadata)
    message.maxInstances !== undefined && (obj.maxInstances = message.maxInstances)
    message.count !== undefined && (obj.count = message.count)
    if (message.powerupTemplates) {
      obj.powerupTemplates = message.powerupTemplates.map((e) => e)
    } else {
      obj.powerupTemplates = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateClassTemplate>): MsgUpdateClassTemplate {
    const message = { ...baseMsgUpdateClassTemplate } as MsgUpdateClassTemplate
    message.powerupTemplates = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
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
    if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
      message.mintStrategy = object.mintStrategy
    } else {
      message.mintStrategy = ''
    }
    if (object.gltfHash !== undefined && object.gltfHash !== null) {
      message.gltfHash = object.gltfHash
    } else {
      message.gltfHash = ''
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata
    } else {
      message.metadata = ''
    }
    if (object.maxInstances !== undefined && object.maxInstances !== null) {
      message.maxInstances = object.maxInstances
    } else {
      message.maxInstances = 0
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count
    } else {
      message.count = 0
    }
    if (object.powerupTemplates !== undefined && object.powerupTemplates !== null) {
      for (const e of object.powerupTemplates) {
        message.powerupTemplates.push(e)
      }
    }
    return message
  }
}

const baseMsgUpdateClassTemplateResponse: object = {}

export const MsgUpdateClassTemplateResponse = {
  encode(_: MsgUpdateClassTemplateResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateClassTemplateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateClassTemplateResponse } as MsgUpdateClassTemplateResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateClassTemplateResponse {
    const message = { ...baseMsgUpdateClassTemplateResponse } as MsgUpdateClassTemplateResponse
    return message
  },

  toJSON(_: MsgUpdateClassTemplateResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateClassTemplateResponse>): MsgUpdateClassTemplateResponse {
    const message = { ...baseMsgUpdateClassTemplateResponse } as MsgUpdateClassTemplateResponse
    return message
  }
}

const baseMsgDeleteClassTemplate: object = { creator: '', collectionIndex: '', classTemplateIndex: '' }

export const MsgDeleteClassTemplate = {
  encode(message: MsgDeleteClassTemplate, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.collectionIndex !== '') {
      writer.uint32(18).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(26).string(message.classTemplateIndex)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteClassTemplate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteClassTemplate } as MsgDeleteClassTemplate
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.collectionIndex = reader.string()
          break
        case 3:
          message.classTemplateIndex = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteClassTemplate {
    const message = { ...baseMsgDeleteClassTemplate } as MsgDeleteClassTemplate
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
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
    return message
  },

  toJSON(message: MsgDeleteClassTemplate): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteClassTemplate>): MsgDeleteClassTemplate {
    const message = { ...baseMsgDeleteClassTemplate } as MsgDeleteClassTemplate
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
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
    return message
  }
}

const baseMsgDeleteClassTemplateResponse: object = {}

export const MsgDeleteClassTemplateResponse = {
  encode(_: MsgDeleteClassTemplateResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteClassTemplateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteClassTemplateResponse } as MsgDeleteClassTemplateResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteClassTemplateResponse {
    const message = { ...baseMsgDeleteClassTemplateResponse } as MsgDeleteClassTemplateResponse
    return message
  },

  toJSON(_: MsgDeleteClassTemplateResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteClassTemplateResponse>): MsgDeleteClassTemplateResponse {
    const message = { ...baseMsgDeleteClassTemplateResponse } as MsgDeleteClassTemplateResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  CreateCollection(request: MsgCreateCollection): Promise<MsgCreateCollectionResponse>
  UpdateCollection(request: MsgUpdateCollection): Promise<MsgUpdateCollectionResponse>
  DeleteCollection(request: MsgDeleteCollection): Promise<MsgDeleteCollectionResponse>
  CreateClass(request: MsgCreateClass): Promise<MsgCreateClassResponse>
  UpdateClass(request: MsgUpdateClass): Promise<MsgUpdateClassResponse>
  DeleteClass(request: MsgDeleteClass): Promise<MsgDeleteClassResponse>
  CreateMintStrategy(request: MsgCreateMintStrategy): Promise<MsgCreateMintStrategyResponse>
  UpdateMintStrategy(request: MsgUpdateMintStrategy): Promise<MsgUpdateMintStrategyResponse>
  DeleteMintStrategy(request: MsgDeleteMintStrategy): Promise<MsgDeleteMintStrategyResponse>
  CreateContribution(request: MsgCreateContribution): Promise<MsgCreateContributionResponse>
  UpdateContribution(request: MsgUpdateContribution): Promise<MsgUpdateContributionResponse>
  DeleteContribution(request: MsgDeleteContribution): Promise<MsgDeleteContributionResponse>
  CreatePowerupTemplate(request: MsgCreatePowerupTemplate): Promise<MsgCreatePowerupTemplateResponse>
  UpdatePowerupTemplate(request: MsgUpdatePowerupTemplate): Promise<MsgUpdatePowerupTemplateResponse>
  DeletePowerupTemplate(request: MsgDeletePowerupTemplate): Promise<MsgDeletePowerupTemplateResponse>
  CreatePowerup(request: MsgCreatePowerup): Promise<MsgCreatePowerupResponse>
  UpdatePowerup(request: MsgUpdatePowerup): Promise<MsgUpdatePowerupResponse>
  DeletePowerup(request: MsgDeletePowerup): Promise<MsgDeletePowerupResponse>
  SetCollectionMintStrategy(request: MsgSetCollectionMintStrategy): Promise<MsgSetCollectionMintStrategyResponse>
  SendPower(request: MsgSendPower): Promise<MsgSendPowerResponse>
  FreePower(request: MsgFreePower): Promise<MsgFreePowerResponse>
  Mint(request: MsgMint): Promise<MsgMintResponse>
  CreateClassTemplate(request: MsgCreateClassTemplate): Promise<MsgCreateClassTemplateResponse>
  UpdateClassTemplate(request: MsgUpdateClassTemplate): Promise<MsgUpdateClassTemplateResponse>
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteClassTemplate(request: MsgDeleteClassTemplate): Promise<MsgDeleteClassTemplateResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateCollection(request: MsgCreateCollection): Promise<MsgCreateCollectionResponse> {
    const data = MsgCreateCollection.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'CreateCollection', data)
    return promise.then((data) => MsgCreateCollectionResponse.decode(new Reader(data)))
  }

  UpdateCollection(request: MsgUpdateCollection): Promise<MsgUpdateCollectionResponse> {
    const data = MsgUpdateCollection.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'UpdateCollection', data)
    return promise.then((data) => MsgUpdateCollectionResponse.decode(new Reader(data)))
  }

  DeleteCollection(request: MsgDeleteCollection): Promise<MsgDeleteCollectionResponse> {
    const data = MsgDeleteCollection.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'DeleteCollection', data)
    return promise.then((data) => MsgDeleteCollectionResponse.decode(new Reader(data)))
  }

  CreateClass(request: MsgCreateClass): Promise<MsgCreateClassResponse> {
    const data = MsgCreateClass.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'CreateClass', data)
    return promise.then((data) => MsgCreateClassResponse.decode(new Reader(data)))
  }

  UpdateClass(request: MsgUpdateClass): Promise<MsgUpdateClassResponse> {
    const data = MsgUpdateClass.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'UpdateClass', data)
    return promise.then((data) => MsgUpdateClassResponse.decode(new Reader(data)))
  }

  DeleteClass(request: MsgDeleteClass): Promise<MsgDeleteClassResponse> {
    const data = MsgDeleteClass.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'DeleteClass', data)
    return promise.then((data) => MsgDeleteClassResponse.decode(new Reader(data)))
  }

  CreateMintStrategy(request: MsgCreateMintStrategy): Promise<MsgCreateMintStrategyResponse> {
    const data = MsgCreateMintStrategy.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'CreateMintStrategy', data)
    return promise.then((data) => MsgCreateMintStrategyResponse.decode(new Reader(data)))
  }

  UpdateMintStrategy(request: MsgUpdateMintStrategy): Promise<MsgUpdateMintStrategyResponse> {
    const data = MsgUpdateMintStrategy.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'UpdateMintStrategy', data)
    return promise.then((data) => MsgUpdateMintStrategyResponse.decode(new Reader(data)))
  }

  DeleteMintStrategy(request: MsgDeleteMintStrategy): Promise<MsgDeleteMintStrategyResponse> {
    const data = MsgDeleteMintStrategy.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'DeleteMintStrategy', data)
    return promise.then((data) => MsgDeleteMintStrategyResponse.decode(new Reader(data)))
  }

  CreateContribution(request: MsgCreateContribution): Promise<MsgCreateContributionResponse> {
    const data = MsgCreateContribution.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'CreateContribution', data)
    return promise.then((data) => MsgCreateContributionResponse.decode(new Reader(data)))
  }

  UpdateContribution(request: MsgUpdateContribution): Promise<MsgUpdateContributionResponse> {
    const data = MsgUpdateContribution.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'UpdateContribution', data)
    return promise.then((data) => MsgUpdateContributionResponse.decode(new Reader(data)))
  }

  DeleteContribution(request: MsgDeleteContribution): Promise<MsgDeleteContributionResponse> {
    const data = MsgDeleteContribution.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'DeleteContribution', data)
    return promise.then((data) => MsgDeleteContributionResponse.decode(new Reader(data)))
  }

  CreatePowerupTemplate(request: MsgCreatePowerupTemplate): Promise<MsgCreatePowerupTemplateResponse> {
    const data = MsgCreatePowerupTemplate.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'CreatePowerupTemplate', data)
    return promise.then((data) => MsgCreatePowerupTemplateResponse.decode(new Reader(data)))
  }

  UpdatePowerupTemplate(request: MsgUpdatePowerupTemplate): Promise<MsgUpdatePowerupTemplateResponse> {
    const data = MsgUpdatePowerupTemplate.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'UpdatePowerupTemplate', data)
    return promise.then((data) => MsgUpdatePowerupTemplateResponse.decode(new Reader(data)))
  }

  DeletePowerupTemplate(request: MsgDeletePowerupTemplate): Promise<MsgDeletePowerupTemplateResponse> {
    const data = MsgDeletePowerupTemplate.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'DeletePowerupTemplate', data)
    return promise.then((data) => MsgDeletePowerupTemplateResponse.decode(new Reader(data)))
  }

  CreatePowerup(request: MsgCreatePowerup): Promise<MsgCreatePowerupResponse> {
    const data = MsgCreatePowerup.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'CreatePowerup', data)
    return promise.then((data) => MsgCreatePowerupResponse.decode(new Reader(data)))
  }

  UpdatePowerup(request: MsgUpdatePowerup): Promise<MsgUpdatePowerupResponse> {
    const data = MsgUpdatePowerup.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'UpdatePowerup', data)
    return promise.then((data) => MsgUpdatePowerupResponse.decode(new Reader(data)))
  }

  DeletePowerup(request: MsgDeletePowerup): Promise<MsgDeletePowerupResponse> {
    const data = MsgDeletePowerup.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'DeletePowerup', data)
    return promise.then((data) => MsgDeletePowerupResponse.decode(new Reader(data)))
  }

  SetCollectionMintStrategy(request: MsgSetCollectionMintStrategy): Promise<MsgSetCollectionMintStrategyResponse> {
    const data = MsgSetCollectionMintStrategy.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'SetCollectionMintStrategy', data)
    return promise.then((data) => MsgSetCollectionMintStrategyResponse.decode(new Reader(data)))
  }

  SendPower(request: MsgSendPower): Promise<MsgSendPowerResponse> {
    const data = MsgSendPower.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'SendPower', data)
    return promise.then((data) => MsgSendPowerResponse.decode(new Reader(data)))
  }

  FreePower(request: MsgFreePower): Promise<MsgFreePowerResponse> {
    const data = MsgFreePower.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'FreePower', data)
    return promise.then((data) => MsgFreePowerResponse.decode(new Reader(data)))
  }

  Mint(request: MsgMint): Promise<MsgMintResponse> {
    const data = MsgMint.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'Mint', data)
    return promise.then((data) => MsgMintResponse.decode(new Reader(data)))
  }

  CreateClassTemplate(request: MsgCreateClassTemplate): Promise<MsgCreateClassTemplateResponse> {
    const data = MsgCreateClassTemplate.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'CreateClassTemplate', data)
    return promise.then((data) => MsgCreateClassTemplateResponse.decode(new Reader(data)))
  }

  UpdateClassTemplate(request: MsgUpdateClassTemplate): Promise<MsgUpdateClassTemplateResponse> {
    const data = MsgUpdateClassTemplate.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'UpdateClassTemplate', data)
    return promise.then((data) => MsgUpdateClassTemplateResponse.decode(new Reader(data)))
  }

  DeleteClassTemplate(request: MsgDeleteClassTemplate): Promise<MsgDeleteClassTemplateResponse> {
    const data = MsgDeleteClassTemplate.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Msg', 'DeleteClassTemplate', data)
    return promise.then((data) => MsgDeleteClassTemplateResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
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
