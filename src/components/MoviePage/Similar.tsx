import {FC} from 'react';
import MoviesList from "../MovieCarousel/MoviesList";
import {useAppSelector} from "@/hooks/redux";
import {useGetSimilarMoviesQuery} from "@/services/themoviedb";

const Similar: FC = () => {
    const {id} = useAppSelector(state => state.movie)
    const {data: similar} = useGetSimilarMoviesQuery(id)

    return (
        <div>
            <MoviesList movies={similar} title={'Similar'}/>
        </div>
    );
};

export default Similar;
