import {InferGetServerSidePropsType, NextPage} from "next";
import {wrapper} from "../../store";
import {getRunningOperationPromises, getTvShowById, useGetTvShowByIdQuery} from "@/services/themoviedb";
import Hero from "@/components/SeriesPage/Hero";
import {useEffect} from "react";
import {useAppDispatch} from "@/hooks/redux";
import Meta from "@/components/Meta";
import {
    setSeries,
    setSeriesId,
    setSeriesImages,
    setSeriesVideos,
    setSeriesRecommendations,
    setSeriesSimilar,
    setSeriesReviews,
    setSeriesCast
} from "@/features/series/seriesSlice";
import Tabs from "@/components/SeriesPage/Tabs";

const TvShow: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({id}) => {
    const {data: series, isLoading, isError} = useGetTvShowByIdQuery(id);
    const dispatch = useAppDispatch();

    const keywords: string[] = series?.keywords.results.map((keyword: any) => keyword.name);

    useEffect(() => {
        if (!isLoading && !isError && series) {
            dispatch(setSeries(series));
            dispatch(setSeriesId(id));
            dispatch(setSeriesImages(series.images));
            dispatch(setSeriesVideos(series.videos));
            dispatch(setSeriesSimilar(series.similar));
            dispatch(setSeriesRecommendations(series.recommendations));
            dispatch(setSeriesReviews(series.reviews));
            dispatch(setSeriesCast(series.credits));
        }
    }, [isLoading, dispatch, series, id, isError]);

    return (
        <div>
            <Meta
                description={series?.overview}
                title={series?.name}
                keywords={keywords}
            />
            <Hero />
            <Tabs />
        </div>
    );
};

// @ts-ignore
TvShow.theme = 'dark';

export default TvShow;

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    const {id} = ctx.query;
    const parsedId = parseInt(id as string, 10);
    
    if (parsedId) {
        store.dispatch(getTvShowById.initiate(parsedId));
    }

    await Promise.all(getRunningOperationPromises());

    return {
        props: {
            id: parsedId
        }
    }
});
