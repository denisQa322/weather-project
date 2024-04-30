import React, { useEffect } from "react";
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
    const city = useAppSelector((state) => state.city.city);
    const image = useAppSelector((state) => state.image);
    console.log(useAppSelector((state) => state))
    
    useEffect(() => {
        dispatch(fetchImage(city)); 
      }, [dispatch, city]);

    return(
        <section className='weather-location-info' style={{ backgroundImage: `url(${image})})`}}>
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