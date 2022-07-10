import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {movieApi} from "./services/movie";
import {setupListeners} from "@reduxjs/toolkit/query";
import movieReducer from './features/movie/movieSlice'

export const rootReducer = combineReducers({
    [movieApi.reducerPath]: movieApi.reducer,
    movie: movieReducer
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
