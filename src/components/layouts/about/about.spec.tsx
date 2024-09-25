import { test, describe, expect, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import About from "./About";

describe("<About />", () => {
  afterEach(cleanup);

  test("should render the About component with the images and id correctly", () => {
    render(<About />);

    const containerElement = screen.getByRole("contentinfo");
    expect(containerElement).toBeDefined();
    expect(containerElement.id).toBe("about");

    expect(screen.getByRole("heading", { name: "Sobre mim" })).toBeDefined();
    expect(screen.getByRole("heading", { name: /Meu nome/i })).toBeDefined();
    expect(screen.getByText(/Apaixonado por/i)).toBeDefined();
    expect(screen.getByText("Lucas Montenegro")).toBeDefined();
    expect(screen.getByRole("img", { name: "a picture of a abstract flower" }));
    expect(
      screen.getByRole("img", { name: "a picture of a abstract flower2" })
    );
  });

  test("applies the correct classes from the CSS module", () => {
    const { container } = render(<About />);

    const titleElement = screen.getByRole("heading", { name: "Sobre mim" });
    expect(titleElement.classList).contain(/title/i);

    const subtitleElement = screen.getByRole("heading", { name: /Meu nome/i });
    expect(subtitleElement.classList).contain(/subtitle/i);

    const contentElement = screen.getByText(/Apaixonado por/i);
    expect(contentElement.classList).contain(/content/i);

    const imageElement = screen.getByRole("img", {
      name: "a picture of a abstract flower",
    });
    expect(imageElement.classList).contain(/flower/i);

    const secondImageElement = screen.getByRole("img", {
      name: "a picture of a abstract flower2",
    });
    expect(secondImageElement.classList).contain(/flower2/i);

    expect(container.classList).contain(/section/i);

    const nameElement = screen.getByText("Lucas Montenegro");
    expect(nameElement.classList).contain(/name/i);
  });
});
