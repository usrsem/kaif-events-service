import { EventDto } from './domain.d.ts';

export interface EventRepositoryResult {
    value?: EventDto | EventDto[];
    error?: 'not-found'
}

export interface EventRepository {
    save(event: EventDto): Promise<EventRepositoryResult>;
    get(id: string): Promise<EventRepositoryResult>;
    getAll(): Promise<EventRepositoryResult>;
}

