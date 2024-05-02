/**
 * Config: Database
 */

import "dotenv/config";
import { Dialect, Options } from "sequelize";

const env = process.env.NODE_ENV || "development";
const { DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST, DB_DIALECT } = process.env;

const config: Options = {
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  host: DB_HOST,
  dialect: DB_DIALECT as Dialect | undefined,
};

if (config.dialect === undefined) {
  throw new Error(`[CONFIG] DB dialect is undefined`);
}

if (env === "production") {
  config.logging = false;
}

export default config;
