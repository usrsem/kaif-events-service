interface ENV {
    mongoConnectionString: string | undefined
    mongoDbName: string | undefined
    eventsCollectionName: string | undefined
    telegramServicePort: number | undefined
}

export interface Settings {
    mongoConnectionString: string
    mongoDbName: string
    eventsCollectionName: string
    telegramServicePort: number
}


// FIXME: Use ENV vars from string[]
const getConfig = (): ENV => {
    return {
        mongoConnectionString: process.env.KAIF_EVENTS_SERVICE_MONGO_CONNECTION_STRING,
        mongoDbName: process.env.KAIF_EVENTS_SERVICE_MONGO_DB_NAME,
        eventsCollectionName: process.env.KAIF_EVENTS_SERVICE_MONGO_COLLECTION_NAME,
        telegramServicePort: process.env.KAIF_TELEGRAM_SERVICE_PORT
            ? Number(process.env.KAIF_TELEGRAM_SERVICE_PORT)
            : undefined
    };
};

const getSanitzedSettings = (settings: ENV): Settings => {
    for (const [key, value] of Object.entries(settings)) {
        if (value === undefined) {
            throw new Error(`Missing key ${key} in ENV vars`);
        }
    }

    return settings as Settings;
};

const rawSettings = getConfig();

const settings: Settings = getSanitzedSettings(rawSettings);

export default settings;

