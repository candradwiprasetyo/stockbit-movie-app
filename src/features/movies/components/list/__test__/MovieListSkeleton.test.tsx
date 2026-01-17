import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MovieListSkeleton } from "../MovieListSkeleton";

vi.mock("../MovieCardSkeleton", () => {
  return {
    MovieCardSkeleton: () => <div data-testid="movie-card-skeleton" />,
  };
});

describe("MovieListSkeleton", () => {
  it("It should render the default number of skeletons (10)", () => {
    render(<MovieListSkeleton />);
    const skeletons = screen.getAllByTestId("movie-card-skeleton");
    expect(skeletons).toHaveLength(10);
  });

  it("It should render the specific number of skeletons provided via count prop", () => {
    render(<MovieListSkeleton count={5} />);

    const skeletons = screen.getAllByTestId("movie-card-skeleton");
    expect(skeletons).toHaveLength(5);
  });

  it("It should have correct grid layout classes", () => {
    const { container } = render(<MovieListSkeleton />);
    const gridDiv = container.firstChild;

    expect(gridDiv).toHaveClass("grid");
    expect(gridDiv).toHaveClass("grid-cols-2");
    expect(gridDiv).toHaveClass("md:grid-cols-5");
  });
});
