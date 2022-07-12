import {Skeleton} from "antd";
import {useRouter} from "next/router";
import Meta from "../../components/Meta";
import ErrorPage from "../404";
import Hero from "../../components/MoviePage/Hero";
import dynamic from "next/dynamic";
import {NextPage} from "next";
import {useGetMovieByIdQuery} from "../../services/themoviedb";
import {useEffect, Suspense} from "react";
import {useAppDispatch} from "../../hooks/redux";
import {setId, setMovieDetails, setImages, setVideos} from '../../features/movie/movieSlice'
import Spinner from "../../components/Spinner";

const MovieTabs = dynamic(() => import('../../components/MoviePage/Tabs'), {
    suspense: true
})

const MoviePage: NextPage = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const {data: movie, isLoading, isError} = useGetMovieByIdQuery(router.query.id)
    const keywords: string[] = movie?.keywords.keywords.map((keyword: any) => keyword.name);

    useEffect(() => {
        if (router.isReady) {
            dispatch(setId(router.query.id))
        }

        if (!isLoading) {
            dispatch(setMovieDetails(movie))
            dispatch(setImages(movie?.images))
            dispatch(setVideos(movie?.videos))
        }
    }, [router.isReady, isLoading, dispatch, movie, router.query.id])

    if (isLoading) return (
        <>
            <Skeleton.Image className="w-full h-[600px]"/>
            <Skeleton className="mt-6" active/>
        </>
    )

    if (isError) return <ErrorPage/>

    return (
        <div className="flex flex-col justify-center items-center pt-6">
            <Meta
                description={movie?.overview}
                title={movie?.title}
                keywords={keywords}
            />
            <Hero />
            <Suspense fallback={<Spinner />}>
                <MovieTabs />
            </Suspense>
        </div>
    );
};

export default MoviePage;
