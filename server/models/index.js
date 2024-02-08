/**
 * Database models
 */

import Sequelize from "sequelize";
import config from "../config/config.js";
// Models
import User from "./user.js";

const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);

const db = {};
db.sequelize = sequelize;
db.User = User;

User.initiate(sequelize);

export default db;
