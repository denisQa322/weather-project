import React from 'react';

interface Props {
    weatherState: string;
}

const WeatherStateComponent: React.FC<Props> = ({ weatherState }) => {
    return (
        <div className='weather-info-state'>
            {weatherState}
        </div>
    );
};

export default WeatherStateComponent;