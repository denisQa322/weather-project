import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

export function WeatherComponent() {

    const [cityTemperature,setCityTemperature] = useState('')
    const [cityName,setCityName] = useState('')
    const [nameCity, setNameCity] = useState('')
    const [weatherIcon,setWeatherIcon] = useState('')
    const [weatherState,setWeatherState] = useState('')
    const [precipitationAmounts, setPrecipitationsAmounts] = useState('')
    const [humidityPercent, setHumidityPercent] = useState('')
    const [windSpeed,setWindSpeed] = useState('')
    const [formattedDate, setFormattedDate] = useState('')
    const [dayOfWeek, setDayOfWeek] = useState(0)

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const setCity = (e: ChangeEvent<HTMLInputElement>) =>{
        setCityName(e.target.value)
    }

    useEffect(() => {
        const currentDate = new Date();
        setFormattedDate(format(currentDate, 'dd MMM yyyy'));
        setDayOfWeek(currentDate.getDay())
    })


    function getWeather(){
        axios.get(`http://api.weatherapi.com/v1/current.json?key=9659b8bde68442708fc152410240404&q=${cityName}&aqi=no`).then((res) =>{
            const { data } = res
            setCityTemperature(data.current.temp_c)
            setNameCity(data.location.name)
            setWeatherIcon(data.current.condition.icon)
            setWeatherState(data.current.condition.text)
            setPrecipitationsAmounts(data.current.precip_mm)
            setHumidityPercent(data.current.humidity)
            setWindSpeed(data.current.wind_kph)
        })
        .catch((error) => {
            console.error(`Error getting weather data:${error}`)
        })
      }

  return (
      <div className="weather-main">
        <div className='weather-location-info'>
            <div className="location-info">
                <h1 className='location-info-weekday'>
                    {days[dayOfWeek]}
                </h1>
                <h3 className='location-info-date'>
                    {formattedDate}
                </h3>
                <div className='location-info-city'>
                    <div className='location-info-city-icon'>
                    <img src="" alt="" />
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
                    {cityTemperature}
                </div>
                <div className='wather-info-state'>
                    {weatherState}
                </div>
            </div>
        </div>
        <div className='weather-forecast-info'>
            <div className='date-info'>
                <div className='precipitation'>
                    Осадки (мм): {precipitationAmounts}
                </div>
                <div className='humidity'>
                    Влажность {humidityPercent} %
                </div>
                <div className='wind-speed'>
                    Ветер {windSpeed} км/ч
                </div>
            </div>
            <div className='weather-forecast'>
                
            </div>
            <div className='choose-city'>
                <div className='choose-city-icon'>
                    <img src="" alt="" />
                </div>
                <input className='city-name' type="text" onChange={setCity}/>
                <button className='set-city btn' onClick={getWeather}>Choose city</button><br/>
            </div>
        </div>
    </div>
  );
}