export interface Settings {
    mongoConnectionString: string;
    mongoDbName: string;
    eventsCollectionName: string;
    telegramServicePort: number;
    grpcServerPort: number;
}

export const settings: Settings;
