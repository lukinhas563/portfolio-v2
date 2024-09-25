import { afterAll, beforeAll, describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import Analytics from "./Analytics";

describe("<Analytics />", () => {
  beforeAll(() => {
    process.env.NEXT_PUBLIC_GA_TRAKING = "UA-12345678-1";
  });

  afterAll(() => {
    delete process.env.NEXT_PUBLIC_GA_TRAKING;
  });

  test("renders Google Analytics scripts", () => {
    const { container } = render(<Analytics />);

    const gaScript = container.querySelector(
      'script[src="https://www.googletagmanager.com/gtag/js?id=UA-12345678-1"]'
    );
    expect(gaScript).toBeDefined();

    const inlineScripts = container.querySelectorAll("script");
    expect(inlineScripts.length).toBe(2);

    const inlineScript = inlineScripts[1];

    expect(inlineScript).toBeDefined();

    const inlineScriptContent = inlineScript.innerHTML;

    expect(inlineScriptContent).toContain(
      "window.dataLayer = window.dataLayer || [];"
    );
    expect(inlineScriptContent).toContain("gtag('config', UA-12345678-1);");
  });
});
