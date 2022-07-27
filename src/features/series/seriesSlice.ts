import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITvShow} from "@/types/series";
import {Images} from "@/types/images";
import {IVideos} from "@/types/videos";

interface InitialState {
    id: number | null;
    series: ITvShow | null;
    images: Images | null;
    videos: IVideos | null;
}

const initialState: InitialState = {
    id: null,
    series: null,
    images: null,
    videos: null
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
        }
    }
})

export const {setSeries, setSeriesVideos, setSeriesImages, setSeriesId} = seriesSlice.actions;

export default seriesSlice.reducer;
