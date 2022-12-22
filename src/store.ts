import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { movieApi } from '@/services/themoviedb';
import { createWrapper } from 'next-redux-wrapper';
import movieReducer from '@/features/movie/movieSlice';
import searchReducer from '@/features/search/searchSlice';
import seriesReducer from '@/features/series/seriesSlice';
import roomReducer from '@/features/room/roomSlice';
import popularSeriesReducer from '@/features/series/popularSlice';
import popularMoviesReducer from '@/features/movie/popularSlice';

// export const APP_HYDRATE = createAction<RootState>(HYDRATE);

export const rootReducer = combineReducers({
  [movieApi.reducerPath]: movieApi.reducer,
  movie: movieReducer,
  search: searchReducer,
  series: seriesReducer,
  room: roomReducer,
  popularSeries: popularSeriesReducer,
  popularMovies: popularMoviesReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (gDM) => gDM().concat(movieApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});

export default wrapper.useWrappedStore;
