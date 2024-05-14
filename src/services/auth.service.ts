/**
 * Service: Auth
 */

import crypto from "node:crypto";
import config from "../config/config";
import dataSource from "../datasource";
import { User } from "../entity/user.entity";

async function createUser(email: string, password: string) {
  return new Promise(async (resolve, reject) => {
    // falsy 값 확인
    if (!email || !password) {
      console.error("[AuthService] Invalid email or password");
      return reject({ code: "INVALID_REQUEST", message: "Invalid email or password" });
    }

    const userRepo = dataSource.getRepository(User);

    const foundUser = await userRepo.findOne({ where: { email } });
    if (foundUser) {
      return reject({ code: "ALREADY_EXIST", message: "Already exist user" });
    }

    // Password crypto
    const salt = crypto.randomBytes(64);
    crypto.pbkdf2(password, salt, config.CRYPTO_ITERATIONS, 64, "sha512", async (error, derivedKey) => {
      if (error) {
        throw error;
      }

      const newUser = new User();
      newUser.email = email;
      newUser.password = derivedKey.toString("hex");
      newUser.salt = salt.toString("hex");
      userRepo.save(newUser);

      return resolve({ user: newUser.email });
    });
  })
    .then((result) => {
      return {
        return: "created",
        result: result,
      };
    })
    .catch((error) => {
      return {
        return: "error",
        result: error,
      };
    });
}

export default {
  createUser,
};
