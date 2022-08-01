import {FC} from 'react';
import CastList from "../CastCarousel/CastList";
import {useAppSelector} from "@/hooks/redux";

const Cast: FC = () => {
    const {cast} = useAppSelector(state => state.series)

    return (
        <div>
            <CastList credits={cast} title={'Cast'}/>
        </div>
    );
};

export default Cast;
