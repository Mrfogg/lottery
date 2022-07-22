/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../lottery/params";
import { GameInfo } from "../lottery/game_info";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "mrfogg.lottery.lottery";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetGameInfoRequest {
  index: string;
}

export interface QueryGetGameInfoResponse {
  gameInfo: GameInfo | undefined;
}

export interface QueryAllGameInfoRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllGameInfoResponse {
  gameInfo: GameInfo[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetGameInfoRequest: object = { index: "" };

export const QueryGetGameInfoRequest = {
  encode(
    message: QueryGetGameInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetGameInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetGameInfoRequest,
    } as QueryGetGameInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetGameInfoRequest {
    const message = {
      ...baseQueryGetGameInfoRequest,
    } as QueryGetGameInfoRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetGameInfoRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetGameInfoRequest>
  ): QueryGetGameInfoRequest {
    const message = {
      ...baseQueryGetGameInfoRequest,
    } as QueryGetGameInfoRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetGameInfoResponse: object = {};

export const QueryGetGameInfoResponse = {
  encode(
    message: QueryGetGameInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.gameInfo !== undefined) {
      GameInfo.encode(message.gameInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetGameInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetGameInfoResponse,
    } as QueryGetGameInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameInfo = GameInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetGameInfoResponse {
    const message = {
      ...baseQueryGetGameInfoResponse,
    } as QueryGetGameInfoResponse;
    if (object.gameInfo !== undefined && object.gameInfo !== null) {
      message.gameInfo = GameInfo.fromJSON(object.gameInfo);
    } else {
      message.gameInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetGameInfoResponse): unknown {
    const obj: any = {};
    message.gameInfo !== undefined &&
      (obj.gameInfo = message.gameInfo
        ? GameInfo.toJSON(message.gameInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetGameInfoResponse>
  ): QueryGetGameInfoResponse {
    const message = {
      ...baseQueryGetGameInfoResponse,
    } as QueryGetGameInfoResponse;
    if (object.gameInfo !== undefined && object.gameInfo !== null) {
      message.gameInfo = GameInfo.fromPartial(object.gameInfo);
    } else {
      message.gameInfo = undefined;
    }
    return message;
  },
};

const baseQueryAllGameInfoRequest: object = {};

export const QueryAllGameInfoRequest = {
  encode(
    message: QueryAllGameInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllGameInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllGameInfoRequest,
    } as QueryAllGameInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllGameInfoRequest {
    const message = {
      ...baseQueryAllGameInfoRequest,
    } as QueryAllGameInfoRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllGameInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllGameInfoRequest>
  ): QueryAllGameInfoRequest {
    const message = {
      ...baseQueryAllGameInfoRequest,
    } as QueryAllGameInfoRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllGameInfoResponse: object = {};

export const QueryAllGameInfoResponse = {
  encode(
    message: QueryAllGameInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.gameInfo) {
      GameInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllGameInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllGameInfoResponse,
    } as QueryAllGameInfoResponse;
    message.gameInfo = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameInfo.push(GameInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllGameInfoResponse {
    const message = {
      ...baseQueryAllGameInfoResponse,
    } as QueryAllGameInfoResponse;
    message.gameInfo = [];
    if (object.gameInfo !== undefined && object.gameInfo !== null) {
      for (const e of object.gameInfo) {
        message.gameInfo.push(GameInfo.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllGameInfoResponse): unknown {
    const obj: any = {};
    if (message.gameInfo) {
      obj.gameInfo = message.gameInfo.map((e) =>
        e ? GameInfo.toJSON(e) : undefined
      );
    } else {
      obj.gameInfo = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllGameInfoResponse>
  ): QueryAllGameInfoResponse {
    const message = {
      ...baseQueryAllGameInfoResponse,
    } as QueryAllGameInfoResponse;
    message.gameInfo = [];
    if (object.gameInfo !== undefined && object.gameInfo !== null) {
      for (const e of object.gameInfo) {
        message.gameInfo.push(GameInfo.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a GameInfo by index. */
  GameInfo(request: QueryGetGameInfoRequest): Promise<QueryGetGameInfoResponse>;
  /** Queries a list of GameInfo items. */
  GameInfoAll(
    request: QueryAllGameInfoRequest
  ): Promise<QueryAllGameInfoResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "mrfogg.lottery.lottery.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  GameInfo(
    request: QueryGetGameInfoRequest
  ): Promise<QueryGetGameInfoResponse> {
    const data = QueryGetGameInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "mrfogg.lottery.lottery.Query",
      "GameInfo",
      data
    );
    return promise.then((data) =>
      QueryGetGameInfoResponse.decode(new Reader(data))
    );
  }

  GameInfoAll(
    request: QueryAllGameInfoRequest
  ): Promise<QueryAllGameInfoResponse> {
    const data = QueryAllGameInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "mrfogg.lottery.lottery.Query",
      "GameInfoAll",
      data
    );
    return promise.then((data) =>
      QueryAllGameInfoResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
