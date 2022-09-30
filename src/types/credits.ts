import { IMovieCast, ITvShowCast } from "./cast"
import { IMovieCrew, ITvShowCrew } from "./crew"

export interface IMovieCredits {
    id: number
    cast: IMovieCast[]
    crew: IMovieCrew[]
}

export interface ITvShowCredits {
    id: number
    cast: ITvShowCast[]
    crew: ITvShowCrew[]
}
