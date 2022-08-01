import {FC} from 'react';
import {useAppSelector} from "@/hooks/redux";
import ShowCarousel from "../ShowCarousel/ShowCarousel";

const Recommended: FC = () => {
    const {recommendations} = useAppSelector(state => state.series)

    return (
        <div>
            <ShowCarousel series={recommendations} title={'Recommended'}/>
        </div>
    );
};

export default Recommended;
