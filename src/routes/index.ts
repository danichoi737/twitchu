/**
 * Routes
 */

import express from "express";
import authRouter from "./auth.router";
import chatRouter from "./chat.router";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).sendFile("index.html");
});

router.use("/auth", authRouter);
router.use("/chat", chatRouter);

export default router;
