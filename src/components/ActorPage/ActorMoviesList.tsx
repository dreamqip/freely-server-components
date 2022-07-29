import type {FC} from 'react';
import ActorMovieCard from "./ActorMovieCard";
import {IMovie} from "@/types/movie";
import {sortActorMoviesByPopularity} from "@/utilities/sortActorMoviesByPopularity";
import {swiperOptions} from "@/utilities/swiperConfig";
import {Swiper, SwiperSlide} from "swiper/react";
import {memo, useMemo} from "react";

interface MoviesListProps {
    movies: IMovie[];
    title: string;
}

const ActorMoviesList: FC<MoviesListProps> = ({movies, title}) => {

    const arrayToSort = useMemo(() => ([...movies]), [movies]);

    const sortedArray = useMemo(() => (arrayToSort.sort(sortActorMoviesByPopularity)), [arrayToSort])

    return (
        <div className="py-10">
            <h2 className="text-center dark:text-white font-bold text-3xl md:text-6xl">{title}</h2>
            <Swiper
                className="p-4"
                {...swiperOptions}
            >
                {sortedArray && sortedArray.map((movie: any) => {
                    return (
                        <SwiperSlide key={movie.credit_id}>
                            <ActorMovieCard show={movie}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
};

export default memo(ActorMoviesList);
