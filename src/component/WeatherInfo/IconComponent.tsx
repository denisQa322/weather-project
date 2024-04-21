import { useAppSelector } from "../../store";

const IconComponent = () => {
    
    const icon = useAppSelector(
        (state) => state.weather.data?.current.condition.icon
    );

    return (
        <div className="weather-info-icon">
            <img src={icon} alt="" />
        </div>
    );
};

export default IconComponent;