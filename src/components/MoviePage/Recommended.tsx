import {FC} from 'react';
import {useAppSelector} from "@/hooks/redux";
import {useGetRecommendedMoviesQuery} from "@/services/themoviedb";
import ShowCarousel from "../ShowCarousel/ShowCarousel";

const Recommended: FC = () => {
    const {id} = useAppSelector(state => state.movie)
    const {data} = useGetRecommendedMoviesQuery(id)

    return (
        <div>
            <ShowCarousel series={data} title={'Recommended'}/>
        </div>
    );
};

export default Recommended;
