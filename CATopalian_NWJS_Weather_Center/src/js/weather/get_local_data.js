// get_local_data.js

function get_local_data(zip_code)
{
    // Append ',USA' to the zip code so the server doesn't guess the country
    let location_query = zip_code + ',USA';

    let url = 'https://wttr.in/' + location_query + '?format=j1';

    //let url = 'https://wttr.in/' + zip_code + '?format=j1';

    fetch(url)
        .then(function(response)
        {
            return response.json();
        })
        .then(function(weather_data)
        {
            console.log(JSON.stringify(weather_data, null, 2));

            // date and time of the update
            let date_time = new Date().toLocaleString();

            ge('weatherUpdateTimeDiv').textContent = date_time;

            // Get the weather description
            let description = weather_data.current_condition[0].weatherDesc[0].value;

            ge('weatherDataDiv').textContent = JSON.stringify(weather_data, null, 2);

            // weatherLocationDiv
            ge('weatherLocationDiv').textContent = weather_data.nearest_area[0].areaName[0].value;

            // weatherRegionDiv
            ge('weatherRegionDiv').textContent = weather_data.nearest_area[0].region[0].value;

            // temperature in F
            ge('temperatureDiv').textContent = weather_data.current_condition[0].temp_F + 'F Degrees';

            // humidity
            ge('humidityDiv').textContent = weather_data.current_condition[0].humidity + '% Humidity';

            // pressure
            ge('pressureDiv').textContent = weather_data.current_condition[0].pressure + ' mb of Pressure';

            // uvIndex
            ge('uvIndexDiv').textContent = weather_data.current_condition[0].uvIndex + ' UV (Ultraviolet)';

            // weatherDescription
            ge('weatherDescriptionDiv').textContent = weather_data.current_condition[0].weatherDesc[0].value;

            // SUN POSITION updates slider
            let now = new Date();
            let hour = now.getHours() + 1; // returns an integer from 1 to 24
            ge('sunSlider').value = hour;

            // sunrise
            ge('sunriseDiv').textContent = weather_data.weather[0].astronomy[0].sunrise + ' Sunrise';

            // sunset
            ge('sunsetDiv').textContent = weather_data.weather[0].astronomy[0].sunset + ' Sunset';

            // wind speed mph
            ge('windSpeedDiv').textContent = weather_data.current_condition[0].windspeedMiles + ' mph Wind';
        })
        .catch(function(error)
        {
            console.log("Could not retrieve weather data: " + error);
        });
}

// Execute the function
// get_local_data('32801'); // orlando fl

/*
{
  "current_condition": [
    {
      "FeelsLikeC": "42",
      "FeelsLikeF": "108",
      "cloudcover": "24",
      "humidity": "58",
      "observation_time": "06:02 PM",
      "precipInches": "0.0",
      "precipMM": "0.0",
      "pressure": "1020",
      "pressureInches": "30",
      "temp_C": "34",
      "temp_F": "94",
      "uvIndex": "11",
      "visibility": "10",
      "visibilityMiles": "6",
      "weatherCode": "113",
      "weatherDesc": [
        {
          "value": "Sunny"
        }
      ],
      "weatherIconUrl": [
        {
          "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
        }
      ],
      "winddir16Point": "SSE",
      "winddirDegree": "148",
      "windspeedKmph": "10",
      "windspeedMiles": "6"
    }
  ],
  "nearest_area": [
    {
      "areaName": [
        {
          "value": "Orlando"
        }
      ],
      "country": [
        {
          "value": "United States of America"
        }
      ],
      "latitude": "28.538",
      "longitude": "-81.379",
      "population": "207970",
      "region": [
        {
          "value": "Florida"
        }
      ],
      "weatherUrl": [
        {
          "value": "https://www.worldweatheronline.com/v2/weather.aspx?q=28.538,-81.379"
        }
      ]
    }
  ],
  "request": [
    {
      "query": "Lat 28.54 and Lon -81.38",
      "type": "LatLon"
    }
  ],
  "weather": [
    {
      "astronomy": [
        {
          "moon_illumination": "19",
          "moon_phase": "Waning Crescent",
          "moonrise": "03:06 AM",
          "moonset": "05:55 PM",
          "sunrise": "06:52 AM",
          "sunset": "08:10 PM"
        }
      ],
      "avgtempC": "28",
      "avgtempF": "83",
      "date": "2026-08-09",
      "hourly": [
        {
          "DewPointC": "23",
          "DewPointF": "73",
          "FeelsLikeC": "29",
          "FeelsLikeF": "84",
          "HeatIndexC": "29",
          "HeatIndexF": "84",
          "WindChillC": "26",
          "WindChillF": "79",
          "WindGustKmph": "19",
          "WindGustMiles": "12",
          "chanceoffog": "0",
          "chanceoffrost": "0",
          "chanceofhightemp": "88",
          "chanceofovercast": "0",
          "chanceofrain": "9",
          "chanceofremdry": "91",
          "chanceofsnow": "0",
          "chanceofsunshine": "98",
          "chanceofthunder": "0",
          "chanceofwindy": "1",
          "cloudcover": "0",
          "diffRad": "0.0",
          "humidity": "81",
          "precipInches": "0.0",
          "precipMM": "0.0",
          "pressure": "1019",
          "pressureInches": "30",
          "shortRad": "0.1",
          "tempC": "26",
          "tempF": "79",
          "time": "0",
          "uvIndex": "0",
          "visibility": "10",
          "visibilityMiles": "6",
          "weatherCode": "113",
          "weatherDesc": [
            {
              "value": "Clear "
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
            }
          ],
          "winddir16Point": "SE",
          "winddirDegree": "133",
          "windspeedKmph": "12",
          "windspeedMiles": "7"
        },
        {
          "DewPointC": "23",
          "DewPointF": "74",
          "FeelsLikeC": "28",
          "FeelsLikeF": "82",
          "HeatIndexC": "28",
          "HeatIndexF": "82",
          "WindChillC": "25",
          "WindChillF": "77",
          "WindGustKmph": "13",
          "WindGustMiles": "8",
          "chanceoffog": "0",
          "chanceoffrost": "0",
          "chanceofhightemp": "90",
          "chanceofovercast": "0",
          "chanceofrain": "14",
          "chanceofremdry": "76",
          "chanceofsnow": "0",
          "chanceofsunshine": "98",
          "chanceofthunder": "0",
          "chanceofwindy": "1",
          "cloudcover": "1",
          "diffRad": "0.0",
          "humidity": "92",
          "precipInches": "0.0",
          "precipMM": "0.0",
          "pressure": "1018",
          "pressureInches": "30",
          "shortRad": "0.0",
          "tempC": "25",
          "tempF": "77",
          "time": "300",
          "uvIndex": "0",
          "visibility": "10",
          "visibilityMiles": "6",
          "weatherCode": "113",
          "weatherDesc": [
            {
              "value": "Clear "
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
            }
          ],
          "winddir16Point": "SSE",
          "winddirDegree": "154",
          "windspeedKmph": "8",
          "windspeedMiles": "5"
        },
        {
          "DewPointC": "23",
          "DewPointF": "73",
          "FeelsLikeC": "27",
          "FeelsLikeF": "80",
          "HeatIndexC": "27",
          "HeatIndexF": "80",
          "WindChillC": "24",
          "WindChillF": "76",
          "WindGustKmph": "12",
          "WindGustMiles": "7",
          "chanceoffog": "0",
          "chanceoffrost": "0",
          "chanceofhightemp": "87",
          "chanceofovercast": "0",
          "chanceofrain": "13",
          "chanceofremdry": "76",
          "chanceofsnow": "0",
          "chanceofsunshine": "98",
          "chanceofthunder": "0",
          "chanceofwindy": "1",
          "cloudcover": "0",
          "diffRad": "0.0",
          "humidity": "91",
          "precipInches": "0.0",
          "precipMM": "0.0",
          "pressure": "1018",
          "pressureInches": "30",
          "shortRad": "0.0",
          "tempC": "24",
          "tempF": "76",
          "time": "600",
          "uvIndex": "0",
          "visibility": "10",
          "visibilityMiles": "6",
          "weatherCode": "113",
          "weatherDesc": [
            {
              "value": "Clear "
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
            }
          ],
          "winddir16Point": "SE",
          "winddirDegree": "142",
          "windspeedKmph": "7",
          "windspeedMiles": "4"
        },
        {
          "DewPointC": "23",
          "DewPointF": "73",
          "FeelsLikeC": "31",
          "FeelsLikeF": "88",
          "HeatIndexC": "31",
          "HeatIndexF": "88",
          "WindChillC": "28",
          "WindChillF": "82",
          "WindGustKmph": "11",
          "WindGustMiles": "7",
          "chanceoffog": "0",
          "chanceoffrost": "0",
          "chanceofhightemp": "95",
          "chanceofovercast": "2",
          "chanceofrain": "8",
          "chanceofremdry": "92",
          "chanceofsnow": "0",
          "chanceofsunshine": "92",
          "chanceofthunder": "0",
          "chanceofwindy": "1",
          "cloudcover": "11",
          "diffRad": "100.2",
          "humidity": "75",
          "precipInches": "0.0",
          "precipMM": "0.0",
          "pressure": "1020",
          "pressureInches": "30",
          "shortRad": "252.8",
          "tempC": "28",
          "tempF": "82",
          "time": "900",
          "uvIndex": "2",
          "visibility": "10",
          "visibilityMiles": "6",
          "weatherCode": "113",
          "weatherDesc": [
            {
              "value": "Sunny"
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
            }
          ],
          "winddir16Point": "SE",
          "winddirDegree": "137",
          "windspeedKmph": "9",
          "windspeedMiles": "5"
        },
        {
          "DewPointC": "26",
          "DewPointF": "78",
          "FeelsLikeC": "41",
          "FeelsLikeF": "106",
          "HeatIndexC": "41",
          "HeatIndexF": "106",
          "WindChillC": "33",
          "WindChillF": "91",
          "WindGustKmph": "13",
          "WindGustMiles": "8",
          "chanceoffog": "0",
          "chanceoffrost": "0",
          "chanceofhightemp": "99",
          "chanceofovercast": "10",
          "chanceofrain": "7",
          "chanceofremdry": "94",
          "chanceofsnow": "0",
          "chanceofsunshine": "57",
          "chanceofthunder": "0",
          "chanceofwindy": "1",
          "cloudcover": "32",
          "diffRad": "152.1",
          "humidity": "67",
          "precipInches": "0.0",
          "precipMM": "0.0",
          "pressure": "1020",
          "pressureInches": "30",
          "shortRad": "545.8",
          "tempC": "33",
          "tempF": "91",
          "time": "1200",
          "uvIndex": "9",
          "visibility": "10",
          "visibilityMiles": "6",
          "weatherCode": "116",
          "weatherDesc": [
            {
              "value": "Partly Cloudy "
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
            }
          ],
          "winddir16Point": "SE",
          "winddirDegree": "144",
          "windspeedKmph": "11",
          "windspeedMiles": "7"
        },
        {
          "DewPointC": "26",
          "DewPointF": "79",
          "FeelsLikeC": "38",
          "FeelsLikeF": "101",
          "HeatIndexC": "38",
          "HeatIndexF": "101",
          "WindChillC": "31",
          "WindChillF": "87",
          "WindGustKmph": "16",
          "WindGustMiles": "10",
          "chanceoffog": "13",
          "chanceoffrost": "0",
          "chanceofhightemp": "99",
          "chanceofovercast": "78",
          "chanceofrain": "29",
          "chanceofremdry": "71",
          "chanceofsnow": "0",
          "chanceofsunshine": "9",
          "chanceofthunder": "0",
          "chanceofwindy": "1",
          "cloudcover": "74",
          "diffRad": "233.6",
          "humidity": "79",
          "precipInches": "0.0",
          "precipMM": "0.1",
          "pressure": "1018",
          "pressureInches": "30",
          "shortRad": "786.2",
          "tempC": "31",
          "tempF": "87",
          "time": "1500",
          "uvIndex": "8",
          "visibility": "5",
          "visibilityMiles": "3",
          "weatherCode": "176",
          "weatherDesc": [
            {
              "value": "Patchy rain nearby"
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0009_light_rain_showers.png"
            }
          ],
          "winddir16Point": "SSE",
          "winddirDegree": "156",
          "windspeedKmph": "14",
          "windspeedMiles": "9"
        },
        {
          "DewPointC": "26",
          "DewPointF": "78",
          "FeelsLikeC": "35",
          "FeelsLikeF": "96",
          "HeatIndexC": "35",
          "HeatIndexF": "96",
          "WindChillC": "29",
          "WindChillF": "85",
          "WindGustKmph": "15",
          "WindGustMiles": "9",
          "chanceoffog": "2",
          "chanceoffrost": "0",
          "chanceofhightemp": "99",
          "chanceofovercast": "74",
          "chanceofrain": "19",
          "chanceofremdry": "82",
          "chanceofsnow": "0",
          "chanceofsunshine": "5",
          "chanceofthunder": "26",
          "chanceofwindy": "1",
          "cloudcover": "72",
          "diffRad": "157.9",
          "humidity": "80",
          "precipInches": "0.0",
          "precipMM": "0.0",
          "pressure": "1018",
          "pressureInches": "30",
          "shortRad": "513.6",
          "tempC": "29",
          "tempF": "85",
          "time": "1800",
          "uvIndex": "1",
          "visibility": "9",
          "visibilityMiles": "5",
          "weatherCode": "176",
          "weatherDesc": [
            {
              "value": "Patchy rain nearby"
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0009_light_rain_showers.png"
            }
          ],
          "winddir16Point": "SE",
          "winddirDegree": "143",
          "windspeedKmph": "12",
          "windspeedMiles": "7"
        },
        {
          "DewPointC": "24",
          "DewPointF": "76",
          "FeelsLikeC": "31",
          "FeelsLikeF": "87",
          "HeatIndexC": "31",
          "HeatIndexF": "87",
          "WindChillC": "27",
          "WindChillF": "80",
          "WindGustKmph": "21",
          "WindGustMiles": "13",
          "chanceoffog": "0",
          "chanceoffrost": "0",
          "chanceofhightemp": "93",
          "chanceofovercast": "0",
          "chanceofrain": "12",
          "chanceofremdry": "78",
          "chanceofsnow": "0",
          "chanceofsunshine": "98",
          "chanceofthunder": "0",
          "chanceofwindy": "1",
          "cloudcover": "0",
          "diffRad": "0.1",
          "humidity": "87",
          "precipInches": "0.0",
          "precipMM": "0.0",
          "pressure": "1019",
          "pressureInches": "30",
          "shortRad": "0.2",
          "tempC": "27",
          "tempF": "80",
          "time": "2100",
          "uvIndex": "0",
          "visibility": "10",
          "visibilityMiles": "6",
          "weatherCode": "113",
          "weatherDesc": [
            {
              "value": "Clear "
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
            }
          ],
          "winddir16Point": "SE",
          "winddirDegree": "125",
          "windspeedKmph": "15",
          "windspeedMiles": "10"
        }
      ],
      "maxtempC": "35",
      "maxtempF": "95",
      "mintempC": "24",
      "mintempF": "76",
      "sunHour": "14.0",
      "totalSnow_cm": "0.0",
      "uvIndex": "11"
    },
    {
      "astronomy": [
        {
          "moon_illumination": "10",
          "moon_phase": "Waning Crescent",
          "moonrise": "04:15 AM",
          "moonset": "06:50 PM",
          "sunrise": "06:52 AM",
          "sunset": "08:09 PM"
        }
      ],
      "avgtempC": "30",
      "avgtempF": "85",
      "date": "2026-08-10",
      "hourly": [
        {
          "DewPointC": "24",
          "DewPointF": "75",
          "FeelsLikeC": "29",
          "FeelsLikeF": "84",
          "HeatIndexC": "29",
          "HeatIndexF": "84",
          "WindChillC": "26",
          "WindChillF": "78",
          "WindGustKmph": "18",
          "WindGustMiles": "11",
          "chanceoffog": "0",
          "chanceoffrost": "0",
          "chanceofhightemp": "89",
          "chanceofovercast": "0",
          "chanceofrain": "13",
          "chanceofremdry": "76",
          "chanceofsnow": "0",
          "chanceofsunshine": "98",
          "chanceofthunder": "0",
          "chanceofwindy": "1",
          "cloudcover": "1",
          "diffRad": "0.0",
          "humidity": "91",
          "precipInches": "0.0",
          "precipMM": "0.0",
          "pressure": "1020",
          "pressureInches": "30",
          "shortRad": "0.0",
          "tempC": "26",
          "tempF": "78",
          "time": "0",
          "uvIndex": "0",
          "visibility": "10",
          "visibilityMiles": "6",
          "weatherCode": "113",
          "weatherDesc": [
            {
              "value": "Clear "
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
            }
          ],
          "winddir16Point": "SE",
          "winddirDegree": "134",
          "windspeedKmph": "12",
          "windspeedMiles": "7"
        },
        {
          "DewPointC": "24",
          "DewPointF": "75",
          "FeelsLikeC": "30",
          "FeelsLikeF": "85",
          "HeatIndexC": "30",
          "HeatIndexF": "85",
          "WindChillC": "26",
          "WindChillF": "79",
          "WindGustKmph": "14",
          "WindGustMiles": "9",
          "chanceoffog": "0",
          "chanceoffrost": "0",
          "chanceofhightemp": "91",
          "chanceofovercast": "3",
          "chanceofrain": "12",
          "chanceofremdry": "77",
          "chanceofsnow": "0",
          "chanceofsunshine": "90",
          "chanceofthunder": "0",
          "chanceofwindy": "1",
          "cloudcover": "13",
          "diffRad": "0.0",
          "humidity": "86",
          "precipInches": "0.0",
          "precipMM": "0.0",
          "pressure": "1020",
          "pressureInches": "30",
          "shortRad": "0.0",
          "tempC": "26",
          "tempF": "79",
          "time": "300",
          "uvIndex": "0",
          "visibility": "10",
          "visibilityMiles": "6",
          "weatherCode": "113",
          "weatherDesc": [
            {
              "value": "Clear "
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
            }
          ],
          "winddir16Point": "SSE",
          "winddirDegree": "149",
          "windspeedKmph": "9",
          "windspeedMiles": "6"
        },
        {
          "DewPointC": "24",
          "DewPointF": "74",
          "FeelsLikeC": "28",
          "FeelsLikeF": "83",
          "HeatIndexC": "28",
          "HeatIndexF": "83",
          "WindChillC": "25",
          "WindChillF": "78",
          "WindGustKmph": "11",
          "WindGustMiles": "7",
          "chanceoffog": "0",
          "chanceoffrost": "0",
          "chanceofhightemp": "91",
          "chanceofovercast": "6",
          "chanceofrain": "15",
          "chanceofremdry": "75",
          "chanceofsnow": "0",
          "chanceofsunshine": "71",
          "chanceofthunder": "0",
          "chanceofwindy": "1",
          "cloudcover": "25",
          "diffRad": "0.0",
          "humidity": "89",
          "precipInches": "0.0",
          "precipMM": "0.0",
          "pressure": "1020",
          "pressureInches": "30",
          "shortRad": "0.0",
          "tempC": "25",
          "tempF": "78",
          "time": "600",
          "uvIndex": "0",
          "visibility": "10",
          "visibilityMiles": "6",
          "weatherCode": "116",
          "weatherDesc": [
            {
              "value": "Partly Cloudy "
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
            }
          ],
          "winddir16Point": "SE",
          "winddirDegree": "140",
          "windspeedKmph": "7",
          "windspeedMiles": "4"
        },
        {
          "DewPointC": "24",
          "DewPointF": "75",
          "FeelsLikeC": "32",
          "FeelsLikeF": "89",
          "HeatIndexC": "32",
          "HeatIndexF": "89",
          "WindChillC": "28",
          "WindChillF": "82",
          "WindGustKmph": "11",
          "WindGustMiles": "7",
          "chanceoffog": "0",
          "chanceoffrost": "0",
          "chanceofhightemp": "95",
          "chanceofovercast": "1",
          "chanceofrain": "9",
          "chanceofremdry": "92",
          "chanceofsnow": "0",
          "chanceofsunshine": "96",
          "chanceofthunder": "0",
          "chanceofwindy": "1",
          "cloudcover": "6",
          "diffRad": "93.2",
          "humidity": "78",
          "precipInches": "0.0",
          "precipMM": "0.0",
          "pressure": "1021",
          "pressureInches": "30",
          "shortRad": "257.4",
          "tempC": "28",
          "tempF": "82",
          "time": "900",
          "uvIndex": "2",
          "visibility": "10",
          "visibilityMiles": "6",
          "weatherCode": "113",
          "weatherDesc": [
            {
              "value": "Sunny"
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
            }
          ],
          "winddir16Point": "SSE",
          "winddirDegree": "156",
          "windspeedKmph": "9",
          "windspeedMiles": "5"
        },
        {
          "DewPointC": "21",
          "DewPointF": "71",
          "FeelsLikeC": "36",
          "FeelsLikeF": "97",
          "HeatIndexC": "36",
          "HeatIndexF": "97",
          "WindChillC": "32",
          "WindChillF": "90",
          "WindGustKmph": "10",
          "WindGustMiles": "6",
          "chanceoffog": "0",
          "chanceoffrost": "0",
          "chanceofhightemp": "99",
          "chanceofovercast": "2",
          "chanceofrain": "3",
          "chanceofremdry": "97",
          "chanceofsnow": "0",
          "chanceofsunshine": "92",
          "chanceofthunder": "0",
          "chanceofwindy": "1",
          "cloudcover": "12",
          "diffRad": "210.8",
          "humidity": "52",
          "precipInches": "0.0",
          "precipMM": "0.0",
          "pressure": "1021",
          "pressureInches": "30",
          "shortRad": "505.4",
          "tempC": "32",
          "tempF": "90",
          "time": "1200",
          "uvIndex": "9",
          "visibility": "10",
          "visibilityMiles": "6",
          "weatherCode": "113",
          "weatherDesc": [
            {
              "value": "Sunny"
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
            }
          ],
          "winddir16Point": "S",
          "winddirDegree": "172",
          "windspeedKmph": "9",
          "windspeedMiles": "5"
        },
        {
          "DewPointC": "20",
          "DewPointF": "67",
          "FeelsLikeC": "38",
          "FeelsLikeF": "101",
          "HeatIndexC": "38",
          "HeatIndexF": "101",
          "WindChillC": "35",
          "WindChillF": "96",
          "WindGustKmph": "7",
          "WindGustMiles": "5",
          "chanceoffog": "0",
          "chanceoffrost": "0",
          "chanceofhightemp": "99",
          "chanceofovercast": "4",
          "chanceofrain": "2",
          "chanceofremdry": "98",
          "chanceofsnow": "0",
          "chanceofsunshine": "78",
          "chanceofthunder": "0",
          "chanceofwindy": "1",
          "cloudcover": "21",
          "diffRad": "292.4",
          "humidity": "40",
          "precipInches": "0.0",
          "precipMM": "0.0",
          "pressure": "1020",
          "pressureInches": "30",
          "shortRad": "872.2",
          "tempC": "35",
          "tempF": "96",
          "time": "1500",
          "uvIndex": "9",
          "visibility": "10",
          "visibilityMiles": "6",
          "weatherCode": "113",
          "weatherDesc": [
            {
              "value": "Sunny"
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
            }
          ],
          "winddir16Point": "S",
          "winddirDegree": "178",
          "windspeedKmph": "6",
          "windspeedMiles": "4"
        },
        {
          "DewPointC": "20",
          "DewPointF": "68",
          "FeelsLikeC": "38",
          "FeelsLikeF": "100",
          "HeatIndexC": "38",
          "HeatIndexF": "100",
          "WindChillC": "34",
          "WindChillF": "94",
          "WindGustKmph": "6",
          "WindGustMiles": "4",
          "chanceoffog": "0",
          "chanceoffrost": "0",
          "chanceofhightemp": "99",
          "chanceofovercast": "74",
          "chanceofrain": "17",
          "chanceofremdry": "83",
          "chanceofsnow": "0",
          "chanceofsunshine": "5",
          "chanceofthunder": "0",
          "chanceofwindy": "0",
          "cloudcover": "72",
          "diffRad": "203.4",
          "humidity": "44",
          "precipInches": "0.0",
          "precipMM": "0.1",
          "pressure": "1019",
          "pressureInches": "30",
          "shortRad": "612.2",
          "tempC": "34",
          "tempF": "94",
          "time": "1800",
          "uvIndex": "1",
          "visibility": "10",
          "visibilityMiles": "6",
          "weatherCode": "176",
          "weatherDesc": [
            {
              "value": "Patchy rain nearby"
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0009_light_rain_showers.png"
            }
          ],
          "winddir16Point": "SSE",
          "winddirDegree": "165",
          "windspeedKmph": "5",
          "windspeedMiles": "3"
        },
        {
          "DewPointC": "23",
          "DewPointF": "73",
          "FeelsLikeC": "33",
          "FeelsLikeF": "92",
          "HeatIndexC": "33",
          "HeatIndexF": "92",
          "WindChillC": "29",
          "WindChillF": "85",
          "WindGustKmph": "21",
          "WindGustMiles": "13",
          "chanceoffog": "0",
          "chanceoffrost": "0",
          "chanceofhightemp": "97",
          "chanceofovercast": "25",
          "chanceofrain": "9",
          "chanceofremdry": "91",
          "chanceofsnow": "0",
          "chanceofsunshine": "27",
          "chanceofthunder": "0",
          "chanceofwindy": "1",
          "cloudcover": "48",
          "diffRad": "0.1",
          "humidity": "69",
          "precipInches": "0.0",
          "precipMM": "0.0",
          "pressure": "1020",
          "pressureInches": "30",
          "shortRad": "0.2",
          "tempC": "29",
          "tempF": "85",
          "time": "2100",
          "uvIndex": "0",
          "visibility": "10",
          "visibilityMiles": "6",
          "weatherCode": "116",
          "weatherDesc": [
            {
              "value": "Partly Cloudy "
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
            }
          ],
          "winddir16Point": "SE",
          "winddirDegree": "130",
          "windspeedKmph": "14",
          "windspeedMiles": "9"
        }
      ],
      "maxtempC": "36",
      "maxtempF": "96",
      "mintempC": "25",
      "mintempF": "78",
      "sunHour": "13.0",
      "totalSnow_cm": "0.0",
      "uvIndex": "10"
    },
    {
      "astronomy": [
        {
          "moon_illumination": "4",
          "moon_phase": "Waning Crescent",
          "moonrise": "05:28 AM",
          "moonset": "07:37 PM",
          "sunrise": "06:53 AM",
          "sunset": "08:08 PM"
        }
      ],
      "avgtempC": "30",
      "avgtempF": "87",
      "date": "2026-08-11",
      "hourly": [
        {
          "DewPointC": "22",
          "DewPointF": "72",
          "FeelsLikeC": "31",
          "FeelsLikeF": "87",
          "HeatIndexC": "31",
          "HeatIndexF": "87",
          "WindChillC": "28",
          "WindChillF": "82",
          "WindGustKmph": "13",
          "WindGustMiles": "8",
          "chanceoffog": "0",
          "chanceoffrost": "0",
          "chanceofhightemp": "94",
          "chanceofovercast": "7",
          "chanceofrain": "7",
          "chanceofremdry": "93",
          "chanceofsnow": "0",
          "chanceofsunshine": "70",
          "chanceofthunder": "0",
          "chanceofwindy": "1",
          "cloudcover": "26",
          "diffRad": "0.0",
          "humidity": "70",
          "precipInches": "0.0",
          "precipMM": "0.0",
          "pressure": "1021",
          "pressureInches": "30",
          "shortRad": "0.0",
          "tempC": "28",
          "tempF": "82",
          "time": "0",
          "uvIndex": "0",
          "visibility": "10",
          "visibilityMiles": "6",
          "weatherCode": "116",
          "weatherDesc": [
            {
              "value": "Partly Cloudy "
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
            }
          ],
          "winddir16Point": "SSE",
          "winddirDegree": "152",
          "windspeedKmph": "8",
          "windspeedMiles": "5"
        },
        {
          "DewPointC": "22",
          "DewPointF": "72",
          "FeelsLikeC": "29",
          "FeelsLikeF": "85",
          "HeatIndexC": "29",
          "HeatIndexF": "85",
          "WindChillC": "27",
          "WindChillF": "80",
          "WindGustKmph": "16",
          "WindGustMiles": "10",
          "chanceoffog": "0",
          "chanceoffrost": "0",
          "chanceofhightemp": "90",
          "chanceofovercast": "1",
          "chanceofrain": "8",
          "chanceofremdry": "92",
          "chanceofsnow": "0",
          "chanceofsunshine": "95",
          "chanceofthunder": "0",
          "chanceofwindy": "1",
          "cloudcover": "7",
          "diffRad": "0.0",
          "humidity": "76",
          "precipInches": "0.0",
          "precipMM": "0.0",
          "pressure": "1019",
          "pressureInches": "30",
          "shortRad": "0.0",
          "tempC": "27",
          "tempF": "80",
          "time": "300",
          "uvIndex": "0",
          "visibility": "10",
          "visibilityMiles": "6",
          "weatherCode": "113",
          "weatherDesc": [
            {
              "value": "Clear "
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
            }
          ],
          "winddir16Point": "S",
          "winddirDegree": "185",
          "windspeedKmph": "10",
          "windspeedMiles": "6"
        },
        {
          "DewPointC": "22",
          "DewPointF": "72",
          "FeelsLikeC": "28",
          "FeelsLikeF": "83",
          "HeatIndexC": "28",
          "HeatIndexF": "83",
          "WindChillC": "26",
          "WindChillF": "79",
          "WindGustKmph": "11",
          "WindGustMiles": "7",
          "chanceoffog": "0",
          "chanceoffrost": "0",
          "chanceofhightemp": "89",
          "chanceofovercast": "2",
          "chanceofrain": "10",
          "chanceofremdry": "90",
          "chanceofsnow": "0",
          "chanceofsunshine": "94",
          "chanceofthunder": "0",
          "chanceofwindy": "1",
          "cloudcover": "9",
          "diffRad": "0.0",
          "humidity": "81",
          "precipInches": "0.0",
          "precipMM": "0.0",
          "pressure": "1020",
          "pressureInches": "30",
          "shortRad": "0.0",
          "tempC": "26",
          "tempF": "79",
          "time": "600",
          "uvIndex": "0",
          "visibility": "10",
          "visibilityMiles": "6",
          "weatherCode": "113",
          "weatherDesc": [
            {
              "value": "Clear "
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
            }
          ],
          "winddir16Point": "SSW",
          "winddirDegree": "193",
          "windspeedKmph": "6",
          "windspeedMiles": "4"
        },
        {
          "DewPointC": "22",
          "DewPointF": "71",
          "FeelsLikeC": "32",
          "FeelsLikeF": "89",
          "HeatIndexC": "32",
          "HeatIndexF": "89",
          "WindChillC": "29",
          "WindChillF": "83",
          "WindGustKmph": "6",
          "WindGustMiles": "4",
          "chanceoffog": "0",
          "chanceoffrost": "0",
          "chanceofhightemp": "95",
          "chanceofovercast": "2",
          "chanceofrain": "5",
          "chanceofremdry": "95",
          "chanceofsnow": "0",
          "chanceofsunshine": "94",
          "chanceofthunder": "0",
          "chanceofwindy": "0",
          "cloudcover": "10",
          "diffRad": "53.1",
          "humidity": "66",
          "precipInches": "0.0",
          "precipMM": "0.0",
          "pressure": "1021",
          "pressureInches": "30",
          "shortRad": "282.0",
          "tempC": "29",
          "tempF": "83",
          "time": "900",
          "uvIndex": "2",
          "visibility": "10",
          "visibilityMiles": "6",
          "weatherCode": "113",
          "weatherDesc": [
            {
              "value": "Sunny"
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
            }
          ],
          "winddir16Point": "SSW",
          "winddirDegree": "213",
          "windspeedKmph": "5",
          "windspeedMiles": "3"
        },
        {
          "DewPointC": "21",
          "DewPointF": "70",
          "FeelsLikeC": "38",
          "FeelsLikeF": "101",
          "HeatIndexC": "38",
          "HeatIndexF": "101",
          "WindChillC": "34",
          "WindChillF": "93",
          "WindGustKmph": "4",
          "WindGustMiles": "2",
          "chanceoffog": "0",
          "chanceoffrost": "0",
          "chanceofhightemp": "99",
          "chanceofovercast": "4",
          "chanceofrain": "2",
          "chanceofremdry": "98",
          "chanceofsnow": "0",
          "chanceofsunshine": "82",
          "chanceofthunder": "0",
          "chanceofwindy": "0",
          "cloudcover": "19",
          "diffRad": "68.6",
          "humidity": "46",
          "precipInches": "0.0",
          "precipMM": "0.0",
          "pressure": "1021",
          "pressureInches": "30",
          "shortRad": "578.2",
          "tempC": "34",
          "tempF": "93",
          "time": "1200",
          "uvIndex": "9",
          "visibility": "10",
          "visibilityMiles": "6",
          "weatherCode": "113",
          "weatherDesc": [
            {
              "value": "Sunny"
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
            }
          ],
          "winddir16Point": "W",
          "winddirDegree": "278",
          "windspeedKmph": "3",
          "windspeedMiles": "2"
        },
        {
          "DewPointC": "20",
          "DewPointF": "68",
          "FeelsLikeC": "40",
          "FeelsLikeF": "104",
          "HeatIndexC": "40",
          "HeatIndexF": "104",
          "WindChillC": "36",
          "WindChillF": "97",
          "WindGustKmph": "7",
          "WindGustMiles": "4",
          "chanceoffog": "0",
          "chanceoffrost": "0",
          "chanceofhightemp": "99",
          "chanceofovercast": "78",
          "chanceofrain": "17",
          "chanceofremdry": "83",
          "chanceofsnow": "0",
          "chanceofsunshine": "4",
          "chanceofthunder": "0",
          "chanceofwindy": "0",
          "cloudcover": "74",
          "diffRad": "273.2",
          "humidity": "39",
          "precipInches": "0.0",
          "precipMM": "0.1",
          "pressure": "1018",
          "pressureInches": "30",
          "shortRad": "839.4",
          "tempC": "36",
          "tempF": "97",
          "time": "1500",
          "uvIndex": "9",
          "visibility": "10",
          "visibilityMiles": "6",
          "weatherCode": "176",
          "weatherDesc": [
            {
              "value": "Patchy rain nearby"
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0009_light_rain_showers.png"
            }
          ],
          "winddir16Point": "SW",
          "winddirDegree": "235",
          "windspeedKmph": "6",
          "windspeedMiles": "4"
        },
        {
          "DewPointC": "21",
          "DewPointF": "70",
          "FeelsLikeC": "36",
          "FeelsLikeF": "97",
          "HeatIndexC": "36",
          "HeatIndexF": "97",
          "WindChillC": "32",
          "WindChillF": "90",
          "WindGustKmph": "8",
          "WindGustMiles": "5",
          "chanceoffog": "0",
          "chanceoffrost": "0",
          "chanceofhightemp": "99",
          "chanceofovercast": "70",
          "chanceofrain": "8",
          "chanceofremdry": "92",
          "chanceofsnow": "0",
          "chanceofsunshine": "5",
          "chanceofthunder": "0",
          "chanceofwindy": "1",
          "cloudcover": "70",
          "diffRad": "98.4",
          "humidity": "52",
          "precipInches": "0.0",
          "precipMM": "0.0",
          "pressure": "1017",
          "pressureInches": "30",
          "shortRad": "254.9",
          "tempC": "32",
          "tempF": "90",
          "time": "1800",
          "uvIndex": "1",
          "visibility": "10",
          "visibilityMiles": "6",
          "weatherCode": "176",
          "weatherDesc": [
            {
              "value": "Patchy rain nearby"
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0009_light_rain_showers.png"
            }
          ],
          "winddir16Point": "ENE",
          "winddirDegree": "57",
          "windspeedKmph": "5",
          "windspeedMiles": "3"
        },
        {
          "DewPointC": "21",
          "DewPointF": "70",
          "FeelsLikeC": "34",
          "FeelsLikeF": "93",
          "HeatIndexC": "34",
          "HeatIndexF": "93",
          "WindChillC": "31",
          "WindChillF": "87",
          "WindGustKmph": "10",
          "WindGustMiles": "6",
          "chanceoffog": "0",
          "chanceoffrost": "0",
          "chanceofhightemp": "98",
          "chanceofovercast": "11",
          "chanceofrain": "5",
          "chanceofremdry": "95",
          "chanceofsnow": "0",
          "chanceofsunshine": "52",
          "chanceofthunder": "0",
          "chanceofwindy": "1",
          "cloudcover": "35",
          "diffRad": "0.0",
          "humidity": "57",
          "precipInches": "0.0",
          "precipMM": "0.0",
          "pressure": "1018",
          "pressureInches": "30",
          "shortRad": "0.0",
          "tempC": "31",
          "tempF": "87",
          "time": "2100",
          "uvIndex": "0",
          "visibility": "10",
          "visibilityMiles": "6",
          "weatherCode": "116",
          "weatherDesc": [
            {
              "value": "Partly Cloudy "
            }
          ],
          "weatherIconUrl": [
            {
              "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
            }
          ],
          "winddir16Point": "SE",
          "winddirDegree": "141",
          "windspeedKmph": "7",
          "windspeedMiles": "4"
        }
      ],
      "maxtempC": "36",
      "maxtempF": "97",
      "mintempC": "26",
      "mintempF": "78",
      "sunHour": "13.0",
      "totalSnow_cm": "0.0",
      "uvIndex": "11"
    }
  ]
}
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

