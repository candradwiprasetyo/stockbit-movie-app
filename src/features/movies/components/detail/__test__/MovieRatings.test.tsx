import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MovieRatings } from "../MovieRating";
import type { Rating } from "../../../types/movieDetail";

vi.mock("../../constants/ratingIcons", () => ({
  getRatingIcon: (source: string) => <span data-testid={`icon-${source}`} />,
}));

describe("MovieRatings Component", () => {
  const mockRatings: Rating[] = [
    { Source: "Internet Movie Database", Value: "8.8/10" },
    { Source: "Rotten Tomatoes", Value: "94%" },
    { Source: "Metacritic", Value: "74/100" },
  ];

  it("It should render the list of ratings correctly", () => {
    render(<MovieRatings ratings={mockRatings} />);

    expect(screen.getByText(/Internet Movie Database/i)).toBeDefined();
    expect(screen.getByText(/Rotten Tomatoes/i)).toBeDefined();
    expect(screen.getByText(/Metacritic/i)).toBeDefined();
  });

  it("It should return null and render nothing when ratings array is empty", () => {
    const { container } = render(<MovieRatings ratings={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("It should return null and render nothing when ratings prop is undefined", () => {
    const { container } = render(<MovieRatings ratings={undefined} />);
    expect(container.firstChild).toBeNull();
  });

  it("It should have the correct list styling classes", () => {
    render(<MovieRatings ratings={mockRatings} />);
    const listElement = screen.getByRole("list");
    expect(listElement.className).toContain("flex");
    expect(listElement.className).toContain("flex-col");
    expect(listElement.className).toContain("gap-2");
  });
});
