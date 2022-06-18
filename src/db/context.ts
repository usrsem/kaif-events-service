import * as mongoDB from "mongodb";

export const collections: { events?: mongoDB.Collection } = {}

export async function connectToDatabase(
    connectionString: string,
    dbName: string,
    collectionName: string) {

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(connectionString);

    await client.connect();

    const db: mongoDB.Db = client.db(dbName);

    const eventsCollection: mongoDB.Collection = db.collection(collectionName);

    collections.events = eventsCollection;
}
