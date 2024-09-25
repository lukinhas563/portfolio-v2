import { test, expect, describe, vi, afterEach, beforeAll } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Home from ".";

vi.mock("@/services/EmailService", () => ({
  EmailService: vi.fn(),
  EmailTemplate: vi.fn(),
}));

vi.mock("@/services/ValidateService", () => ({
  ValidateService: vi.fn(),
}));

describe("<Home />", () => {
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

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  test("should render without crashing", () => {
    process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID = "service_id";
    process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID = "template_id";
    process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY = "public_key";

    render(<Home />);

    expect(
      screen.getByText(
        "Experiências digitais incríveis começam com um backend sólido."
      )
    ).toBeDefined();
    expect(screen.getByText("Sobre mim")).toBeDefined();
    expect(screen.getByText("PROJETOS RECENTES")).toBeDefined();
    expect(screen.getByText("Vamos conversar?")).toBeDefined();
    expect(screen.getByText("Criado com ♥️ por")).toBeDefined();
  });

  test("should throw an error if EMAIL_SERVICE_ID is not defined", () => {
    delete process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;

    expect(() => render(<Home />)).toThrowError(
      "NEXT_PUBLIC_EMAIL_SERVICE_ID is not defined"
    );
  });

  test("should throw an error if EMAIL_TEMPLATE_ID is not defined", () => {
    process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID = "service_id";
    delete process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;

    expect(() => render(<Home />)).toThrowError(
      "NEXT_PUBLIC_EMAIL_TEMPLATE_ID is not defined"
    );
  });

  test("should throw an error if EMAIL_PUBLIC_KEY is not defined", () => {
    process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID = "service_id";
    process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID = "template_id";
    delete process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

    expect(() => render(<Home />)).toThrowError(
      "NEXT_PUBLIC_EMAIL_PUBLIC_KEY is not defined"
    );
  });
});
