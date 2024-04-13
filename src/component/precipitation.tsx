import React from 'react';

interface Props {
  amount: string;
}

const PrecipitationComponent: React.FC<Props> = ({ amount }) => {
  return (
    <div className='precipitation'>
      <h4 className="precipitation-name">
        Осадки
      </h4>
      <h4 className='precipitation-amount'>
        {amount} мм
      </h4>
    </div>
  );
};

export default PrecipitationComponent;