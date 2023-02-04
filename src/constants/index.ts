import { config } from "dotenv";
config();

export const PORT = Number(process.env.PORT) || 8080;
export const HOST_NAME = process.env.HOST_NAME || "0.0.0.0";
export const NODE_ENV = process.env.NODE_ENV || "dev";
export const DATABASE_URL = process.env.DATABASE_URL || "postgres//postgres@database/backend_dev";
export const DATABASE_USER = process.env.DATABASE_USER || "postgres";
