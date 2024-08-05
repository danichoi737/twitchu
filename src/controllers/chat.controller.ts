/**
 * Controller: Chat
 */

import { Request, Response } from "express";
import chatSchema from "../schemas/chat";

/**
 * 클라이언트에서 전송한 메시지를 처리합니다.
 */
async function sendMessage(req: Request, res: Response) {
  const message = req.body.message;

  try {
    // 데이터 생성
    const chat = await chatSchema.create({
      user: req.sessionID,
      message: message,
    });

    // WebSocket으로 chat 객체 전송
    req.app.get("websocket").emit("chat", chat);

    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(400).json({ result: "failed" });
  }
}

export default {
  sendMessage,
};
