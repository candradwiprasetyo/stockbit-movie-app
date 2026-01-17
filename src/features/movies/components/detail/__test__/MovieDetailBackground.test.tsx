import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MovieDetailBackground } from "../MovieDetailBackground";

describe("MovieDetailBackground Component", () => {
  const mockPoster = "https://example.com/poster.jpg";
  const mockChildren = <div data-testid="child-element">Content</div>;

  it("It should render the children correctly", () => {
    render(
      <MovieDetailBackground poster={null}>
        {mockChildren}
      </MovieDetailBackground>
    );

    expect(screen.getByTestId("child-element")).toBeDefined();
    expect(screen.getByText("Content")).toBeDefined();
  });

  it("It should render the dark overlay when a poster is present", () => {
    const { container } = render(
      <MovieDetailBackground poster={mockPoster}>
        {mockChildren}
      </MovieDetailBackground>
    );

    const overlay = container.querySelector(".opacity-90");
    expect(overlay).not.toBeNull();
    expect(overlay?.className).toContain("bg-black");
  });

  it("It should not apply backgroundImage style when poster is null or empty", () => {
    const { container } = render(
      <MovieDetailBackground poster={null}>
        {mockChildren}
      </MovieDetailBackground>
    );

    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv.style.backgroundImage).toBe("");
  });

  it("It should not render the dark overlay when poster is absent", () => {
    const { container } = render(
      <MovieDetailBackground poster="">{mockChildren}</MovieDetailBackground>
    );

    const overlay = container.querySelector(".opacity-90");
    expect(overlay).toBeNull();
  });

  it("It should have the correct container classes for background styling", () => {
    const { container } = render(
      <MovieDetailBackground poster={mockPoster}>
        {mockChildren}
      </MovieDetailBackground>
    );

    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv.className).toContain("bg-cover");
    expect(mainDiv.className).toContain("bg-center");
  });
});
