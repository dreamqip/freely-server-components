import {FC} from 'react';
import MoviesList from "../MoviesList/MoviesList";
import {useFetch} from "../../hooks/useFetch";
import {useAppSelector} from "../../hooks/redux";
import {useGetMovieCreditsQuery, useGetSimilarMoviesQuery} from "../../services/themoviedb";

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
