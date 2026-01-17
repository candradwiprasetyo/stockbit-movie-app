import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MovieCardSkeleton } from "../MovieCardSkeleton";

describe("MovieCardSkeleton", () => {
  it("It should render correctly with pulse animation class", () => {
    const { container } = render(<MovieCardSkeleton />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass("animate-pulse");
    expect(wrapper).toHaveClass("bg-gray-900");
  });

  it("It should have the correct structure for image and text placeholders", () => {
    const { container } = render(<MovieCardSkeleton />);
    const imagePlaceholder = container.querySelector(".h-48, .md\\:h-72");
    expect(imagePlaceholder).toBeInTheDocument();
    const textPlaceholders = container.querySelectorAll(".bg-gray-700");
    expect(textPlaceholders.length).toBe(2);
  });

  it("It should match snapshot", () => {
    const { asFragment } = render(<MovieCardSkeleton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
