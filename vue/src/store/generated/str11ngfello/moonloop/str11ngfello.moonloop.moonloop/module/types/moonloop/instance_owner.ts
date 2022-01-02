/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'str11ngfello.moonloop.moonloop'

export interface InstanceOwner {
  index: string
  instances: string[]
  creator: string
}

const baseInstanceOwner: object = { index: '', instances: '', creator: '' }

export const InstanceOwner = {
  encode(message: InstanceOwner, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    for (const v of message.instances) {
      writer.uint32(18).string(v!)
    }
    if (message.creator !== '') {
      writer.uint32(26).string(message.creator)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): InstanceOwner {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseInstanceOwner } as InstanceOwner
    message.instances = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        case 2:
          message.instances.push(reader.string())
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

  fromJSON(object: any): InstanceOwner {
    const message = { ...baseInstanceOwner } as InstanceOwner
    message.instances = []
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    if (object.instances !== undefined && object.instances !== null) {
      for (const e of object.instances) {
        message.instances.push(String(e))
      }
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    return message
  },

  toJSON(message: InstanceOwner): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    if (message.instances) {
      obj.instances = message.instances.map((e) => e)
    } else {
      obj.instances = []
    }
    message.creator !== undefined && (obj.creator = message.creator)
    return obj
  },

  fromPartial(object: DeepPartial<InstanceOwner>): InstanceOwner {
    const message = { ...baseInstanceOwner } as InstanceOwner
    message.instances = []
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    if (object.instances !== undefined && object.instances !== null) {
      for (const e of object.instances) {
        message.instances.push(e)
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
