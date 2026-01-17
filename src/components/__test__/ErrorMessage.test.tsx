import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ErrorMessage } from "../ErrorMessage";

describe("ErrorMessage component", () => {
  it("It should render default title when not provided", () => {
    render(<ErrorMessage message="An error occurred" />);
    expect(screen.getByText("Something went wrong")).toBeDefined();
  });

  it("It should render custom title if provided", () => {
    render(<ErrorMessage title="Error here" message="An error occurred" />);
    expect(screen.getByText("Error here")).toBeDefined();
  });

  it("It should render the message correctly", () => {
    render(<ErrorMessage message="Network error" />);
    expect(screen.getByText("Network error")).toBeDefined();
  });
});
