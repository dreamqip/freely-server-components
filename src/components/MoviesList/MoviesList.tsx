import type {FC} from 'react';
import {IMovies} from "../../types/movies";
import MovieCard from "./MovieCard";
import {Empty} from "antd";
import {swiperOptions} from "../../utilities/swiperConfig";
import {IMovie} from "../../types/movie";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css/navigation';
import "swiper/css/free-mode";

interface MoviesListProps {
    movies: IMovies;
    title: string;
}

const MoviesList: FC<MoviesListProps> = ({movies, title}) => {

    if (movies && movies.results.length == 0) return <Empty description="No recommendations"/>

    return (
        <div className="py-10">
            <h2 className="text-center dark:text-white font-bold text-3xl md:text-6xl">{title}</h2>
            <Swiper
                {...swiperOptions}
            >
                {movies && movies.results.map((movie: IMovie) => {
                    return (
                        <SwiperSlide key={movie.id}>
                            <MovieCard movie={movie}></MovieCard>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
};

export default MoviesList;
