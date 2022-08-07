import Meta from "@/components/Meta";
import Hero from "@/components/MoviePage/Hero";
import dynamic from "next/dynamic";
import {InferGetServerSidePropsType, NextPage} from "next";
import {getMovieById, getRunningOperationPromises, useGetMovieByIdQuery} from "@/services/themoviedb";
import {useEffect} from "react";
import {useAppDispatch} from "@/hooks/redux";
import {setId, setImages, setMovieDetails, setVideos} from '@/features/movie/movieSlice'
import {wrapper} from "../../store";

const MovieTabs = dynamic(() => import('@/components/MoviePage/Tabs'), {ssr: false});

const MoviePage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({id}) => {
    const dispatch = useAppDispatch();
    const result = useGetMovieByIdQuery(id);
    const {data: movie, isLoading, isError} = result;
    const keywords: string[] = movie?.keywords.keywords.map((keyword: any) => keyword.name);

    useEffect(() => {
        if (!isLoading && !isError && movie) {
            dispatch(setId(id));
            dispatch(setMovieDetails(movie))
            dispatch(setImages(movie?.images))
            dispatch(setVideos(movie?.videos))
        }
    }, [isLoading, dispatch, movie, isError, id]);

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

// @ts-ignore
MoviePage.theme = 'dark';

export default MoviePage;

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    const {id} = ctx.query;
    const parsedId = parseInt(id as string, 10);

    if (parsedId) {
        store.dispatch(getMovieById.initiate(parsedId));
    }

    await Promise.all(getRunningOperationPromises());

    return {
        props: {
            id: parsedId
        }
    }

})
