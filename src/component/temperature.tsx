import React from 'react';

interface Props {
    cityTemperature: string;
}

const TempComponent: React.FC<Props> = ({ cityTemperature }) => {
    return (
        <div className='weather-info-temp'>
            {cityTemperature} °C
        </div>
    );
};

export default TempComponent;
