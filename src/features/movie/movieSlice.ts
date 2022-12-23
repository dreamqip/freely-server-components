import type { IRecommendedMovies, ISimilarMovies } from '@/types/movie';
import type { Images } from '@/types/images';
import type { IVideos } from '@/types/videos';
import type { IMovieCredits } from '@/types/credits';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IReviews } from '@/types/reviews';

interface MovieState {
  reviews: IReviews | null;
  images: Images | null;
  videos: IVideos | null;
  recommendations: IRecommendedMovies | null;
  similar: ISimilarMovies | null;
  credits: IMovieCredits | null;
}

const initialState: MovieState = {
  reviews: null,
  images: null,
  videos: null,
  recommendations: null,
  similar: null,
  credits: null,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setReviews: (state, action: PayloadAction<IReviews>) => {
      state.reviews = action.payload;
    },
    setImages: (state, action: PayloadAction<Images>) => {
      state.images = action.payload;
    },
    setVideos: (state, action: PayloadAction<IVideos>) => {
      state.videos = action.payload;
    },
    setRecommendations: (state, action: PayloadAction<IRecommendedMovies>) => {
      state.recommendations = action.payload;
    },
    setSimilar: (state, action: PayloadAction<ISimilarMovies>) => {
      state.similar = action.payload;
    },
    setCredits: (state, action: PayloadAction<IMovieCredits>) => {
      state.credits = action.payload;
    },
  },
});

export const {
  setImages,
  setVideos,
  setCredits,
  setRecommendations,
  setSimilar,
  setReviews,
} = movieSlice.actions;

export default movieSlice.reducer;
