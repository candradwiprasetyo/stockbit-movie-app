import { describe, it, expect, vi, beforeEach } from "vitest";
import reducer, {
  setKeyword,
  fetchMovies,
  DEFAULT_KEYWORD,
} from "../moviesSlice";
import type { MoviesState } from "../../types/movie";
import * as api from "../../api/moviesApi";

describe("moviesSlice", () => {
  const initialState: MoviesState = {
    movies: [],
    loading: false,
    error: null,
    page: 1,
    hasMore: true,
    keyword: DEFAULT_KEYWORD,
  };

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("It should handle setKeyword reducer correctly", () => {
    const state = reducer(
      {
        ...initialState,
        movies: [
          {
            imdbID: "1",
            Title: "Film Candra",
            Year: "2025",
            Type: "movie",
            Poster: "N/A",
          },
        ],
      },
      setKeyword("Candra")
    );

    expect(state.keyword).toBe("Candra");
    expect(state.page).toBe(1);
    expect(state.movies).toEqual([]);
    expect(state.hasMore).toBe(true);
  });

  it("It should handle fetchMovies.pending", () => {
    const action = { type: fetchMovies.pending.type };
    const state = reducer(initialState, action);
    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  it("It should handle fetchMovies.fulfilled for page 1", () => {
    const moviesPayload = {
      movies: [
        {
          imdbID: "1",
          Title: "Saolin Soccer",
          Year: "2025",
          Type: "movie",
          Poster: "N/A",
        },
      ],
      totalResults: 10,
    };
    const action = {
      type: fetchMovies.fulfilled.type,
      payload: moviesPayload,
      meta: { arg: { keyword: "Hulk", page: 1 } },
    };
    const state = reducer(
      {
        ...initialState,
        movies: [
          {
            imdbID: "1",
            Title: "Saolin Soccer",
            Year: "2025",
            Type: "movie",
            Poster: "N/A",
          },
        ],
      },
      action
    );
    expect(state.loading).toBe(false);
    expect(state.movies).toEqual(moviesPayload.movies);
    expect(state.hasMore).toBe(true);
    expect(state.page).toBe(2);
  });

  it("It should handle fetchMovies.fulfilled for page > 1 and remove duplicates", () => {
    const existingMovies = [
      {
        imdbID: "1",
        Title: "Avatar",
        Year: "2025",
        Type: "movie",
        Poster: "N/A",
      },
      {
        imdbID: "2",
        Title: "Agak Laen",
        Year: "2025",
        Type: "movie",
        Poster: "N/A",
      },
    ];
    const newMovies = [
      {
        imdbID: "2",
        Title: "Agak Laen",
        Year: "2025",
        Type: "movie",
        Poster: "N/A",
      },
      {
        imdbID: "3",
        Title: "Jumbo",
        Year: "2025",
        Type: "movie",
        Poster: "N/A",
      },
    ];
    const moviesPayload = { movies: newMovies, totalResults: 10 };
    const action = {
      type: fetchMovies.fulfilled.type,
      payload: moviesPayload,
      meta: { arg: { keyword: "Hulk", page: 2 } },
    };
    const state = reducer(
      { ...initialState, movies: existingMovies, page: 2 },
      action
    );
    expect(state.movies).toEqual([
      {
        imdbID: "1",
        Title: "Avatar",
        Year: "2025",
        Type: "movie",
        Poster: "N/A",
      },
      {
        imdbID: "2",
        Title: "Agak Laen",
        Year: "2025",
        Type: "movie",
        Poster: "N/A",
      },
      {
        imdbID: "3",
        Title: "Jumbo",
        Year: "2025",
        Type: "movie",
        Poster: "N/A",
      },
    ]);
    expect(state.page).toBe(3);
  });

  it("It should handle fetchMovies.rejected", () => {
    const action = {
      type: fetchMovies.rejected.type,
      error: { message: "Failed" },
    };
    const state = reducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBe("Failed");
  });

  it("It should call fetchMoviesApi when dispatching fetchMovies thunk", async () => {
    const mockResponse = {
      movies: [
        {
          imdbID: "1",
          Title: "Rumah Dinas Bapak",
          Year: "2020",
          Type: "movie",
          Poster: "N/A",
        },
      ],
      totalResults: 1,
    };
    const fetchSpy = vi
      .spyOn(api, "fetchMoviesApi")
      .mockResolvedValue(mockResponse);

    const dispatchMock = vi.fn();
    const getStateMock = vi.fn();

    await fetchMovies({ keyword: "Rumah", page: 1 })(
      dispatchMock,
      getStateMock,
      undefined
    );

    expect(fetchSpy).toHaveBeenCalledWith("Rumah", 1);
  });
});
