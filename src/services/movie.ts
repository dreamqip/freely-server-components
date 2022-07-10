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
        })
    })
})

export const {useGetMovieByIdQuery, useGetMovieReviewsQuery} = movieApi
