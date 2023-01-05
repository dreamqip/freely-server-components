'use client';

import { type FC, useEffect, useState } from 'react';
import type { IMovie } from '@/types/movie';
import type { ITvShow } from '@/types/series';
import { Content, List, Root, Trigger } from '@radix-ui/react-tabs';
import { useAppDispatch } from '@/hooks/redux';

import s from '@/styles/tabs.module.css';

import {
  setCredits,
  setImages,
  setRecommendations,
  setReviews,
  setSimilar,
  setVideos,
} from '@/features/movie/movieSlice';
import {
  setSeriesCredits,
  setSeriesImages,
  setSeriesRecommendations,
  setSeriesReviews,
  setSeriesSimilar,
  setSeriesVideos,
} from '@/features/series/seriesSlice';
import dynamic from 'next/dynamic';
import Spinner from '@/components/Spinner';

const OverviewTab = dynamic(() => import('@/components/MoviePage/Overview'), {
  loading: () => <Spinner className='h-screen' />,
});
const OverviewTabSeries = dynamic(
  () => import('@/components/SeriesPage/Overview'),
  {
    loading: () => <Spinner className='h-screen' />,
  }
);

const ImagesTab = dynamic(() => import('@/components/ImagesTab'), {
  loading: () => <Spinner className='h-screen' />,
});
const VideosTab = dynamic(() => import('@/components/Videos'), {
  loading: () => <Spinner className='h-screen' />,
});

interface ActiveState {
  overview: true | undefined;
  images: true | undefined;
  videos: true | undefined;
}

interface TabsProps {
  series: IMovie | ITvShow;
  type: 'movie' | 'series';
}

const Tabs: FC<TabsProps> = ({ series, type }) => {
  const dispatch = useAppDispatch();
  const [isActivated, setIsActivated] = useState<ActiveState>({
    overview: true,
    images: undefined,
    videos: undefined,
  });
  const handleTabChange = (value: string) => {
    if (value === 'images') {
      setIsActivated((prevState) => ({
        ...prevState,
        images: true,
      }));
    } else if (value === 'videos') {
      setIsActivated((prevState) => ({
        ...prevState,
        videos: true,
      }));
    }
  };

  useEffect(() => {
    if ('title' in series) {
      dispatch(setReviews(series.reviews));
      dispatch(setImages(series.images));
      dispatch(setVideos(series.videos));
      dispatch(setSimilar(series.similar));
      dispatch(setRecommendations(series.recommendations));
      dispatch(setCredits(series.credits));
    } else {
      dispatch(setSeriesReviews(series.reviews));
      dispatch(setSeriesImages(series.images));
      dispatch(setSeriesVideos(series.videos));
      dispatch(setSeriesSimilar(series.similar));
      dispatch(setSeriesRecommendations(series.recommendations));
      dispatch(setSeriesCredits(series.credits));
    }
  }, [series, dispatch]);

  return (
    <>
      <Root
        onValueChange={handleTabChange}
        className='flex w-full flex-col'
        defaultValue='overview'
      >
        <List
          className='flex w-full flex-row items-center justify-center gap-x-6 pt-6 pb-10 md:pb-16'
          aria-label='tabs example'
        >
          <Trigger value='overview' asChild>
            <div className={s.trigger}>
              <span>Overview</span>
            </div>
          </Trigger>
          <Trigger value='images' asChild>
            <div className={s.trigger}>
              <span>Images</span>
            </div>
          </Trigger>
          <Trigger value='videos' asChild>
            <div className={s.trigger}>
              <span>Videos</span>
            </div>
          </Trigger>
        </List>
        {type === 'movie' ? (
          <>
            <Content forceMount value='overview' className={s.content}>
              <OverviewTab />
            </Content>
            <Content
              forceMount={isActivated.images}
              value='images'
              className={s.content}
            >
              <ImagesTab />
            </Content>
            <Content
              forceMount={isActivated.videos}
              value='videos'
              className={s.content}
            >
              <VideosTab />
            </Content>
          </>
        ) : (
          <>
            <Content forceMount value='overview' className={s.content}>
              <OverviewTabSeries />
            </Content>
            <Content
              forceMount={isActivated.images}
              value='images'
              className={s.content}
            >
              <ImagesTab />
            </Content>
            <Content
              forceMount={isActivated.videos}
              value='videos'
              className={s.content}
            >
              <VideosTab />
            </Content>
          </>
        )}
      </Root>
    </>
  );
};

export default Tabs;
