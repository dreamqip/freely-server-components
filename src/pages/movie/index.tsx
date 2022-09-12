import { NextPage } from "next"
import { wrapper } from "../../store"
import {
    getPopularMovies,
    getRunningOperationPromises,
    useGetPopularMoviesQuery,
} from "@/services/themoviedb"
import { useRouter } from "next/router"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import React, { useEffect, useRef, useState } from "react"
import { useObserver } from "@/hooks/useObserver"
import {
    reset,
    setPage,
    setPopularMovies,
    setTotalPages,
} from "@/features/movie/popularSlice"
import MoviesList from "@/components/MoviePage/MoviesList"

const Movies: NextPage = () => {
    const router = useRouter()
    const { page, totalPages } = useAppSelector((state) => state.popularMovies)
    const dispatch = useAppDispatch()
    const lastElement = useRef<HTMLDivElement | null>(null)
    const [visible, setVisible] = useState<boolean>(true)

    const {
        data: movies,
        isLoading,
        isError,
        isFetching,
    } = useGetPopularMoviesQuery(page)

    useObserver(lastElement, page < totalPages, isFetching, isLoading, () => {
        dispatch(setPage(page + 1))
    })

    useEffect(() => {
        router.events.on("routeChangeStart", () => {
            setVisible(false)
        })
    }, [router])

    useEffect(() => {
        dispatch(reset())
    }, [dispatch])

    useEffect(() => {
        if (!isLoading && movies && !isError) {
            dispatch(setPopularMovies(movies.results))
            dispatch(setTotalPages(movies.total_pages))
        }
    }, [dispatch, isError, isLoading, movies])

    return (
        <div>
            <h1 className="m-0 text-center text-6xl dark:text-white">Movies</h1>
            <MoviesList />
            {visible && <div className="h-10" ref={lastElement}></div>}
        </div>
    )
}

export default Movies

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
    await store.dispatch(
        getPopularMovies.initiate(store.getState().popularMovies.page)
    )

    await Promise.all(getRunningOperationPromises())

    return {
        props: {},
    }
})
