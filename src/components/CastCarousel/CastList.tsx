import type { IMovieCast } from "@/types/cast"
import type { IMovieCredits } from "@/types/credits"
import { FC, Suspense } from "react"
import CastCard from "./CastCard"
import { SwiperSlide } from "swiper/react"
import dynamic from "next/dynamic"

const Swiper = dynamic(() => import("../ShowCarousel/SwiperLazy"), {
    suspense: true,
})

interface MoviesListProps {
    credits: IMovieCredits
    title: string
}

const CastList: FC<MoviesListProps> = ({ credits, title }) => {
    return (
        <div className="py-10">
            <h2 className="text-center text-6xl font-bold dark:text-white">
                {title}
            </h2>
            <Suspense
                fallback={
                    <div className="flex items-center justify-center text-4xl">
                        Loading...
                    </div>
                }
            >
                <Swiper>
                    {credits &&
                        credits.cast.map((person: IMovieCast) => {
                            return (
                                <SwiperSlide key={person.id}>
                                    <CastCard person={person} />
                                </SwiperSlide>
                            )
                        })}
                </Swiper>
            </Suspense>
        </div>
    )
}

export default CastList
