/**
 * User authentication controller
 */

const crypto = await import ("node:crypto");
import passport from "passport";
import User from "../models/user.js";

async function signin(req, res, next) {
  passport.authenticate("local", (error, user, info, status) => {
    if (error) {
      console.error(error);
      return next(error);
    }
    if (!user) {
      console.warn(info);
      return res.status(401).redirect("/");
    }

    return req.login(user, (error) => {
      if (error) {
        console.error(error);
        return next(error);
      }
      return res.redirect("/");
    });
  }) (req, res, next);
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
