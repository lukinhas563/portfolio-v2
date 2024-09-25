import { afterEach, describe, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Menu from "./Menu";

describe("<Menu />", () => {
  afterEach(cleanup);

  test("should render the Menu component with correctly elements and anchor", () => {
    render(<Menu />);
    const localAddress = "http://localhost:3000/";

    expect(screen.getByRole("heading")).toBeDefined();
    expect(screen.getByRole("list")).toBeDefined();

    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeDefined();
    expect(navElement.id).toBe("menu");

    const homeElement = screen.getByText("Inicio") as HTMLAnchorElement;
    expect(homeElement).toBeDefined();
    expect(homeElement.href).toBe(`${localAddress}#header`);

    const aboutElement = screen.getByText("Sobre") as HTMLAnchorElement;
    expect(aboutElement).toBeDefined();
    expect(aboutElement.href).toBe(`${localAddress}#about`);

    const projectsElement = screen.getByText("Projetos") as HTMLAnchorElement;
    expect(projectsElement).toBeDefined();
    expect(projectsElement.href).toBe(`${localAddress}#projects`);

    const contactElement = screen.getByText("Contato") as HTMLAnchorElement;
    expect(contactElement).toBeDefined();
    expect(contactElement.href).toBe(`${localAddress}#contact`);
  });

  test("applies the correct classes from the CSS module", () => {
    render(<Menu />);

    const listElement = screen.getByRole("list");
    expect(listElement.classList).contain(/options/i);

    const homeElement = screen.getByText("Inicio");
    expect(homeElement.classList).contain(/option/i);

    const aboutElement = screen.getByText("Sobre");
    expect(aboutElement.classList).contain(/option/i);

    const projectsElement = screen.getByText("Projetos");
    expect(projectsElement.classList).contain(/option/i);

    const contactElement = screen.getByText("Contato");
    expect(contactElement.classList).contain(/option/i);
  });
});
