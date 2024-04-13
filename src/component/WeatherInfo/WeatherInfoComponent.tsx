import axios from "axios";
import { IconComponent } from "./IconComponent";
import { TemparatureComponent } from "./TemperatureIconComponent";
import { StateComponent } from "./StateComponent";

export function WeatherInfoComponent () {

    return (
        <div className='weather-info-temp'>
            <IconComponent />
            <TemparatureComponent />
            <StateComponent />
        </div>
    )
}