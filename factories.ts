import { EventRepository, MongoEventRepository } from "./src/repository/eventRepository";
import { collections } from "./src/db/context";


export const getEventRepository = (): EventRepository => {
    const events = collections.events;

    if (events == undefined) {
        throw new Error("Events collection undefined");
    }

    return new MongoEventRepository(events);
};
