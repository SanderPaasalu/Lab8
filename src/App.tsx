import "./App.css";
import React, { useState, useEffect } from "react";
function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
          setLongitude(position.coords.longitude);
          setLatitude(position.coords.latitude);
          const url =
              "https://api.openweathermap.org/data/2.5/forecast?lat=" +
              position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=" +
              process.env.REACT_APP_API_KEY;
          fetch(url)
              .then((response) => response.text())
              .then((data) => setWeather(data));
        },
        () => alert("You need to allow us to access your location")
    );
  }, []);
  return (
      <div className="App">
          <h1>OpenweatherAPI</h1>
        <p>Weather info: {weather}</p>
      </div>
  );
}

export default App;