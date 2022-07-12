import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {movieApi} from "./services/themoviedb";
import {setupListeners} from "@reduxjs/toolkit/query";
import movieReducer from './features/movie/movieSlice'
import searchReducer from './features/search/searchSlice'

export const rootReducer = combineReducers({
    [movieApi.reducerPath]: movieApi.reducer,
    movie: movieReducer,
    search: searchReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(movieApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
