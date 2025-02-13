/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'str11ngfello.moonloop.moonloop'

export interface ClassTemplate {
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
  creator: string
}

const baseClassTemplate: object = {
  collectionIndex: '',
  classTemplateIndex: '',
  name: '',
  description: '',
  mintStrategy: '',
  gltfHash: '',
  metadata: '',
  maxInstances: 0,
  count: 0,
  powerupTemplates: '',
  creator: ''
}

export const ClassTemplate = {
  encode(message: ClassTemplate, writer: Writer = Writer.create()): Writer {
    if (message.collectionIndex !== '') {
      writer.uint32(10).string(message.collectionIndex)
    }
    if (message.classTemplateIndex !== '') {
      writer.uint32(18).string(message.classTemplateIndex)
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
    if (message.gltfHash !== '') {
      writer.uint32(50).string(message.gltfHash)
    }
    if (message.metadata !== '') {
      writer.uint32(58).string(message.metadata)
    }
    if (message.maxInstances !== 0) {
      writer.uint32(64).int32(message.maxInstances)
    }
    if (message.count !== 0) {
      writer.uint32(72).int32(message.count)
    }
    for (const v of message.powerupTemplates) {
      writer.uint32(82).string(v!)
    }
    if (message.creator !== '') {
      writer.uint32(90).string(message.creator)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): ClassTemplate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseClassTemplate } as ClassTemplate
    message.powerupTemplates = []
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
          message.name = reader.string()
          break
        case 4:
          message.description = reader.string()
          break
        case 5:
          message.mintStrategy = reader.string()
          break
        case 6:
          message.gltfHash = reader.string()
          break
        case 7:
          message.metadata = reader.string()
          break
        case 8:
          message.maxInstances = reader.int32()
          break
        case 9:
          message.count = reader.int32()
          break
        case 10:
          message.powerupTemplates.push(reader.string())
          break
        case 11:
          message.creator = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ClassTemplate {
    const message = { ...baseClassTemplate } as ClassTemplate
    message.powerupTemplates = []
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    return message
  },

  toJSON(message: ClassTemplate): unknown {
    const obj: any = {}
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
    message.creator !== undefined && (obj.creator = message.creator)
    return obj
  },

  fromPartial(object: DeepPartial<ClassTemplate>): ClassTemplate {
    const message = { ...baseClassTemplate } as ClassTemplate
    message.powerupTemplates = []
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
