import {FC, memo} from 'react';
import {useAppSelector} from "@/hooks/redux";
import {Empty} from "antd";
import {IMovie} from "@/types/movie";
import MovieCard from "../MovieCarousel/MovieCard";
import Spinner from "../Spinner";

interface Props {
    loading: boolean;
    refetching: boolean;
    error: boolean;
}

const SearchResults: FC<Props> = ({loading, refetching, error}) => {
    const {results: data} = useAppSelector(state => state.search)

    if (error) return <div>An error occurred!</div>

    if (data?.total_results === 0) return <Empty className="mt-6" description="No results"/>

    if (refetching) return <Spinner/>

    return (
        <div>
            {data && (
            <div className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {data.results.map((movie: IMovie) => {
                        return <MovieCard key={movie.id} movie={movie}/>
                    })}
                </div>
            </div>
            )}
        </div>
    );
};

export default memo(SearchResults);
