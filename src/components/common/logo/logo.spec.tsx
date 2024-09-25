import { cleanup, render, screen } from "@testing-library/react";
import { describe, test, expect, afterEach } from "vitest";
import Logo from "./Logo";
import "@testing-library/dom";

describe("<Logo />", () => {
  afterEach(cleanup);

  test("renders the logo with the correct text", () => {
    render(<Logo />);

    const logoElement = screen.getByText("LUCAS");
    const lastnameElement = screen.getByText("MONTENEGRO");

    expect(logoElement).toBeDefined();
    expect(lastnameElement).toBeDefined();
  });

  test("applies custom class name", () => {
    const customClass = "custom-logo";
    render(<Logo className={customClass} />);

    const logoElement = screen.getByRole("heading");
    expect(logoElement.classList.contains(customClass)).toBe(true);
  });

  test("applies default styles", () => {
    render(<Logo />);

    // Checks if default CSS classes have been applied
    const logoElement = screen.getByRole("heading");
    const firstnameElement = screen.getByText(/LUCAS/i);
    const lastnameElement = screen.getByText(/MONTENEGRO/i);

    expect(logoElement.classList).contain(/logo/i);
    expect(firstnameElement.classList).contain(/firstname/i);
    expect(lastnameElement.classList).contain(/lastname/i);
  });
});
