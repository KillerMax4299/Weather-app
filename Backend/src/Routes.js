const express = require("express");
const axios = require("axios");
const router = express.Router();

const data_set = {
  coord: {
    lon: 88.532,
    lat: 23.0775,
  },
  weather: [
    {
      id: 803,
      main: "Clouds",
      description: "broken clouds",
      icon: "04d",
    },
  ],
  base: "stations",
  main: {
    temp: 33.94,
    feels_like: 37.93,
    temp_min: 33.94,
    temp_max: 33.94,
    pressure: 1001,
    humidity: 49,
    sea_level: 1001,
    grnd_level: 999,
  },
  visibility: 10000,
  wind: {
    speed: 2.06,
    deg: 6,
    gust: 2.52,
  },
  clouds: {
    all: 78,
  },
  dt: 1693294518,
  sys: {
    type: 1,
    id: 9114,
    country: "IN",
    sunrise: 1693266427,
    sunset: 1693312042,
  },
  timezone: 19800,
  id: 1268715,
  name: "Chakdaha",
  cod: 200,
};

router.get("/", function (req, res) {
  res.json({ status: "success", message: "Welcome to Weather API" });
});

router.post("/getWeather", async (req, res) => {
  const { value } = await req.body;
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${process.env.API_KEY}&units=metric`
    );
    console.log("request made");
    res.json(data);
    // res.json(response);
  } catch {
    res.status(404).json({
      cod: "404",
      message: "city not found",
    });
  }
});

router.post("/testpost", async (req, res) => {
  const { value } = await req.body;
  const { name, sys, main, weather } = data_set;
  // console.log(value)
  if(value === 'chakdaha')
  res.json({
    city: name,
    ISO: sys.country,
    weather: weather,
    main: main
  }); 
  else 
    res.json({cod:404,message:"city not found"})
});

module.exports = router;
