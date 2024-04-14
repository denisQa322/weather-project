import React from "react";
import IconComponent from "./WeatherInfo/IconComponent";
import DateComponent from "./DateComponent";
import TemperatureComponent from "./WeatherInfo/TemperatureIconComponent";


const ForecastComponent: React.FC = () => {


    return (
        <div className='forecast'>
            <div className='weather-forecast-img'>
                <IconComponent iconWeather={''}/>
            </div>
            <div className='day-of-forecast'>
                <DateComponent date={new Date()}/>
            </div>
            <div className='weather-forecast-temp'>
                <TemperatureComponent temperature={''} />
            </div>
        </div>
    )
}

export default ForecastComponent;