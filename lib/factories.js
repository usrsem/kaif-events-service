'use strict';

const { MongoEventRepository } = require('./repository/eventRepository.js');
const { V1EventBusinessService } = require('./service/events-service.js');
const Service = require('./web/grpc-events-service');
const collections = require('./db.js');

const getEventRepository = () => {
  const events = collections.events;
  return MongoEventRepository(events);
};

const getGrpcService = () => Service(
  V1EventBusinessService(getEventRepository()));


const factories = {
  getEventRepository,
  getGrpcService
};

module.exports = factories;
