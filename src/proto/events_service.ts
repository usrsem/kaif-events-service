import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { EventRequestsServiceClient as _services_events_v1_EventRequestsServiceClient, EventRequestsServiceDefinition as _services_events_v1_EventRequestsServiceDefinition } from './services/events/v1/EventRequestsService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
      Timestamp: MessageTypeDefinition
    }
  }
  services: {
    events: {
      v1: {
        EventRequest: MessageTypeDefinition
        EventRequestsService: SubtypeConstructor<typeof grpc.Client, _services_events_v1_EventRequestsServiceClient> & { service: _services_events_v1_EventRequestsServiceDefinition }
      }
    }
  }
}

