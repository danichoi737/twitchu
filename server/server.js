/**
 * Server
 */

import "dotenv/config";
import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import passport from "passport";
import setSerializing from "./passport/index.js";
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

setSerializing();

server.use(morgan("dev"));
server.use(express.static("public"));
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser(process.env.COOKIE_SECRET));
server.use(session({
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false
  }
}));
server.use(passport.initialize());
server.use(passport.session());

server.use("/", router);

server.listen(server.get("port"), () => {
  console.log("Server listening");
});
