/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "mrfogg.lottery.lottery";

export interface GameInfo {
  index: string;
  mValue: string;
  cValue: string;
  idValue: number;
}

const baseGameInfo: object = { index: "", mValue: "", cValue: "", idValue: 0 };

export const GameInfo = {
  encode(message: GameInfo, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.mValue !== "") {
      writer.uint32(18).string(message.mValue);
    }
    if (message.cValue !== "") {
      writer.uint32(26).string(message.cValue);
    }
    if (message.idValue !== 0) {
      writer.uint32(32).uint64(message.idValue);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GameInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameInfo } as GameInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.mValue = reader.string();
          break;
        case 3:
          message.cValue = reader.string();
          break;
        case 4:
          message.idValue = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameInfo {
    const message = { ...baseGameInfo } as GameInfo;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.mValue !== undefined && object.mValue !== null) {
      message.mValue = String(object.mValue);
    } else {
      message.mValue = "";
    }
    if (object.cValue !== undefined && object.cValue !== null) {
      message.cValue = String(object.cValue);
    } else {
      message.cValue = "";
    }
    if (object.idValue !== undefined && object.idValue !== null) {
      message.idValue = Number(object.idValue);
    } else {
      message.idValue = 0;
    }
    return message;
  },

  toJSON(message: GameInfo): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.mValue !== undefined && (obj.mValue = message.mValue);
    message.cValue !== undefined && (obj.cValue = message.cValue);
    message.idValue !== undefined && (obj.idValue = message.idValue);
    return obj;
  },

  fromPartial(object: DeepPartial<GameInfo>): GameInfo {
    const message = { ...baseGameInfo } as GameInfo;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.mValue !== undefined && object.mValue !== null) {
      message.mValue = object.mValue;
    } else {
      message.mValue = "";
    }
    if (object.cValue !== undefined && object.cValue !== null) {
      message.cValue = object.cValue;
    } else {
      message.cValue = "";
    }
    if (object.idValue !== undefined && object.idValue !== null) {
      message.idValue = object.idValue;
    } else {
      message.idValue = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
