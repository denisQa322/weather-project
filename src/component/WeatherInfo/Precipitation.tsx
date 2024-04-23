import { useAppSelector } from "../../store";

const Precipitation = () => {
    const precipitation = useAppSelector(
        (state) => state.weather.data?.current.precip_mm
    );

    return (
        <div className='precipitation'>
            <h4 className='precipitation-name'>
                Осадки
            </h4>
            <h4 className='precipitation-mm'>
                {precipitation} мм
            </h4>
        </div>
    )
}

export default Precipitation;