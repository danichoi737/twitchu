/**
 * Server
 */

import "dotenv/config";
import express from "express";
import morgan from "morgan";

const server = express();

server.set("port", process.env.HTTP_PORT || 8000);
server.set("view engine", "ejs");

server.use(morgan("dev"));
server.use(express.static("public"));

server.use("/", (req, res) => {
  res.render("index");
})

server.listen(server.get("port"), () => {
  console.log("Server listening");
});
