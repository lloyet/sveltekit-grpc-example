import * as jspb from 'google-protobuf'



export class HelloRequest extends jspb.Message {
  getName(): string;
  setName(value: string): HelloRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
  static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloRequest;
  static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
  export type AsObject = {
    name: string,
  }
}

export class HelloResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): HelloResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HelloResponse): HelloResponse.AsObject;
  static serializeBinaryToWriter(message: HelloResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloResponse;
  static deserializeBinaryFromReader(message: HelloResponse, reader: jspb.BinaryReader): HelloResponse;
}

export namespace HelloResponse {
  export type AsObject = {
    message: string,
  }
}

export class RandomNumberRequest extends jspb.Message {
  getSize(): number;
  setSize(value: number): RandomNumberRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RandomNumberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RandomNumberRequest): RandomNumberRequest.AsObject;
  static serializeBinaryToWriter(message: RandomNumberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RandomNumberRequest;
  static deserializeBinaryFromReader(message: RandomNumberRequest, reader: jspb.BinaryReader): RandomNumberRequest;
}

export namespace RandomNumberRequest {
  export type AsObject = {
    size: number,
  }
}

export class RandomNumberResponse extends jspb.Message {
  getMessage(): number;
  setMessage(value: number): RandomNumberResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RandomNumberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RandomNumberResponse): RandomNumberResponse.AsObject;
  static serializeBinaryToWriter(message: RandomNumberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RandomNumberResponse;
  static deserializeBinaryFromReader(message: RandomNumberResponse, reader: jspb.BinaryReader): RandomNumberResponse;
}

export namespace RandomNumberResponse {
  export type AsObject = {
    message: number,
  }
}

export class TodoRequest extends jspb.Message {
  getTodos(): string;
  setTodos(value: string): TodoRequest;

  getStatus(): string;
  setStatus(value: string): TodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TodoRequest): TodoRequest.AsObject;
  static serializeBinaryToWriter(message: TodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoRequest;
  static deserializeBinaryFromReader(message: TodoRequest, reader: jspb.BinaryReader): TodoRequest;
}

export namespace TodoRequest {
  export type AsObject = {
    todos: string,
    status: string,
  }
}

export class TodoResponse extends jspb.Message {
  getTodosList(): Array<TodoRequest>;
  setTodosList(value: Array<TodoRequest>): TodoResponse;
  clearTodosList(): TodoResponse;
  addTodos(value?: TodoRequest, index?: number): TodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TodoResponse): TodoResponse.AsObject;
  static serializeBinaryToWriter(message: TodoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoResponse;
  static deserializeBinaryFromReader(message: TodoResponse, reader: jspb.BinaryReader): TodoResponse;
}

export namespace TodoResponse {
  export type AsObject = {
    todosList: Array<TodoRequest.AsObject>,
  }
}

