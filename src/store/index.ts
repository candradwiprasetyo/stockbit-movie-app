import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movies/slices/moviesSlice";
import movieDetailReducer from "@/features/movies/slices/movieDetailSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieDetail: movieDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
