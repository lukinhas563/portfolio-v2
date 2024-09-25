import { expect, test, describe, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import IconLight from "./IconLight";

describe("<IconLight />", () => {
  afterEach(cleanup);

  test("renders with correct props", () => {
    const className = "test-class";
    const color = "red";
    const width = 32;

    render(<IconLight width={width} color={color} className={className} />);

    const svgElement = screen.getByRole("img");
    expect(svgElement).toBeDefined();
    expect(svgElement.getAttribute("class")).toBe(className);
    expect(svgElement.getAttribute("fill")).toBe(color);
    expect(svgElement.getAttribute("width")).toBe(`${width}`);
    expect(svgElement.getAttribute("height")).toBe(`${width}`);

    expect(screen.getByText("Brilho")).toBeDefined();
    expect(screen.getByText("Icone de brilho")).toBeDefined();
  });
});
