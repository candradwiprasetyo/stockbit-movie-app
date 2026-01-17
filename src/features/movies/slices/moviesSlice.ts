import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { MoviesState } from "../types/movie";
import { fetchMoviesApi } from "../api/moviesApi";

export const DEFAULT_KEYWORD = "movie";

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: null,
  page: 1,
  hasMore: true,
  keyword: DEFAULT_KEYWORD,
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
  reducers: {
    setKeyword(state, action) {
      state.keyword = action.payload;
      state.page = 1;
      state.movies = [];
      state.hasMore = true;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;

        if (action.meta.arg.page === 1) {
          state.movies = action.payload.movies;
        } else {
          const newMovies = action.payload.movies.filter(
            (nm) => !state.movies.find((m) => m.imdbID === nm.imdbID)
          );
          state.movies = [...state.movies, ...newMovies];
        }

        state.hasMore = state.movies.length < action.payload.totalResults;
        state.page = action.meta.arg.page + 1;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export const { setKeyword } = moviesSlice.actions;

export default moviesSlice.reducer;
