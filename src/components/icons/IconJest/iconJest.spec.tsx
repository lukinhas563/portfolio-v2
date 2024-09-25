import { expect, test, describe, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import IconJest from "./IconJest";

describe("<IconJest />", () => {
  afterEach(cleanup);

  test("renders with correct props", () => {
    const className = "test-class";
    const color = "red";
    const width = 32;

    render(<IconJest width={width} color={color} className={className} />);

    const svgElement = screen.getByRole("img");
    expect(svgElement).toBeDefined();
    expect(svgElement.getAttribute("class")).toBe(className);
    expect(svgElement.getAttribute("fill")).toBe(color);
    expect(svgElement.getAttribute("width")).toBe(`${width}px`);
    expect(svgElement.getAttribute("height")).toBe(`${width}px`);

    expect(screen.getByText("Jest")).toBeDefined();
    expect(screen.getByText("Icode de habilidade em Jest")).toBeDefined();
  });
});
