import type { Config } from "drizzle-kit";
import "dotenv/config";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required.");
}

const drizzleConfig = {
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  driver: "mysql2",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
} satisfies Config;

export default drizzleConfig;
