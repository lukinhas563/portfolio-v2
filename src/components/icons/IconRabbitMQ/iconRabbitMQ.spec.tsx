import { expect, test, describe, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import IconRabbitMQ from "./IconRabbitMQ";

describe("<IconRabbitMQ />", () => {
  afterEach(cleanup);

  test("renders with correct props", () => {
    const className = "test-class";
    const color = "red";
    const width = 32;

    render(<IconRabbitMQ width={width} color={color} className={className} />);

    const svgElement = screen.getByRole("img");
    expect(svgElement).toBeDefined();
    expect(svgElement.getAttribute("class")).toBe(className);
    expect(svgElement.getAttribute("fill")).toBe(color);
    expect(svgElement.getAttribute("width")).toBe(`${width}px`);
    expect(svgElement.getAttribute("height")).toBe(`${width}px`);

    expect(screen.getByText("RabbitMQ")).toBeDefined();
    expect(screen.getByText("Icode de habilidade em RabbitMQ")).toBeDefined();
  });
});
