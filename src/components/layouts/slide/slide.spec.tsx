import { afterEach, beforeAll, describe, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Slide from "./Slide";

const iconsMock = [
  "javascript",
  "react",
  "typescript",
  "vue",
  "next",
  "html",
  "css",
  "node",
  "docker",
  "svelte",
  "figma",
  "postgresql",
  "npm",
  "mysql",
  "firebase",
  "mongodb",
  "knex",
  "tailwind",
  "git",
  "webpack",
  "yarn",
  "jest",
  "csharp",
  "java",
  "dotnet",
  "python",
  "angular",
  "spring",
  "rabbitmq",
  "aws",
  "azure",
];

describe("<Slide />", () => {
  afterEach(cleanup);

  test("should render the correct number of icons", () => {
    render(<Slide />);

    const iconsElements = screen.getAllByRole("img");
    expect(iconsElements.length).toEqual(iconsMock.length * 2);
  });

  test("should apply the correct animation class based on direction prop", () => {
    const { rerender } = render(<Slide direction="left" />);
    const scrollElement = screen.getByRole("listitem");

    // Check animation for 'left'
    expect(scrollElement.classList).contain(/animate-infinite-scroll/i);

    // Rerender with 'right' direction
    rerender(<Slide direction="right" />);

    // Check animation for 'right'
    expect(scrollElement.classList).contain(/animate-infinite-scroll-reverse/i);
  });

  test("applies the correct classes from the CSS module", () => {
    const { baseElement } = render(<Slide />);

    expect(baseElement.classList).contain(/skills/i);

    const iconsElements = screen.getAllByRole("img");
    iconsElements.forEach((iconElement) => {
      expect(iconElement.classList).contain(/skill/i);
    });
  });
});
