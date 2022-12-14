import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IMovie } from '@/types/movie';

interface InitialState {
  movies: IMovie[];
  page: number;
  totalPages: number;
}

const initialState: InitialState = {
  movies: [],
  page: 1,
  totalPages: 100,
};

export const popularSlice = createSlice({
  name: 'popularMovies',
  initialState,
  reducers: {
    setPopularMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.movies.push(...action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    reset: (state) => {
      state.movies = [];
      state.page = 1;
      state.totalPages = 100;
    },
  },
});

export const { setPopularMovies, setPage, setTotalPages, reset } =
  popularSlice.actions;

export default popularSlice.reducer;
