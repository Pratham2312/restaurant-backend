const express = require("express");
const MenuItem = require("../models/MenuItem");
const router = express.Router();

router.get("/", async (req, res) => {
  const menu = await MenuItem.find();
  res.json(menu);
});

module.exports = router;
