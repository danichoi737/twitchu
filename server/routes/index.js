import express from "express";
// Controllers
import auth from "../controllers/auth.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("welcome");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.post("/signin", auth.signin);

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", auth.signup);

export default router;
