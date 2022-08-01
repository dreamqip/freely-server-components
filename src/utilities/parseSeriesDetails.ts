import {minutesToMinutes} from "@/utilities/minutesToHoursAndMinutes";
import {getLanguageFullName} from "@/utilities/getLanguageFullName";
import {ITvShow} from "@/types/series";

export const parseSeriesDetails = (series: ITvShow) => {
    return [
        {
            detailName: 'Runtime',
            detailValue: minutesToMinutes(series.episode_run_time[0]),
        },
        {
            detailName: 'Genres',
            detailValue: series.genres.map((genre) => genre.name).join(', '),
        },
        {
            detailName: 'Creators',
            detailValue: series.created_by.map((creator: any) => creator.name).join(', '),
        },
        {
            detailName: 'Language',
            detailValue: getLanguageFullName(series.original_language),
        },
    ];
};
