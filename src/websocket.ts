import * as http from "node:http";
import { Server, Socket } from "socket.io";

export default (httpServer: http.Server) => {
  const server = new Server(httpServer, {
    path: "/socket.io",
  });

  server.on("connection", (socket: Socket) => {
    console.log("[websocket] client connected: ", socket.id);

    socket.on("disconnect", () => {
      console.log("[websocket] client disconnected");
    });
  });
};
