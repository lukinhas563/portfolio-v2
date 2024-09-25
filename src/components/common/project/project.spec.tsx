import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { afterEach, beforeAll, describe, expect, test, vi } from "vitest";
import { icons } from "@/components/icons/icons";
import Project from "./Project";

type MockProjectProps = {
  title: string;
  description: string;
  frameworks: (keyof typeof icons)[];
  link: string;
};

describe("<Project />", () => {
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

  const mockProjectProps: MockProjectProps = {
    title: "Meu Projeto",
    description: "Descrição do projeto",
    frameworks: ["react", "next"],
    link: "https://example.com",
  };

  test("renders the project title, description, and frameworks", () => {
    render(<Project {...mockProjectProps} />);

    // Verify the title
    const titleElement = screen.getByText(mockProjectProps.title.toUpperCase());
    expect(titleElement).toBeDefined();
  });

  test("renders the 'Veja mais' button and opens a new tab on click", () => {
    render(<Project {...mockProjectProps} />);

    // Mock to simulate the behavior of `window.open`
    const windowOpenMock = vi.spyOn(window, "open").mockReturnValue(null);

    const button = screen.getByRole("button", { name: /veja mais/i });
    expect(button).toBeDefined();

    // Simulate button click
    fireEvent.click(button);

    // Check if the new tab was opened with the correct link
    expect(windowOpenMock).toHaveBeenCalledWith(
      mockProjectProps.link,
      "_blank"
    );

    // Restore the mock
    windowOpenMock.mockRestore();
  });

  test("applies the correct classes from the CSS module", () => {
    render(<Project {...mockProjectProps} />);

    const titleElement = screen.getByText(mockProjectProps.title.toUpperCase());
    expect(titleElement.classList).contains(/title/i);

    const descriptionElement = screen.getByText(mockProjectProps.description);
    expect(descriptionElement.classList).contain(/description/i);

    const frameworksListElement = screen.getByRole("list");
    expect(frameworksListElement.classList).contain(/frameworks/i);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement.classList).contain(/link/i);
  });
});
