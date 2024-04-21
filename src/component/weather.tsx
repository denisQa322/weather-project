import axios from "axios";
import { format } from "date-fns";
import { ru } from "date-fns/locale/ru";
import { ChangeEvent, useEffect, useState } from "react";
import { useAppSelector } from "../Redux";
import { WeatherResponse } from "../Redux/weather";
import { days } from "../const";
import ButtonComponent from "./ButtonComponent";
import CityNameComponent from "./CityComponent";
import DateComponent from "./DateComponent";
import DaysOfWeek from "./DaysComponent";
import ForecastComponent from "./ForecastComponent";
import HumidityPercentComponent from "./HumidityComponent";
import InputComponent from "./InputComponent";
import PrecipitationComponent from "./PrecipitationComponent";
import IconComponent from "./WeatherInfo/IconComponent";
import TemperatureComponent from "./WeatherInfo/TemperatureIconComponent";
import WeatherStateComponent from "./WeatherInfo/WeatherStateComponent";
import WindSpeedComponent from "./WindComponent";
import YearComponent from "./YearComponent";
import "./weather.css";
// TODO: import through aliases(tsconfig.json)
//*TODO 1. Разделить weather на маленькие компоненты СДЕЛАНО
//*TODO 2. Маленькие компоненты должны быть структруированы и должны иметь свои props СДЕЛАНО
//*TODO 3. Подключить redux глобально СДЕЛАНО
//*TODO 4. Реализовать асинхронные action
//*TODO 5. Избавиться от useState
//*TODO 6. Подключить состояние загрузки и возможных ошибок

export function WeatherComponent() {
  const { data, status } = useAppSelector((state) => state.weather);
  const accessKey = "ojgE7Knz82OleO9XiOgQ6NjFKuhxBidN_0lUVIIsxoA";

  //setting current weather for the city
  const [searchingCityName, setSearchingCityName] = useState("Almaty");
  const [nameCity, setNameCity] = useState("");
  const [precipitationAmounts, setPrecipitationsAmounts] = useState("");
  const [humidityPercent, setHumidityPercent] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [cityImage, setCityimage] = useState("");
  const [Temperature, setTemperature] = useState("");
  const [State, setState] = useState("");
  const [Icon, setIcon] = useState("");

  //setting weather forecast image
  const [forecastImgOne, setForecastImgOne] = useState("");
  const [forecastImgTwo, setForecastImgTwo] = useState("");
  const [forecastImgThree, setForecastImgThree] = useState("");
  const [forecastImgFour, setForecastImgFour] = useState("");

  //setting weather forecast temperature
  const [forecastTempOne, setForecastTempOne] = useState("");
  const [forecastTempTwo, setForecastTempTwo] = useState("");
  const [forecastTempThree, setForecastTempThree] = useState("");
  const [forecastTempFour, setForecastTempFour] = useState("");

  //setting weather forecast date
  const [dayOne, setForecastDayOne] = useState("");
  const [dayTwo, setForecastDayTwo] = useState("");
  const [dayThree, setForecastDayThree] = useState("");
  const [dayFour, setForecastDayFour] = useState("");

  //setting date
  const [formattedDate, setFormattedDate] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState(0);

  const setCity = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchingCityName(e.target.value);

  useEffect(() => {
    getWeather();
    getImage();
    const currentDate = new Date();
    setFormattedDate(format(currentDate, "dd MMM yyyy", { locale: ru }));
    setDayOfWeek(currentDate.getDay());
  }, []);

  function getWeather() {
    //отрефакторить и помещать данные в store оттуда получать все необходимые данные
    axios
      .get<WeatherResponse>(
        `http://api.weatherapi.com/v1/forecast.json?key=9659b8bde68442708fc152410240404&q=${searchingCityName}&days=3&aqi=no&alerts=no&lang=ru`
      )
      .then(({ data }) => {
        // dispatch(setWeather(data));
        //setting current weather day
        setNameCity(data.location.name);
        setPrecipitationsAmounts(String(data.current.precip_mm));
        setHumidityPercent(String(data.current.humidity));
        setWindSpeed(String(data.current.wind_kph));
        setTemperature(String(data.current.temp_c));
        setState(data.current.condition.text);
        setIcon(data.current.condition.icon);

        //Average weather icon for forecast
        // setForecastImgOne(data.forecast.forecastday[0].day.condition.icon);
        // setForecastImgTwo(data.forecast.forecastday[1].day.condition.icon);
        // setForecastImgThree(data.forecast.forecastday[2].day.condition.icon);
        // setForecastImgFour(data.forecast.forecastday[3].day.condition.icon);

        // //Average weather temo for forecast
        // setForecastTempOne(data.forecast.forecastday[0].day.avgtemp_c);
        // setForecastTempTwo(data.forecast.forecastday[1].day.avgtemp_c);
        // setForecastTempThree(data.forecast.forecastday[2].day.avgtemp_c);
        // setForecastTempFour(data.forecast.forecastday[3].day.avgtemp_c);

        //Day-date
        // setForecastDayOne(
        //   format(data.forecast.forecastday[0].date, "dd MMM", { locale: ru })
        // );
        // setForecastDayTwo(
        //   format(data.forecast.forecastday[1].date, "dd MMM", { locale: ru })
        // );
        // setForecastDayThree(
        //   format(data.forecast.forecastday[2].date, "dd MMM", { locale: ru })
        // );
        // setForecastDayFour(
        //   format(data.forecast.forecastday[3].date, "dd MMM", { locale: ru })
        // );
      })
      .catch((error) => {
        console.error(`Error getting weather data:${error}`);
      });
  }

  function getImage() {
    //отрефакторить и поместить в store
    axios
      .get(
        `https://api.unsplash.com/photos/random?query=${searchingCityName}&orientation=landscape&client_id=${accessKey}`
      )
      .then((res) => {
        const { data } = res;
        setCityimage(data.urls.regular);
      })
      .catch((error) => {
        console.error(`Error getting image of city:${error}`);
      });
  }

  //Добавить состояние загрузки и возможные ошибки

  if (status === "loading") return <>Loading...</>;

  return (
    <div className="weather-main">
      <div
        className="weather-location-info"
        style={{
          backgroundImage: `url(${cityImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="location-info">
          <DaysOfWeek days={days[dayOfWeek]} />
          <div className="date">
            <DateComponent date={new Date()} />{" "}
            <YearComponent date={new Date()} />
          </div>
          <CityNameComponent nameCity={nameCity} />
        </div>
        <div className="weather-info-temp">
          <IconComponent iconWeather={Icon} />
          <TemperatureComponent />
          <WeatherStateComponent weatherState={State} />
        </div>
      </div>
      <div className="weather-forecast-info">
        <div className="date-info">
          <PrecipitationComponent precipitation={precipitationAmounts} />
          <HumidityPercentComponent humidityPercent={humidityPercent} />
          <WindSpeedComponent windSpeed={windSpeed} />
        </div>
        <div className="weather-forecast">
          <ForecastComponent />
        </div>
        <div className="choose-city">
          <InputComponent onChange={setCity} />
          <ButtonComponent
            onClick={() => {
              getWeather();
              getImage();
            }}
          />
        </div>
      </div>
    </div>
  );
}
