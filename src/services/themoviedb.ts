import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IMovie} from "@/types/movie";
import {HYDRATE} from "next-redux-wrapper";
import {ITvShow} from "@/types/series";

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/'
    }),
    extractRehydrationInfo: (action, {reducerPath}) => {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (builder) => ({
        getMovieById: builder.query<IMovie, number>({
            query: (id: number) => ({
                url: `movie/${id}`,
                params: {
                    api_key: process.env.NEXT_PUBLIC_API_KEY,
                    append_to_response: 'keywords,videos,images',
                    include_image_language: 'en,null'
                }
            })
        }),
        getMovieReviews: builder.query({
            query: (id: any) => ({
                url: `movie/${id}/reviews`,
                params: {
                    api_key: process.env.NEXT_PUBLIC_API_KEY,
                    page: 1
                }
            })
        }),
        getMovieCredits: builder.query({
            query: (id: any) => ({
                url: `movie/${id}/credits`,
                params: {
                    api_key: process.env.NEXT_PUBLIC_API_KEY
                }
            })
        }),
        getSimilarMovies: builder.query({
            query: (id: any) => ({
                url: `movie/${id}/similar`,
                params: {
                    api_key: process.env.NEXT_PUBLIC_API_KEY,
                    page: 1
                }
            })
        }),
        getRecommendedMovies: builder.query({
            query: (id: any) => ({
                url: `movie/${id}/recommendations`,
                params: {
                    api_key: process.env.NEXT_PUBLIC_API_KEY,
                    page: 1
                }
            })
        }),
        searchMovies: builder.query({
            query: (searchQuery: string) => ({
                url: 'search/multi',
                params: {
                    api_key: process.env.NEXT_PUBLIC_API_KEY,
                    query: searchQuery,
                    page: 1,
                }
            })
        }),
        getActorById: builder.query({
            query: (id: any) => ({
                url: `person/${id}`,
                params: {
                    api_key: process.env.NEXT_PUBLIC_API_KEY,
                    append_to_response: 'combined_credits,images'
                }
            })
        }),
        getTvShowById: builder.query<ITvShow, number>({
            query: (id: number) => ({
                url: `tv/${id}`,
                params: {
                    api_key: process.env.NEXT_PUBLIC_API_KEY,
                    append_to_response: 'keywords,videos,images,recommendations,similar,reviews,credits',
                    include_image_language: 'en,null'
                }
            })
        }),
        getPopularTvShows: builder.query({
            query: (page: number = 1) => ({
                url: 'tv/popular',
                params: {
                    api_key: process.env.NEXT_PUBLIC_API_KEY,
                    page
                }
            })
        }),
        getPopularMovies: builder.query({
            query: (page: number = 1) => ({
                url: 'movie/popular',
                params: {
                    api_key: process.env.NEXT_PUBLIC_API_KEY,
                    page
                }
            })
        })
    })
})

export const {
    useGetMovieByIdQuery,
    useGetMovieReviewsQuery,
    useGetMovieCreditsQuery,
    useGetSimilarMoviesQuery,
    useGetRecommendedMoviesQuery,
    useSearchMoviesQuery,
    useGetActorByIdQuery,
    useGetTvShowByIdQuery,
    useGetPopularTvShowsQuery,
    useGetPopularMoviesQuery,
    util: {getRunningOperationPromises}
} = movieApi;

export const {
    getMovieById,
    searchMovies,
    getActorById,
    getTvShowById,
    getPopularTvShows,
    getPopularMovies
} = movieApi.endpoints;
