import { Knex } from "knex";
import { DATABASE_URL } from "../constants";

export default {
  client: "pg",
  connection: {
    db: DATABASE_URL,
  },
  migrations: {
    extension: "ts",
  },
} as Knex.Config;
