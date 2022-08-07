import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import {IMovie} from "@/types/movie";

interface InitialState {
    movies: IMovie[];
    page: number;
    totalPages: number;
}

const initialState: InitialState = {
    movies: [],
    page: 1,
    totalPages: 100
}

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
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            state.movies = action.payload.popularMovies.series;
            state.page = action.payload.popularMovies.page;
            state.totalPages = action.payload.popularMovies.totalPages;
        }
    }
});

export const {setPopularMovies, setPage, setTotalPages, reset} = popularSlice.actions;

export default popularSlice.reducer;
