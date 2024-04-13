import React from 'react';

interface Props {
    precipitation: string
}
const PrecipitationComponent: React.FC<Props> = ({ precipitation }) => {
    return (
        <div className='precipitation'>
            <h4 className="precipitation-name">
                Осадки
            </h4>
            <h4 className='precipitation-amount'>
                {precipitation} мм
            </h4>
        </div>
    )
}

export default PrecipitationComponent;