/**
 * Routes
 */

import express from "express";
import authRouter from "./auth.router";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ status: "running" });
});

router.use("/auth", authRouter);

export default router;
