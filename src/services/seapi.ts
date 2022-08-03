import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {HYDRATE} from "next-redux-wrapper";


export const seapiApi = createApi({
    reducerPath: 'seapiApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://cors-anywhere.herokuapp.com/https://seapi.link/'}),
    extractRehydrationInfo: (action, {reducerPath}) => {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (builder) => ({
        getMovieLinkById: builder.query<any, number>({
            query: (id: number) => ({
                url: ``,
                params: {
                    type: 'tmdb',
                    id,
                    max_results: 1
                }
            })
        }),
        getTvShowLinkById: builder.query<any, any>({
            query: ({id, season, episode}: {id: number, season: number, episode: number}) => ({
                url: ``,
                params: {
                    type: 'tmdb',
                    id,
                    max_results: 1,
                    season,
                    episode
                }
            })
        })
    })
})

export const {useGetMovieLinkByIdQuery, useGetTvShowLinkByIdQuery} = seapiApi;
