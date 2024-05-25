/**
 * Data source
 */

import { DataSource } from "typeorm";
import config from "./config/db.config";
// Entities
import { User } from "./entity/user.entity";

const dataSource = new DataSource({
  ...config,
  entities: [User],
});

export default dataSource;
