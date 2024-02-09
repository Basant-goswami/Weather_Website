import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import "./search.css";
import { useState } from 'react';


export default function Search({ newWeather }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather"
    let API_KEY = "21ada272a8e4a111f085e959893e8b2f";

    let getWeather = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let responseJson = await response.json();
            // console.log(responseJson);
            let result = {
                city: responseJson.name,
                temp: responseJson.main.temp,
                tempMin: responseJson.main.temp_min,
                tempMax: responseJson.main.temp_max,
                pressure: responseJson.main.pressure,
                humidity: responseJson.main.humidity,
                visibility: responseJson.visibility,
                weather: responseJson.weather[0].description,
                icon: responseJson.weather[0].icon,
                windSpeed: responseJson.wind.speed,
                feelsLike: responseJson.main.feels_like
            }
            // console.log(result);
            return (result);
        } catch (err) {
            throw err;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setCity("");
            let info = await getWeather();
            newWeather(info);
        } catch (err) {
            setError(true);
        }

    }

    return (
        <>
            <form className='search' onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required />
                <br></br><br></br>
                <Button variant="outlined" type='Submit'>Search</Button>
            </form>
            {error && <p style={{color:"red"}}>No such place exists</p>}

        </>
    )
}