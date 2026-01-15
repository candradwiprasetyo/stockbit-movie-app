import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { MovieDetail } from "../types/movieDetail";
import { fetchMovieDetailApi } from "../api/movieDetailApi";

interface MovieDetailState {
  movie: MovieDetail | null;
  loading: boolean;
  error: string | null;
}

const initialState: MovieDetailState = {
  movie: null,
  loading: false,
  error: null,
};

export const fetchMovieDetail = createAsyncThunk(
  "movieDetail/fetch",
  async (imdbID: string) => {
    return await fetchMovieDetailApi(imdbID);
  }
);

const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {
    clearMovieDetail: (state) => {
      state.movie = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.movie = action.payload;
      })
      .addCase(fetchMovieDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch movie";
      });
  },
});

export const { clearMovieDetail } = movieDetailSlice.actions;
export default movieDetailSlice.reducer;
