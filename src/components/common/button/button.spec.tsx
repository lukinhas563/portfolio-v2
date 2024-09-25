import { test, expect, describe, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/dom";

describe("<Button />", () => {
  test("renders the component with the correct content", () => {
    render(<Button>Hello World</Button>);

    expect(screen.getByRole("button")).toBeDefined();
    expect(screen.getByText("Hello World")).toBeDefined();
  });

  test("should have the correct type", () => {
    render(<Button type="submit">Submit</Button>);

    const button = screen.getByText("Submit");
    expect(button.getAttribute("type")).toBe("submit");
  });

  test("should call onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const button = screen.getByText("Click Me");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });

  test("should have the correct className", () => {
    render(<Button className="test">ClassName</Button>);

    const button = screen.getByText("ClassName");

    expect(button.classList.contains("test")).toBe(true);
  });
});
