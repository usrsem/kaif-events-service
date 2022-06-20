// Original file: proto/services/events/v1/events_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../../../google/protobuf/Empty';
import type { EventRequest as _services_events_v1_EventRequest, EventRequest__Output as _services_events_v1_EventRequest__Output } from '../../../services/events/v1/EventRequest';

export interface EventRequestsServiceClient extends grpc.Client {
  AddEventRequest(argument: _services_events_v1_EventRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  AddEventRequest(argument: _services_events_v1_EventRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  AddEventRequest(argument: _services_events_v1_EventRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  AddEventRequest(argument: _services_events_v1_EventRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  addEventRequest(argument: _services_events_v1_EventRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  addEventRequest(argument: _services_events_v1_EventRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  addEventRequest(argument: _services_events_v1_EventRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  addEventRequest(argument: _services_events_v1_EventRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  GetAllEventRequests(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_services_events_v1_EventRequest__Output>;
  GetAllEventRequests(argument: _google_protobuf_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_services_events_v1_EventRequest__Output>;
  getAllEventRequests(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_services_events_v1_EventRequest__Output>;
  getAllEventRequests(argument: _google_protobuf_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_services_events_v1_EventRequest__Output>;
  
  UpdateEventRequest(argument: _services_events_v1_EventRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  UpdateEventRequest(argument: _services_events_v1_EventRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  UpdateEventRequest(argument: _services_events_v1_EventRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  UpdateEventRequest(argument: _services_events_v1_EventRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  updateEventRequest(argument: _services_events_v1_EventRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  updateEventRequest(argument: _services_events_v1_EventRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  updateEventRequest(argument: _services_events_v1_EventRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  updateEventRequest(argument: _services_events_v1_EventRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
}

export interface EventRequestsServiceHandlers extends grpc.UntypedServiceImplementation {
  AddEventRequest: grpc.handleUnaryCall<_services_events_v1_EventRequest__Output, _google_protobuf_Empty>;
  
  GetAllEventRequests: grpc.handleServerStreamingCall<_google_protobuf_Empty__Output, _services_events_v1_EventRequest>;
  
  UpdateEventRequest: grpc.handleUnaryCall<_services_events_v1_EventRequest__Output, _google_protobuf_Empty>;
  
}

export interface EventRequestsServiceDefinition extends grpc.ServiceDefinition {
  AddEventRequest: MethodDefinition<_services_events_v1_EventRequest, _google_protobuf_Empty, _services_events_v1_EventRequest__Output, _google_protobuf_Empty__Output>
  GetAllEventRequests: MethodDefinition<_google_protobuf_Empty, _services_events_v1_EventRequest, _google_protobuf_Empty__Output, _services_events_v1_EventRequest__Output>
  UpdateEventRequest: MethodDefinition<_services_events_v1_EventRequest, _google_protobuf_Empty, _services_events_v1_EventRequest__Output, _google_protobuf_Empty__Output>
}
