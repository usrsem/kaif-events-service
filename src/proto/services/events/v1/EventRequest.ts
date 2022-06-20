// Original file: proto/services/events/v1/events_service.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../google/protobuf/Timestamp';

export interface _services_events_v1_EventRequest_Entry {
  'key'?: (_google_protobuf_Timestamp | null);
  'value'?: (string);
}

export interface _services_events_v1_EventRequest_Entry__Output {
  'key': (_google_protobuf_Timestamp__Output | null);
  'value': (string);
}

export interface EventRequest {
  'text'?: (string);
  'name'?: (string);
  'lineup'?: (_services_events_v1_EventRequest_Entry)[];
  'startDate'?: (_google_protobuf_Timestamp | null);
  'publishDate'?: (_google_protobuf_Timestamp | null);
  'id'?: (string);
  '_id'?: "id";
}

export interface EventRequest__Output {
  'text': (string);
  'name': (string);
  'lineup': (_services_events_v1_EventRequest_Entry__Output)[];
  'startDate': (_google_protobuf_Timestamp__Output | null);
  'publishDate': (_google_protobuf_Timestamp__Output | null);
  'id'?: (string);
  '_id': "id";
}
