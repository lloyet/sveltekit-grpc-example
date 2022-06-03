/**
 * @fileoverview gRPC-Web generated client stub for greeter
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as greeter_pb from './greeter_pb';


export class GreeterClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoSayHello = new grpcWeb.MethodDescriptor(
    '/greeter.Greeter/SayHello',
    grpcWeb.MethodType.UNARY,
    greeter_pb.HelloRequest,
    greeter_pb.HelloResponse,
    (request: greeter_pb.HelloRequest) => {
      return request.serializeBinary();
    },
    greeter_pb.HelloResponse.deserializeBinary
  );

  sayHello(
    request: greeter_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null): Promise<greeter_pb.HelloResponse>;

  sayHello(
    request: greeter_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: greeter_pb.HelloResponse) => void): grpcWeb.ClientReadableStream<greeter_pb.HelloResponse>;

  sayHello(
    request: greeter_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: greeter_pb.HelloResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/greeter.Greeter/SayHello',
        request,
        metadata || {},
        this.methodInfoSayHello,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/greeter.Greeter/SayHello',
    request,
    metadata || {},
    this.methodInfoSayHello);
  }

  methodInfoRandomNumber = new grpcWeb.MethodDescriptor(
    '/greeter.Greeter/RandomNumber',
    grpcWeb.MethodType.SERVER_STREAMING,
    greeter_pb.RandomNumberRequest,
    greeter_pb.RandomNumberResponse,
    (request: greeter_pb.RandomNumberRequest) => {
      return request.serializeBinary();
    },
    greeter_pb.RandomNumberResponse.deserializeBinary
  );

  randomNumber(
    request: greeter_pb.RandomNumberRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/greeter.Greeter/RandomNumber',
      request,
      metadata || {},
      this.methodInfoRandomNumber);
  }

}

