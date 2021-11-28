/* eslint-disable */
import { Collection } from '../moonloop/collection'
import { Class } from '../moonloop/class'
import { MintStrategy } from '../moonloop/mint_strategy'
import { Contribution } from '../moonloop/contribution'
import { PowerupTemplate } from '../moonloop/powerup_template'
import { Powerup } from '../moonloop/powerup'
import { ClassTemplate } from '../moonloop/class_template'
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'str11ngfello.moonloop.moonloop'

/** GenesisState defines the moonloop module's genesis state. */
export interface GenesisState {
  collectionList: Collection[]
  classList: Class[]
  mintStrategyList: MintStrategy[]
  contributionList: Contribution[]
  powerupTemplateList: PowerupTemplate[]
  powerupList: Powerup[]
  /** this line is used by starport scaffolding # genesis/proto/state */
  classTemplateList: ClassTemplate[]
}

const baseGenesisState: object = {}

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.collectionList) {
      Collection.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    for (const v of message.classList) {
      Class.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    for (const v of message.mintStrategyList) {
      MintStrategy.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    for (const v of message.contributionList) {
      Contribution.encode(v!, writer.uint32(34).fork()).ldelim()
    }
    for (const v of message.powerupTemplateList) {
      PowerupTemplate.encode(v!, writer.uint32(42).fork()).ldelim()
    }
    for (const v of message.powerupList) {
      Powerup.encode(v!, writer.uint32(50).fork()).ldelim()
    }
    for (const v of message.classTemplateList) {
      ClassTemplate.encode(v!, writer.uint32(58).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.collectionList = []
    message.classList = []
    message.mintStrategyList = []
    message.contributionList = []
    message.powerupTemplateList = []
    message.powerupList = []
    message.classTemplateList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.collectionList.push(Collection.decode(reader, reader.uint32()))
          break
        case 2:
          message.classList.push(Class.decode(reader, reader.uint32()))
          break
        case 3:
          message.mintStrategyList.push(MintStrategy.decode(reader, reader.uint32()))
          break
        case 4:
          message.contributionList.push(Contribution.decode(reader, reader.uint32()))
          break
        case 5:
          message.powerupTemplateList.push(PowerupTemplate.decode(reader, reader.uint32()))
          break
        case 6:
          message.powerupList.push(Powerup.decode(reader, reader.uint32()))
          break
        case 7:
          message.classTemplateList.push(ClassTemplate.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.collectionList = []
    message.classList = []
    message.mintStrategyList = []
    message.contributionList = []
    message.powerupTemplateList = []
    message.powerupList = []
    message.classTemplateList = []
    if (object.collectionList !== undefined && object.collectionList !== null) {
      for (const e of object.collectionList) {
        message.collectionList.push(Collection.fromJSON(e))
      }
    }
    if (object.classList !== undefined && object.classList !== null) {
      for (const e of object.classList) {
        message.classList.push(Class.fromJSON(e))
      }
    }
    if (object.mintStrategyList !== undefined && object.mintStrategyList !== null) {
      for (const e of object.mintStrategyList) {
        message.mintStrategyList.push(MintStrategy.fromJSON(e))
      }
    }
    if (object.contributionList !== undefined && object.contributionList !== null) {
      for (const e of object.contributionList) {
        message.contributionList.push(Contribution.fromJSON(e))
      }
    }
    if (object.powerupTemplateList !== undefined && object.powerupTemplateList !== null) {
      for (const e of object.powerupTemplateList) {
        message.powerupTemplateList.push(PowerupTemplate.fromJSON(e))
      }
    }
    if (object.powerupList !== undefined && object.powerupList !== null) {
      for (const e of object.powerupList) {
        message.powerupList.push(Powerup.fromJSON(e))
      }
    }
    if (object.classTemplateList !== undefined && object.classTemplateList !== null) {
      for (const e of object.classTemplateList) {
        message.classTemplateList.push(ClassTemplate.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.collectionList) {
      obj.collectionList = message.collectionList.map((e) => (e ? Collection.toJSON(e) : undefined))
    } else {
      obj.collectionList = []
    }
    if (message.classList) {
      obj.classList = message.classList.map((e) => (e ? Class.toJSON(e) : undefined))
    } else {
      obj.classList = []
    }
    if (message.mintStrategyList) {
      obj.mintStrategyList = message.mintStrategyList.map((e) => (e ? MintStrategy.toJSON(e) : undefined))
    } else {
      obj.mintStrategyList = []
    }
    if (message.contributionList) {
      obj.contributionList = message.contributionList.map((e) => (e ? Contribution.toJSON(e) : undefined))
    } else {
      obj.contributionList = []
    }
    if (message.powerupTemplateList) {
      obj.powerupTemplateList = message.powerupTemplateList.map((e) => (e ? PowerupTemplate.toJSON(e) : undefined))
    } else {
      obj.powerupTemplateList = []
    }
    if (message.powerupList) {
      obj.powerupList = message.powerupList.map((e) => (e ? Powerup.toJSON(e) : undefined))
    } else {
      obj.powerupList = []
    }
    if (message.classTemplateList) {
      obj.classTemplateList = message.classTemplateList.map((e) => (e ? ClassTemplate.toJSON(e) : undefined))
    } else {
      obj.classTemplateList = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.collectionList = []
    message.classList = []
    message.mintStrategyList = []
    message.contributionList = []
    message.powerupTemplateList = []
    message.powerupList = []
    message.classTemplateList = []
    if (object.collectionList !== undefined && object.collectionList !== null) {
      for (const e of object.collectionList) {
        message.collectionList.push(Collection.fromPartial(e))
      }
    }
    if (object.classList !== undefined && object.classList !== null) {
      for (const e of object.classList) {
        message.classList.push(Class.fromPartial(e))
      }
    }
    if (object.mintStrategyList !== undefined && object.mintStrategyList !== null) {
      for (const e of object.mintStrategyList) {
        message.mintStrategyList.push(MintStrategy.fromPartial(e))
      }
    }
    if (object.contributionList !== undefined && object.contributionList !== null) {
      for (const e of object.contributionList) {
        message.contributionList.push(Contribution.fromPartial(e))
      }
    }
    if (object.powerupTemplateList !== undefined && object.powerupTemplateList !== null) {
      for (const e of object.powerupTemplateList) {
        message.powerupTemplateList.push(PowerupTemplate.fromPartial(e))
      }
    }
    if (object.powerupList !== undefined && object.powerupList !== null) {
      for (const e of object.powerupList) {
        message.powerupList.push(Powerup.fromPartial(e))
      }
    }
    if (object.classTemplateList !== undefined && object.classTemplateList !== null) {
      for (const e of object.classTemplateList) {
        message.classTemplateList.push(ClassTemplate.fromPartial(e))
      }
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
