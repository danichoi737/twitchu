/**
 * User authentication controller
 */

const crypto = await import ("node:crypto");
import { Buffer } from "node:buffer";
import User from "../models/user.js";

async function signin(req, res, next) {
  const { email, password } = req.body;

  try {
    const existUser = await User.findOne({
      where: { email },
      raw: true
    });
    if (existUser === null) {
      return res.status(401).send("Unauthorized user");
    }

    // Compare password
    const salt = Buffer.from(existUser.salt, "hex");
    const storedPassword = Buffer.from(existUser.password, "hex");
    crypto.pbkdf2(password, salt, 100000, 64, "sha512", (error, derivedKey) => {
      if (error) {
        throw error;
      }
      const result = crypto.timingSafeEqual(derivedKey, storedPassword);
      return result ? res.redirect("/") : res.status(401).send("Failed to sign in with given credentials");
    });
  }
  catch (error) {
    console.error(error);
    next(error);
  }
}

async function signup(req, res, next) {
  const { email, password } = req.body;

  try {
    const existUser = await User.findOne({ where: { email } });
    if (existUser !== null) {
      return res.status(406).send("Already exist user");
    }

    // Password crypto
    const salt = crypto.randomBytes(64);
    crypto.pbkdf2(password, salt, 100000, 64, "sha512", async (error, derivedKey) => {
      if (error) {
        throw error;
      }
      await User.create({
        email,
        password: derivedKey.toString("hex"),
        salt: salt.toString("hex")
      });
      return res.redirect("/signin");
    });
  }
  catch (error) {
    console.error(error);
    next(error);
  }
}

const auth = {
  signin,
  signup
};

export default auth;
