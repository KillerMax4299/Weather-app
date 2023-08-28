const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get('/', function (req, res) {
  res.json({status:"success", message:"Welcome to Weather API"})
})

router.post("/getWeather", async (req, res) => {
  const { value } = await req.body;
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${process.env.API_KEY}&units=metric`
    );

    res.json(data);
    // res.json(response);
  } catch {
    res.status(404).json({
      cod: "404",
      message: "city not found",
    });
  }
});

module.exports = router;
