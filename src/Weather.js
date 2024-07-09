import './Weather.css';
import { useEffect, useState } from "react";
import axios from "axios";
import WeatherItem from './WeatherItem';
import SearchWeather from './SearchWeather';

const Weather = () => {

    const [weatherData, setWeatherData] = useState([]);
    const [weatherDataFiltered, setWeatherDataFiltered] = useState([]);

    const getWeatherData = () => {
        axios.get('https://danepubliczne.imgw.pl/api/data/synop')
        .then(res=>{
            setWeatherData(res.data);
            setWeatherDataFiltered(res.data);
        });
    }

    const filterWeather = (searchValue) => {        
        const filterWeatherData = weatherData.filter(weatherItem => weatherItem.stacja.toLowerCase().startsWith(searchValue.toLowerCase()));
        
        setWeatherDataFiltered(filterWeatherData);
    }

    useEffect(()=>{
        getWeatherData();
    }, []);

    return(
        <div className="weather">
            <h1>Prognoza Pogody</h1>
            <SearchWeather filterWeather={filterWeather}/>
            <div className='weatherList'>
                {weatherDataFiltered.map((weatherItem) => {
                    return <WeatherItem weatherItem={weatherItem}  
                    key={weatherItem.id_stacji}/>
                })}
            </div>
        </div>
    )
}

export default Weather;