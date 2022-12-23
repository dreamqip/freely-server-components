import type { FC } from 'react';
import { parseSeriesDetails } from '@/utilities/parseSeriesDetails';
import ImageWithFallback from '@/components/Image';
import { imageBaseUrlW400 } from '@/services/themoviedb';
import { parseMovieDetails } from '@/utilities/parseMovieDetails';
import type { IMovie } from '@/types/movie';
import type { ITvShow } from '@/types/series';

interface Props {
  series: IMovie | ITvShow;
}

const Storyline: FC<Props> = ({ series }) => {
  const parsedDetails =
    'seasons' in series
      ? parseSeriesDetails(series)
      : parseMovieDetails(series);

  return (
    <div className='grid grid-cols-1 gap-8 pt-20 md:grid-cols-[250px_minmax(0,_1fr)]'>
      <ImageWithFallback
        src={`${imageBaseUrlW400}${series.poster_path}`}
        alt={('title' in series && series.title) || series.name}
        priority
        className='relative mx-auto aspect-[2/3] rounded-xl md:mx-0'
        width={250}
        height={400}
      />
      <div className='relative'>
        <h2 className='text-2xl dark:text-white md:text-3xl'>Storyline</h2>
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
                  <td className='max-w-[200px] dark:text-white md:max-w-fit'>
                    {detail.detailName}
                  </td>
                  <td className='max-w-[200px] text-right dark:text-white md:max-w-fit'>
                    {detail.detailValue || 'Unknown'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Storyline;
