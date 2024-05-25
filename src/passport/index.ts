/**
 * Passport
 */

import passport from "passport";
import local from "./local.strategy";
import dataSource from "../datasource";
import { User } from "../entity/user.entity";

function setSerializing() {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser<number>(async (id, done) => {
    try {
      const foundUser = await dataSource.getRepository(User).find({ where: { id } });
      const user = foundUser[0];
      done(null, user);
    } catch (error) {
      done(error);
    }
  });

  // Strategy
  local();
}

export default setSerializing;
