import { test, expect, describe, vi, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Input from "./Input";
import "@testing-library/dom";

describe("<Input />", () => {
  afterEach(cleanup);

  test("renders input with type 'text'", () => {
    render(<Input type="text" placeholder="Enter text" />);

    const inputElement = screen.getByPlaceholderText("Enter text");

    expect(inputElement).toBeDefined();
    expect(inputElement.getAttribute("type")).toBe("text");
  });

  test("renders textarea when type is 'textarea'", () => {
    render(<Input type="textarea" placeholder="Enter text" />);

    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeDefined();
    expect(inputElement.tagName).toBe("TEXTAREA");
  });

  test("calls setValue when input value changes", () => {
    const setValue = vi.fn();
    render(<Input type="text" value="" setValue={setValue} />);

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "New value" } });

    expect(setValue).toHaveBeenCalledWith("New value");
  });

  test("renders with correct class name", () => {
    render(<Input type="text" className="custom-class" />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement.classList.contains("custom-class")).toBe(true);
  });

  test("does not call setValue if not provided", () => {
    render(<Input type="text" />);

    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputElement, {
      target: { value: "This won't call setValue" },
    });

    expect(inputElement.value).toBe("This won't call setValue");
  });
});
