import type { IMovie } from '@/types/movie';
import { minutesToHoursAndMinutes } from './minutesToHoursAndMinutes';
import { getNumberWithCommas } from './getNumberWithCommas';
import { getLanguageFullName } from './getLanguageFullName';

export const parseMovieDetails = (movie: IMovie) => {
  return [
    {
      detailName: 'Released',
      detailValue: new Date(movie.release_date).toDateString(),
    },
    {
      detailName: 'Runtime',
      detailValue: minutesToHoursAndMinutes(movie.runtime),
    },
    {
      detailName: 'Budget',
      detailValue: `$${getNumberWithCommas(movie.budget)}`,
    },
    {
      detailName: 'Revenue',
      detailValue: `$${getNumberWithCommas(movie.revenue)}`,
    },
    {
      detailName: 'Genres',
      detailValue: movie.genres.map((genre) => genre.name).join(', '),
    },
    {
      detailName: 'Status',
      detailValue: movie.status,
    },
    {
      detailName: 'Language',
      detailValue: getLanguageFullName(movie.original_language),
    },
    {
      detailName: 'Production',
      detailValue: movie.production_companies
        .map((company) => company.name)
        .join(', '),
    },
  ];
};
