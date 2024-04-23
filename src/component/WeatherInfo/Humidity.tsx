import { useAppSelector } from "../../store";


const HumidityPercent= () => {

    const humidityPercent = useAppSelector(
        (state) => state.weather.data?.current.humidity
    );
    
    return (
        <div className='humidity'>
            <h4 className='humidity-name'>
                Влажность
            </h4>
            <h4 className='humidity-percent'>
                {humidityPercent}%
            </h4>
        </div>
    )
}

export default HumidityPercent;