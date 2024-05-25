/**
 * Controller: Auth
 */

import { Request, Response, NextFunction } from "express";
import passport from "passport";
import service from "../services/auth.service";

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

async function signup(req: Request, res: Response) {
  const { email, password } = req.body;
  const createdUser = await service.createUser(email, password);

  if (createdUser.return === "created") {
    return res.status(201).json(createdUser.result);
  } else if (createdUser.return === "error") {
    return res.status(400).json(createdUser.result);
  }
}

export default {
  signin,
  signup,
};
