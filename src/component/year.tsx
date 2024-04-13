import React from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale/ru';

interface Props {
  date: Date;
}

const YearComponent: React.FC<Props> = ({ date }) => {
  const formattedYear = format(date, 'yyyy', { locale: ru });

  return <span>{formattedYear}</span>;
};

export default YearComponent;