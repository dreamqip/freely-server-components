import { FC, Suspense, useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks/redux';
import { parseSeriesDetails } from '@/utilities/parseSeriesDetails';
import Cast from '@/components/SeriesPage/Cast';
import Spinner from '@/components/Spinner';
import { imageBaseUrlW400 } from '@/services/themoviedb';
import dynamic from 'next/dynamic';
import ImageWithFallback from '@/components/Image';

const Similar = dynamic(() => import('@/components/SeriesPage/Similar'), {
  suspense: true,
});
const Recommended = dynamic(
  () => import('@/components/SeriesPage/Recommended'),
  {
    suspense: true,
  }
);
const Reviews = dynamic(() => import('@/components/Reviews'), {
  suspense: true,
});

const Overview: FC = () => {
  const { series } = useAppSelector((state) => state.series);
  const [parsedDetails, setParsedDetails] = useState<null | ReturnType<
    typeof parseSeriesDetails
  >>(null);

  useEffect(() => {
    if (series) setParsedDetails(parseSeriesDetails(series));
  }, [series]);

  return (
    <>
      {series && parsedDetails ? (
        <>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-[250px_minmax(0,_1fr)]'>
            <ImageWithFallback
              src={`${imageBaseUrlW400}${series.poster_path}`}
              alt={series.name}
              priority
              className='mx-auto aspect-[2/3] rounded-xl sm:mx-0'
              width={250}
              height={400}
            />
            <div className='relative'>
              <h2 className='text-2xl dark:text-white md:text-3xl'>
                Storyline
              </h2>
              <h3 className='text-md mt-2 dark:text-primary-dark md:text-lg'>
                {series.overview}
              </h3>
              <table className='mt-2 w-full border-spacing-2 sm:w-auto'>
                <tbody>
                  {parsedDetails.map((detail) => {
                    return (
                      <tr
                        key={detail.detailName}
                        className='flex items-start justify-between gap-x-4'
                      >
                        <td className='dark:text-white'>{detail.detailName}</td>
                        <td className='dark:text-white'>
                          {detail.detailValue || 'Unknown'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <Cast />
          <Suspense fallback={<Spinner />}>
            <Similar />
            <Recommended />
            <Reviews reviews={series.reviews} />
          </Suspense>
        </>
      ) : null}
    </>
  );
};

export default Overview;
