import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Label } from "../Label";

describe("Label component", () => {
  it("It should render default gray variant when no variant is provided", () => {
    render(<Label>Default Label</Label>);
    const element = screen.getByText("Default Label");
    expect(element).toBeDefined();
    expect(element).toHaveClass("bg-gray-700");
  });

  it("It should render the correct variant styles based on variant prop", () => {
    const variants = [
      "blue",
      "green",
      "yellow",
      "red",
      "purple",
      "indigo",
      "pink",
      "orange",
      "teal",
    ] as const;

    variants.forEach((variant) => {
      render(<Label variant={variant}>{variant}</Label>);
      const el = screen.getByText(variant);
      expect(el).toBeDefined();
      expect(el.className).toContain(`bg-${variant}`);
    });
  });

  it("It should render children text correctly", () => {
    render(<Label>Test Content</Label>);
    expect(screen.getByText("Test Content")).toBeDefined();
  });
});
