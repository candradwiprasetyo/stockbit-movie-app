import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MovieRated } from "../MovieRated";

vi.mock("../../constants/ratingColors", () => ({
  ratingColors: {
    "PG-13": "yellow",
    R: "red",
    G: "green",
  },
}));

describe("MovieRated Component", () => {
  it("It should render the rated text correctly", () => {
    render(<MovieRated rated="PG-13" />);
    const element = screen.getByText("PG-13");
    expect(element).toBeDefined();
  });

  it("It should render the rated text even if provided in lowercase", () => {
    render(<MovieRated rated="pg-13" />);
    const element = screen.getByText("pg-13");
    expect(element).toBeDefined();
  });

  it("It should return null and render nothing when rated prop is missing", () => {
    const { container } = render(<MovieRated rated={undefined} />);
    expect(container.firstChild).toBeNull();
  });

  it("It should return null and render nothing when rated prop is an empty string", () => {
    const { container } = render(<MovieRated rated="" />);
    expect(container.firstChild).toBeNull();
  });

  it("It should render with the text 'UNKNOWN' when an unmapped rating is provided", () => {
    render(<MovieRated rated="UNKNOWN" />);

    const element = screen.getByText("UNKNOWN");
    expect(element).toBeDefined();
  });
});
