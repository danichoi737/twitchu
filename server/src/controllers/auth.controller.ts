/**
 * Controller: Auth
 */

import crypto from "node:crypto";
import { Request, Response, NextFunction } from "express";
import passport from "passport";
import User from "../models/user.model";

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
      return res.json({ auth: info });
    }

    return req.login(user, (error) => {
      if (error) {
        console.error(error);
        return next(error);
      }
      next();
    });
  })(req, res, next);
}

async function signup(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  try {
    const existUser = await User.findOne({ where: { email } });
    if (existUser !== null) {
      return res.status(406).send("Already exist user");
    }

    // Password crypto
    const salt = crypto.randomBytes(64);
    // FIX-ME: iteration 값 환경변수로 변경하기
    crypto.pbkdf2(password, salt, 100000, 64, "sha512", async (error, derivedKey) => {
      if (error) {
        throw error;
      }
      await User.create({
        email,
        password: derivedKey.toString("hex"),
        salt: salt.toString("hex"),
      });
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
