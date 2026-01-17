import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { MovieDetailView } from "../MovieDetail";
import type { MovieDetail } from "../../../types/movieDetail";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const mockMovie: MovieDetail = {
  Title: "Inception",
  Year: "2010",
  Rated: "PG-13",
  Released: "16 Jul 2010",
  Runtime: "148 min",
  Genre: "Action",
  Director: "Christopher Nolan",
  Writer: "N/A",
  Actors: "N/A",
  Plot: "A thief steals secrets...",
  Language: "English",
  Country: "USA",
  Awards: "N/A",
  Poster: "inception.jpg",
  Ratings: [{ Source: "IMDB", Value: "8.8/10" }],
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

describe("MovieDetailView Component", () => {
  it("It should render the movie poster using alt text", () => {
    render(
      <MemoryRouter>
        <MovieDetailView movie={mockMovie} />
      </MemoryRouter>
    );

    const img = screen.getByAltText(mockMovie.Title);
    expect(img).toBeDefined();
    expect(img.getAttribute("src")).toBe(mockMovie.Poster);
  });

  it("It should display the movie title correctly", () => {
    render(
      <MemoryRouter>
        <MovieDetailView movie={mockMovie} />
      </MemoryRouter>
    );

    expect(screen.getAllByText(mockMovie.Title)).toBeDefined();
  });

  it("It should call navigate with -1 when the Back button is clicked", () => {
    render(
      <MemoryRouter>
        <MovieDetailView movie={mockMovie} />
      </MemoryRouter>
    );

    const backButton = screen.getByRole("button", { name: /back/i });
    fireEvent.click(backButton);

    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
