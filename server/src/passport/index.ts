/**
 * Passport
 */

import passport from "passport";
import local from "./local.strategy";
// Models
import User from "../models/user.model";

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
