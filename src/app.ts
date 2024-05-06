/**
 * Express app
 */

import cors from "cors";
import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import passport from "passport";
import config from "./config/config";
import router from "./routes/index";

const app = express();

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(config.COOKIE_SECRET));

// CORS
app.use(cors());

// Logs
app.use(morgan("dev"));

// Session
app.use(
  session({
    secret: config.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(router);
app.use((req, res, next) => {
  res.status(404).json({ result: "notfound" });
});

export default app;
