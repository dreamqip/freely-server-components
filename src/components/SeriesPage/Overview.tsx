import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { useAppSelector } from '@/hooks/redux';
import { parseSeriesDetails } from '@/utilities/parseSeriesDetails';
import Cast from '@/components/SeriesPage/Cast';
import Similar from '@/components/SeriesPage/Similar';
import Recommended from '@/components/SeriesPage/Recommended';
import Reviews from '@/components/SeriesPage/Reviews';
import Spinner from '@/components/Spinner';
import { imageBaseUrlW400 } from '@/services/themoviedb';

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
            <Image
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
              <p className='text-md mt-2 dark:text-primary-dark md:text-lg'>
                {series.overview}
              </p>
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
          <Similar />
          <Recommended />
          <Reviews />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Overview;
