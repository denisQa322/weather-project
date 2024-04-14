import React from 'react';

interface Props {
    windSpeed: string
}
const WindSpeedComponent: React.FC<Props> = ({ windSpeed }) => {
    return (
        <div className='wind-speed'>
            <h4 className="wind-name">
                Ветер
            </h4>
            <h4 className="wind-speed">
                {windSpeed} км/ч
            </h4>
        </div>
    )
}

export default WindSpeedComponent;