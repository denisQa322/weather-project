import React from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale/ru';

interface Props {
    date: Date;
}

const Year: React.FC<Props> = ({ date }) => {
    const formattedYear = format(date, 'yyyy', { locale: ru });

    return (
    <h3 className='location-info-year'>
        {formattedYear}
    </h3>)
};

export default Year;