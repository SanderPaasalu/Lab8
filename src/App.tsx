import "./App.css";
import React, {useState, useEffect} from "react";
import DateTime from "./DateTime";

interface WeatherData {
    list: []
}

interface WeatherProps {
    weather: DateTime[];
}

function App() {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [weather, setWeather] = useState<WeatherData>();
    const WeatherInfo: React.FC<WeatherProps> = ({weather}) => {
        return (
            <div>
                {weather.map(datetime => {
                    return <div>
                        <table>
                            <tbody>
                            <tr>
                                <td>Temp :{datetime.main.temp}</td>
                                <td>Feels Like:{datetime.main.feels_like}</td>
                                <td>Humitidy: {datetime.main.humidity}</td>
                                <td>When: {datetime.dt_txt}</td>
                                <td>Visibility: {datetime.visibility}</td>
                                <td>Weather: {datetime.weather[0].main}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                })}
            </div>
        )
    }

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
                    .then((response) => response.json())
                    .then((data) => setWeather(data));
            },
            () => alert("You need to allow us to access your location")
        );
    }, []);
    //.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
    console.log(weather)
    return (
        <div className="App">
            <h1>OpenweatherAPI</h1>
            <p>
                {weather ? (
                    <WeatherInfo weather={weather.list}/>
                ) : (
                    <p>Loading...</p>
                )}
            </p>
        </div>
    );
}

export default App;