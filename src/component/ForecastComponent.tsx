import React from "react";
import DateComponent from "./DateComponent";
import IconComponent from "./WeatherInfo/IconComponent";
import TemperatureComponent from "./WeatherInfo/TemperatureIconComponent";

const ForecastComponent: React.FC = () => {
  return (
    <div className="forecast">
      <div className="weather-forecast-img">
        <IconComponent iconWeather={""} />
      </div>
      <div className="day-of-forecast">
        <DateComponent date={new Date()} />
      </div>
      <div className="weather-forecast-temp">
        <TemperatureComponent />
      </div>
    </div>
  );
};

export default ForecastComponent;
