import React, { useEffect } from 'react';
import '../styles/weather.css'
import PrecipitationComponent from './WeatherInfo/Precipitation';
import HumidityPercentComponent from './WeatherInfo/Humidity';
import WindSpeedComponent from './WeatherInfo/WindSpeed';
import ButtonComponent from './Button';
import InputComponent from './Input';
import BackgroundImageComponent from './BackgroundImage';
import { useAppDispatch, useAppSelector } from '../store';
import { fetchWeatherData } from '../store/WeatherSlice';
import Loading from './States/Loading';
import Error from './States/Error';
import Cloud from './WeatherInfo/Cloud';
import Visibility from './WeatherInfo/Visibility';
import Gusts from './WeatherInfo/Gusts';
import WindDirection from './WeatherInfo/WindDirection';
import Pressure from './WeatherInfo/Pressure';
import WindDegree from './WeatherInfo/WindDegree';

export function WeatherComponent() {

    const dispatch = useAppDispatch();
    const { status } = useAppSelector((state) => state.weather);
    const city = useAppSelector((state) => state.city.city);

    useEffect(() => {
        dispatch(fetchWeatherData(city));
    }, [dispatch])
    
    if (status === "loading") return <>
        <Loading/>
    </>;
    if(status === "failed") return <>
        <Error/>
    </>;

    return (
        <div className="weather-main">
            <BackgroundImageComponent />
            <div className='weather-forecast-info'>
                <div className='date-info'>
                    <PrecipitationComponent />
                    <HumidityPercentComponent />
                    <WindSpeedComponent />
                    <Cloud />
                    <Visibility />
                    <Gusts />
                    <WindDirection />
                    <Pressure />
                    <WindDegree />
                </div>
                <div className='choose-city'>
                    <InputComponent />
                    <ButtonComponent />
                </div>
            </div>
        </div>
    );
}