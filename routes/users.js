const express = require("express");
const router = express.Router();
const User = require("../models/User");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ pruebas: "que ondaaaaaaaa" });
});

router.post("/create", (req, res) => {
  console.User.create(req.body)
    .then((user) => {
      res.json({ message: "success", data: req.body });
    })
    .catch((e) => res.render("error"));
});

module.exports = router;
