import React, { ChangeEvent, useState } from 'react';
import Input  from '@mui/material/Input';
 

const InputComponent = () => {
  const [searchingCityName, setSearchingCityName] = useState('Almaty');
  const setCity = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchingCityName(e.target.value);
};
  return (
    <div>
      <Input autoFocus={true} color='primary' className='city-name' type="text" onChange={setCity} />
    </div>
  )
}

export default InputComponent; 

