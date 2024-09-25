import {
  test,
  describe,
  expect,
  afterEach,
  beforeAll,
  vi,
  afterAll,
} from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import Header from "./Header";

describe("<Header />", () => {
  afterEach(cleanup);

  beforeAll(() => {
    vi.spyOn(window, "open").mockImplementation(() => null);
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  test("should render the header titles", () => {
    render(<Header />);

    const headerElement = screen.getByRole("banner");
    expect(headerElement.id).toBe("header");

    expect(
      screen.getByText(
        "Experiências digitais incríveis começam com um backend sólido."
      )
    ).toBeDefined();
    expect(
      screen.getByText("Contrate um desenvolvedor back-end profissional.")
    ).toBeDefined();
  });

  test("should render social icons and trigger window open on click", () => {
    render(<Header />);

    const gitHubButton = screen.getByRole("button", { name: /github/i });
    const linkedInButton = screen.getByRole("button", { name: /linkedin/i });

    expect(gitHubButton).toBeDefined();
    expect(linkedInButton).toBeDefined();

    fireEvent.click(gitHubButton);
    expect(window.open).toHaveBeenCalledWith(
      "https://github.com/lukinhas563",
      "_blank"
    );

    fireEvent.click(linkedInButton);
    expect(window.open).toHaveBeenCalledWith(
      "https://www.linkedin.com/in/lucasmontenegro",
      "_blank"
    );
  });

  test("applies the correct classes from the CSS module", () => {
    const { baseElement } = render(<Header />);

    expect(baseElement.classList).contain(/header/i);

    const wrapperElement = screen.getByRole("separator");
    expect(wrapperElement.classList).contain(/wrapper/i);

    const titleElement = screen.getByText(
      "Experiências digitais incríveis começam com um backend sólido."
    );
    expect(titleElement.classList).contain(/title/i);

    const subtitleElement = screen.getByText(
      "Contrate um desenvolvedor back-end profissional."
    );
    expect(subtitleElement.classList).contain(/subtitle/i);

    const ItensElement = screen.getByRole("listitem");
    expect(subtitleElement.classList).contain(/links/i);
  });
});
