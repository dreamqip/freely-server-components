import type { IMovie, IRecommendedMovies, ISimilarMovies } from '@/types/movie';
import type { Images } from '@/types/images';
import type { IVideos } from '@/types/videos';
import type { IReviews } from '@/types/reviews';
import type { IMovieCredits } from '@/types/credits';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MovieState {
  id: number | null;
  movie: IMovie | null;
  images: Images | null;
  videos: IVideos | null;
  reviews: IReviews | null;
  recommendations: IRecommendedMovies | null;
  similar: ISimilarMovies | null;
  credits: IMovieCredits | null;
}

const initialState: MovieState = {
  id: null,
  movie: null,
  images: null,
  videos: null,
  reviews: null,
  recommendations: null,
  similar: null,
  credits: null,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    setMovieDetails: (state, action: PayloadAction<IMovie>) => {
      state.movie = action.payload;
    },
    setImages: (state, action: PayloadAction<Images>) => {
      state.images = action.payload;
    },
    setVideos: (state, action: PayloadAction<IVideos>) => {
      state.videos = action.payload;
    },
    setReviews: (state, action: PayloadAction<IReviews>) => {
      state.reviews = action.payload;
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
  setId,
  setMovieDetails,
  setImages,
  setVideos,
  setCredits,
  setRecommendations,
  setSimilar,
  setReviews,
} = movieSlice.actions;

export default movieSlice.reducer;
