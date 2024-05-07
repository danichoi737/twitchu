/**
 * Passport
 */

import passport from "passport";
import local from "./local.strategy";
import { User } from "../models";

function setSerializing() {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser<number>(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      done(null, user);
    } catch (error) {
      done(error);
    }
  });

  // Strategy
  local();
}

export default setSerializing;
