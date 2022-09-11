import React, {useEffect, useRef, useState} from 'react';
import {NextPage} from "next";
import {wrapper} from "../../store";
import {getPopularTvShows, getRunningOperationPromises, useGetPopularTvShowsQuery} from "@/services/themoviedb";
import Spinner from "@/components/Spinner";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {reset, setPage, setPopularSeries, setTotalPages} from "@/features/series/popularSlice";
import {useRouter} from "next/router";
import {useObserver} from "@/hooks/useObserver";
import SeriesList from "@/components/SeriesPage/SeriesList";

const Series: NextPage = () => {
    const router = useRouter();
    const {page, totalPages} = useAppSelector(state => state.popularSeries)
    const dispatch = useAppDispatch();
    const lastElement = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState<boolean>(true);

    const {data: popular, isLoading, isError, isFetching} = useGetPopularTvShowsQuery(page);

    useObserver(lastElement, page < totalPages, isFetching, isLoading, () => {
        dispatch(setPage(page + 1));
    });

    useEffect(() => {
        router.events.on('routeChangeStart', () => {
            setVisible(false);
        })
    }, [router])

    useEffect(() => {
        dispatch(reset());
    }, [dispatch])

    useEffect(() => {
        if (!isLoading && popular && !isError) {
            dispatch(setPopularSeries(popular.results))
            dispatch(setTotalPages(popular.total_pages))
        }
    }, [dispatch, isError, isLoading, popular])

    if (isLoading) {
        return <Spinner/>;
    }

    return (
        <div>
            <h1 className="dark:text-white text-6xl text-center m-0">Series</h1>
            <SeriesList/>
            {visible && <div className="h-10" ref={lastElement}></div>}
        </div>
    );
};

export default Series;

export const getStaticProps = wrapper.getStaticProps(store => async () => {
    await store.dispatch(getPopularTvShows.initiate(store.getState().popularSeries.page));

    await Promise.all(getRunningOperationPromises());

    return {
        props: {}
    }
})
