import { useAppSelector } from "../../store";

const Cloud = () => {

    const Cloud = useAppSelector(
        (state) => state.weather.data?.current.cloud
    );

    return (
        <div className='cloud'>
            <h4 className="cloud-name">
                Облака
            </h4>
            <h4 className="cloud-percent">
                {Cloud} %
            </h4>
        </div>
    )
}

export default Cloud;