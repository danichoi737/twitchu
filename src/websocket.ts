/**
 * WebSocket
 */

import http from "node:http";
import { Express } from "express";
import { Server, Socket } from "socket.io";

export default (httpServer: http.Server, app: Express) => {
  const io = new Server(httpServer, {
    path: "/socket.io",
  });

  // Express router에서 사용하기 위해 설정
  app.set("websocket", io);

  io.on("connection", (socket: Socket) => {
    console.log("[websocket] client connected: ", socket.id);

    socket.on("disconnect", () => {
      console.log("[websocket] client disconnected");
    });
  });
};
