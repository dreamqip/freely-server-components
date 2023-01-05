import type { IMovie } from '@/types/movie';
import type { IMovies } from '@/types/movies';
import type { ITvShow, ITvShows } from '@/types/series';

export const imageBaseUrlOriginal = 'https://image.tmdb.org/t/p/original';
export const imageBaseUrlW400 = 'https://image.tmdb.org/t/p/w400';

export const revalidate = 60 * 60 * 24; // 24 hours

class TMDBApi {
  private static _instance: TMDBApi;
  private readonly apiKey = process.env.API_KEY;
  private readonly language = 'en-US';
  private readonly baseUrl = 'https://api.themoviedb.org/3';

  public get instance(): TMDBApi {
    if (!TMDBApi._instance) {
      TMDBApi._instance = new TMDBApi();
    }
    return TMDBApi._instance;
  }

  public getMovieById = async (
    id: number,
    fetchOpt: RequestInit
  ): Promise<IMovie | undefined> => {
    const response = await fetch(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&append_to_response=keywords,videos,images,recommendations,similar,reviews,credits&include_image_language=en,null`,
      fetchOpt
    );

    if (!response.ok) {
      return undefined;
    }

    return await response.json();
  };

  public getSeriesById = async (
    id: number,
    fetchOpt: RequestInit
  ): Promise<ITvShow | undefined> => {
    const response = await fetch(
      `${this.baseUrl}/tv/${id}?api_key=${this.apiKey}&append_to_response=keywords,videos,images,recommendations,similar,reviews,credits&include_image_language=en,null`,
      fetchOpt
    );

    if (!response.ok) {
      return undefined;
    }

    return await response.json();
  };

  public getTopRatedMovies = async (
    page = 1,
    fetchOpt: RequestInit
  ): Promise<IMovies> => {
    const response = await fetch(
      `${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}&${this.language}&page=${page}`,
      fetchOpt
    );
    return await response.json();
  };

  public getPopularSeries = async (
    page = 1,
    fetchOpt: RequestInit
  ): Promise<ITvShows> => {
    const response = await fetch(
      `${this.baseUrl}/tv/popular?api_key=${this.apiKey}&${this.language}&page=${page}`,
      fetchOpt
    );
    return await response.json();
  };
}

const TMDBInstance = new TMDBApi().instance;

export const {
  getMovieById,
  getTopRatedMovies,
  getSeriesById,
  getPopularSeries,
} = TMDBInstance;

// export const movieApi = createApi({
//   reducerPath: 'movieApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://api.themoviedb.org/3/',
//   }),
//   extractRehydrationInfo: (action, { reducerPath }) => {
//     if (action.type === HYDRATE) {
//       return action.payload[reducerPath];
//     }
//   },
//   endpoints: (builder) => ({
//     getMovieById: builder.query<IMovie, number>({
//       query: (id) => ({
//         url: `movie/${id}`,
//         params: {
//           api_key: process.env.NEXT_PUBLIC_API_KEY,
//           append_to_response:
//             'keywords,videos,images,recommendations,similar,reviews,credits',
//           include_image_language: 'en,null',
//         },
//       }),
//     }),
//     searchMovies: builder.query<ISearch, string>({
//       query: (searchQuery) => ({
//         url: 'search/multi',
//         params: {
//           api_key: process.env.NEXT_PUBLIC_API_KEY,
//           query: searchQuery,
//           page: 1,
//         },
//       }),
//     }),
//     getActorById: builder.query<IPerson, number>({
//       query: (id) => ({
//         url: `person/${id}`,
//         params: {
//           api_key: process.env.NEXT_PUBLIC_API_KEY,
//           append_to_response: 'combined_credits,images',
//         },
//       }),
//     }),
//     getTvShowById: builder.query<ITvShow, number>({
//       query: (id) => ({
//         url: `tv/${id}`,
//         params: {
//           api_key: process.env.NEXT_PUBLIC_API_KEY,
//           append_to_response:
//             'keywords,videos,images,recommendations,similar,reviews,credits',
//           include_image_language: 'en,null',
//         },
//       }),
//     }),
//     getPopularTvShows: builder.query<ITvShows, number>({
//       query: (page = 1) => ({
//         url: 'tv/popular',
//         params: {
//           api_key: process.env.NEXT_PUBLIC_API_KEY,
//           page,
//         },
//       }),
//     }),
//     getPopularMovies: builder.query<IMovies, number>({
//       query: (page = 1) => ({
//         url: 'movie/popular',
//         params: {
//           api_key: process.env.NEXT_PUBLIC_API_KEY,
//           page,
//         },
//       }),
//     }),
//     getNowPlayingMovies: builder.query<IMovies, number>({
//       query: (page = 1) => ({
//         url: 'movie/now_playing',
//         params: {
//           api_key: process.env.NEXT_PUBLIC_API_KEY,
//           page,
//           language: 'en-US',
//         },
//       }),
//     }),
//     getTopRatedMovies: builder.query<IMovies, number>({
//       query: (page = 1) => ({
//         url: 'movie/top_rated',
//         params: {
//           api_key: process.env.NEXT_PUBLIC_API_KEY,
//           page,
//           language: 'en-US',
//         },
//       }),
//     }),
//     getLatestSeries: builder.query<ITvShows, void>({
//       query: () => ({
//         url: 'tv/latest',
//         params: {
//           api_key: process.env.NEXT_PUBLIC_API_KEY,
//           language: 'en-US',
//         },
//       }),
//     }),
//     getTopRatedSeries: builder.query<ITvShows, number>({
//       query: (page = 1) => ({
//         url: 'tv/top_rated',
//         params: {
//           api_key: process.env.NEXT_PUBLIC_API_KEY,
//           page,
//           language: 'en-US',
//         },
//       }),
//     }),
//   }),
// });
//
// export const {
//   useGetMovieByIdQuery,
//   useLazySearchMoviesQuery,
//   useGetActorByIdQuery,
//   useGetTvShowByIdQuery,
//   useGetPopularTvShowsQuery,
//   useGetPopularMoviesQuery,
//   useGetNowPlayingMoviesQuery,
//   useGetTopRatedMoviesQuery,
//   useGetLatestSeriesQuery,
//   useGetTopRatedSeriesQuery,
//   util: { getRunningQueriesThunk },
// } = movieApi;
//
// export const {
//   getMovieById,
//   searchMovies,
//   getActorById,
//   getTvShowById,
//   getPopularTvShows,
//   getPopularMovies,
//   getNowPlayingMovies,
//   getTopRatedMovies,
//   getLatestSeries,
//   getTopRatedSeries,
// } = movieApi.endpoints;
