/**
 * Server
 */

import "dotenv/config";
import express from "express";

const server = express();

server.set("port", process.env.HTTP_PORT || 8000);

server.use((req, res, next) => {
  res.send("welcome");
});

server.listen(server.get("port"), () => {
  console.log("Server listening");
});
