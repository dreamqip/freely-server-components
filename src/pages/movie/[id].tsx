import {useRouter} from "next/router";
import Meta from "../../components/Meta";
import Hero from "../../components/MoviePage/Hero";
import dynamic from "next/dynamic";
import {NextPage} from "next";
import {getMovieById, getRunningOperationPromises, useGetMovieByIdQuery} from "@/services/themoviedb";
import {useEffect} from "react";
import {useAppDispatch} from "@/hooks/redux";
import {setId, setImages, setMovieDetails, setVideos} from '@/features/movie/movieSlice'
import {wrapper} from "../../store";
import {skipToken} from "@reduxjs/toolkit/query";

const MovieTabs = dynamic(() => import('../../components/MoviePage/Tabs'), {
    ssr: false
})

const MoviePage: NextPage = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const id = router.query.id;
    const result = useGetMovieByIdQuery(
        typeof id === 'string' ? parseInt(id) : skipToken,
        {
            skip: router.isFallback
        }
    );
    const {data: movie, isLoading, isError} = result;
    const keywords: string[] = movie?.keywords.keywords.map((keyword: any) => keyword.name);

    useEffect(() => {
        if (router.isReady) {
            const {id} = router.query;
            dispatch(setId(parseInt(id as string)));
        }

        if (!isLoading && !isError && movie) {
            dispatch(setMovieDetails(movie))
            dispatch(setImages(movie?.images))
            dispatch(setVideos(movie?.videos))
        }
    }, [router.isReady, isLoading, dispatch, movie, router.query.id]);

    return (
        <article className="flex flex-col">
            <Meta
                description={movie?.overview}
                title={movie?.title}
                keywords={keywords}
            />
            <Hero/>
            <MovieTabs/>
        </article>
    );
};

export default MoviePage;

export const getServerSideProps = wrapper.getServerSideProps(store => async (context) => {
    const id = context.params?.id;
    if (typeof id === 'string') {
        store.dispatch(getMovieById.initiate(parseInt(id)))
    }

    await Promise.all(getRunningOperationPromises());

    return {
        props: {}
    }

})
