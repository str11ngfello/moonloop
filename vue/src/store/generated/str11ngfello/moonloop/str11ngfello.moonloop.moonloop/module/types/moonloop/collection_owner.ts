/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'str11ngfello.moonloop.moonloop'

export interface CollectionOwner {
  index: string
  collections: string[]
  creator: string
}

const baseCollectionOwner: object = { index: '', collections: '', creator: '' }

export const CollectionOwner = {
  encode(message: CollectionOwner, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    for (const v of message.collections) {
      writer.uint32(18).string(v!)
    }
    if (message.creator !== '') {
      writer.uint32(26).string(message.creator)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): CollectionOwner {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseCollectionOwner } as CollectionOwner
    message.collections = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        case 2:
          message.collections.push(reader.string())
          break
        case 3:
          message.creator = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CollectionOwner {
    const message = { ...baseCollectionOwner } as CollectionOwner
    message.collections = []
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    if (object.collections !== undefined && object.collections !== null) {
      for (const e of object.collections) {
        message.collections.push(String(e))
      }
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    return message
  },

  toJSON(message: CollectionOwner): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    if (message.collections) {
      obj.collections = message.collections.map((e) => e)
    } else {
      obj.collections = []
    }
    message.creator !== undefined && (obj.creator = message.creator)
    return obj
  },

  fromPartial(object: DeepPartial<CollectionOwner>): CollectionOwner {
    const message = { ...baseCollectionOwner } as CollectionOwner
    message.collections = []
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    if (object.collections !== undefined && object.collections !== null) {
      for (const e of object.collections) {
        message.collections.push(e)
      }
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
