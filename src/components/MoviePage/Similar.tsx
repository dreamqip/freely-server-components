import {FC} from 'react';
import {useAppSelector} from "@/hooks/redux";
import {useGetSimilarMoviesQuery} from "@/services/themoviedb";
import ShowCarousel from "@/components/ShowCarousel/ShowCarousel";

const Similar: FC = () => {
    const {id} = useAppSelector(state => state.movie)
    const {data: similar} = useGetSimilarMoviesQuery(id)

    return (
        <div>
            <ShowCarousel series={similar} title={'Similar'}/>
        </div>
    );
};

export default Similar;
