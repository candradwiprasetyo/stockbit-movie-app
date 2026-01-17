import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { NotFound } from "../NotFound";

describe("NotFound component", () => {
  it("It should render default message when no props are provided", () => {
    render(<NotFound />);
    expect(screen.getByText("No results found")).toBeDefined();
  });

  it("It should render custom message when message prop is provided", () => {
    render(<NotFound message="Nothing here" />);
    expect(screen.getByText("Nothing here")).toBeDefined();
  });

  it("It should render keyword when keyword prop is provided", () => {
    render(<NotFound keyword="Candra" />);
    const paragraph = screen.getByText((content, element) => {
      if (!element) return false;
      return (
        content.includes("No results found") &&
        element.textContent?.includes("Candra")
      );
    });
    expect(paragraph).toBeDefined();
  });

  it("It should render both custom message and keyword if both props are provided", () => {
    render(<NotFound message="No match" keyword="Dwi" />);
    const paragraph = screen.getByText((content, element) => {
      if (!element) return false;
      return (
        content.includes("No match") && element.textContent?.includes("Dwi")
      );
    });
    expect(paragraph).toBeDefined();
  });
});
