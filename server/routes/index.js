import express from "express";
// Controllers
import auth from "../controllers/auth.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.post("/signin", (req, res) => {
  console.log(req.body.email, req.body.password);
  res.redirect("/");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", auth.signup);

export default router;
