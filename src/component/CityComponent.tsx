import Location from '../icons/Location.svg'

interface Props{
    nameCity: string;
}


const CityNameComponent: React.FC<Props> = ({ nameCity }) => {
    
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

export default CityNameComponent;