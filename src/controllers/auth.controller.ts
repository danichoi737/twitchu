/**
 * Controller: Auth
 */

import crypto from "node:crypto";
import { Request, Response, NextFunction } from "express";
import passport from "passport";
import config from "../config/config";
import dataSource from "../datasource";
import { User } from "../entity/user.entity";

function signin(req: Request, res: Response, next: NextFunction) {
  // FIX-ME: any type
  passport.authenticate("local", (error: any, user: any, info: any) => {
    if (error) {
      console.error(error);
      return next(error);
    }
    if (!user) {
      // info: strategy에서 생성된 메시지
      console.warn(info);
      return res.status(404).json({ code: "NOT_FOUND_USER", message: "Not found user" });
    }

    return req.login(user, (error) => {
      if (error) {
        console.error(error);
        return next(error);
      }

      return res.status(200).json({ auth: "welcome" });
    });
  })(req, res, next);
}

async function signup(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  // falsy 값 확인
  if (!email || !password) {
    console.log("[Auth] Invalid email or password");
    return res.status(400).json({ code: "INVALID_REQUEST", message: "Invalid email or password" });
  }

  try {
    const userRepo = dataSource.getRepository(User);

    const foundUser = await userRepo.findOne({ where: { email } });
    if (foundUser) {
      return res.status(400).json({ code: "ALREADY_EXIST", message: "Already exist user" });
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

      return res.status(201).json({ result: "registered" });
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
}

export default {
  signin,
  signup,
};
