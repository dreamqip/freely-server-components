import type {FC} from 'react';
import CastCard from "./CastCard";
import {ICredits} from "../../types/credits";
import {ICast} from "../../types/cast";
import {swiperOptions} from "../../utilities/swiperConfig";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css/navigation';
import "swiper/css/free-mode";

interface MoviesListProps {
    credits: ICredits;
    title: string;
}

const CastList: FC<MoviesListProps> = ({credits, title}) => {

    return (
        <div className="py-10">
            <h2 className="text-center dark:text-white font-bold text-6xl">{title}</h2>
            <Swiper
                {...swiperOptions}
            >
                {credits && credits.cast.map((person: ICast) => {
                    return (
                        <SwiperSlide key={person.id}>
                            <CastCard person={person}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
};

export default CastList;
