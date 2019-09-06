const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // res.send("<h1>Sup Multiverse!</h1>");
  res.json({ hello: "multiverse" });
});

module.exports = router;
