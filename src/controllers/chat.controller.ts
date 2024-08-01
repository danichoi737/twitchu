/**
 * Controller: Chat
 */

import { Request, Response } from "express";
import chatSchema from "../schemas/chat";

/**
 * 클라이언트에서 전송한 메시지를 처리합니다.
 */
function sendMessage(req: Request, res: Response) {
  const message = req.body.message;

  try {
    // 데이터 생성
    const chat = chatSchema.create({
      user: req.sessionID,
      message: message,
    });

    // TO-DO: WebSocket을 사용해 메시지 내용을 FE로 전송

    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(400).json({ result: "failed" });
  }
}

export default {
  sendMessage,
};
