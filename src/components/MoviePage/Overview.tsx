import { FC, useEffect, useState, Suspense } from 'react';
import Cast from './Cast';
import { useAppSelector } from '@/hooks/redux';
import { parseMovieDetails } from '@/utilities/parseMovieDetails';
import Spinner from '@/components/Spinner';
import { imageBaseUrlOriginal } from '@/services/themoviedb';
import ImageWithFallback from '@/components/Image';
import dynamic from 'next/dynamic';

const Similar = dynamic(() => import('@/components/MoviePage/Similar'), {
  suspense: true,
});
const Recommended = dynamic(
  () => import('@/components/MoviePage/Recommended'),
  {
    suspense: true,
  }
);
const Reviews = dynamic(() => import('@/components/Reviews'), {
  suspense: true,
});

const Overview: FC = () => {
  const { movie } = useAppSelector((state) => state.movie);
  const [parsedDetails, setParsedDetails] = useState<null | ReturnType<
    typeof parseMovieDetails
  >>(null);

  useEffect(() => {
    if (movie) setParsedDetails(parseMovieDetails(movie));
  }, [movie]);

  return (
    <>
      {movie && parsedDetails ? (
        <>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-[250px_minmax(0,_1fr)]'>
            <ImageWithFallback
              src={`${imageBaseUrlOriginal}${movie.poster_path}`}
              alt={movie.title}
              priority
              className='mx-auto rounded-xl object-contain sm:mx-0'
              width={250}
              height={400}
            />
            <div className='relative'>
              <h2 className='text-2xl dark:text-white md:text-3xl'>
                Storyline
              </h2>
              <p className='text-md mt-2 dark:text-primary-dark md:text-lg'>
                {movie.overview}
              </p>
              <table className='mt-2 w-full border-spacing-2 sm:w-auto'>
                <tbody>
                  {parsedDetails.map((detail) => {
                    return (
                      <tr key={detail.detailName}>
                        <td className='pr-10 dark:text-white'>
                          {detail.detailName}
                        </td>
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
            <Reviews reviews={movie.reviews} />
          </Suspense>
        </>
      ) : null}
    </>
  );
};

export default Overview;
