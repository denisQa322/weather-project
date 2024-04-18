import React, { ChangeEvent } from 'react';
import Input  from '@mui/material/Input';
 
interface Props {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: React.FC<Props> = ({ onChange }) => {
  return (
    <div>
      <Input autoFocus={true} color='primary' className='city-name' type="text" onChange={onChange} />
    </div>
  )
}

export default InputComponent; 