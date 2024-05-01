/**
 * Controller: Auth
 */

import { Request, Response } from "express";

async function signin(req: Request, res: Response) {
  // TO-DO
  console.log(req.body);
  res.sendStatus(501);
}

async function signup(req: Request, res: Response) {
  // TO-DO
  console.log(req.body);
  res.sendStatus(501);
}

export default {
  signin,
  signup,
};
