'use strict';

const mongoDB = require('mongodb');

const collections = {};

const connectToDatabase = async (connectionString, dbName, collectionName) => {
  const client = new mongoDB.MongoClient(connectionString);
  await client.connect();
  const db = client.db(dbName);
  const eventsCollection = db.collection(collectionName);
  collections.events = eventsCollection;
};

module.exports = {
  collections,
  connectToDatabase
};
