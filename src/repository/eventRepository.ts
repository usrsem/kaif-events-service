import { EventDto } from "../domain/dtos";
import { Collection, ObjectId } from "mongodb";


export interface EventRepositoryResult {
    value?: EventDto | EventDto[];
    error?: "not-found"
}

export interface EventRepository {
    save(event: EventDto): Promise<EventRepositoryResult>;
    get(id: string): Promise<EventRepositoryResult>;
    getAll(): Promise<EventRepositoryResult>;
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

    async getAll(): Promise<EventRepositoryResult> {
        const events = await this.events.find({}).toArray();
        return { value: events.map(e => (e as unknown) as EventDto) };
    }
}

