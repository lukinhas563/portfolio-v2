import { test, expect, describe, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";
import Container from "./Container";

describe("<Container />", () => {
  afterEach(cleanup);

  test("should render the component correctly", () => {
    const { container } = render(
      <Container>
        <h1>Hello World!</h1>
      </Container>
    );

    expect(container).toBeDefined();
    expect(container.firstChild).toBeDefined();
  });

  test("applies the correct classes from the CSS module", () => {
    const { container } = render(
      <Container>
        <h1>Hello World!</h1>
      </Container>
    );

    expect(container.classList).contain(/container/i);
  });
});
