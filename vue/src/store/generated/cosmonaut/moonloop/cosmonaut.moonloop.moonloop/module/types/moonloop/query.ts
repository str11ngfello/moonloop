/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { Collection } from '../moonloop/collection'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { Class } from '../moonloop/class'
import { MintStrategy } from '../moonloop/mint_strategy'
import { Contribution } from '../moonloop/contribution'
import { PowerupTemplate } from '../moonloop/powerup_template'
import { Powerup } from '../moonloop/powerup'

export const protobufPackage = 'cosmonaut.moonloop.moonloop'

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
  classIndex: string
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
  classIndex: string
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
  classIndex: string
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
  classIndex: string
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

const baseQueryGetClassRequest: object = { collectionIndex: '', classIndex: '' }

export const QueryGetClassRequest = {
  encode(message: QueryGetClassRequest, writer: Writer = Writer.create()): Writer {
    if (message.collectionIndex !== '') {
      writer.uint32(10).string(message.collectionIndex)
    }
    if (message.classIndex !== '') {
      writer.uint32(18).string(message.classIndex)
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
          message.classIndex = reader.string()
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
    if (object.classIndex !== undefined && object.classIndex !== null) {
      message.classIndex = String(object.classIndex)
    } else {
      message.classIndex = ''
    }
    return message
  },

  toJSON(message: QueryGetClassRequest): unknown {
    const obj: any = {}
    message.collectionIndex !== undefined && (obj.collectionIndex = message.collectionIndex)
    message.classIndex !== undefined && (obj.classIndex = message.classIndex)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetClassRequest>): QueryGetClassRequest {
    const message = { ...baseQueryGetClassRequest } as QueryGetClassRequest
    if (object.collectionIndex !== undefined && object.collectionIndex !== null) {
      message.collectionIndex = object.collectionIndex
    } else {
      message.collectionIndex = ''
    }
    if (object.classIndex !== undefined && object.classIndex !== null) {
      message.classIndex = object.classIndex
    } else {
      message.classIndex = ''
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

const baseQueryGetContributionRequest: object = { collectionIndex: '', classIndex: '', powerupTemplateIndex: '', instanceIndex: '' }

export const QueryGetContributionRequest = {
  encode(message: QueryGetContributionRequest, writer: Writer = Writer.create()): Writer {
    if (message.collectionIndex !== '') {
      writer.uint32(10).string(message.collectionIndex)
    }
    if (message.classIndex !== '') {
      writer.uint32(18).string(message.classIndex)
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
          message.classIndex = reader.string()
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
    if (object.classIndex !== undefined && object.classIndex !== null) {
      message.classIndex = String(object.classIndex)
    } else {
      message.classIndex = ''
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
    message.classIndex !== undefined && (obj.classIndex = message.classIndex)
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
    if (object.classIndex !== undefined && object.classIndex !== null) {
      message.classIndex = object.classIndex
    } else {
      message.classIndex = ''
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

const baseQueryGetPowerupTemplateRequest: object = { collectionIndex: '', classIndex: '', powerupTemplateIndex: '' }

export const QueryGetPowerupTemplateRequest = {
  encode(message: QueryGetPowerupTemplateRequest, writer: Writer = Writer.create()): Writer {
    if (message.collectionIndex !== '') {
      writer.uint32(10).string(message.collectionIndex)
    }
    if (message.classIndex !== '') {
      writer.uint32(18).string(message.classIndex)
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
          message.classIndex = reader.string()
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
    if (object.classIndex !== undefined && object.classIndex !== null) {
      message.classIndex = String(object.classIndex)
    } else {
      message.classIndex = ''
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
    message.classIndex !== undefined && (obj.classIndex = message.classIndex)
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
    if (object.classIndex !== undefined && object.classIndex !== null) {
      message.classIndex = object.classIndex
    } else {
      message.classIndex = ''
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

const baseQueryGetPowerupRequest: object = { collectionIndex: '', classIndex: '', powerupTemplateIndex: '', instanceIndex: '' }

export const QueryGetPowerupRequest = {
  encode(message: QueryGetPowerupRequest, writer: Writer = Writer.create()): Writer {
    if (message.collectionIndex !== '') {
      writer.uint32(10).string(message.collectionIndex)
    }
    if (message.classIndex !== '') {
      writer.uint32(18).string(message.classIndex)
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
          message.classIndex = reader.string()
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
    if (object.classIndex !== undefined && object.classIndex !== null) {
      message.classIndex = String(object.classIndex)
    } else {
      message.classIndex = ''
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
    message.classIndex !== undefined && (obj.classIndex = message.classIndex)
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
    if (object.classIndex !== undefined && object.classIndex !== null) {
      message.classIndex = object.classIndex
    } else {
      message.classIndex = ''
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
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Collection(request: QueryGetCollectionRequest): Promise<QueryGetCollectionResponse> {
    const data = QueryGetCollectionRequest.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.moonloop.moonloop.Query', 'Collection', data)
    return promise.then((data) => QueryGetCollectionResponse.decode(new Reader(data)))
  }

  CollectionAll(request: QueryAllCollectionRequest): Promise<QueryAllCollectionResponse> {
    const data = QueryAllCollectionRequest.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.moonloop.moonloop.Query', 'CollectionAll', data)
    return promise.then((data) => QueryAllCollectionResponse.decode(new Reader(data)))
  }

  Class(request: QueryGetClassRequest): Promise<QueryGetClassResponse> {
    const data = QueryGetClassRequest.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.moonloop.moonloop.Query', 'Class', data)
    return promise.then((data) => QueryGetClassResponse.decode(new Reader(data)))
  }

  ClassAll(request: QueryAllClassRequest): Promise<QueryAllClassResponse> {
    const data = QueryAllClassRequest.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.moonloop.moonloop.Query', 'ClassAll', data)
    return promise.then((data) => QueryAllClassResponse.decode(new Reader(data)))
  }

  MintStrategy(request: QueryGetMintStrategyRequest): Promise<QueryGetMintStrategyResponse> {
    const data = QueryGetMintStrategyRequest.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.moonloop.moonloop.Query', 'MintStrategy', data)
    return promise.then((data) => QueryGetMintStrategyResponse.decode(new Reader(data)))
  }

  MintStrategyAll(request: QueryAllMintStrategyRequest): Promise<QueryAllMintStrategyResponse> {
    const data = QueryAllMintStrategyRequest.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.moonloop.moonloop.Query', 'MintStrategyAll', data)
    return promise.then((data) => QueryAllMintStrategyResponse.decode(new Reader(data)))
  }

  Contribution(request: QueryGetContributionRequest): Promise<QueryGetContributionResponse> {
    const data = QueryGetContributionRequest.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.moonloop.moonloop.Query', 'Contribution', data)
    return promise.then((data) => QueryGetContributionResponse.decode(new Reader(data)))
  }

  ContributionAll(request: QueryAllContributionRequest): Promise<QueryAllContributionResponse> {
    const data = QueryAllContributionRequest.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.moonloop.moonloop.Query', 'ContributionAll', data)
    return promise.then((data) => QueryAllContributionResponse.decode(new Reader(data)))
  }

  PowerupTemplate(request: QueryGetPowerupTemplateRequest): Promise<QueryGetPowerupTemplateResponse> {
    const data = QueryGetPowerupTemplateRequest.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.moonloop.moonloop.Query', 'PowerupTemplate', data)
    return promise.then((data) => QueryGetPowerupTemplateResponse.decode(new Reader(data)))
  }

  PowerupTemplateAll(request: QueryAllPowerupTemplateRequest): Promise<QueryAllPowerupTemplateResponse> {
    const data = QueryAllPowerupTemplateRequest.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.moonloop.moonloop.Query', 'PowerupTemplateAll', data)
    return promise.then((data) => QueryAllPowerupTemplateResponse.decode(new Reader(data)))
  }

  Powerup(request: QueryGetPowerupRequest): Promise<QueryGetPowerupResponse> {
    const data = QueryGetPowerupRequest.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.moonloop.moonloop.Query', 'Powerup', data)
    return promise.then((data) => QueryGetPowerupResponse.decode(new Reader(data)))
  }

  PowerupAll(request: QueryAllPowerupRequest): Promise<QueryAllPowerupResponse> {
    const data = QueryAllPowerupRequest.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.moonloop.moonloop.Query', 'PowerupAll', data)
    return promise.then((data) => QueryAllPowerupResponse.decode(new Reader(data)))
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
