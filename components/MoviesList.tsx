import type {FC} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import {FreeMode, Scrollbar} from "swiper";
import {IMovies} from "../types/IMovies";
import MovieCard from "./MovieCard";

interface MoviesListProps {
    movies: IMovies;
    title: string;
}

const MoviesList: FC<MoviesListProps> = ({movies, title}) => {
    return (
        <div className="py-10">
            <h2 className="text-center dark:text-white font-bold text-6xl">{title}</h2>
            <div className="h-auto">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={{
                        sticky: true,
                        enabled: true
                    }}
                    scrollbar={{
                        draggable: true,
                    }}
                    modules={[FreeMode, Scrollbar]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        }
                    }}
                    className="mySwiper"
                >
                    {movies.results.map((movie) => {
                        return (
                            <SwiperSlide className="mb-10" key={movie.id}>
                                <MovieCard movie={movie}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default MoviesList;
