# WEATHER API

The api is hosted online. Here is the API [link](https://shy-puce-toad-tux.cyclic.cloud)

### Routes
Home page Response
```json
{
  "status":"success",
  "message":"Welcome to Weather API"
}
```
Weather ( POST request ) `/getWeather`

*Body*
```json
{
  "value":"london"
}
```
***Response*** `(200)`
```json
{
    "coord": {
        "lon": -0.1257,
        "lat": 51.5085
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 18.2,
        "feels_like": 17.88,
        "temp_min": 16.59,
        "temp_max": 19.91,
        "pressure": 1013,
        "humidity": 69
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.12,
        "deg": 300
    },
    "clouds": {
        "all": 75
    },
    "dt": 1693220343,
    "sys": {
        "type": 2,
        "id": 2075535,
        "country": "GB",
        "sunrise": 1693199174,
        "sunset": 1693249077
    },
    "timezone": 3600,
    "id": 2643743,
    "name": "London",
    "cod": 200
}
```
***Error Response*** `(400)`
```json
{
    "cod": "404",
    "message": "city not found"
}
```