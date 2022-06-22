import { EventDto } from './domain';

export interface EventBusinessServiceResponse {
    value?: any;
    error?: 'not-found';
}

export interface EventsBusinessService {
    add(event: EventDto): Promise<EventBusinessServiceResponse>;
    update(event: EventDto): Promise<EventBusinessServiceResponse>;
    getAll(): Promise<EventBusinessServiceResponse>;
}

