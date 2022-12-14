import { minutesToMinutes } from '@/utilities/minutesToHoursAndMinutes';
import { getLanguageFullName } from '@/utilities/getLanguageFullName';
import type { ITvShow } from '@/types/series';

export const parseSeriesDetails = (series: ITvShow) => {
  return [
    {
      detailName: 'Runtime',
      detailValue:
        series.episode_run_time.length > 0
          ? minutesToMinutes(series.episode_run_time[0]) + ' per episode'
          : 'N/A',
    },
    {
      detailName: 'Genres',
      detailValue: series.genres.map((genre) => genre.name).join(', '),
    },
    {
      detailName: 'Creators',
      detailValue: series.created_by.map((creator) => creator.name).join(', '),
    },
    {
      detailName: 'Language',
      detailValue: getLanguageFullName(series.original_language),
    },
  ];
};
