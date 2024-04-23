import React from "react";
import DaysOfWeek from "./Days";
import { days } from "../const/days";
import DateComponent from "./Date";
import YearComponent from "./Year";
import CityNameComponent from "./City";
import IconComponent from "./Icon";
import TemperatureComponent from "./Temperature";
import WeatherStateComponent from "./WeatherState";
import { useAppDispatch, useAppSelector } from "../store";
import { fetchImage } from "../store/ImageSlice";


const BackgroundImageComponent = () => {
    
    const dispatch = useAppDispatch();
    const image = useAppSelector(
        (state) => state.image.data?.urls.regular
    );
    console.log(image)

    return(
        <section className='weather-location-info' style={{ backgroundImage: `url(${dispatch(fetchImage(`${image}`))})`}}>
            <div className="location-info">
                    <DaysOfWeek days={days[0]}/>
                    <div className='date'>
                        <DateComponent date={new Date()} /> 
                        <YearComponent date={new Date()}/>
                    </div>
                    <CityNameComponent/>
                </div>
                <div className='weather-info-temp'>
                    <IconComponent />
                    <TemperatureComponent />
                    <WeatherStateComponent />
                </div>
        </section>
    )
}

export default BackgroundImageComponent;