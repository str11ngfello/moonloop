/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { Collection } from '../moonloop/collection'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { Class } from '../moonloop/class'
import { MintStrategy } from '../moonloop/mint_strategy'
import { Contribution } from '../moonloop/contribution'
import { PowerupTemplate } from '../moonloop/powerup_template'
import { Powerup } from '../moonloop/powerup'
import { ClassTemplate } from '../moonloop/class_template'
import { CollectionOwner } from '../moonloop/collection_owner'
import { InstanceOwner } from '../moonloop/instance_owner'

export const protobufPackage = 'str11ngfello.moonloop.moonloop'

export interface QueryGetCollectionRequest {
  index: string
}

export interface QueryGetCollectionResponse {
  collection: Collection | undefined
}

export interface QueryAllCollectionRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllCollectionResponse {
  collection: Collection[]
  pagination: PageResponse | undefined
}

export interface QueryGetClassRequest {
  collectionIndex: string
  classTemplateIndex: string
  instanceIndex: string
}

export interface QueryGetClassResponse {
  class: Class | undefined
}

export interface QueryAllClassRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllClassResponse {
  class: Class[]
  pagination: PageResponse | undefined
}

export interface QueryGetMintStrategyRequest {
  index: string
}

export interface QueryGetMintStrategyResponse {
  mintStrategy: MintStrategy | undefined
}

export interface QueryAllMintStrategyRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllMintStrategyResponse {
  mintStrategy: MintStrategy[]
  pagination: PageResponse | undefined
}

export interface QueryGetContributionRequest {
  collectionIndex: string
  classTemplateIndex: string
  powerupTemplateIndex: string
  instanceIndex: string
}

export interface QueryGetContributionResponse {
  contribution: Contribution | undefined
}

export interface QueryAllContributionRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllContributionResponse {
  contribution: Contribution[]
  pagination: PageResponse | undefined
}

export interface QueryGetPowerupTemplateRequest {
  collectionIndex: string
  classTemplateIndex: string
  powerupTemplateIndex: string
}

export interface QueryGetPowerupTemplateResponse {
  powerupTemplate: PowerupTemplate | undefined
}

export interface QueryAllPowerupTemplateRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllPowerupTemplateResponse {
  powerupTemplate: PowerupTemplate[]
  pagination: PageResponse | undefined
}

export interface QueryGetPowerupRequest {
  collectionIndex: string
  classTemplateIndex: string
  powerupTemplateIndex: string
  instanceIndex: string
}

export interface QueryGetPowerupResponse {
  powerup: Powerup | undefined
}

export interface QueryAllPowerupRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllPowerupResponse {
  powerup: Powerup[]
  pagination: PageResponse | undefined
}

export interface QueryGetInstanceRequest {
  collectionIndex: string
  classTemplateIndex: string
  instanceIndex: string
}

export interface QueryGetInstanceResponse {
  collection: Collection | undefined
  classTemplate: ClassTemplate | undefined
  powerupTemplates: PowerupTemplate[]
  powerups: Powerup[]
}

export interface QueryGetClassTemplateRequest {
  collectionIndex: string
  classTemplateIndex: string
}

export interface QueryGetClassTemplateResponse {
  classTemplate: ClassTemplate | undefined
}

export interface QueryAllClassTemplateRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllClassTemplateResponse {
  classTemplate: ClassTemplate[]
  pagination: PageResponse | undefined
}

export interface QueryGetCollectionOwnerRequest {
  index: string
}

export interface QueryGetCollectionOwnerResponse {
  collectionOwner: CollectionOwner | undefined
}

export interface QueryAllCollectionOwnerRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllCollectionOwnerResponse {
  collectionOwner: CollectionOwner[]
  pagination: PageResponse | undefined
}

export interface QueryGetInstanceOwnerRequest {
  index: string
}

export interface QueryGetInstanceOwnerResponse {
  instanceOwner: InstanceOwner | undefined
}

export interface QueryAllInstanceOwnerRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllInstanceOwnerResponse {
  instanceOwner: InstanceOwner[]
  pagination: PageResponse | undefined
}

const baseQueryGetCollectionRequest: object = { index: '' }

export const QueryGetCollectionRequest = {
  encode(message: QueryGetCollectionRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCollectionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCollectionRequest } as QueryGetCollectionRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetCollectionRequest {
    const message = { ...baseQueryGetCollectionRequest } as QueryGetCollectionRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetCollectionRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCollectionRequest>): QueryGetCollectionRequest {
    const message = { ...baseQueryGetCollectionRequest } as QueryGetCollectionRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetCollectionResponse: object = {}

export const QueryGetCollectionResponse = {
  encode(message: QueryGetCollectionResponse, writer: Writer = Writer.create()): Writer {
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCollectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCollectionResponse } as QueryGetCollectionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.collection = Collection.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetCollectionResponse {
    const message = { ...baseQueryGetCollectionResponse } as QueryGetCollectionResponse
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = Collection.fromJSON(object.collection)
    } else {
      message.collection = undefined
    }
    return message
  },

  toJSON(message: QueryGetCollectionResponse): unknown {
    const obj: any = {}
    message.collection !== undefined && (obj.collection = message.collection ? Collection.toJSON(message.collection) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCollectionResponse>): QueryGetCollectionResponse {
    const message = { ...baseQueryGetCollectionResponse } as QueryGetCollectionResponse
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = Collection.fromPartial(object.collection)
    } else {
      message.collection = undefined
    }
    return message
  }
}

const baseQueryAllCollectionRequest: object = {}

export const QueryAllCollectionRequest = {
  encode(message: QueryAllCollectionRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCollectionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllCollectionRequest } as QueryAllCollectionRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllCollectionRequest {
    const message = { ...baseQueryAllCollectionRequest } as QueryAllCollectionRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllCollectionRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllCollectionRequest>): QueryAllCollectionRequest {
    const message = { ...baseQueryAllCollectionRequest } as QueryAllCollectionRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllCollectionResponse: object = {}

export const QueryAllCollectionResponse = {
  encode(message: QueryAllCollectionResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.collection) {
      Collection.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCollectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllCollectionResponse } as QueryAllCollectionResponse
    message.collection = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.collection.push(Collection.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllCollectionResponse {
    const message = { ...baseQueryAllCollectionResponse } as QueryAllCollectionResponse
    message.collection = []
    if (object.collection !== undefined && object.collection !== null) {
      for (const e of object.collection) {
        message.collection.push(Collection.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllCollectionResponse): unknown {
    const obj: any = {}
    if (message.collection) {
      obj.collection = message.collection.map((e) => (e ? Collection.toJSON(e) : undefined))
    } else {
      obj.collection = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllCollectionResponse>): QueryAllCollectionResponse {
    const message = { ...baseQueryAllCollectionResponse } as QueryAllCollectionResponse
    message.collection = []
    if (object.collection !== undefined && object.collection !== null) {
      for (const e of object.collection) {
        message.collection.push(Collection.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetClassRequest: object = { collectionIndex: '', classTemplateIndex: '', instanceIndex: '' }

export const QueryGetClassRequest = {
  encode(message: QueryGetClassRequest, writer: Writer = Writer.create()): Writer {
    if (message.collectionIndex !== '') {
      writer.uint32(10).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(18).string(message.classTemplateIndex)
    }
    if (message.instanceIndex !== '') {
      writer.uint32(26).string(message.instanceIndex)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetClassRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetClassRequest } as QueryGetClassRequest
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
          message.instanceIndex = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetClassRequest {
    const message = { ...baseQueryGetClassRequest } as QueryGetClassRequest
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

  toJSON(message: QueryGetClassRequest): unknown {
    const obj: any = {}
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetClassRequest>): QueryGetClassRequest {
    const message = { ...baseQueryGetClassRequest } as QueryGetClassRequest
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

const baseQueryGetClassResponse: object = {}

export const QueryGetClassResponse = {
  encode(message: QueryGetClassResponse, writer: Writer = Writer.create()): Writer {
    if (message.class !== undefined) {
      Class.encode(message.class, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetClassResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetClassResponse } as QueryGetClassResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.class = Class.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetClassResponse {
    const message = { ...baseQueryGetClassResponse } as QueryGetClassResponse
    if (object.class !== undefined && object.class !== null) {
      message.class = Class.fromJSON(object.class)
    } else {
      message.class = undefined
    }
    return message
  },

  toJSON(message: QueryGetClassResponse): unknown {
    const obj: any = {}
    message.class !== undefined && (obj.class = message.class ? Class.toJSON(message.class) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetClassResponse>): QueryGetClassResponse {
    const message = { ...baseQueryGetClassResponse } as QueryGetClassResponse
    if (object.class !== undefined && object.class !== null) {
      message.class = Class.fromPartial(object.class)
    } else {
      message.class = undefined
    }
    return message
  }
}

const baseQueryAllClassRequest: object = {}

export const QueryAllClassRequest = {
  encode(message: QueryAllClassRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllClassRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllClassRequest } as QueryAllClassRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllClassRequest {
    const message = { ...baseQueryAllClassRequest } as QueryAllClassRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllClassRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllClassRequest>): QueryAllClassRequest {
    const message = { ...baseQueryAllClassRequest } as QueryAllClassRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllClassResponse: object = {}

export const QueryAllClassResponse = {
  encode(message: QueryAllClassResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.class) {
      Class.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllClassResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllClassResponse } as QueryAllClassResponse
    message.class = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.class.push(Class.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllClassResponse {
    const message = { ...baseQueryAllClassResponse } as QueryAllClassResponse
    message.class = []
    if (object.class !== undefined && object.class !== null) {
      for (const e of object.class) {
        message.class.push(Class.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllClassResponse): unknown {
    const obj: any = {}
    if (message.class) {
      obj.class = message.class.map((e) => (e ? Class.toJSON(e) : undefined))
    } else {
      obj.class = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllClassResponse>): QueryAllClassResponse {
    const message = { ...baseQueryAllClassResponse } as QueryAllClassResponse
    message.class = []
    if (object.class !== undefined && object.class !== null) {
      for (const e of object.class) {
        message.class.push(Class.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetMintStrategyRequest: object = { index: '' }

export const QueryGetMintStrategyRequest = {
  encode(message: QueryGetMintStrategyRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetMintStrategyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetMintStrategyRequest } as QueryGetMintStrategyRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetMintStrategyRequest {
    const message = { ...baseQueryGetMintStrategyRequest } as QueryGetMintStrategyRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetMintStrategyRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetMintStrategyRequest>): QueryGetMintStrategyRequest {
    const message = { ...baseQueryGetMintStrategyRequest } as QueryGetMintStrategyRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetMintStrategyResponse: object = {}

export const QueryGetMintStrategyResponse = {
  encode(message: QueryGetMintStrategyResponse, writer: Writer = Writer.create()): Writer {
    if (message.mintStrategy !== undefined) {
      MintStrategy.encode(message.mintStrategy, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetMintStrategyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetMintStrategyResponse } as QueryGetMintStrategyResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.mintStrategy = MintStrategy.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetMintStrategyResponse {
    const message = { ...baseQueryGetMintStrategyResponse } as QueryGetMintStrategyResponse
    if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
      message.mintStrategy = MintStrategy.fromJSON(object.mintStrategy)
    } else {
      message.mintStrategy = undefined
    }
    return message
  },

  toJSON(message: QueryGetMintStrategyResponse): unknown {
    const obj: any = {}
    message.mintStrategy !== undefined && (obj.mintStrategy = message.mintStrategy ? MintStrategy.toJSON(message.mintStrategy) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetMintStrategyResponse>): QueryGetMintStrategyResponse {
    const message = { ...baseQueryGetMintStrategyResponse } as QueryGetMintStrategyResponse
    if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
      message.mintStrategy = MintStrategy.fromPartial(object.mintStrategy)
    } else {
      message.mintStrategy = undefined
    }
    return message
  }
}

const baseQueryAllMintStrategyRequest: object = {}

export const QueryAllMintStrategyRequest = {
  encode(message: QueryAllMintStrategyRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllMintStrategyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllMintStrategyRequest } as QueryAllMintStrategyRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllMintStrategyRequest {
    const message = { ...baseQueryAllMintStrategyRequest } as QueryAllMintStrategyRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllMintStrategyRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllMintStrategyRequest>): QueryAllMintStrategyRequest {
    const message = { ...baseQueryAllMintStrategyRequest } as QueryAllMintStrategyRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllMintStrategyResponse: object = {}

export const QueryAllMintStrategyResponse = {
  encode(message: QueryAllMintStrategyResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.mintStrategy) {
      MintStrategy.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllMintStrategyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllMintStrategyResponse } as QueryAllMintStrategyResponse
    message.mintStrategy = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.mintStrategy.push(MintStrategy.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllMintStrategyResponse {
    const message = { ...baseQueryAllMintStrategyResponse } as QueryAllMintStrategyResponse
    message.mintStrategy = []
    if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
      for (const e of object.mintStrategy) {
        message.mintStrategy.push(MintStrategy.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllMintStrategyResponse): unknown {
    const obj: any = {}
    if (message.mintStrategy) {
      obj.mintStrategy = message.mintStrategy.map((e) => (e ? MintStrategy.toJSON(e) : undefined))
    } else {
      obj.mintStrategy = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllMintStrategyResponse>): QueryAllMintStrategyResponse {
    const message = { ...baseQueryAllMintStrategyResponse } as QueryAllMintStrategyResponse
    message.mintStrategy = []
    if (object.mintStrategy !== undefined && object.mintStrategy !== null) {
      for (const e of object.mintStrategy) {
        message.mintStrategy.push(MintStrategy.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetContributionRequest: object = { collectionIndex: '', classTemplateIndex: '', powerupTemplateIndex: '', instanceIndex: '' }

export const QueryGetContributionRequest = {
  encode(message: QueryGetContributionRequest, writer: Writer = Writer.create()): Writer {
    if (message.collectionIndex !== '') {
      writer.uint32(10).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(18).string(message.classTemplateIndex)
    }
    if (message.powerupTemplateIndex !== '') {
      writer.uint32(26).string(message.powerupTemplateIndex)
    }
    if (message.instanceIndex !== '') {
      writer.uint32(34).string(message.instanceIndex)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetContributionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetContributionRequest } as QueryGetContributionRequest
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
          message.instanceIndex = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetContributionRequest {
    const message = { ...baseQueryGetContributionRequest } as QueryGetContributionRequest
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

  toJSON(message: QueryGetContributionRequest): unknown {
    const obj: any = {}
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex)
    message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetContributionRequest>): QueryGetContributionRequest {
    const message = { ...baseQueryGetContributionRequest } as QueryGetContributionRequest
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

const baseQueryGetContributionResponse: object = {}

export const QueryGetContributionResponse = {
  encode(message: QueryGetContributionResponse, writer: Writer = Writer.create()): Writer {
    if (message.contribution !== undefined) {
      Contribution.encode(message.contribution, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetContributionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetContributionResponse } as QueryGetContributionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.contribution = Contribution.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetContributionResponse {
    const message = { ...baseQueryGetContributionResponse } as QueryGetContributionResponse
    if (object.contribution !== undefined && object.contribution !== null) {
      message.contribution = Contribution.fromJSON(object.contribution)
    } else {
      message.contribution = undefined
    }
    return message
  },

  toJSON(message: QueryGetContributionResponse): unknown {
    const obj: any = {}
    message.contribution !== undefined && (obj.contribution = message.contribution ? Contribution.toJSON(message.contribution) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetContributionResponse>): QueryGetContributionResponse {
    const message = { ...baseQueryGetContributionResponse } as QueryGetContributionResponse
    if (object.contribution !== undefined && object.contribution !== null) {
      message.contribution = Contribution.fromPartial(object.contribution)
    } else {
      message.contribution = undefined
    }
    return message
  }
}

const baseQueryAllContributionRequest: object = {}

export const QueryAllContributionRequest = {
  encode(message: QueryAllContributionRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllContributionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllContributionRequest } as QueryAllContributionRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllContributionRequest {
    const message = { ...baseQueryAllContributionRequest } as QueryAllContributionRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllContributionRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllContributionRequest>): QueryAllContributionRequest {
    const message = { ...baseQueryAllContributionRequest } as QueryAllContributionRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllContributionResponse: object = {}

export const QueryAllContributionResponse = {
  encode(message: QueryAllContributionResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.contribution) {
      Contribution.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllContributionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllContributionResponse } as QueryAllContributionResponse
    message.contribution = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.contribution.push(Contribution.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllContributionResponse {
    const message = { ...baseQueryAllContributionResponse } as QueryAllContributionResponse
    message.contribution = []
    if (object.contribution !== undefined && object.contribution !== null) {
      for (const e of object.contribution) {
        message.contribution.push(Contribution.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllContributionResponse): unknown {
    const obj: any = {}
    if (message.contribution) {
      obj.contribution = message.contribution.map((e) => (e ? Contribution.toJSON(e) : undefined))
    } else {
      obj.contribution = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllContributionResponse>): QueryAllContributionResponse {
    const message = { ...baseQueryAllContributionResponse } as QueryAllContributionResponse
    message.contribution = []
    if (object.contribution !== undefined && object.contribution !== null) {
      for (const e of object.contribution) {
        message.contribution.push(Contribution.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetPowerupTemplateRequest: object = { collectionIndex: '', classTemplateIndex: '', powerupTemplateIndex: '' }

export const QueryGetPowerupTemplateRequest = {
  encode(message: QueryGetPowerupTemplateRequest, writer: Writer = Writer.create()): Writer {
    if (message.collectionIndex !== '') {
      writer.uint32(10).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(18).string(message.classTemplateIndex)
    }
    if (message.powerupTemplateIndex !== '') {
      writer.uint32(26).string(message.powerupTemplateIndex)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPowerupTemplateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetPowerupTemplateRequest } as QueryGetPowerupTemplateRequest
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
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetPowerupTemplateRequest {
    const message = { ...baseQueryGetPowerupTemplateRequest } as QueryGetPowerupTemplateRequest
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

  toJSON(message: QueryGetPowerupTemplateRequest): unknown {
    const obj: any = {}
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetPowerupTemplateRequest>): QueryGetPowerupTemplateRequest {
    const message = { ...baseQueryGetPowerupTemplateRequest } as QueryGetPowerupTemplateRequest
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

const baseQueryGetPowerupTemplateResponse: object = {}

export const QueryGetPowerupTemplateResponse = {
  encode(message: QueryGetPowerupTemplateResponse, writer: Writer = Writer.create()): Writer {
    if (message.powerupTemplate !== undefined) {
      PowerupTemplate.encode(message.powerupTemplate, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPowerupTemplateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetPowerupTemplateResponse } as QueryGetPowerupTemplateResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.powerupTemplate = PowerupTemplate.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetPowerupTemplateResponse {
    const message = { ...baseQueryGetPowerupTemplateResponse } as QueryGetPowerupTemplateResponse
    if (object.powerupTemplate !== undefined && object.powerupTemplate !== null) {
      message.powerupTemplate = PowerupTemplate.fromJSON(object.powerupTemplate)
    } else {
      message.powerupTemplate = undefined
    }
    return message
  },

  toJSON(message: QueryGetPowerupTemplateResponse): unknown {
    const obj: any = {}
    message.powerupTemplate !== undefined && (obj.powerupTemplate = message.powerupTemplate ? PowerupTemplate.toJSON(message.powerupTemplate) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetPowerupTemplateResponse>): QueryGetPowerupTemplateResponse {
    const message = { ...baseQueryGetPowerupTemplateResponse } as QueryGetPowerupTemplateResponse
    if (object.powerupTemplate !== undefined && object.powerupTemplate !== null) {
      message.powerupTemplate = PowerupTemplate.fromPartial(object.powerupTemplate)
    } else {
      message.powerupTemplate = undefined
    }
    return message
  }
}

const baseQueryAllPowerupTemplateRequest: object = {}

export const QueryAllPowerupTemplateRequest = {
  encode(message: QueryAllPowerupTemplateRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPowerupTemplateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllPowerupTemplateRequest } as QueryAllPowerupTemplateRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllPowerupTemplateRequest {
    const message = { ...baseQueryAllPowerupTemplateRequest } as QueryAllPowerupTemplateRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllPowerupTemplateRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllPowerupTemplateRequest>): QueryAllPowerupTemplateRequest {
    const message = { ...baseQueryAllPowerupTemplateRequest } as QueryAllPowerupTemplateRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllPowerupTemplateResponse: object = {}

export const QueryAllPowerupTemplateResponse = {
  encode(message: QueryAllPowerupTemplateResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.powerupTemplate) {
      PowerupTemplate.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPowerupTemplateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllPowerupTemplateResponse } as QueryAllPowerupTemplateResponse
    message.powerupTemplate = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.powerupTemplate.push(PowerupTemplate.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllPowerupTemplateResponse {
    const message = { ...baseQueryAllPowerupTemplateResponse } as QueryAllPowerupTemplateResponse
    message.powerupTemplate = []
    if (object.powerupTemplate !== undefined && object.powerupTemplate !== null) {
      for (const e of object.powerupTemplate) {
        message.powerupTemplate.push(PowerupTemplate.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllPowerupTemplateResponse): unknown {
    const obj: any = {}
    if (message.powerupTemplate) {
      obj.powerupTemplate = message.powerupTemplate.map((e) => (e ? PowerupTemplate.toJSON(e) : undefined))
    } else {
      obj.powerupTemplate = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllPowerupTemplateResponse>): QueryAllPowerupTemplateResponse {
    const message = { ...baseQueryAllPowerupTemplateResponse } as QueryAllPowerupTemplateResponse
    message.powerupTemplate = []
    if (object.powerupTemplate !== undefined && object.powerupTemplate !== null) {
      for (const e of object.powerupTemplate) {
        message.powerupTemplate.push(PowerupTemplate.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetPowerupRequest: object = { collectionIndex: '', classTemplateIndex: '', powerupTemplateIndex: '', instanceIndex: '' }

export const QueryGetPowerupRequest = {
  encode(message: QueryGetPowerupRequest, writer: Writer = Writer.create()): Writer {
    if (message.collectionIndex !== '') {
      writer.uint32(10).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(18).string(message.classTemplateIndex)
    }
    if (message.powerupTemplateIndex !== '') {
      writer.uint32(26).string(message.powerupTemplateIndex)
    }
    if (message.instanceIndex !== '') {
      writer.uint32(34).string(message.instanceIndex)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPowerupRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetPowerupRequest } as QueryGetPowerupRequest
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
          message.instanceIndex = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetPowerupRequest {
    const message = { ...baseQueryGetPowerupRequest } as QueryGetPowerupRequest
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

  toJSON(message: QueryGetPowerupRequest): unknown {
    const obj: any = {}
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    message.powerupTemplateIndex !== undefined && (obj.powerupTemplateIndex = message.powerupTemplateIndex)
    message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetPowerupRequest>): QueryGetPowerupRequest {
    const message = { ...baseQueryGetPowerupRequest } as QueryGetPowerupRequest
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

const baseQueryGetPowerupResponse: object = {}

export const QueryGetPowerupResponse = {
  encode(message: QueryGetPowerupResponse, writer: Writer = Writer.create()): Writer {
    if (message.powerup !== undefined) {
      Powerup.encode(message.powerup, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPowerupResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetPowerupResponse } as QueryGetPowerupResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.powerup = Powerup.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetPowerupResponse {
    const message = { ...baseQueryGetPowerupResponse } as QueryGetPowerupResponse
    if (object.powerup !== undefined && object.powerup !== null) {
      message.powerup = Powerup.fromJSON(object.powerup)
    } else {
      message.powerup = undefined
    }
    return message
  },

  toJSON(message: QueryGetPowerupResponse): unknown {
    const obj: any = {}
    message.powerup !== undefined && (obj.powerup = message.powerup ? Powerup.toJSON(message.powerup) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetPowerupResponse>): QueryGetPowerupResponse {
    const message = { ...baseQueryGetPowerupResponse } as QueryGetPowerupResponse
    if (object.powerup !== undefined && object.powerup !== null) {
      message.powerup = Powerup.fromPartial(object.powerup)
    } else {
      message.powerup = undefined
    }
    return message
  }
}

const baseQueryAllPowerupRequest: object = {}

export const QueryAllPowerupRequest = {
  encode(message: QueryAllPowerupRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPowerupRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllPowerupRequest } as QueryAllPowerupRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllPowerupRequest {
    const message = { ...baseQueryAllPowerupRequest } as QueryAllPowerupRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllPowerupRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllPowerupRequest>): QueryAllPowerupRequest {
    const message = { ...baseQueryAllPowerupRequest } as QueryAllPowerupRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllPowerupResponse: object = {}

export const QueryAllPowerupResponse = {
  encode(message: QueryAllPowerupResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.powerup) {
      Powerup.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPowerupResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllPowerupResponse } as QueryAllPowerupResponse
    message.powerup = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.powerup.push(Powerup.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllPowerupResponse {
    const message = { ...baseQueryAllPowerupResponse } as QueryAllPowerupResponse
    message.powerup = []
    if (object.powerup !== undefined && object.powerup !== null) {
      for (const e of object.powerup) {
        message.powerup.push(Powerup.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllPowerupResponse): unknown {
    const obj: any = {}
    if (message.powerup) {
      obj.powerup = message.powerup.map((e) => (e ? Powerup.toJSON(e) : undefined))
    } else {
      obj.powerup = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllPowerupResponse>): QueryAllPowerupResponse {
    const message = { ...baseQueryAllPowerupResponse } as QueryAllPowerupResponse
    message.powerup = []
    if (object.powerup !== undefined && object.powerup !== null) {
      for (const e of object.powerup) {
        message.powerup.push(Powerup.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetInstanceRequest: object = { collectionIndex: '', classTemplateIndex: '', instanceIndex: '' }

export const QueryGetInstanceRequest = {
  encode(message: QueryGetInstanceRequest, writer: Writer = Writer.create()): Writer {
    if (message.collectionIndex !== '') {
      writer.uint32(10).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(18).string(message.classTemplateIndex)
    }
    if (message.instanceIndex !== '') {
      writer.uint32(26).string(message.instanceIndex)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetInstanceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetInstanceRequest } as QueryGetInstanceRequest
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
          message.instanceIndex = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetInstanceRequest {
    const message = { ...baseQueryGetInstanceRequest } as QueryGetInstanceRequest
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

  toJSON(message: QueryGetInstanceRequest): unknown {
    const obj: any = {}
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    message.instanceIndex !== undefined && (obj.instanceIndex = message.instanceIndex)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetInstanceRequest>): QueryGetInstanceRequest {
    const message = { ...baseQueryGetInstanceRequest } as QueryGetInstanceRequest
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

const baseQueryGetInstanceResponse: object = {}

export const QueryGetInstanceResponse = {
  encode(message: QueryGetInstanceResponse, writer: Writer = Writer.create()): Writer {
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(10).fork()).ldelim()
    }
    if (message.classTemplate !== undefined) {
      ClassTemplate.encode(message.classTemplate, writer.uint32(18).fork()).ldelim()
    }
    for (const v of message.powerupTemplates) {
      PowerupTemplate.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    for (const v of message.powerups) {
      Powerup.encode(v!, writer.uint32(34).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetInstanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetInstanceResponse } as QueryGetInstanceResponse
    message.powerupTemplates = []
    message.powerups = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.collection = Collection.decode(reader, reader.uint32())
          break
        case 2:
          message.classTemplate = ClassTemplate.decode(reader, reader.uint32())
          break
        case 3:
          message.powerupTemplates.push(PowerupTemplate.decode(reader, reader.uint32()))
          break
        case 4:
          message.powerups.push(Powerup.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetInstanceResponse {
    const message = { ...baseQueryGetInstanceResponse } as QueryGetInstanceResponse
    message.powerupTemplates = []
    message.powerups = []
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = Collection.fromJSON(object.collection)
    } else {
      message.collection = undefined
    }
    if (object.classTemplate !== undefined && object.classTemplate !== null) {
      message.classTemplate = ClassTemplate.fromJSON(object.classTemplate)
    } else {
      message.classTemplate = undefined
    }
    if (object.powerupTemplates !== undefined && object.powerupTemplates !== null) {
      for (const e of object.powerupTemplates) {
        message.powerupTemplates.push(PowerupTemplate.fromJSON(e))
      }
    }
    if (object.powerups !== undefined && object.powerups !== null) {
      for (const e of object.powerups) {
        message.powerups.push(Powerup.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: QueryGetInstanceResponse): unknown {
    const obj: any = {}
    message.collection !== undefined && (obj.collection = message.collection ? Collection.toJSON(message.collection) : undefined)
    message.classTemplate !== undefined && (obj.classTemplate = message.classTemplate ? ClassTemplate.toJSON(message.classTemplate) : undefined)
    if (message.powerupTemplates) {
      obj.powerupTemplates = message.powerupTemplates.map((e) => (e ? PowerupTemplate.toJSON(e) : undefined))
    } else {
      obj.powerupTemplates = []
    }
    if (message.powerups) {
      obj.powerups = message.powerups.map((e) => (e ? Powerup.toJSON(e) : undefined))
    } else {
      obj.powerups = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetInstanceResponse>): QueryGetInstanceResponse {
    const message = { ...baseQueryGetInstanceResponse } as QueryGetInstanceResponse
    message.powerupTemplates = []
    message.powerups = []
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = Collection.fromPartial(object.collection)
    } else {
      message.collection = undefined
    }
    if (object.classTemplate !== undefined && object.classTemplate !== null) {
      message.classTemplate = ClassTemplate.fromPartial(object.classTemplate)
    } else {
      message.classTemplate = undefined
    }
    if (object.powerupTemplates !== undefined && object.powerupTemplates !== null) {
      for (const e of object.powerupTemplates) {
        message.powerupTemplates.push(PowerupTemplate.fromPartial(e))
      }
    }
    if (object.powerups !== undefined && object.powerups !== null) {
      for (const e of object.powerups) {
        message.powerups.push(Powerup.fromPartial(e))
      }
    }
    return message
  }
}

const baseQueryGetClassTemplateRequest: object = { collectionIndex: '', classTemplateIndex: '' }

export const QueryGetClassTemplateRequest = {
  encode(message: QueryGetClassTemplateRequest, writer: Writer = Writer.create()): Writer {
    if (message.collectionIndex !== '') {
      writer.uint32(10).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(18).string(message.classTemplateIndex)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetClassTemplateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetClassTemplateRequest } as QueryGetClassTemplateRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.collectionIndex = reader.string()
          break
        case 2:
          message.classTemplateIndex = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetClassTemplateRequest {
    const message = { ...baseQueryGetClassTemplateRequest } as QueryGetClassTemplateRequest
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

  toJSON(message: QueryGetClassTemplateRequest): unknown {
    const obj: any = {}
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classTemplateIndex !== undefined && (obj.classTemplateIndex = message.classTemplateIndex)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetClassTemplateRequest>): QueryGetClassTemplateRequest {
    const message = { ...baseQueryGetClassTemplateRequest } as QueryGetClassTemplateRequest
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

const baseQueryGetClassTemplateResponse: object = {}

export const QueryGetClassTemplateResponse = {
  encode(message: QueryGetClassTemplateResponse, writer: Writer = Writer.create()): Writer {
    if (message.classTemplate !== undefined) {
      ClassTemplate.encode(message.classTemplate, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetClassTemplateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetClassTemplateResponse } as QueryGetClassTemplateResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.classTemplate = ClassTemplate.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetClassTemplateResponse {
    const message = { ...baseQueryGetClassTemplateResponse } as QueryGetClassTemplateResponse
    if (object.classTemplate !== undefined && object.classTemplate !== null) {
      message.classTemplate = ClassTemplate.fromJSON(object.classTemplate)
    } else {
      message.classTemplate = undefined
    }
    return message
  },

  toJSON(message: QueryGetClassTemplateResponse): unknown {
    const obj: any = {}
    message.classTemplate !== undefined && (obj.classTemplate = message.classTemplate ? ClassTemplate.toJSON(message.classTemplate) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetClassTemplateResponse>): QueryGetClassTemplateResponse {
    const message = { ...baseQueryGetClassTemplateResponse } as QueryGetClassTemplateResponse
    if (object.classTemplate !== undefined && object.classTemplate !== null) {
      message.classTemplate = ClassTemplate.fromPartial(object.classTemplate)
    } else {
      message.classTemplate = undefined
    }
    return message
  }
}

const baseQueryAllClassTemplateRequest: object = {}

export const QueryAllClassTemplateRequest = {
  encode(message: QueryAllClassTemplateRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllClassTemplateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllClassTemplateRequest } as QueryAllClassTemplateRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllClassTemplateRequest {
    const message = { ...baseQueryAllClassTemplateRequest } as QueryAllClassTemplateRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllClassTemplateRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllClassTemplateRequest>): QueryAllClassTemplateRequest {
    const message = { ...baseQueryAllClassTemplateRequest } as QueryAllClassTemplateRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllClassTemplateResponse: object = {}

export const QueryAllClassTemplateResponse = {
  encode(message: QueryAllClassTemplateResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.classTemplate) {
      ClassTemplate.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllClassTemplateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllClassTemplateResponse } as QueryAllClassTemplateResponse
    message.classTemplate = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.classTemplate.push(ClassTemplate.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllClassTemplateResponse {
    const message = { ...baseQueryAllClassTemplateResponse } as QueryAllClassTemplateResponse
    message.classTemplate = []
    if (object.classTemplate !== undefined && object.classTemplate !== null) {
      for (const e of object.classTemplate) {
        message.classTemplate.push(ClassTemplate.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllClassTemplateResponse): unknown {
    const obj: any = {}
    if (message.classTemplate) {
      obj.classTemplate = message.classTemplate.map((e) => (e ? ClassTemplate.toJSON(e) : undefined))
    } else {
      obj.classTemplate = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllClassTemplateResponse>): QueryAllClassTemplateResponse {
    const message = { ...baseQueryAllClassTemplateResponse } as QueryAllClassTemplateResponse
    message.classTemplate = []
    if (object.classTemplate !== undefined && object.classTemplate !== null) {
      for (const e of object.classTemplate) {
        message.classTemplate.push(ClassTemplate.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetCollectionOwnerRequest: object = { index: '' }

export const QueryGetCollectionOwnerRequest = {
  encode(message: QueryGetCollectionOwnerRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCollectionOwnerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCollectionOwnerRequest } as QueryGetCollectionOwnerRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetCollectionOwnerRequest {
    const message = { ...baseQueryGetCollectionOwnerRequest } as QueryGetCollectionOwnerRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetCollectionOwnerRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCollectionOwnerRequest>): QueryGetCollectionOwnerRequest {
    const message = { ...baseQueryGetCollectionOwnerRequest } as QueryGetCollectionOwnerRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetCollectionOwnerResponse: object = {}

export const QueryGetCollectionOwnerResponse = {
  encode(message: QueryGetCollectionOwnerResponse, writer: Writer = Writer.create()): Writer {
    if (message.collectionOwner !== undefined) {
      CollectionOwner.encode(message.collectionOwner, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCollectionOwnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCollectionOwnerResponse } as QueryGetCollectionOwnerResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.collectionOwner = CollectionOwner.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetCollectionOwnerResponse {
    const message = { ...baseQueryGetCollectionOwnerResponse } as QueryGetCollectionOwnerResponse
    if (object.collectionOwner !== undefined && object.collectionOwner !== null) {
      message.collectionOwner = CollectionOwner.fromJSON(object.collectionOwner)
    } else {
      message.collectionOwner = undefined
    }
    return message
  },

  toJSON(message: QueryGetCollectionOwnerResponse): unknown {
    const obj: any = {}
    message.collectionOwner !== undefined && (obj.collectionOwner = message.collectionOwner ? CollectionOwner.toJSON(message.collectionOwner) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCollectionOwnerResponse>): QueryGetCollectionOwnerResponse {
    const message = { ...baseQueryGetCollectionOwnerResponse } as QueryGetCollectionOwnerResponse
    if (object.collectionOwner !== undefined && object.collectionOwner !== null) {
      message.collectionOwner = CollectionOwner.fromPartial(object.collectionOwner)
    } else {
      message.collectionOwner = undefined
    }
    return message
  }
}

const baseQueryAllCollectionOwnerRequest: object = {}

export const QueryAllCollectionOwnerRequest = {
  encode(message: QueryAllCollectionOwnerRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCollectionOwnerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllCollectionOwnerRequest } as QueryAllCollectionOwnerRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllCollectionOwnerRequest {
    const message = { ...baseQueryAllCollectionOwnerRequest } as QueryAllCollectionOwnerRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllCollectionOwnerRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllCollectionOwnerRequest>): QueryAllCollectionOwnerRequest {
    const message = { ...baseQueryAllCollectionOwnerRequest } as QueryAllCollectionOwnerRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllCollectionOwnerResponse: object = {}

export const QueryAllCollectionOwnerResponse = {
  encode(message: QueryAllCollectionOwnerResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.collectionOwner) {
      CollectionOwner.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCollectionOwnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllCollectionOwnerResponse } as QueryAllCollectionOwnerResponse
    message.collectionOwner = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.collectionOwner.push(CollectionOwner.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllCollectionOwnerResponse {
    const message = { ...baseQueryAllCollectionOwnerResponse } as QueryAllCollectionOwnerResponse
    message.collectionOwner = []
    if (object.collectionOwner !== undefined && object.collectionOwner !== null) {
      for (const e of object.collectionOwner) {
        message.collectionOwner.push(CollectionOwner.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllCollectionOwnerResponse): unknown {
    const obj: any = {}
    if (message.collectionOwner) {
      obj.collectionOwner = message.collectionOwner.map((e) => (e ? CollectionOwner.toJSON(e) : undefined))
    } else {
      obj.collectionOwner = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllCollectionOwnerResponse>): QueryAllCollectionOwnerResponse {
    const message = { ...baseQueryAllCollectionOwnerResponse } as QueryAllCollectionOwnerResponse
    message.collectionOwner = []
    if (object.collectionOwner !== undefined && object.collectionOwner !== null) {
      for (const e of object.collectionOwner) {
        message.collectionOwner.push(CollectionOwner.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetInstanceOwnerRequest: object = { index: '' }

export const QueryGetInstanceOwnerRequest = {
  encode(message: QueryGetInstanceOwnerRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetInstanceOwnerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetInstanceOwnerRequest } as QueryGetInstanceOwnerRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetInstanceOwnerRequest {
    const message = { ...baseQueryGetInstanceOwnerRequest } as QueryGetInstanceOwnerRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetInstanceOwnerRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetInstanceOwnerRequest>): QueryGetInstanceOwnerRequest {
    const message = { ...baseQueryGetInstanceOwnerRequest } as QueryGetInstanceOwnerRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetInstanceOwnerResponse: object = {}

export const QueryGetInstanceOwnerResponse = {
  encode(message: QueryGetInstanceOwnerResponse, writer: Writer = Writer.create()): Writer {
    if (message.instanceOwner !== undefined) {
      InstanceOwner.encode(message.instanceOwner, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetInstanceOwnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetInstanceOwnerResponse } as QueryGetInstanceOwnerResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.instanceOwner = InstanceOwner.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetInstanceOwnerResponse {
    const message = { ...baseQueryGetInstanceOwnerResponse } as QueryGetInstanceOwnerResponse
    if (object.instanceOwner !== undefined && object.instanceOwner !== null) {
      message.instanceOwner = InstanceOwner.fromJSON(object.instanceOwner)
    } else {
      message.instanceOwner = undefined
    }
    return message
  },

  toJSON(message: QueryGetInstanceOwnerResponse): unknown {
    const obj: any = {}
    message.instanceOwner !== undefined && (obj.instanceOwner = message.instanceOwner ? InstanceOwner.toJSON(message.instanceOwner) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetInstanceOwnerResponse>): QueryGetInstanceOwnerResponse {
    const message = { ...baseQueryGetInstanceOwnerResponse } as QueryGetInstanceOwnerResponse
    if (object.instanceOwner !== undefined && object.instanceOwner !== null) {
      message.instanceOwner = InstanceOwner.fromPartial(object.instanceOwner)
    } else {
      message.instanceOwner = undefined
    }
    return message
  }
}

const baseQueryAllInstanceOwnerRequest: object = {}

export const QueryAllInstanceOwnerRequest = {
  encode(message: QueryAllInstanceOwnerRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllInstanceOwnerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllInstanceOwnerRequest } as QueryAllInstanceOwnerRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllInstanceOwnerRequest {
    const message = { ...baseQueryAllInstanceOwnerRequest } as QueryAllInstanceOwnerRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllInstanceOwnerRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllInstanceOwnerRequest>): QueryAllInstanceOwnerRequest {
    const message = { ...baseQueryAllInstanceOwnerRequest } as QueryAllInstanceOwnerRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllInstanceOwnerResponse: object = {}

export const QueryAllInstanceOwnerResponse = {
  encode(message: QueryAllInstanceOwnerResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.instanceOwner) {
      InstanceOwner.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllInstanceOwnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllInstanceOwnerResponse } as QueryAllInstanceOwnerResponse
    message.instanceOwner = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.instanceOwner.push(InstanceOwner.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllInstanceOwnerResponse {
    const message = { ...baseQueryAllInstanceOwnerResponse } as QueryAllInstanceOwnerResponse
    message.instanceOwner = []
    if (object.instanceOwner !== undefined && object.instanceOwner !== null) {
      for (const e of object.instanceOwner) {
        message.instanceOwner.push(InstanceOwner.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllInstanceOwnerResponse): unknown {
    const obj: any = {}
    if (message.instanceOwner) {
      obj.instanceOwner = message.instanceOwner.map((e) => (e ? InstanceOwner.toJSON(e) : undefined))
    } else {
      obj.instanceOwner = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllInstanceOwnerResponse>): QueryAllInstanceOwnerResponse {
    const message = { ...baseQueryAllInstanceOwnerResponse } as QueryAllInstanceOwnerResponse
    message.instanceOwner = []
    if (object.instanceOwner !== undefined && object.instanceOwner !== null) {
      for (const e of object.instanceOwner) {
        message.instanceOwner.push(InstanceOwner.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a collection by index. */
  Collection(request: QueryGetCollectionRequest): Promise<QueryGetCollectionResponse>
  /** Queries a list of collection items. */
  CollectionAll(request: QueryAllCollectionRequest): Promise<QueryAllCollectionResponse>
  /** Queries a class by index. */
  Class(request: QueryGetClassRequest): Promise<QueryGetClassResponse>
  /** Queries a list of class items. */
  ClassAll(request: QueryAllClassRequest): Promise<QueryAllClassResponse>
  /** Queries a mintStrategy by index. */
  MintStrategy(request: QueryGetMintStrategyRequest): Promise<QueryGetMintStrategyResponse>
  /** Queries a list of mintStrategy items. */
  MintStrategyAll(request: QueryAllMintStrategyRequest): Promise<QueryAllMintStrategyResponse>
  /** Queries a contribution by index. */
  Contribution(request: QueryGetContributionRequest): Promise<QueryGetContributionResponse>
  /** Queries a list of contribution items. */
  ContributionAll(request: QueryAllContributionRequest): Promise<QueryAllContributionResponse>
  /** Queries a powerupTemplate by index. */
  PowerupTemplate(request: QueryGetPowerupTemplateRequest): Promise<QueryGetPowerupTemplateResponse>
  /** Queries a list of powerupTemplate items. */
  PowerupTemplateAll(request: QueryAllPowerupTemplateRequest): Promise<QueryAllPowerupTemplateResponse>
  /** Queries a powerup by index. */
  Powerup(request: QueryGetPowerupRequest): Promise<QueryGetPowerupResponse>
  /** Queries a list of powerup items. */
  PowerupAll(request: QueryAllPowerupRequest): Promise<QueryAllPowerupResponse>
  /** Queries a list of getInstance items. */
  GetInstance(request: QueryGetInstanceRequest): Promise<QueryGetInstanceResponse>
  /** Queries a classTemplate by index. */
  ClassTemplate(request: QueryGetClassTemplateRequest): Promise<QueryGetClassTemplateResponse>
  /** Queries a list of classTemplate items. */
  ClassTemplateAll(request: QueryAllClassTemplateRequest): Promise<QueryAllClassTemplateResponse>
  /** Queries a collectionOwner by index. */
  CollectionOwner(request: QueryGetCollectionOwnerRequest): Promise<QueryGetCollectionOwnerResponse>
  /** Queries a list of collectionOwner items. */
  CollectionOwnerAll(request: QueryAllCollectionOwnerRequest): Promise<QueryAllCollectionOwnerResponse>
  /** Queries a instanceOwner by index. */
  InstanceOwner(request: QueryGetInstanceOwnerRequest): Promise<QueryGetInstanceOwnerResponse>
  /** Queries a list of instanceOwner items. */
  InstanceOwnerAll(request: QueryAllInstanceOwnerRequest): Promise<QueryAllInstanceOwnerResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Collection(request: QueryGetCollectionRequest): Promise<QueryGetCollectionResponse> {
    const data = QueryGetCollectionRequest.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'Collection', data)
    return promise.then((data) => QueryGetCollectionResponse.decode(new Reader(data)))
  }

  CollectionAll(request: QueryAllCollectionRequest): Promise<QueryAllCollectionResponse> {
    const data = QueryAllCollectionRequest.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'CollectionAll', data)
    return promise.then((data) => QueryAllCollectionResponse.decode(new Reader(data)))
  }

  Class(request: QueryGetClassRequest): Promise<QueryGetClassResponse> {
    const data = QueryGetClassRequest.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'Class', data)
    return promise.then((data) => QueryGetClassResponse.decode(new Reader(data)))
  }

  ClassAll(request: QueryAllClassRequest): Promise<QueryAllClassResponse> {
    const data = QueryAllClassRequest.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'ClassAll', data)
    return promise.then((data) => QueryAllClassResponse.decode(new Reader(data)))
  }

  MintStrategy(request: QueryGetMintStrategyRequest): Promise<QueryGetMintStrategyResponse> {
    const data = QueryGetMintStrategyRequest.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'MintStrategy', data)
    return promise.then((data) => QueryGetMintStrategyResponse.decode(new Reader(data)))
  }

  MintStrategyAll(request: QueryAllMintStrategyRequest): Promise<QueryAllMintStrategyResponse> {
    const data = QueryAllMintStrategyRequest.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'MintStrategyAll', data)
    return promise.then((data) => QueryAllMintStrategyResponse.decode(new Reader(data)))
  }

  Contribution(request: QueryGetContributionRequest): Promise<QueryGetContributionResponse> {
    const data = QueryGetContributionRequest.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'Contribution', data)
    return promise.then((data) => QueryGetContributionResponse.decode(new Reader(data)))
  }

  ContributionAll(request: QueryAllContributionRequest): Promise<QueryAllContributionResponse> {
    const data = QueryAllContributionRequest.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'ContributionAll', data)
    return promise.then((data) => QueryAllContributionResponse.decode(new Reader(data)))
  }

  PowerupTemplate(request: QueryGetPowerupTemplateRequest): Promise<QueryGetPowerupTemplateResponse> {
    const data = QueryGetPowerupTemplateRequest.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'PowerupTemplate', data)
    return promise.then((data) => QueryGetPowerupTemplateResponse.decode(new Reader(data)))
  }

  PowerupTemplateAll(request: QueryAllPowerupTemplateRequest): Promise<QueryAllPowerupTemplateResponse> {
    const data = QueryAllPowerupTemplateRequest.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'PowerupTemplateAll', data)
    return promise.then((data) => QueryAllPowerupTemplateResponse.decode(new Reader(data)))
  }

  Powerup(request: QueryGetPowerupRequest): Promise<QueryGetPowerupResponse> {
    const data = QueryGetPowerupRequest.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'Powerup', data)
    return promise.then((data) => QueryGetPowerupResponse.decode(new Reader(data)))
  }

  PowerupAll(request: QueryAllPowerupRequest): Promise<QueryAllPowerupResponse> {
    const data = QueryAllPowerupRequest.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'PowerupAll', data)
    return promise.then((data) => QueryAllPowerupResponse.decode(new Reader(data)))
  }

  GetInstance(request: QueryGetInstanceRequest): Promise<QueryGetInstanceResponse> {
    const data = QueryGetInstanceRequest.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'GetInstance', data)
    return promise.then((data) => QueryGetInstanceResponse.decode(new Reader(data)))
  }

  ClassTemplate(request: QueryGetClassTemplateRequest): Promise<QueryGetClassTemplateResponse> {
    const data = QueryGetClassTemplateRequest.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'ClassTemplate', data)
    return promise.then((data) => QueryGetClassTemplateResponse.decode(new Reader(data)))
  }

  ClassTemplateAll(request: QueryAllClassTemplateRequest): Promise<QueryAllClassTemplateResponse> {
    const data = QueryAllClassTemplateRequest.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'ClassTemplateAll', data)
    return promise.then((data) => QueryAllClassTemplateResponse.decode(new Reader(data)))
  }

  CollectionOwner(request: QueryGetCollectionOwnerRequest): Promise<QueryGetCollectionOwnerResponse> {
    const data = QueryGetCollectionOwnerRequest.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'CollectionOwner', data)
    return promise.then((data) => QueryGetCollectionOwnerResponse.decode(new Reader(data)))
  }

  CollectionOwnerAll(request: QueryAllCollectionOwnerRequest): Promise<QueryAllCollectionOwnerResponse> {
    const data = QueryAllCollectionOwnerRequest.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'CollectionOwnerAll', data)
    return promise.then((data) => QueryAllCollectionOwnerResponse.decode(new Reader(data)))
  }

  InstanceOwner(request: QueryGetInstanceOwnerRequest): Promise<QueryGetInstanceOwnerResponse> {
    const data = QueryGetInstanceOwnerRequest.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'InstanceOwner', data)
    return promise.then((data) => QueryGetInstanceOwnerResponse.decode(new Reader(data)))
  }

  InstanceOwnerAll(request: QueryAllInstanceOwnerRequest): Promise<QueryAllInstanceOwnerResponse> {
    const data = QueryAllInstanceOwnerRequest.encode(request).finish()
    const promise = this.rpc.request('str11ngfello.moonloop.moonloop.Query', 'InstanceOwnerAll', data)
    return promise.then((data) => QueryAllInstanceOwnerResponse.decode(new Reader(data)))
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
