import { useState } from "react";
import PrintWeather from "./PrintWeather";
import Search from "./Search";
import "./WeatherInfo.css"

export default function WeatherInfo() {
    let [weatherinfo, setweatherinfo] = useState({
        city: "Default",
        humidity: 87,
        pressure: 1022,
        temp: 11.05,
        tempMax: 13.95,
        tempMin: 11.05,
        visibility: 800,
        weather: "fog",
        icon: "13d",
        windSpeed: 2,
        feelsLike: 10.3
    })

    let newWeather = (info) => {
        setweatherinfo(info);
    }
    return (
        <>
            <div className="abc">

                <Search newWeather={newWeather} />
                <br></br>
                <PrintWeather info={weatherinfo} />
            </div>
        </>
    )
}