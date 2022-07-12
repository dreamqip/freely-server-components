import type {FC} from 'react';
import ActorMovieCard from "./ActorMovieCard";
import {IMovie} from "../../types/movie";
import {sortActorMoviesByPopularity} from "../../utilities/sortActorMoviesByPopularity";
import {swiperOptions} from "../../utilities/swiperConfig";
import {Swiper, SwiperSlide} from "swiper/react";
import {useMemo} from "react";

interface MoviesListProps {
    movies: IMovie[];
    title: string;
}

const ActorMoviesList: FC<MoviesListProps> = ({movies, title}) => {

    const arrayToSort = [...movies]

    const sortedArray = useMemo(() => {
        return arrayToSort.sort(sortActorMoviesByPopularity)
    }, [movies])

    return (
        <div className="py-10">
            <h2 className="text-center dark:text-white font-bold text-3xl md:text-6xl">{title}</h2>
            <Swiper
                {...swiperOptions}
            >
                {sortedArray && sortedArray.map((movie) => {
                    return (
                        <SwiperSlide key={movie.credit_id}>
                            <ActorMovieCard movie={movie}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
};

export default ActorMoviesList;
