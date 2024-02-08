import express from "express";

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

export default router;
