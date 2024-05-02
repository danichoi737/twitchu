/**
 * Database
 */

import { Sequelize } from "sequelize";
import config from "../config/db.config";
// Models
import User from "./user";

const sequelize = new Sequelize(config);
User.initiate(sequelize);

export default {
  sequelize,
  User,
};
