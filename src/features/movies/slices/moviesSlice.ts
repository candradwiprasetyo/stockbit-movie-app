import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { MoviesState } from "../types/movie";
import { fetchMoviesApi } from "../api/moviesApi";

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: null,
  page: 1,
  hasMore: true,
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ keyword, page }: { keyword: string; page: number }) => {
    return await fetchMoviesApi(keyword, page);
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies =
          state.page === 1
            ? action.payload.movies
            : [...state.movies, ...action.payload.movies];

        state.hasMore = state.movies.length < action.payload.totalResults;

        state.page += 1;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default moviesSlice.reducer;
