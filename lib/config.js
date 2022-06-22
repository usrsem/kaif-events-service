'use strict';

const process = require('node:process');
const path = require('node:path');
const { log } = require('./loader.js');

const createEnvVarInfo = (fieldName, envVarName) => ({ fieldName, envVarName });

const settingsFiledsToEnvVars = [
  [
    'mongoConnectionString',
    'KAIF_EVENTS_SERVICE_MONGO_CONNECTION_STRING',
  ],
  [
    'mongoDbName',
    'KAIF_EVENTS_SERVICE_MONGO_DB_NAME',
  ],
  [
    'eventsCollectionName',
    'KAIF_EVENTS_SERVICE_MONGO_COLLECTION_NAME',
  ],
  [
    'telegramServicePort',
    'KAIF_TELEGRAM_SERVICE_PORT',
  ],
  [
    'grpcServerPort',
    'KAIF_EVENTS_SERVER_PORT',
  ],
].map((el) => createEnvVarInfo(...el));

const getSettings = () => {
  const settings = {};

  for (const el of settingsFiledsToEnvVars) {
    const envVar = process.env[el.envVarName];

    if (!envVar) {
      log.error(`ENV variable ${el.envVarName} not found`);
      process.exit(1);
    }

    settings[el.fieldName] = envVar;
  }

  return settings;
};

const settings = getSettings();
settings.eventsProtoPath = path.resolve(
  './proto/services/events/v1/events_service.proto'
);

module.exports = settings;
