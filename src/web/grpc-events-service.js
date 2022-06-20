'use strict';

const PROTO_PATH = __dirname +
  '../../proto/services/events/v1/events_service.proto';

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });

const eventsProto = grpc.loadPackageDefinition(packageDefinition)
  .services
  .events
  .v1;


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

const getServer = () => {
  const server = new grpc.Server();
  server.addService(eventsProto.EventRequestsService.service, Service(null));
  return server;
};

const routeServer = getServer();

routeServer
  .bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    routeServer.start();
  });

module.exports = getServer;
