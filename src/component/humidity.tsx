import React from 'react';

interface Props {
    humidityPercent: string;
}

const HumidityComponent: React.FC<Props> = ({ humidityPercent }) => {
    return (
        <div className='wind-speed'>
            <h4 className="wind-name">
                Влажность
            </h4>
            <h4 className="wind-speed">
                {humidityPercent} %
            </h4>
        </div>
    );
};

export default HumidityComponent;
