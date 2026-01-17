import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { DetailItem } from "../DetailItem";

describe("DetailItem component", () => {
  it("It should renders label and value correctly", () => {
    render(<DetailItem label="Genre" value="Action" />);
    expect(screen.getByText(/Genre:/)).toBeDefined();
    expect(screen.getByText(/Action/)).toBeDefined();
  });

  it("It should does not render if value is null or undefined", () => {
    const { container } = render(<DetailItem label="Genre" value={null} />);
    expect(container.firstChild).toBeNull();

    const { container: c2 } = render(
      <DetailItem label="Genre" value={undefined} />
    );
    expect(c2.firstChild).toBeNull();
  });

  it("It should applies additional className", () => {
    render(
      <DetailItem
        label="Engineer"
        value="Candra Dwi"
        className="text-red-500"
      />
    );
    const p = screen.getByText(/Candra Dwi/);
    expect(p.className).toContain("text-red-500");
  });
});
