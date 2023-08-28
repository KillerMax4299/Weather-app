const express = require("express");
const axios = require("axios");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

router.get("/", (req, res) => {
  res.json("Weather api server live "+process.env.API_KEY);
});

module.exports = router;