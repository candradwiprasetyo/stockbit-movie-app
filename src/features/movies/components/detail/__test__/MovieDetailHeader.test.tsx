import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MovieDetailHeader } from "../MovieDetailHeader";

vi.mock("./MovieRated", () => ({
  MovieRated: ({ rated }: { rated: string }) => (
    <div data-testid="movie-rated-badge">{rated}</div>
  ),
}));

vi.mock("lucide-react", () => ({
  Calendar: () => <svg data-testid="calendar-icon" />,
  Clock: () => <svg data-testid="clock-icon" />,
}));

describe("MovieDetailHeader Component", () => {
  const mockMovieHeader = {
    Title: "Interstellar",
    Rated: "PG-13",
    Year: "2014",
    Runtime: "169 min",
  };

  it("It should render the movie title as an h1 heading", () => {
    render(<MovieDetailHeader movie={mockMovieHeader} />);

    const titleElement = screen.getByRole("heading", { level: 1 });
    expect(titleElement.textContent).toBe("Interstellar");
    expect(titleElement.className).toContain("text-yellow-500");
  });

  it("It should display the release year with the calendar icon", () => {
    render(<MovieDetailHeader movie={mockMovieHeader} />);

    expect(screen.getByText("2014")).toBeDefined();
    expect(screen.getByTestId("calendar-icon")).toBeDefined();
  });

  it("It should display the movie runtime with the clock icon", () => {
    render(<MovieDetailHeader movie={mockMovieHeader} />);

    expect(screen.getByText("169 min")).toBeDefined();
    expect(screen.getByTestId("clock-icon")).toBeDefined();
  });

  it("It should have a flex layout with correct spacing for the metadata row", () => {
    const { container } = render(<MovieDetailHeader movie={mockMovieHeader} />);

    const metadataRow = container.querySelector(".flex.gap-4");
    expect(metadataRow).not.toBeNull();
    expect(metadataRow?.className).toContain("text-gray-400");
  });
});
