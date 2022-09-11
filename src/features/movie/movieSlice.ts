import {IMovie} from "@/types/movie";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Images} from "@/types/images";
import {IVideos} from "@/types/videos";
import {IReviews} from "@/types/reviews";

interface MovieState {
    id: number | null;
    movie: IMovie;
    images: Images;
    videos: IVideos;
    reviews: IReviews | null;
    recommendations: any | null;
    similar: any | null;
    cast: any | null;
}

const initialState: MovieState = {
    movie: {} as IMovie,
    id: null,
    images: {} as Images,
    videos: {} as IVideos,
    reviews: null,
    recommendations: null,
    similar: null,
    cast: null
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setId: (state, action: PayloadAction<number>) => {
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
        },
        setReviews: (state, action: PayloadAction<IReviews | any>) => {
            state.reviews = action.payload
        },
        setRecommendations: (state, action: PayloadAction<any>) => {
            state.recommendations = action.payload
        },
        setSimilar: (state, action: PayloadAction<any>) => {
            state.similar = action.payload
        },
        setCast: (state, action: PayloadAction<any>) => {
            state.cast = action.payload
        }
    }
})

export const {setId, setMovieDetails, setImages, setVideos, setCast, setRecommendations, setSimilar, setReviews} = movieSlice.actions

export default movieSlice.reducer
