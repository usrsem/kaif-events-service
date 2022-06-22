'use strict';

const { ObjectId } = require('mongodb');

const MongoEventRepository = (events) => {
  const repository = {
    save: async (event) => {
      await events.insertOne(event);
      return { value: event };
    },
    get: async (id) => {
      const event = await this.events.findOne({ id: new ObjectId(id) });

      if (event) {
        return { value: event };
      }

      return { error: 'not-found' };
    },
    getAll: async () => {
      const events = await this.events.find({}).toArray();
      return { value: events };
    }
  };
  return repository;
};

module.exports = { MongoEventRepository };

