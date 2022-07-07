import {IMovie} from "../../types/movie";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Images} from "../../types/images";
import {IVideos} from "../../types/videos";

interface MovieState {
    movie: IMovie;
    id: string | null;
    images: Images;
    videos: IVideos;
}

const initialState: MovieState = {
    movie: {} as IMovie,
    id: null,
    images: {} as Images,
    videos: {} as IVideos
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setId: (state, action: PayloadAction<any>) => {
            state.id = action.payload
        },
        setMovieDetails: (state, action: PayloadAction<IMovie | any>) => {
            state.movie = action.payload
        },
        setImages: (state, action: PayloadAction<Images | any>) => {
            state.images = action.payload
        },
        setVideos: (state, action: PayloadAction<IVideos | any>) => {
            state.videos = action.payload
        }
    }
})

export const {setId, setMovieDetails, setImages, setVideos} = movieSlice.actions

export default movieSlice.reducer
