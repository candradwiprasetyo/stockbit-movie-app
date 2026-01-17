import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { MovieCard } from "../MovieCard";
import type { Movie } from "../../../types/movie";

const mockMovie: Movie = {
  imdbID: "tt0120338",
  Title: "Titanic",
  Year: "1997",
  Poster: "https://example.com/poster.jpg",
  Type: "movie",
};

describe("MovieCard Component", () => {
  beforeEach(() => {
    document.body.style.overflow = "auto";
  });

  const renderComponent = (movie = mockMovie) => {
    return render(
      <MemoryRouter>
        <MovieCard movie={movie} />
      </MemoryRouter>
    );
  };

  it("It should render movie title and year correctly", () => {
    renderComponent();

    expect(screen.getByText(mockMovie.Title)).toBeDefined();
    expect(screen.getByText(mockMovie.Year)).toBeDefined();

    const image = screen.getByRole("img");
    expect(image.getAttribute("src")).toBe(mockMovie.Poster);
    expect(image.getAttribute("alt")).toBe(mockMovie.Title);
  });

  it("It should have correct navigation link to detail page", () => {
    renderComponent();

    const links = screen.getAllByRole("link");
    const detailPath = `/movies/${mockMovie.imdbID}`;

    links.forEach((link) => {
      expect(link.getAttribute("href")).toBe(detailPath);
    });
  });

  it("It should open modal and change body overflow when image is clicked", () => {
    renderComponent();

    const image = screen.getByRole("img");
    fireEvent.click(image);
    expect(document.body.style.overflow).toBe("hidden");
  });

  it("It should reset body overflow when unmounted", () => {
    const { unmount } = renderComponent();

    const image = screen.getByRole("img");
    fireEvent.click(image);
    expect(document.body.style.overflow).toBe("hidden");

    unmount();

    expect(document.body.style.overflow).toBe("auto");
  });
});
