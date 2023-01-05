import type { InferGetServerSidePropsType, NextPage } from 'next';
import type { IKeyword } from '@/types/movie';
import { wrapper } from '@/store';
import {
  getRunningQueriesThunk,
  getTvShowById,
  useGetTvShowByIdQuery,
} from '@/services/themoviedb';
import Hero from '@/components/SeriesPage/Hero';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/redux';
import {
  setSeriesCredits,
  setSeriesImages,
  setSeriesRecommendations,
  setSeriesReviews,
  setSeriesSimilar,
  setSeriesVideos,
} from '@/features/series/seriesSlice';
import { NextSeo, NextSeoProps } from 'next-seo';
import { useRouter } from 'next/router';
import Spinner from '@/components/Spinner';
import Storyline from '@/components/Storyline';

const Tabs = dynamic(() => import('@/components/Tabs'), {
  ssr: false,
});

const OverviewTab = dynamic(() => import('@/components/SeriesPage/Overview'), {
  loading: () => <Spinner className='h-screen' />,
});
const ImagesTab = dynamic(() => import('@/components/SeriesPage/Images'), {
  loading: () => <Spinner className='h-screen' />,
});
const VideosTab = dynamic(() => import('@/components/SeriesPage/Videos'), {
  loading: () => <Spinner className='h-screen' />,
});

const TvShow: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ id }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data: series } = useGetTvShowByIdQuery(id, {
    skip: router.isFallback,
  });

  const seoOptions: NextSeoProps = {
    title: series?.name,
    description: series?.overview,
    canonical: `https://freely.vercel.app/series/${id}`,
    openGraph: {
      title: series?.name,
      description: series?.overview,
      images: [
        {
          url: `https://image.tmdb.org/t/p/w1280${series?.backdrop_path}`,
          width: 1280,
          height: 720,
          alt: series?.name,
        },
      ],
    },
    additionalMetaTags: [
      {
        property: 'keywords',
        content:
          series?.keywords.results
            .map((keyword: IKeyword) => keyword.name)
            .join(', ') || '',
      },
    ],
  };

  useEffect(() => {
    if (series && !router.isFallback) {
      dispatch(setSeriesReviews(series.reviews));
      dispatch(setSeriesImages(series.images));
      dispatch(setSeriesVideos(series.videos));
      dispatch(setSeriesSimilar(series.similar));
      dispatch(setSeriesRecommendations(series.recommendations));
      dispatch(setSeriesCredits(series.credits));
    }
  }, [dispatch, id, router.isFallback, series]);

  return (
    <article>
      <NextSeo {...seoOptions} />
      {series ? (
        <>
          <Hero series={series} />
          <Storyline series={series} />
          <Tabs
            overview={<OverviewTab />}
            images={<ImagesTab />}
            videos={<VideosTab />}
          />
        </>
      ) : (
        <Spinner />
      )}
    </article>
  );
};

// @ts-ignore
TvShow.theme = 'dark';

export default TvShow;

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch }) =>
    async (ctx) => {
      const { id } = ctx.query;
      const parsedId = parseInt(id as string, 10);

      dispatch(getTvShowById.initiate(parsedId));

      await Promise.all(dispatch(getRunningQueriesThunk()));

      return {
        props: {
          id: parsedId,
        },
      };
    }
);
