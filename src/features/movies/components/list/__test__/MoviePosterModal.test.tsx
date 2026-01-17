import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MoviePosterModal } from "../MoviePosterModal";

describe("MoviePosterModal Component", () => {
  const mockProps = {
    poster: "https://example.com/poster.jpg",
    title: "Avatar",
    onClose: vi.fn(),
  };

  it("It should render correctly using actual sub-components", () => {
    render(<MoviePosterModal {...mockProps} />);

    const img = screen.getByAltText(mockProps.title);
    expect(img).toBeDefined();
    expect(img.getAttribute("src")).toBe(mockProps.poster);
  });

  it("It should trigger onClose when close button is clicked", () => {
    render(<MoviePosterModal {...mockProps} />);

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);

    expect(mockProps.onClose).toHaveBeenCalledTimes(1);
  });
});
