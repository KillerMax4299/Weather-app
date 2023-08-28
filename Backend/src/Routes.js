const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/getWeather",async (req, res) => {
  const {value} =await req.body
  // console.log(value)

  try {
    const { data } =await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${process.env.API_KEY}&units=metric`
  );
  res.json(data);
  } catch (err) {
    res.json(err);
  }
  
});

module.exports = router;