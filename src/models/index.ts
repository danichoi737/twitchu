/**
 * Database
 */

import { Sequelize } from "sequelize";
import config from "../config/db.config";
// Models
import User from "./user.model";

const sequelize = new Sequelize(config);
User.initiate(sequelize);

export { sequelize, User };
