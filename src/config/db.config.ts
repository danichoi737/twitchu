/**
 * Config: Database
 */

import "dotenv/config";
import { DataSourceOptions } from "typeorm";

const env = process.env.NODE_ENV || "development";
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

const config: DataSourceOptions = {
  type: "postgres",
  host: DB_HOST,
  port: parseInt(DB_PORT || "5432"),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: true,
  logging: true,
};

export default config;
