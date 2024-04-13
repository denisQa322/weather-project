import axios from "axios";
import React, { useEffect, useState } from "react"

export function TemparatureComponent () {
    
    const [Temperature, setTemperature] = useState('');
    
    function getIcon(){
        axios.get('http://api.weatherapi.com/v1/forecast.json?key=9659b8bde68442708fc152410240404&q=Almaty&days=4&aqi=no&alerts=no&lang=ru')
            .then((res) => {
                const { data } = res;
                setTemperature(data.current.temp_c);
            })
            .catch((error) => {
                console.error(`Error getting weather data:${error}`);
            });
    }

    useEffect(() => {
        getIcon();
    })

    return (
        <div className='weather-info-temp'>
            {Temperature} °C
        </div>
    )
}