import { EventDto } from "../domain/dtos";
import { EventRepository } from "../repository/eventRepository";

export interface EventBusinessServiceResponse {
    value?: any;
    error?: 'not-found';
}

export interface EventsBusinessService {
    add(event: EventDto): Promise<EventBusinessServiceResponse>;
    update(event: EventDto): Promise<EventBusinessServiceResponse>;
    getAll(): Promise<EventBusinessServiceResponse>;
}

export class V1EventBusinessService implements EventsBusinessService {
    constructor(private eventsRepository: EventRepository) { }

    async add(event: EventDto): Promise<EventBusinessServiceResponse> {
        await this.eventsRepository.save(event);
        return { value: event };
    }

    async update(event: EventDto): Promise<EventBusinessServiceResponse> {
        await this.eventsRepository.save(event);
        return { value: event };
    }

    async getAll(): Promise<EventBusinessServiceResponse> {
        return { value: await this.eventsRepository.getAll() };
    }
}
