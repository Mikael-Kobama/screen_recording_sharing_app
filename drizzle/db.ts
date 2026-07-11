import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const client = postgres(process.env.DATABASE_URL_POSTGRES!);
export const db = drizzle(client);
