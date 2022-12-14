import type { IMovieCast, ITvShowCast } from './cast';
import type { IMovieCrew, ITvShowCrew } from './crew';

export interface IMovieCredits {
  id: number;
  cast: IMovieCast[];
  crew: IMovieCrew[];
}

export interface ITvShowCredits {
  id: number;
  cast: ITvShowCast[];
  crew: ITvShowCrew[];
}
