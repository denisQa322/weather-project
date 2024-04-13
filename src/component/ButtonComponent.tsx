import React from 'react';
import Button from '@mui/material/Button';
import Location from '../icons/Location.svg';

interface Props {
    onClick: () => void;
}

const ButtonComponent: React.FC<Props> = ({ onClick }) => {
    return (
        <Button size='large' className='set-city btn' onClick={onClick}>
            <img src={Location} alt="" />
            Choose city
        </Button>
    )
};

export default ButtonComponent; 