import React from "react";

interface Props {
    temperature: string;
}

const TemperatureComponent: React.FC<Props> = ({temperature}) => {

    return (
        <div className='weather-info-temp'>
            {temperature} °C
        </div>
    )
}

export default TemperatureComponent;
