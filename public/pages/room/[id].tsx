import type { InferGetServerSidePropsType, NextPage } from 'next';
import type { IMovie } from '@/types/movie';
import type { ITvShow } from '@/types/series';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useEffect, useMemo, useState } from 'react';
import { wrapper } from '@/store';
import {
  getMovieById,
  getRunningQueriesThunk,
  getTvShowById,
  useGetMovieByIdQuery,
  useGetTvShowByIdQuery,
} from '@/services/themoviedb';
import { setShow } from '@/features/room/roomSlice';
import Select from 'react-select';
import Link from 'next/link';

const Room: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ id, type }) => {
  const dispatch = useAppDispatch();
  const { show } = useAppSelector((state) => state.room);
  const [selectedSeason, setSelectedSeason] = useState<any>('');
  const [selectedEpisode, setSelectedEpisode] = useState<any>('');

  const resultMovie = useGetMovieByIdQuery(id, {
    skip: type === 'series',
  });
  const resultTvShow = useGetTvShowByIdQuery(id, {
    skip: type === 'movie',
  });

  useEffect(() => {
    if (!resultMovie.isLoading && resultMovie.data && !resultMovie.isError) {
      dispatch(setShow(resultMovie.data as IMovie));
    }

    if (!resultTvShow.isLoading && resultTvShow.data && !resultTvShow.isError) {
      dispatch(setShow(resultTvShow.data as ITvShow));
    }
  }, [
    dispatch,
    resultMovie.data,
    resultMovie.isError,
    resultMovie.isLoading,
    resultTvShow.data,
    resultTvShow.isError,
    resultTvShow.isLoading,
  ]);

  const createEpisodesCount = useMemo(() => {
    if (selectedSeason) {
      const episodes = Array.from(
        { length: selectedSeason.episodes },
        (_, i) => i + 1
      );

      return episodes.map((episode: number) => ({
        value: episode,
        label: `Episode ${episode}`,
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
        episodes: season.episode_count,
      }));
    }
    return {} as any;
  }, [resultTvShow.data]);

  const backHref = type === 'series' ? `/series/${id}` : `/movie/${id}`;

  const onChangeSeason = (selected: any) => {
    setSelectedSeason(selected);
    setSelectedEpisode({ value: 1, label: `Episode 1` });
  };

  return (
    <>
      <Link href={backHref} title='back' className='flex items-center'>
        <ArrowLeftIcon className='mb-6 h-8 w-8 cursor-pointer dark:text-white' />
      </Link>

      {show && type === 'series' && (
        <>
          <Select
            options={optionsSeason}
            defaultValue={selectedSeason}
            onChange={onChangeSeason}
            className='select-container mb-4'
            classNamePrefix='select'
          />
          <Select
            options={createEpisodesCount}
            defaultValue={selectedEpisode}
            value={selectedEpisode}
            onChange={setSelectedEpisode}
            className='select-container mb-4'
            classNamePrefix='select'
          />
          <iframe
            allowFullScreen
            src={`https://2embed.org/embed/series?tmdb=${id}&sea=${selectedSeason.value}&epi=${selectedEpisode.value}`}
            className='h-screen w-full'
          />
        </>
      )}

      {show && type === 'movie' && (
        <iframe
          allowFullScreen
          src={`https://2embed.org/embed/movie?tmdb=${id}`}
          className='h-screen w-full'
        />
      )}
    </>
  );
};
export default Room;

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch }) =>
    async (ctx) => {
      const { id } = ctx.query;
      const { type } = ctx.query;
      const parsedId = parseInt(id as string, 10);

      if (parsedId && type === 'movie') {
        dispatch(getMovieById.initiate(parsedId));
      }

      if (parsedId && type === 'series') {
        dispatch(getTvShowById.initiate(parsedId));
      }

      await Promise.all(dispatch(getRunningQueriesThunk()));

      return {
        props: {
          id: parsedId,
          type,
        },
      };
    }
);
