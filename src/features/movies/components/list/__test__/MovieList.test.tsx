import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, type Mock } from "vitest";
import { MemoryRouter } from "react-router-dom";
import type { Movie } from "@/features/movies/types/movie";

vi.mock("../MovieCard", () => ({
  MovieCard: ({ movie }: { movie: Movie }) => (
    <div data-testid="movie-card">{movie.Title}</div>
  ),
}));

const { MovieList } = await import("../MovieList");

const mockMovies: Movie[] = [
  {
    imdbID: "tt1",
    Title: "Inception",
    Year: "2010",
    Poster: "N/A",
    Type: "movie",
  },
  {
    imdbID: "tt2",
    Title: "Interstellar",
    Year: "2014",
    Poster: "N/A",
    Type: "movie",
  },
];

describe("MovieList Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("It should render the correct number of movie cards based on movies prop", async () => {
    render(
      <MemoryRouter>
        <MovieList movies={mockMovies} />
      </MemoryRouter>
    );

    const cards = screen.getAllByTestId("movie-card");
    expect(cards).toHaveLength(mockMovies.length);
    expect(screen.getByText("Inception")).toBeDefined();
  });

  it("It should call lastItemRef when the last movie in the list is rendered", () => {
    const lastItemRef = vi.fn() as Mock<(node: HTMLDivElement | null) => void>;

    render(
      <MemoryRouter>
        <MovieList movies={mockMovies} lastItemRef={lastItemRef} />
      </MemoryRouter>
    );

    expect(lastItemRef).toHaveBeenCalled();

    const cards = screen.getAllByTestId("movie-card");
    const lastCardWrapper = cards[cards.length - 1].parentElement;

    expect(lastItemRef).toHaveBeenCalledWith(lastCardWrapper);
  });
});
