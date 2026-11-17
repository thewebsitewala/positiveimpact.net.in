import pg from "pg";
import { env } from "./env.js";

export const pool = new pg.Pool({
  connectionString: env.databaseUrl,
});

pool.on("error", (err) => {
  console.error("Unexpected PostgreSQL client error", err);
});

export const query = (text, params) => pool.query(text, params);
