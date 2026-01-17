import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Loading } from "../Loading";

describe("Loading component", () => {
  it("It should render default message when no message prop is provided", () => {
    render(<Loading />);
    expect(screen.getByText("Loading...")).toBeDefined();
  });

  it("It should render custom message when message prop is provided", () => {
    render(<Loading message="Fetching data..." />);
    expect(screen.getByText("Fetching data...")).toBeDefined();
  });

  it("It should apply fullscreen class when fullscreen prop is true", () => {
    const { container } = render(<Loading fullscreen />);
    expect(container.firstChild).toHaveClass(
      "fixed inset-0 flex items-center justify-center bg-white/80 z-50"
    );
  });

  it("It should render normal loading container when fullscreen is false", () => {
    const { container } = render(<Loading />);
    expect(container.firstChild).toHaveClass(
      "flex items-center justify-center mt-4 h-[80vh]"
    );
  });
});
