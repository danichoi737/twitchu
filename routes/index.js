import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.post("/signin", (req, res) => {
  res.redirect("/");
});

export default router;
