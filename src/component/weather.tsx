import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/weather.css'
import PrecipitationComponent from './PrecipitationComponent';
import HumidityPercentComponent from './HumidityComponent';
import WindSpeedComponent from './WindComponent';
import ButtonComponent from './ButtonComponent';
import InputComponent from './InputComponent';
import BackgroundImageComponent from './BackgroundImageComponent';
import TemperatureComponent from './WeatherInfo/TemperatureComponent';
import { useAppSelector } from '../store';


//*TODO 1. Разделить weather на маленькие компоненты СДЕЛАНО
//*TODO 2. Маленькие компоненты должны быть структруированы и должны иметь свои props СДЕЛАНО
//*TODO 3. Подключить redux глобально СДЕЛАНО
//*TODO 4. Реализовать асинхронные action
//*TODO 5. Избавиться от useState
//*TODO 6. Подключить состояние загрузки и возможных ошибок


export function WeatherComponent() {

    //setting current weather for the city
    
    const { data, status } = useAppSelector((state) => state.weather);
    const [city, SetCity] = useState('Almaty');
    const [cityImage, setCityimage] = useState('');

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        SetCity(e.target.value);
    };

    useEffect(() => {
        getWeather();
        getImage();
    }, [])


    function getWeather() {

        //отрефакторить и помещать данные в store оттуда получать все необходимые данные
        axios.get(
            `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&aqi=no
        `)
        .then((res) => {
                const { data } = res;
                console.log(data);
            })
            .catch((error) => {
                console.error(`Error getting weather data:${error}`);
            });
    }

    function getImage() {
        //отрефакторить и поместить в store
        axios.get(`https://api.unsplash.com/photos/random?query=${city}&orientation=landscape&client_id=${process.env.REACT_APP_IMAGE_API_KEY}`).then((res) => {
            const { data } = res
            setCityimage(data.urls.regular);
        })
            .catch((error) => {
                console.error(`Error getting image of city:${error}`);
            });
    }

    //Добавить состояние загрузки и возможные ошибки

    if (status === "loading") return <>Loading...</>;
    if(status === 'failed') return <>Error...</>;

    return (
        <div className="weather-main">
            <BackgroundImageComponent image={cityImage}/>
            <div className='weather-forecast-info'>
                <div className='date-info'>
                    <PrecipitationComponent />
                    <HumidityPercentComponent />
                    <WindSpeedComponent />
                    <TemperatureComponent />
                </div>
                <div className='choose-city'>
                    <InputComponent onChange={changeHandler}/>
                    <ButtonComponent onClick={() => {getWeather(); getImage()}}/>
                </div>
            </div>
        </div>
    );

}