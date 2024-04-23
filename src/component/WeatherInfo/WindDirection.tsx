import { useAppSelector } from "../../store";

const WindDirection = () => {

    const windDirection = useAppSelector(
        (state) => state.weather.data?.current.vis_km
    );

    return (
        <div className='wind-direction'>
            <h4 className="wind-direction-name">
                Направление ветра
            </h4>
            <h4 className="wind-direction-deg">
                {windDirection}
            </h4>
        </div>
    )
}

export default WindDirection;