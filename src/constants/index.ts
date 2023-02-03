import { config } from "dotenv";
config();

export const PORT = Number(process.env.PORT) || 8080;
export const HOST_NAME = process.env.HOST_NAME || "0.0.0.0";
export const NODE_ENV = process.env.NODE_ENV || "dev";
