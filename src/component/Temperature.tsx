import { useAppSelector } from "../store/index";

const Temperature = () => {
    
  const temperature = useAppSelector(
    (state) => state.weather.data?.current.temp_c
  );

  return (
        <div className="weather-info-temp"> 
            {temperature} °C
        </div>
    );
};

export default Temperature;