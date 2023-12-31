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
    "cod": 200,
    "city": "London",
    "ISO": "GB",
    "weather": {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d"
    },
    "main": {
        "temp": 11.47,
        "feels_like": 11.02,
        "temp_min": 9.32,
        "temp_max": 13.38,
        "pressure": 1008,
        "humidity": 90
    }
}
```
***Error Response*** `(400)`
```json
{
    "cod": "404",
    "message": "city not found"
}
```

# WEATHER UI
* Made with **React** and **TailwindCSS**
* CustomHooks [`useDebounce`](https://usehooks.com/usedebounce), [`useLocalStorage`](https://usehooks.com/uselocalstorage) and [`useNetworkStatus`](https://usehooks.com/usenetworkstate) are used from [usehooks.com](https://usehooks.com/)
