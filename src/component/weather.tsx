import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale/ru';
import './weather.css'
import Location from '../icons/Location.svg'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

type WeatherInfoType = {
    icon: string
    temperature: string
    state: string
    day: string
}

export function WeatherComponent() {

    const accessKey = 'VdJQ2R5B_GLGwCPr2bH1P-hsN0LKERRokHqmqa7n5AQ'

    const [cityTemperature, setCityTemperature] = useState('')
    const [cityName, setCityName] = useState('Almaty')
    const [nameCity, setNameCity] = useState('')
    const [weatherIcon, setWeatherIcon] = useState('')
    const [weatherState, setWeatherState] = useState('')
    const [precipitationAmounts, setPrecipitationsAmounts] = useState('')
    const [humidityPercent, setHumidityPercent] = useState('')
    const [windSpeed, setWindSpeed] = useState('')
    const [formattedDate, setFormattedDate] = useState('')
    const [dayOfWeek, setDayOfWeek] = useState(0)
    const [cityImage, setCityimage] = useState('')
    const [forecast,setForecast] = useState('')

    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    const setCity = (e: ChangeEvent<HTMLInputElement>) => {
        setCityName(e.target.value)
    }

    useEffect(() => {
        getWeather();
        getImage();
        const currentDate = new Date();
        setFormattedDate(format(currentDate, 'dd MMM yyyy', {locale: ru}));
        setDayOfWeek(currentDate.getDay())
    }, [])


    function getWeather() {
        axios.get(`http://api.weatherapi.com/v1/forecast.json?key=9659b8bde68442708fc152410240404&q=${cityName}&days=4&aqi=no&alerts=no&lang=ru`)
        .then((res) => {
            const { data } = res
            setCityTemperature(data.current.temp_c)
            setNameCity(data.location.name)
            setWeatherIcon(data.current.condition.icon)
            setWeatherState(data.current.condition.text)
            setPrecipitationsAmounts(data.current.precip_mm)
            setHumidityPercent(data.current.humidity)
            setWindSpeed(data.current.wind_kph)
            setForecast(data.forecast.forecastday)
        })
        .catch((error) => {
            console.error(`Error getting weather data:${error}`)
        });
    }

    function getImage(){
        axios.get(`https://api.unsplash.com/photos/random?query=${cityName}&orientation=landscape&client_id=${accessKey}`).then((res) => {
            const { data } = res
            setCityimage(data.urls.regular)
        })
        .catch((error) => {
            console.error(`Error getting image of city:${error}`)
        });
    }

    return (
        <div className="weather-main">
            <div className='weather-location-info' style={{backgroundImage:`url(${cityImage})`, backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
                <div className="location-info">
                    <h1 className='location-info-weekday'>
                        {days[dayOfWeek]}
                    </h1>
                    <h3 className='location-info-date'>
                        {formattedDate}
                    </h3>
                    <div className='location-info-city'>
                        <div className='location-info-city-icon'>
                            <img src={Location} alt="" />
                        </div>
                        <div className='location-info-city-name'>
                            {nameCity}
                        </div>
                    </div>
                </div>
                <div className='weather-info'>
                    <div className='weather-info-icon'>
                        <img src={weatherIcon} alt="" />
                    </div>
                    <div className='weather-info-temp'>
                        {cityTemperature} °C
                    </div>
                    <div className='weather-info-state'>
                        {weatherState}
                    </div>
                </div>
            </div>
            <div className='weather-forecast-info'>
                <div className='date-info'>
                    <div className='precipitation'>
                        <h4 className="precipitation-name">
                            Осадки
                        </h4>
                        <h4 className='precipitation-amount'>
                            {precipitationAmounts} мм
                        </h4>
                    </div>
                    <div className='humidity'>
                        <h4 className='humidity-name'>
                            Влажность
                        </h4>
                        <h4 className='humidity-percent'>
                            {humidityPercent}%
                        </h4>
                    </div>
                    <div className='wind-speed'>
                        <h4 className="wind-name">
                            Ветер
                        </h4>
                        <h4 className="wind-speed">
                            {windSpeed} км/ч
                        </h4>
                    </div>
                </div>
                <div className='weather-forecast'>
                    <div className='weather-forecast-img'>
                        <img src="" alt="" />
                    </div>
                    <div className='day-of-week'>

                    </div>
                    <div className='weather-forecast-temp'>

                    </div>
                    <div className='weather-forecast-state'>

                    </div>
                </div>
                <div className='choose-city'>
                    <Input autoFocus={true} color='primary' className='city-name' type="text" onChange={setCity} />
                    <Button size='large' className='set-city btn' onClick={() => {getWeather(); getImage()}}>
                        <img src={Location} alt="" />
                        Choose city
                    </Button>
                    
                </div>
            </div>
        </div>
    );
}