/**
 * Express app
 */

import cors from "cors";
import express from "express";
import morgan from "morgan";

const app = express();

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS
app.use(cors());

// Logs
app.use(morgan("dev"));

app.use("/", (req, res) => {
  res.json({ status: "running" });
});
app.use((req, res, next) => {
  res.status(404).json({ result: "notfound" });
});

export default app;
