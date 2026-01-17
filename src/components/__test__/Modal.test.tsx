import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "../Modal";

describe("Modal component", () => {
  it("It should not render when isOpen is false", () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <div>Content</div>
      </Modal>
    );
    expect(screen.queryByText("Content")).toBeNull();
  });

  it("It should render children when isOpen is true", () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );
    expect(screen.getByText("Modal Content")).toBeDefined();
  });

  it("It should call onClose when overlay is clicked", () => {
    const onClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={onClose}>
        <div>Modal Content</div>
      </Modal>
    );

    const overlay = document.querySelector("div.fixed > div.absolute");
    if (!overlay) throw new Error("Overlay not found");

    fireEvent.click(overlay);
    expect(onClose).toHaveBeenCalled();
  });

  it("It should set body overflow to hidden when opened and auto when closed", () => {
    const { rerender } = render(
      <Modal isOpen={true} onClose={() => {}}>
        <div />
      </Modal>
    );
    expect(document.body.style.overflow).toBe("hidden");

    rerender(
      <Modal isOpen={false} onClose={() => {}}>
        <div />
      </Modal>
    );
    expect(document.body.style.overflow).toBe("auto");
  });
});
