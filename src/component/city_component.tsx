import { ChangeEvent, useEffect, useState } from "react";
import axios from 'axios';


export const City_name = () => {
    const [searchingCityName, setSearchingCityName] = useState('Almaty');
    const [nameCity, setNameCity] = useState('');

    const setCity = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchingCityName(e.target.value);
    };



    function displayCityName () {
        axios.get(`http://api.weatherapi.com/v1/forecast.json?key=9659b8bde68442708fc152410240404&q=${searchingCityName}&days=4&aqi=no&alerts=no&lang=ru`)
            .then((res) => {
                const { data } = res;
                setNameCity(data.location.name);
            })
            .catch((error) => {
                console.error(`Error getting weather data:${error}`);
            })
        }

    useEffect(() => {
        displayCityName();
    }, [])

    return (
<div>{nameCity}</div>
    )
}