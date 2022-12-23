import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ITvShowRecommendations, ITvShowSimilar } from '@/types/series';
import type { Images } from '@/types/images';
import type { IVideos } from '@/types/videos';
import type { ITvShowCredits } from '@/types/credits';
import type { IReviews } from '@/types/reviews';

interface InitialState {
  reviews: IReviews | null;
  images: Images | null;
  videos: IVideos | null;
  recommendations: ITvShowRecommendations | null;
  similar: ITvShowSimilar | null;
  credits: ITvShowCredits | null;
}

const initialState: InitialState = {
  reviews: null,
  images: null,
  videos: null,
  recommendations: null,
  similar: null,
  credits: null,
};

const seriesSlice = createSlice({
  name: 'series',
  initialState,
  reducers: {
    setSeriesReviews(state, action: PayloadAction<IReviews>) {
      state.reviews = action.payload;
    },
    setSeriesImages: (state, action: PayloadAction<Images>) => {
      state.images = action.payload;
    },
    setSeriesVideos: (state, action: PayloadAction<IVideos>) => {
      state.videos = action.payload;
    },
    setSeriesRecommendations: (
      state,
      action: PayloadAction<ITvShowRecommendations>
    ) => {
      state.recommendations = action.payload;
    },
    setSeriesSimilar: (state, action: PayloadAction<ITvShowSimilar>) => {
      state.similar = action.payload;
    },
    setSeriesCredits: (state, action: PayloadAction<ITvShowCredits>) => {
      state.credits = action.payload;
    },
  },
});

export const {
  setSeriesReviews,
  setSeriesVideos,
  setSeriesImages,
  setSeriesRecommendations,
  setSeriesSimilar,
  setSeriesCredits,
} = seriesSlice.actions;

export default seriesSlice.reducer;
