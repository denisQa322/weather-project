import { useAppSelector } from "../store";
import Location from '../icons/Location.svg';

const CityName = () => {

    const nameCity = useAppSelector(
        (state) => state.weather.data?.location.name
    );
    
    return (
        <div className='location-info-city'>
            <div className='location-info-city-icon'>
                <img src={Location} alt="" />
            </div>
            <div className='location-info-city-name'>
                {nameCity}
            </div>
        </div>
    )
}

export default CityName;