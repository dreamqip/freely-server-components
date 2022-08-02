import {InferGetServerSidePropsType, NextPage} from "next";
import {ArrowLeftIcon} from "@heroicons/react/solid";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import Select from 'react-select';
import {useEffect, useMemo, useState} from "react";
import Link from "next/link";
import {wrapper} from "../../store";
import {
    getMovieById,
    getRunningOperationPromises,
    getTvShowById,
    useGetMovieByIdQuery,
    useGetTvShowByIdQuery
} from "@/services/themoviedb";
import {setShow} from "@/features/room/roomSlice";
import {IMovie} from "@/types/movie";
import {ITvShow} from "@/types/series";
import axios from "axios";

const Room: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({id, type}) => {
    const dispatch = useAppDispatch();
    const {show} = useAppSelector(state => state.room);
    const [selectedSeason, setSelectedSeason] = useState<any>('');
    const [selectedEpisode, setSelectedEpisode] = useState<any>('');

    const resultMovie = useGetMovieByIdQuery(id, {
        skip: type === 'series'
    });
    const resultTvShow = useGetTvShowByIdQuery(id, {
        skip: type === 'movie'
    });

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(`https://seapi.link/?type=tmdb&id=634649&max_results=1`).then(res => console.log(res.data));
        }
        fetchData();
    }, [])

    useEffect(() => {
        if (!resultMovie.isLoading && resultMovie.data && !resultMovie.isError) {
            dispatch(setShow(resultMovie.data as IMovie));
        }

        if (!resultTvShow.isLoading && resultTvShow.data && !resultTvShow.isError) {
            dispatch(setShow(resultTvShow.data as ITvShow));
        }
    }, [dispatch, resultMovie.data, resultMovie.isError, resultMovie.isLoading, resultTvShow.data, resultTvShow.isError, resultTvShow.isLoading]);

    const createEpisodesCount = useMemo(() => {
        if (selectedSeason) {
            const episodes = Array.from({length: selectedSeason.episodes}, (_, i) => i + 1);

            return episodes.map((episode: number) => ({
                value: episode,
                label: `Episode ${episode}`
            }));
        }
        return {} as any;
    }, [selectedSeason]);

    const optionsSeason = useMemo(() => {
        if (resultTvShow.data) {
            const seasons = resultTvShow.data.seasons;

            return seasons.map((season: any) => ({
                value: season.season_number,
                label: `Season ${season.season_number}`,
                episodes: season.episode_count
            }));
        }
        return {} as any;
    }, [resultTvShow.data]);

    const backHref = type === 'series' ? `/series/${id}` : `/movie/${id}`;

    const onChangeSeason = (selected: any) => {
        setSelectedSeason(selected);
        setSelectedEpisode({value: 1, label: `Episode 1`});
    }

    return (
        <>
            <Link href={backHref} passHref>
                <a title="back" className="flex items-center">
                    <ArrowLeftIcon className="w-8 h-8 dark:text-white cursor-pointer mb-6"/>
                </a>
            </Link>

            {show && type === 'series' && (
                <>
                    <Select
                        options={optionsSeason}
                        defaultValue={selectedSeason}
                        onChange={onChangeSeason}
                        className="select-container mb-4"
                        classNamePrefix="select"
                    />
                    <Select
                        options={createEpisodesCount}
                        defaultValue={selectedEpisode}
                        value={selectedEpisode}
                        onChange={setSelectedEpisode}
                        className="select-container mb-4"
                        classNamePrefix="select"
                    />
                    <iframe
                        allowFullScreen
                        src={`https://2embed.org/embed/series?tmdb=${id}&sea=${selectedSeason.value}&epi=${selectedEpisode.value}`}
                        className="w-full h-screen"
                    />
                </>
            )}

            {/*{show && type === 'movie' && (
                <iframe
                    allowFullScreen
                    src={`https://2embed.org/embed/movie?tmdb=${id}`}
                    className="w-full h-screen"
                />
            )}*/}
        </>
    );
}
export default Room;

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    const {id} = ctx.query;
    const {type} = ctx.query;
    const parsedId = parseInt(id as string, 10);

    if (parsedId && type === 'movie') {
        store.dispatch(getMovieById.initiate(parsedId));
    }

    if (parsedId && type === 'series') {
        store.dispatch(getTvShowById.initiate(parsedId));
    }

    await Promise.all(getRunningOperationPromises());

    return {
        props: {
            id: parsedId,
            type
        }
    }
})
