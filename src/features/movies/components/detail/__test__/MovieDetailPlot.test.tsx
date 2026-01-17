import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MovieDetailPlot } from "../MovieDetailPlot";

describe("MovieDetailPlot Component", () => {
  it("It should render the plot text correctly when provided", () => {
    const testPlot =
      "A professional thief who steals corporate secrets through the use of dream-sharing technology.";
    render(<MovieDetailPlot plot={testPlot} />);
    const element = screen.getByText(testPlot);
    expect(element).toBeDefined();
    expect(element.tagName).toBe("P");
    expect(element.className).toContain("text-gray-400");
  });

  it("It should return null and render nothing when plot is null", () => {
    const { container } = render(<MovieDetailPlot plot={null} />);
    expect(container.firstChild).toBeNull();
  });

  it("It should return null and render nothing when plot is an empty string", () => {
    const { container } = render(<MovieDetailPlot plot="" />);
    expect(container.firstChild).toBeNull();
  });

  it("It should return null and render nothing when plot is undefined", () => {
    const { container } = render(<MovieDetailPlot plot={undefined} />);
    expect(container.firstChild).toBeNull();
  });

  it("It should have the correct margin classes for spacing", () => {
    const testPlot = "Sample plot text";
    render(<MovieDetailPlot plot={testPlot} />);
    const element = screen.getByText(testPlot);
    expect(element.className).toContain("my-6");
  });
});
