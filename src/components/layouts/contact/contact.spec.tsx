import { test, describe, expect, afterEach, beforeAll, vi } from "vitest";
import { screen, render, cleanup, getByRole } from "@testing-library/react";
import Contact from "./Contact";
import IEmailService from "@/services/IEmailService";
import { IValidateService } from "@/services/IValidateService";

const mockValidateService = {
  validate: vi.fn(),
};

const mockEmailService = {
  send: vi.fn((name: string, email: string, message: string) => {}),
};

describe("<Contact />", () => {
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

  test("should render the Contact component with correctly id and children", () => {
    render(
      <Contact
        emailService={mockEmailService as unknown as IEmailService}
        validateService={mockValidateService as unknown as IValidateService}
      />
    );

    const sectionElement = screen.getByRole("contentinfo");
    expect(sectionElement).toBeDefined();
    expect(sectionElement.id).toBe("contact");

    expect(screen.getByText("Vamos conversar?")).toBeDefined();
    expect(
      screen.getByText(/Estou sempre aberto a novas oportunidades/i)
    ).toBeDefined();

    expect(screen.getByText("lucasmontenegro475@gmail.com")).toBeDefined();
    expect(screen.getByText("linkedin.com/in/lucasmontenegro")).toBeDefined();
    expect(screen.getByText("github.com/lukinhas563")).toBeDefined();
  });
});
