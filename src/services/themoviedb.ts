import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IMovie} from "../types/movie";

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/'
    }),
    endpoints: (builder) => ({
        getMovieById: builder.query<IMovie, any>({
            query: (id: any) => ({
                url: `movie/${id}`,
                params: {
                    api_key: process.env.NEXT_PUBLIC_API_KEY,
                    append_to_response: 'keywords,videos,images'
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
            query: ({searchQuery, page = 1}: {searchQuery: string, page: number}) => ({
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
    useGetActorByIdQuery
} = movieApi
