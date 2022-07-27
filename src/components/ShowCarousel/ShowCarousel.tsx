import type {FC} from 'react';
import {IMovies} from "@/types/movies";
import {Empty} from "antd";
import {swiperOptions} from "@/utilities/swiperConfig";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css/navigation';
import "swiper/css/free-mode";
import ShowCard from "./ShowCard";
import {MixedShow} from "@/types/search";
import {ITvShows} from "@/types/series";

interface Props {
    series: IMovies | ITvShows;
    title: string;
}

const ShowCarousel: FC<Props> = ({series, title}) => {

    if (series && series.results.length == 0) return <Empty description="Sorry, but we got nothing"/>

    return (
        <div className="py-10 relative">
            <h2 className="text-center dark:text-white font-bold text-3xl md:text-6xl">{title}</h2>
            {series && (
                <Swiper
                    {...swiperOptions}
                    className="p-4"
                >
                    {series.results.map((show: MixedShow) => {
                        return (
                            <SwiperSlide key={show.id}>
                                <ShowCard show={show}></ShowCard>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            )}
        </div>
    );
};

export default ShowCarousel;
