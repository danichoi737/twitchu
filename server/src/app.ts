/**
 * Express app
 */

import cors from "cors";
import express from "express";
import morgan from "morgan";
import router from "./routes/index";

const app = express();

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS
app.use(cors());

// Logs
app.use(morgan("dev"));

app.use(router);
app.use((req, res, next) => {
  res.status(404).json({ result: "notfound" });
});

export default app;
