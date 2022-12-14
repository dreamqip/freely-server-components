import type { IActorCast } from '@/types/cast';

export const sortActorMoviesByPopularity = (
  a: IActorCast,
  b: IActorCast
): number => {
  if (a.popularity < b.popularity) {
    return 1;
  }
  if (a.popularity > b.popularity) {
    return -1;
  }
  return 0;
};
