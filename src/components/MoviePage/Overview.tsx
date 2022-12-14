import { FC, useEffect, useState } from 'react';
import Cast from './Cast';
import Reviews from './Reviews';
import Similar from './Similar';
import Recommended from './Recommended';
import { useAppSelector } from '@/hooks/redux';
import { parseMovieDetails } from '@/utilities/parseMovieDetails';
import Spinner from '@/components/Spinner';
import { imageBaseUrlOriginal } from '@/services/themoviedb';
import ImageWithFallback from '@/components/Image';

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
              className='mx-auto rounded-xl object-contain sm:mx-0'
              width={250}
              height={400}
            />
            <div className='relative'>
              <h2 className='text-3xl dark:text-white'>Storyline</h2>
              <p className='text-lg dark:text-primary-dark'>{movie.overview}</p>
              <table className='border-spacing-2'>
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
