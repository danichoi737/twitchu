import passport from "passport";
import local from "./strategy-local.js";
// Database
import User from "../models/user.js";

function setSerializing() {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      done(null, user);
    }
    catch (error) {
      done(error);
    }
  });

  local();
}

export default setSerializing;
