import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("../../api/movieDetailApi", () => ({
  fetchMovieDetailApi: vi.fn(),
}));

import reducer, {
  fetchMovieDetail,
  clearMovieDetail,
} from "../movieDetailSlice";
import { fetchMovieDetailApi } from "../../api/movieDetailApi";
import type { MovieDetail } from "../../types/movieDetail";

describe("movieDetailSlice", () => {
  const initialState = {
    movie: null,
    loading: false,
    error: null,
  };

  const mockMovie: MovieDetail = {
    imdbID: "tt123",
    Title: "Hulk",
    Year: "2003",
    Rated: "PG-13",
    Released: "20 Jun 2003",
    Runtime: "138 min",
    Genre: "Action, Sci-Fi",
    Director: "Ang Lee",
    Writer: "Stan Lee",
    Actors: "Eric Bana, Jennifer Connelly",
    Plot: "Bruce Banner, a genetics researcher...",
    Language: "English",
    Country: "USA",
    Awards: "1 win & 12 nominations",
    Poster: "https://example.com/hulk.jpg",
    Ratings: [],
    Metascore: "54",
    imdbRating: "5.6",
    imdbVotes: "250,000",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "Universal Pictures",
    Website: "N/A",
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should handle clearMovieDetail reducer", () => {
    const stateWithMovie = { ...initialState, movie: mockMovie };
    const state = reducer(stateWithMovie, clearMovieDetail());
    expect(state.movie).toBeNull();
  });

  it("should handle fetchMovieDetail.pending", () => {
    const action = { type: fetchMovieDetail.pending.type };
    const state = reducer(initialState, action);
    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  it("should handle fetchMovieDetail.fulfilled", () => {
    const action = {
      type: fetchMovieDetail.fulfilled.type,
      payload: mockMovie,
    };
    const state = reducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.movie).toEqual(mockMovie);
  });

  it("should handle fetchMovieDetail.rejected", () => {
    const action = {
      type: fetchMovieDetail.rejected.type,
      error: { message: "Network Error" },
    };
    const state = reducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBe("Network Error");
  });

  it("should call fetchMovieDetailApi with correct ID when thunk is dispatched", async () => {
    const mockedApi = vi.mocked(fetchMovieDetailApi);
    mockedApi.mockResolvedValueOnce(mockMovie);

    const dispatch = vi.fn();
    const getState = vi.fn();

    const thunk = fetchMovieDetail("tt123");
    await thunk(dispatch, getState, undefined);

    expect(mockedApi).toHaveBeenCalledWith("tt123");
    expect(mockedApi).toHaveBeenCalledTimes(1);
  });
});
