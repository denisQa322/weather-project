import { useAppSelector } from "../../store";

const WindDegree = () => {

    const windDegree = useAppSelector(
        (state) => state.weather.data?.current.wind_degree
    );

    return (
        <div className='wind-degree'>
            <h4 className="wind-degree-name">
                Угол ветра
            </h4>
            <h4 className="wind-degree-deg">
                {windDegree} градусов
            </h4>
        </div>
    )
}

export default WindDegree;