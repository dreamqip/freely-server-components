import type { InferGetServerSidePropsType, NextPage } from "next"
import Hero from "@/components/MoviePage/Hero"
import dynamic from "next/dynamic"
import {
    getMovieById,
    getRunningOperationPromises,
    useGetMovieByIdQuery,
} from "@/services/themoviedb"
import { useEffect, Suspense } from "react"
import { useAppDispatch } from "@/hooks/redux"
import {
    setCast,
    setId,
    setImages,
    setMovieDetails,
    setRecommendations,
    setReviews,
    setSimilar,
    setVideos,
} from "@/features/movie/movieSlice"
import { wrapper } from "../../store"
import { NextSeo } from "next-seo"
import { IKeyword } from "@/types/movie"
import Spinner from "@/components/Spinner"

const Tabs = dynamic(() => import("@/components/MoviePage/Tabs"), {
    suspense: true,
    ssr: false,
})

const MoviePage: NextPage<
    InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ id }) => {
    const dispatch = useAppDispatch()

    const { data: movie, isLoading, isError } = useGetMovieByIdQuery(id)

    const keywords =
        movie &&
        movie.keywords.keywords.map((keyword: IKeyword) => keyword.name)

    const seoOptions: any = {
        title: movie?.title,
        description: movie?.overview,
        additionalMetaTags: [
            {
                property: "keywords",
                content: keywords?.join(", "),
            },
        ],
    }

    useEffect(() => {
        if (!isLoading && !isError && movie) {
            dispatch(setId(id))
            dispatch(setMovieDetails(movie))
            dispatch(setImages(movie.images))
            dispatch(setVideos(movie.videos))
            dispatch(setSimilar(movie.similar))
            dispatch(setRecommendations(movie.recommendations))
            dispatch(setReviews(movie.reviews))
            dispatch(setCast(movie.credits))
        }
    }, [isLoading, dispatch, movie, isError, id])

    return (
        <article className="flex flex-col">
            <NextSeo {...seoOptions} />
            <Hero />
            <Suspense fallback={<Spinner />}>
                <Tabs />
            </Suspense>
        </article>
    )
}

// @ts-ignore
MoviePage.theme = "dark"

export default MoviePage

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (ctx) => {
        const { id } = ctx.query
        const parsedId = parseInt(id as string, 10)

        if (parsedId) {
            await store.dispatch(getMovieById.initiate(parsedId))
        }

        await Promise.all(getRunningOperationPromises())

        return {
            props: {
                id: parsedId,
            },
        }
    }
)
