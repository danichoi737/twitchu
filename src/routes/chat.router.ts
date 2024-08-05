/**
 * Router: Chat
 */

import express from "express";
import controller from "../controllers/chat.controller";

const router = express.Router();

/**
 * 메시지 전송 처리
 */
router.post("/", controller.sendMessage);

export default router;
