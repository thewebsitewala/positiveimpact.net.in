import "dotenv/config";

export const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT) || 5000,
  corsOrigin: process.env.CORS_ORIGIN || "http://localhost:3000",
  databaseUrl: process.env.DATABASE_URL,
};
