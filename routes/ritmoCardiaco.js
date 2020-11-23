const express = require("express");
const router = express.Router();
const RitmoCardiaco = require("../models/RitmoCardiaco");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ pruebas: "que ondaaaaaaaa" });
});

router.post("/create", (req, res) => {
  RitmoCardiaco.create(req.body)
    .then((RitmoCardiaco) => {
      res.json({ message: "success", data: req.body });
    })
    .catch((e) => res.render("error"));
});

module.exports = router;
