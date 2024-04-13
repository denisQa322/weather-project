import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale/ru';
import './weather.css'
import Location from '../icons/Location.svg'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import IconComponent from './WeatherInfo/IconComponent';
import TemperatureComponent from './WeatherInfo/TemperatureIconComponent';
import WeatherStateComponent from './WeatherInfo/WeatherStateComponent';
import CityNameComponent from './CityComponent';
import DaysOfWeek from './DaysComponent';
import DateComponent from './DateComponent';
import PrecipitationComponent from './PrecipitationComponent';
import HumidityPercentComponent from './HumidityComponent';
import WindSpeedComponent from './WindComponent';
import ButtonComponent from './ButtonComponent';
import InputComponent from './InputComponent';


//*TODO 1. Разделить weather на маленькие компоненты 
//*TODO 2. Маленькие компоненты должны быть структруированы и должны иметь свои props 
//*TODO 3. Подключить redux глобально
//*TODO 4. Реализовать асинхронные action
//*TODO 5. Избавиться от useState
//*TODO 6. Подключить состояние загрузки и возможных ошибок


export function WeatherComponent() {

    const accessKey = 'ojgE7Knz82OleO9XiOgQ6NjFKuhxBidN_0lUVIIsxoA'

    //setting current weather for the city
    const [searchingCityName, setSearchingCityName] = useState('Almaty');
    const [nameCity, setNameCity] = useState('');
    const [precipitationAmounts, setPrecipitationsAmounts] = useState('');
    const [humidityPercent, setHumidityPercent] = useState('');
    const [windSpeed, setWindSpeed] = useState('');
    const [cityImage, setCityimage] = useState('');
    const [Temperature, setTemperature] = useState('');
    const [State, setState] = useState('');
    const [Icon, setIcon] = useState('');

    //setting weather forecast image
    const [forecastImgOne, setForecastImgOne] = useState('');
    const [forecastImgTwo, setForecastImgTwo] = useState('');
    const [forecastImgThree, setForecastImgThree] = useState('');
    const [forecastImgFour, setForecastImgFour] = useState('');

    //setting weather forecast temperature
    const [forecastTempOne, setForecastTempOne] = useState('');
    const [forecastTempTwo, setForecastTempTwo] = useState('');
    const [forecastTempThree, setForecastTempThree] = useState('');
    const [forecastTempFour, setForecastTempFour] = useState('');

    //setting weather forecast date
    const [dayOne, setForecastDayOne] = useState('');
    const [dayTwo, setForecastDayTwo] = useState('');
    const [dayThree, setForecastDayThree] = useState('');
    const [dayFour, setForecastDayFour] = useState('');

    //setting date
    const [formattedDate, setFormattedDate] = useState('');
    const [dayOfWeek, setDayOfWeek] = useState(0);
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    const setCity = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchingCityName(e.target.value);
    };

    useEffect(() => {
        getWeather();
        getImage();
        const currentDate = new Date();
        setFormattedDate(format(currentDate, 'dd MMM yyyy', { locale: ru }));
        setDayOfWeek(currentDate.getDay());
    }, [])


    function getWeather() {

        //отрефакторить и помещать данные в store оттуда получать все необходимые данные
        axios.get(`http://api.weatherapi.com/v1/forecast.json?key=9659b8bde68442708fc152410240404&q=${searchingCityName}&days=4&aqi=no&alerts=no&lang=ru`)
            .then((res) => {
                const { data } = res;

                //setting current weather day
                setNameCity(data.location.name);
                setPrecipitationsAmounts(data.current.precip_mm);
                setHumidityPercent(data.current.humidity);
                setWindSpeed(data.current.wind_kph);
                setTemperature(data.current.temp_c);
                setState(data.current.condition.text);
                setIcon(data.current.condition.icon);
                

                //Average weather icon for forecast
                setForecastImgOne(data.forecast.forecastday[0].day.condition.icon);
                setForecastImgTwo(data.forecast.forecastday[1].day.condition.icon);
                setForecastImgThree(data.forecast.forecastday[2].day.condition.icon);
                setForecastImgFour(data.forecast.forecastday[3].day.condition.icon);

                //Average weather temo for forecast
                setForecastTempOne(data.forecast.forecastday[0].day.avgtemp_c);
                setForecastTempTwo(data.forecast.forecastday[1].day.avgtemp_c);
                setForecastTempThree(data.forecast.forecastday[2].day.avgtemp_c);
                setForecastTempFour(data.forecast.forecastday[3].day.avgtemp_c);

                //Day-date
                setForecastDayOne(format(data.forecast.forecastday[0].date, 'dd MMM', { locale: ru }));
                setForecastDayTwo(format(data.forecast.forecastday[1].date, 'dd MMM', { locale: ru }));
                setForecastDayThree(format(data.forecast.forecastday[2].date, 'dd MMM', { locale: ru }));
                setForecastDayFour(format(data.forecast.forecastday[3].date, 'dd MMM', { locale: ru }));
            })
            .catch((error) => {
                console.error(`Error getting weather data:${error}`);
            });
    }

    function getImage() {
        //отрефакторить и поместить в store
        axios.get(`https://api.unsplash.com/photos/random?query=${searchingCityName}&orientation=landscape&client_id=${accessKey}`).then((res) => {
            const { data } = res
            setCityimage(data.urls.regular);
        })
            .catch((error) => {
                console.error(`Error getting image of city:${error}`);
            });
    }

    //Добавить состояние загрузки и возможные ошибки

    return (
        <div className="weather-main">
            <div className='weather-location-info' style={{ backgroundImage: `url(${cityImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <div className="location-info">
                    <DaysOfWeek days={days[dayOfWeek]}/>
                    <DateComponent date={new Date()} />
                    <CityNameComponent nameCity={nameCity}/>
                </div>
                <div className='weather-info-temp'>
                    <IconComponent iconWeather={Icon} />
                    <TemperatureComponent temperature={Temperature} />
                    <WeatherStateComponent weatherState={State} />
                </div>
            </div>
            <div className='weather-forecast-info'>
                <div className='date-info'>
                    <PrecipitationComponent precipitation={precipitationAmounts}/>
                    <HumidityPercentComponent humidityPercent={humidityPercent}/>
                    <WindSpeedComponent windSpeed={windSpeed}/>
                </div>
                <div className='weather-forecast'>
                    <div className='forecast-1'>
                        <div className='weather-forecast-img'>
                            <img src={forecastImgOne} alt="" />
                        </div>
                        <div className='day-of-forecast'>
                            {dayOne}
                        </div>
                        <div className='weather-forecast-temp'>
                            {forecastTempOne}°C
                        </div>
                    </div>
                    <div className='forecast-2'>
                        <div className='weather-forecast-img'>
                            <img src={forecastImgTwo} alt="" />
                        </div>
                        <div className='day-of-week'>
                            {dayTwo}
                        </div>
                        <div className='weather-forecast-temp'>
                            {forecastTempTwo}°C
                        </div>
                    </div>
                    <div className='forecast-3'>
                        <div className='weather-forecast-img'>
                            <img src={forecastImgThree} alt="" />
                        </div>
                        <div className='day-of-week'>
                            {dayThree}
                        </div>
                        <div className='weather-forecast-temp'>
                            {forecastTempThree}°C
                        </div>
                    </div>
                    <div className='forecast-4'>
                        <div className='weather-forecast-img'>
                            <img src={forecastImgFour} alt="" />
                        </div>
                        <div className='day-of-week'>
                            {dayFour}
                        </div>
                        <div className='weather-forecast-temp'>
                            {forecastTempFour}°C
                        </div>
                    </div>
                </div>
                <div className='choose-city'>
                    <InputComponent onChange={setCity}/>
                    <ButtonComponent onClick={() => {getWeather(); getImage();}}/>
                </div>
            </div>
        </div>
    );
}