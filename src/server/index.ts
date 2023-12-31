import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import * as schema from "../db/schema";

const connection = connect({
  url: import.meta.env.DATABASE_URL,
});

export const db = drizzle(connection, { schema });
