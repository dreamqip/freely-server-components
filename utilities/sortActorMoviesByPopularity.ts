import {IMovie} from "../types/IMovie";

export const sortActorMoviesByPopularity = (a: IMovie, b: IMovie): number => {
    if (a.popularity < b.popularity) {
        return 1;
    }
    if (a.popularity > b.popularity) {
        return -1;
    }
    return 0;
}
