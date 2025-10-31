import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "c4a595e15889dbd175a496e722a9f34f";

  const [city, setCity] = useState("");

  // Fetch weather data
  const getWeatherInfo = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {
        throw new Error(jsonResponse.message || "City not found");
      }

      const result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      return result;
    } catch (error) {
      console.error("Error fetching weather:", error);
      alert("❌ Could not fetch weather details. Please check the city name or try again.");
      return null;
    }
  };

  

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      if (!city.trim()) {
        alert("Please enter a city name first!");
        return;
      }

      console.log("Fetching weather for:", city);

      const newInfo = await getWeatherInfo();

      if (newInfo) {
        updateInfo(newInfo);
        setCity("");
      } else {
        console.warn("No data received from getWeatherInfo()");
      }

    } catch (error) {
      console.error("Error during submission:", error);
      alert("⚠️ Something went wrong while processing your request.");
    }
  };

  return (
    <div className="search-box">
      
      <form onSubmit={handleSubmit}>
        <TextField
          id="City"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br><br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        <br></br>
      </form>
    </div>
  );

}