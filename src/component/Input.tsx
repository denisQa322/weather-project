import React, { ChangeEvent } from 'react';
import Input  from '@mui/material/Input';
import { useAppDispatch } from '../store';
import { setCity } from '../store/CitySlice';

const InputComponent = () => {
  
  const dispatch = useAppDispatch();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCity(e.target.value))
};

  return (
    <div>
      <Input autoFocus={true} color='primary' className='city-name' type="text" onChange={changeHandler} />
    </div>
  )
}

export default InputComponent;