import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IMovie} from "@/types/movie";
import {HYDRATE} from "next-redux-wrapper";

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
            query: ({searchQuery, page = 1}: { searchQuery: string, page: number }) => ({
                url: 'search/multi',
                params: {
                    api_key: process.env.NEXT_PUBLIC_API_KEY,
                    query: searchQuery,
                    page: page
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
    util: {getRunningOperationPromises}
} = movieApi;

export const {
    getMovieById,
    getMovieReviews,
    getMovieCredits,
    getSimilarMovies,
    getRecommendedMovies,
    searchMovies,
    getActorById
} = movieApi.endpoints;
