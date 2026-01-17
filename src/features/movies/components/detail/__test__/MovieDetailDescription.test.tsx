import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MovieDetailDescription } from "../MovieDetailDescription";
import type { MovieDetail } from "../../../types/movieDetail";

vi.mock("./MovieDetailItem", () => ({
  movieDetailsList: (movie: MovieDetail) => [
    { label: "Director", value: movie.Director },
    { label: "Actors", value: movie.Actors },
    { label: "Writer", value: movie.Writer },
  ],
}));

describe("MovieDetailDescription Component", () => {
  const mockMovie: MovieDetail = {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action",
    Director: "Christopher Nolan",
    Writer: "Nolan Brothers",
    Actors: "Leonardo DiCaprio",
    Plot: "A thief steals secrets...",
    Language: "English",
    Country: "USA",
    Awards: "N/A",
    Poster: "inception.jpg",
    Ratings: [],
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "N/A",
    imdbID: "tt1",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
  };

  it("It should render all detail labels correctly from the movie object", () => {
    render(<MovieDetailDescription movie={mockMovie} />);

    expect(screen.getByText(/Director/i)).toBeDefined();
    expect(screen.getByText(/Actors/i)).toBeDefined();
    expect(screen.getByText(/Writer/i)).toBeDefined();
  });

  it("It should render the correct values for each detail item", () => {
    render(<MovieDetailDescription movie={mockMovie} />);

    expect(screen.getByText("Christopher Nolan")).toBeDefined();
    expect(screen.getByText("Leonardo DiCaprio")).toBeDefined();
    expect(screen.getByText("Nolan Brothers")).toBeDefined();
  });

  it("It should have the correct responsive grid layout classes", () => {
    const { container } = render(<MovieDetailDescription movie={mockMovie} />);

    const wrapper = container.firstChild as HTMLElement;

    const expectedClasses = ["grid", "grid-cols-1", "md:grid-cols-2"];
    expectedClasses.forEach((className) => {
      expect(wrapper.classList.contains(className)).toBe(true);
    });
  });
});
