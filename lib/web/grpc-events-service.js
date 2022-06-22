'use strict';

const grpc = require('@grpc/grpc-js');

const Service = (eventsBusinessService) => ({
  addEventRequest: async (call, callback) => {
    await eventsBusinessService.add(call);
    callback(null, new grpc.Empty());
  },
  updateEventRequest: async (call, callback) => {
    await eventsBusinessService.update(call);
    callback(null, new grpc.Empty());
  },
  getAllEventRequests: async (call) => {
    const events = await eventsBusinessService.getAll();
    events.forEach(call.write);
    call.end();
  }
});

module.exports = Service;
