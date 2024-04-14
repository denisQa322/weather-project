import React from "react";

interface Props{
    iconWeather: string;
}

const IconComponent:React.FC<Props> = ({iconWeather}) => {
    
    return (
        <div className="weather-info-icon">
            <img src={iconWeather} alt="" />
        </div>
    )
}

export default IconComponent;