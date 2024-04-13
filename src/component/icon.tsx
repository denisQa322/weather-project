import React from 'react';

interface Props {
    weatherIcon: string;
}

const WeatherIconComponent: React.FC<Props> = ({ weatherIcon }) => {
    return (
        <div className='weather-info-icon'>
            <img src={weatherIcon} alt="" />
        </div>
    );
};

export default WeatherIconComponent;