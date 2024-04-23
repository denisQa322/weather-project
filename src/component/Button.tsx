import React from 'react';
import Button from '@mui/material/Button';
import Location from '../icons/Location.svg';
import { fetchWeatherData } from '../store/WeatherSlice';
import { useAppDispatch, useAppSelector } from '../store';
import { setCity } from '../store/CitySlice';


const ButtonComponent = () => {

    const dispatch = useAppDispatch();
    const city = useAppSelector((state) => state.city.city);

    const handleFetchWeather = () => {
        if (city.trim() !== ""){
            dispatch(fetchWeatherData(city));
        }
        setCity("");
    }

    return (
        <Button size='large' className='set-city btn' onClick={handleFetchWeather}>
            <img src={Location} alt="" />
            Choose city
        </Button>
    )
};

export default ButtonComponent; 

