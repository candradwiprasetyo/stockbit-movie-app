import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TextField } from "../TextField";

describe("TextField component", () => {
  it("It should render label when label prop is provided", () => {
    render(<TextField label="Username" />);
    expect(screen.getByText("Username")).toBeDefined();
  });

  it("It should render input element", () => {
    render(<TextField />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();
  });

  it("It should render error message when error prop is provided", () => {
    render(<TextField error="Required field" />);
    expect(screen.getByText("Required field")).toBeDefined();
  });

  it("It should apply error border class when error prop is provided", () => {
    render(<TextField error="Required field" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("border-red-500");
  });

  it("It should pass extra props to the input element", () => {
    render(<TextField placeholder="Enter name" data-testid="input" />);
    const input = screen.getByPlaceholderText("Enter name");
    expect(input).toBeDefined();
  });
});
