/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'str11ngfello.moonloop.moonloop'

export interface MintStrategy {
  index: string
  minters: string[]
  instanceLevels: number[]
  priceLevels: number[]
  paused: boolean
  creator: string
}

const baseMintStrategy: object = { index: '', minters: '', instanceLevels: 0, priceLevels: 0, paused: false, creator: '' }

export const MintStrategy = {
  encode(message: MintStrategy, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    for (const v of message.minters) {
      writer.uint32(18).string(v!)
    }
    writer.uint32(26).fork()
    for (const v of message.instanceLevels) {
      writer.int32(v)
    }
    writer.ldelim()
    writer.uint32(34).fork()
    for (const v of message.priceLevels) {
      writer.int32(v)
    }
    writer.ldelim()
    if (message.paused === true) {
      writer.uint32(40).bool(message.paused)
    }
    if (message.creator !== '') {
      writer.uint32(50).string(message.creator)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MintStrategy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMintStrategy } as MintStrategy
    message.minters = []
    message.instanceLevels = []
    message.priceLevels = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        case 2:
          message.minters.push(reader.string())
          break
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.instanceLevels.push(reader.int32())
            }
          } else {
            message.instanceLevels.push(reader.int32())
          }
          break
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.priceLevels.push(reader.int32())
            }
          } else {
            message.priceLevels.push(reader.int32())
          }
          break
        case 5:
          message.paused = reader.bool()
          break
        case 6:
          message.creator = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MintStrategy {
    const message = { ...baseMintStrategy } as MintStrategy
    message.minters = []
    message.instanceLevels = []
    message.priceLevels = []
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    return message
  },

  toJSON(message: MintStrategy): unknown {
    const obj: any = {}
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
    message.creator !== undefined && (obj.creator = message.creator)
    return obj
  },

  fromPartial(object: DeepPartial<MintStrategy>): MintStrategy {
    const message = { ...baseMintStrategy } as MintStrategy
    message.minters = []
    message.instanceLevels = []
    message.priceLevels = []
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
