import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../Button";

describe("Button component", () => {
  it("It should renders children correctly", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeDefined();
  });

  it("It should applies default variant classes", () => {
    const { container } = render(<Button>Default</Button>);
    const btn = container.firstChild as HTMLElement;
    expect(btn.className).toContain("bg-gray-200");
    expect(btn.className).toContain("text-gray-900");
  });

  it("It should applies primary variant classes", () => {
    const { container } = render(<Button variant="primary">Primary</Button>);
    const btn = container.firstChild as HTMLElement;
    expect(btn.className).toContain("bg-blue-600");
    expect(btn.className).toContain("text-white");
  });

  it("It should applies secondary variant classes", () => {
    const { container } = render(
      <Button variant="secondary">Secondary</Button>
    );
    const btn = container.firstChild as HTMLElement;
    expect(btn.className).toContain("bg-gray-600");
    expect(btn.className).toContain("text-white");
  });

  it("It should merges additional className correctly", () => {
    const { container } = render(
      <Button className="text-red-500">Test</Button>
    );
    const btn = container.firstChild as HTMLElement;
    expect(btn.className).toContain("text-red-500");
  });

  it("It should triggers onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalled();
  });
});
