import { useAppSelector } from "../../store";

const Gusts = () => {

    const gusts = useAppSelector(
        (state) => state.weather.data?.current.gust_kph
    );

    return (
        <div className='gusts'>
            <h4 className="gusts-name">
                Порывы
            </h4>
            <h4 className="gusts-km">
                {gusts} км/ч
            </h4>
        </div>
    )
}

export default Gusts;