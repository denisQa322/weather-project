import React from "react";
import DaysOfWeek from "./DaysComponent";
import { days } from "../const/days";
import DateComponent from "./DateComponent";
import YearComponent from "./YearComponent";
import CityNameComponent from "./CityComponent";
import IconComponent from "./WeatherInfo/IconComponent";
import TemperatureComponent from "./WeatherInfo/TemperatureComponent";
import WeatherStateComponent from "./WeatherInfo/WeatherStateComponent";

interface ImageProps {
    image: string;
}

const BackgroundImageComponent: React.FC<ImageProps> = ({image}) => {

    return(
        <div className='weather-location-info' style={{ backgroundImage: `url(${image})`}}>
            <div className="location-info">
                    <DaysOfWeek days={days[0]}/>
                    <div className='date'>
                        <DateComponent date={new Date()} /> 
                        <YearComponent date={new Date()}/>
                    </div>
                    <CityNameComponent nameCity={''}/>
                </div>
                <div className='weather-info-temp'>
                    <IconComponent />
                    <TemperatureComponent />
                    <WeatherStateComponent />
                </div>
        </div>
    )
}

export default BackgroundImageComponent;