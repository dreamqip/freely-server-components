import {FC} from 'react';
import ShowCard from "@/components/ShowCarousel/ShowCard";
import {useAppSelector} from "@/hooks/redux";
import {IMovie} from "@/types/movie";

const MoviesList: FC = () => {
    const {movies} = useAppSelector(state => state.popularMovies);

    return (
        <>
            {movies && movies.length > 0 && (
                <div className="mt-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {movies.map((show: IMovie) => {
                            return <ShowCard key={show.id} show={show}/>
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default MoviesList;
