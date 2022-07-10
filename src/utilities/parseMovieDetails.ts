import {IMovie} from "../types/movie";
import {minutesToHoursAndMinutes} from "./minutesToHoursAndMinutes";
import {getNumberWithCommas} from "./getNumberWithCommas";
import {getLanguageFullname} from "./getLanguageFullname";


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
            detailValue: getLanguageFullname(movie.original_language),
        },
        {
            detailName: 'Production',
            detailValue: movie.production_companies.map((company: any) => company.name).join(', '),
        },
    ];
};
