import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CloseButton } from "../CloseButton";

describe("CloseButton component", () => {
  it("It should renders the X icon", () => {
    render(<CloseButton onClick={() => {}} />);
    const button = screen.getByRole("button");
    expect(button).toBeDefined();
    expect(button.querySelector("svg")).toBeDefined();
  });

  it("It should calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<CloseButton onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("It should applies additional className", () => {
    render(<CloseButton onClick={() => {}} className="test-class" />);
    const button = screen.getByRole("button");
    expect(button.className).toContain("test-class");
  });
});
