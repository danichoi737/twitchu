/**
 * Server
 */

import "dotenv/config";
import express from "express";
import morgan from "morgan";
import router from "./routes/index.js";
import database from "./models/index.js";

const server = express();

server.set("port", process.env.HTTP_PORT || 8000);
server.set("view engine", "ejs");

try {
  await database.sequelize.sync({ force: true });
  console.log("Database connected");
}
catch (error) {
  console.error(error);
}

server.use(morgan("dev"));
server.use(express.static("public"));
server.use(express.urlencoded({ extended: false }));

server.use("/", router);

server.listen(server.get("port"), () => {
  console.log("Server listening");
});
