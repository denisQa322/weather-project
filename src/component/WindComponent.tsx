import { useAppSelector } from "../store";

const WindSpeedComponent= () => {

    const windSpeed = useAppSelector(
        (state) => state.weather.data?.current.wind_kph
    );

    return (
        <div className='wind-speed'>
            <h4 className="wind-name">
                Ветер
            </h4>
            <h4 className="wind-speed">
                {windSpeed} км/ч
            </h4>
        </div>
    )
}

export default WindSpeedComponent;