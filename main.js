'use strict';

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const settings = require('./lib/config.js');
const { log } = require('./lib/loader.js');
const { connectToDatabase } = require('./lib/db.js');
const { getGrpcService } = require('./lib/factories.js');

const connectToMongo = async () => {
  log.info('Connecting to mongo');

  await connectToDatabase(
    settings.mongoConnectionString,
    settings.mongoDbName,
    settings.eventsCollectionName
  );
};

const startGrpcService = () => {
  log.info('Starting gRPC server');

  const packageDefinition = protoLoader.loadSync(
    settings.eventsProtoPath,
    {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
    }
  );

  const eventsProto = grpc.loadPackageDefinition(packageDefinition)
    .services
    .events
    .v1;

  const getServer = () => {
    const server = new grpc.Server();
    server.addService(
      eventsProto.EventRequestsService.service, getGrpcService());
    return server;
  };

  const routeServer = getServer();

  routeServer.bindAsync(
    settings.grpcServerPort,
    grpc.ServerCredentials.createInsecure(),
    () => routeServer.start()
  );
};

const main = () => {
  (async () => await connectToMongo());
  log.info('Connected');
  startGrpcService();
};

if (require.main === module) {
  main();
}
