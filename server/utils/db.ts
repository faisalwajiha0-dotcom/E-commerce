import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

const config = useRuntimeConfig();

const client = createClient({
  url: config.databaseUrl,
  authToken: config.databaseAuthToken,
});

export const db = drizzle(client);

export const useDb = () => {
  return db;
}