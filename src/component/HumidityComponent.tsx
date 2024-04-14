import React from 'react';

interface Props {
    humidityPercent: string
}
const HumidityPercentComponent: React.FC<Props> = ({ humidityPercent }) => {
    return (
        <div className='humidity'>
            <h4 className='humidity-name'>
                Влажность
            </h4>
            <h4 className='humidity-percent'>
                {humidityPercent}%
            </h4>
        </div>
    )
}

export default HumidityPercentComponent;