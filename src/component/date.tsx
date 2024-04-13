import React from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale/ru';

interface Props {
  date: Date;
}

const DateComponent: React.FC<Props> = ({ date }) => {
  const formattedDate = format(date, 'dd MMM', { locale: ru });

  return <span>{formattedDate}</span>;
};

export default DateComponent;