/**
 * Passport: Local strategy
 */

import { Buffer } from "node:buffer";
import crypto from "node:crypto";
import passport from "passport";
import { Strategy } from "passport-local";
import config from "../config/config";
import { User } from "../models";

function local() {
  passport.use(
    new Strategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (username, password, done) => {
        try {
          const existUser = await User.findOne({ where: { email: username } });
          if (existUser) {
            // Compare password
            const salt = Buffer.from(existUser.salt, "hex");
            const storedPassword = Buffer.from(existUser.password, "hex");
            crypto.pbkdf2(password, salt, config.CRYPTO_ITERATIONS, 64, "sha512", (error, derivedKey) => {
              if (error) {
                throw error;
              }
              const result = crypto.timingSafeEqual(derivedKey, storedPassword);
              return result ? done(null, existUser) : done(null, false, { message: "Password not matched" });
            });
          } else {
            done(null, false, { message: "Not registered user" });
          }
        } catch (error) {
          console.log(error);
          done(error);
        }
      }
    )
  );
}

export default local;
