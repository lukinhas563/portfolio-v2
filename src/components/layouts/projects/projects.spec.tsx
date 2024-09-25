import { afterEach, beforeAll, describe, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Projects from "./Projects";

describe("<Projects />", () => {
  afterEach(cleanup);

  beforeAll(() => {
    global.IntersectionObserver = class IntersectionObserver {
      root: Element | null = null;
      rootMargin: string = "";
      thresholds: ReadonlyArray<number> = [];

      observe() {
        // Mock implementation, does nothing
      }

      unobserve() {
        // Mock implementation, does nothing
      }

      disconnect() {
        // Mock implementation, does nothing
      }

      takeRecords(): IntersectionObserverEntry[] {
        return [];
      }
    };
  });

  test("should render the Projects component with all correctly projects and id", () => {
    render(<Projects />);

    const sectionElement = screen.getByRole("contentinfo");
    expect(sectionElement).toBeDefined();
    expect(sectionElement.id).toBe("projects");

    expect(screen.getByText("PROJETOS RECENTES")).toBeDefined();
    expect(screen.getByRole("grid")).toBeDefined();

    expect(screen.getByText("MICRO SERVIÇOS HQ")).toBeDefined();
    expect(screen.getByText("API TYPESCRIPT")).toBeDefined();
    expect(screen.getByText("PORTFOLIO FRONT-END")).toBeDefined();
    expect(screen.getByText("TRENDING TOPICS")).toBeDefined();
    expect(screen.getByText("BLOG STRAPI")).toBeDefined();
    expect(screen.getByText("NOTAS FISCAIS")).toBeDefined();
    expect(screen.getByText("LANDING PAGE")).toBeDefined();
  });
});
