import { useEffect, useState } from "react";
import { format } from 'date-fns';
import { ru } from 'date-fns/locale/ru';

export const DaysOfWeek = () => {
    const [dayOfWeek, setDayOfWeek] = useState(0);
    const days = [ 'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    
    useEffect(() => {
        const currentDate = new Date();
        setDayOfWeek(currentDate.getDay());
    }, [])

    return(
        <div>
            {days[dayOfWeek]}
        </div>
    )
}