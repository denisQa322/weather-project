import { useAppSelector } from "../../store";

const Visibility = () => {

    const visibility = useAppSelector(
        (state) => state.weather.data?.current.vis_km
    );

    return (
        <div className='cloud'>
            <h4 className="visibility-name">
                Видимость
            </h4>
            <h4 className="visibility-km">
                {visibility} км
            </h4>
        </div>
    )
}

export default Visibility;