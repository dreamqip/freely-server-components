import type {MixedShow} from "@/types/search";
import type {ITvShows} from "@/types/series";
import type {IMovies} from "@/types/movies";
import {FC, Suspense} from 'react';
import {Empty} from "antd";
import {SwiperSlide} from 'swiper/react';
import ShowCard from "./ShowCard";

import dynamic from "next/dynamic";

const Swiper = dynamic(() => import('./SwiperLazy'), {
    suspense: true
});

interface Props {
    series: IMovies | ITvShows;
    title: string;
}

const ShowCarousel: FC<Props> = ({series, title}) => {

    if (series && series.results.length == 0) return <Empty description="Sorry, but we got nothing"/>

    return (
        <div className="py-10 relative">
            <h2 className="text-center dark:text-white font-bold text-3xl md:text-6xl">{title}</h2>
            <Suspense fallback={<div className="flex items-center justify-center text-4xl">Loading...</div>}>
                <Swiper>
                    {series && series.results.map((show: MixedShow) => {
                        return (
                            <SwiperSlide key={show.id}>
                                <ShowCard show={show}></ShowCard>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Suspense>
        </div>
    );
};

export default ShowCarousel;
