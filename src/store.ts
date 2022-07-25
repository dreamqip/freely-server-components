import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {movieApi} from "./services/themoviedb";
import movieReducer from './features/movie/movieSlice';
import searchReducer from './features/search/searchSlice';
import {createWrapper} from "next-redux-wrapper";

export const rootReducer = combineReducers({
    [movieApi.reducerPath]: movieApi.reducer,
    movie: movieReducer,
    search: searchReducer
})

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: (gDM) =>
            gDM().concat(movieApi.middleware),
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<AppStore['getState']>

export const wrapper = createWrapper<AppStore>(makeStore, {debug: process.env.NODE_ENV !== 'production'})
