import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "../Card";

describe("Card component", () => {
  it("It should renders children correctly", () => {
    render(<Card>Test Content</Card>);
    expect(screen.getByText("Test Content")).toBeDefined();
  });

  it("It should applies default classes", () => {
    const { container } = render(<Card>Test</Card>);
    const div = container.firstChild as HTMLElement;
    expect(div.className).toContain("rounded-xl");
    expect(div.className).toContain("shadow");
    expect(div.className).toContain("bg-white");
    expect(div.className).toContain("p-3");
  });

  it("It should merges additional className correctly", () => {
    const { container } = render(<Card className="text-red-500">Test</Card>);
    const div = container.firstChild as HTMLElement;
    expect(div.className).toContain("rounded-xl");
    expect(div.className).toContain("text-red-500");
  });
});
