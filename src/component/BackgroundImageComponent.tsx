import React, {FC} from "react";
import DaysOfWeek from "./DaysComponent";
import { days } from "../const/days";
import DateComponent from "./DateComponent";
import YearComponent from "./YearComponent";
import CityNameComponent from "./CityComponent";
import IconComponent from "./WeatherInfo/IconComponent";
import TemperatureComponent from "./WeatherInfo/TemperatureIconComponent";
import WeatherStateComponent from "./WeatherInfo/WeatherStateComponent";

interface ImageProps {
    image: string;
}

const BackgroundImageComponent: React.FC<ImageProps> = ({image}) => {

    let dayOfWeek = 0;
    let nameCity = '';
    let icon = '';
    let temperature = '';
    let state = '';

    return(
        <div className='weather-location-info' style={{ backgroundImage: `url(${image})`}}>
            <div className="location-info">
                    <DaysOfWeek days={days[dayOfWeek]}/>
                    <div className='date'>
                        <DateComponent date={new Date()} /> 
                        <YearComponent date={new Date()}/>
                    </div>
                    <CityNameComponent nameCity={nameCity}/>
                </div>
                <div className='weather-info-temp'>
                    <IconComponent iconWeather={icon} />
                    <TemperatureComponent temperature={temperature} />
                    <WeatherStateComponent weatherState={state} />
                </div>
        </div>
    )
}

export default BackgroundImageComponent;