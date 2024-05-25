/**
 * Types
 */

import { User as IUser } from "../entity/user.entity";

declare global {
  namespace Express {
    interface User extends IUser {}
  }
}
