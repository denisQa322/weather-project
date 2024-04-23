
import React from "react";

interface Props{
    days: string
}



const DaysOfWeek: React.FC<Props> = ({days}) => {

    return (
        <h1 className='location-info-weekday'>
            {days}
        </h1>
    )
}

export default DaysOfWeek;