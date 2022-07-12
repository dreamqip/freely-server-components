import {FC} from 'react';
import MoviesList from "../MoviesList/MoviesList";
import {useAppSelector} from "../../hooks/redux";
import {useGetRecommendedMoviesQuery} from "../../services/themoviedb";

const Recommended: FC = () => {
    const {id} = useAppSelector(state => state.movie)
    const {data} = useGetRecommendedMoviesQuery(id)

    return (
        <div>
            <MoviesList movies={data} title={'Recommended'}/>
        </div>
    );
};

export default Recommended;
