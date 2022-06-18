import { EventDto } from "../domain/dtos";
import { Collection, ObjectId } from "mongodb";


export interface EventRepositoryResult {
    value?: EventDto;
    error?: "not-found"
}

export interface EventRepository {
    save(event: EventDto): Promise<EventRepositoryResult>;
    get(id: string): Promise<EventRepositoryResult>;
}


export class MongoEventRepository implements EventRepository {
    constructor(private events: Collection) { }

    async save(event: EventDto): Promise<EventRepositoryResult> {
        await this.events.insertOne(event);
        return { value: event };
    }

    async get(id: string): Promise<EventRepositoryResult> {
        const event = await this.events.findOne({ id: new ObjectId(id) });

        if (event) {
            return { value: (event as unknown) as EventDto };
        }

        return { error: "not-found" };
    }
}

