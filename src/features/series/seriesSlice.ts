import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITvShow} from "@/types/series";
import {Images} from "@/types/images";
import {IVideos} from "@/types/videos";
import {IReviews} from "@/types/reviews";

interface InitialState {
    id: number | null;
    series: ITvShow | null;
    images: Images | null;
    videos: IVideos | null;
    reviews: IReviews | null;
    recommendations: any | null;
    similar: any | null;
    cast: any | null;
}

const initialState: InitialState = {
    id: null,
    series: null,
    images: null,
    videos: null,
    reviews: null,
    recommendations: null,
    similar: null,
    cast: null
}

const seriesSlice = createSlice({
    name: 'series',
    initialState,
    reducers: {
        setSeries: (state, action: PayloadAction<ITvShow>) => {
            state.series = action.payload;
        },
        setSeriesImages: (state, action: PayloadAction<Images>) => {
            state.images = action.payload;
        },
        setSeriesVideos: (state, action: PayloadAction<IVideos>) => {
            state.videos = action.payload;
        },
        setSeriesId: (state, action: PayloadAction<number>) => {
            state.id = action.payload;
        },
        setSeriesReviews: (state, action: PayloadAction<IReviews>) => {
            state.reviews = action.payload;
        },
        setSeriesRecommendations: (state, action: PayloadAction<any>) => {
            state.recommendations = action.payload;
        },
        setSeriesSimilar: (state, action: PayloadAction<any>) => {
            state.similar = action.payload;
        },
        setSeriesCast: (state, action: PayloadAction<any>) => {
            state.cast = action.payload;
        }
    }
})

export const {
    setSeries,
    setSeriesVideos,
    setSeriesImages,
    setSeriesId,
    setSeriesRecommendations,
    setSeriesReviews,
    setSeriesSimilar,
    setSeriesCast
} = seriesSlice.actions;

export default seriesSlice.reducer;
