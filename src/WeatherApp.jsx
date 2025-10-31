import { useState } from "react";
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 26.05,
    humidity: 69,
    temp: 26.05,
    tempMax: 26.05,
    tempMin: 26.05,
    weather: "smoke"
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by Delta</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
