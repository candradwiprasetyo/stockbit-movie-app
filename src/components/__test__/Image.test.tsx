import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Image } from "../Image";

describe("Image component", () => {
  it("It should render an img element with correct src and alt", () => {
    render(<Image src="https://example.com/test.jpg" alt="Test Image" />);
    const img = screen.getByAltText("Test Image") as HTMLImageElement;
    expect(img).toBeDefined();
    expect(img.src).toBe("https://example.com/test.jpg");
  });

  it("It should render fallback when src is 'N/A'", () => {
    render(<Image src="N/A" alt="No Image" />);
    const fallback = screen.getByLabelText("Image not available");
    expect(fallback).toBeDefined();
    expect(screen.getByText("No Image Found")).toBeDefined();
  });

  it("It should render fallback when src is empty", () => {
    render(<Image src="" alt="No Image" />);
    const fallback = screen.getByLabelText("Image not available");
    expect(fallback).toBeDefined();
    expect(screen.getByText("No Image Found")).toBeDefined();
  });

  it("It should render fallback when img fails to load", () => {
    render(<Image src="https://example.com/error.jpg" alt="Broken Image" />);
    const img = screen.getByAltText("Broken Image") as HTMLImageElement;

    fireEvent.error(img);

    const fallback = screen.getByLabelText("Image not available");
    expect(fallback).toBeDefined();
    expect(screen.getByText("No Image Found")).toBeDefined();
  });

  it("It should apply additional className to fallback", () => {
    render(<Image src="N/A" alt="No Image" className="test-class" />);
    const fallback = screen.getByLabelText("Image not available");
    expect(fallback.className).toContain("test-class");
  });
});
