import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

let dbInstance: any;

export const getDb = () => {
  if (!dbInstance) {
    const config = useRuntimeConfig();

    if (!config.databaseUrl || !config.databaseAuthToken) {
      throw new Error('Database credentials not configured. Check your .env file.');
    }

    const client = createClient({
      url: config.databaseUrl,
      authToken: config.databaseAuthToken,
    });

    dbInstance = drizzle(client);
  }

  return dbInstance;
};

// Export direct access to db
export const db = new Proxy({}, {
  get: (target, prop) => {
    return (getDb() as any)[prop];
  },
});

export const useDb = () => getDb();