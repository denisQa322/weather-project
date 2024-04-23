import { useAppSelector } from "../../store";

const Pressure = () => {

    const Pressure = useAppSelector(
        (state) => state.weather.data?.current.pressure_mb
    );

    return (
        <div className='pressure'>
            <h4 className="pressure-name">
                Давление
            </h4>
            <h4 className="pressure-hpa">
                {Pressure} мбар
            </h4>
        </div>
    )
}

export default Pressure;