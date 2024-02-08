/**
 * User authentication controller
 */

import User from "../models/user.js";

async function signin(req, res, next) {
  const { email, password } = req.body;

  try {
    const existUser = await User.findOne({
      where: {
        email,
        password
      }
    });
    if (existUser !== null) {
      return res.redirect("/");
    }
    else {
      return res.status(401).send("Unauthorized user");
    }
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
    await User.create({
      email,
      password
    });
    return res.redirect("/signin");
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
