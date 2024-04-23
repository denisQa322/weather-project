import { useAppSelector } from "../store";

const WeatherState = () => {

    const weatherState = useAppSelector(
        (state) => state.weather.data?.current.condition.text
    );

    return (

        <div className='weather-info-temp'>
            {weatherState}
        </div>
    )
}

export default WeatherState;