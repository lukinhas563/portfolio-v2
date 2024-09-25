import { expect, test, describe, afterEach, vi, beforeEach } from "vitest";
import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import Email from "./Email";
import IEmailService from "@/services/IEmailService";
import { IValidateService } from "@/services/IValidateService";

const mockValidateService = {
  validate: vi.fn(),
};

const mockEmailService = {
  send: vi.fn((name: string, email: string, message: string) => {}),
};

describe("<Email />", () => {
  afterEach(cleanup);

  test("should render the email form with inputs and buttons", () => {
    render(
      <Email
        emailService={mockEmailService as unknown as IEmailService}
        validateService={mockValidateService as unknown as IValidateService}
      />
    );

    expect(screen.getByPlaceholderText("Seu nome")).toBeDefined();
    expect(screen.getByPlaceholderText("Seu e-mail")).toBeDefined();
    expect(screen.getByPlaceholderText("Sua mensagem")).toBeDefined();
    expect(screen.getByText("Enviar")).toBeDefined();
    expect(screen.getByText("Cancelar")).toBeDefined();
  });

  test("should reset the form when 'Cancelar' is clicked", () => {
    render(
      <Email
        emailService={mockEmailService as unknown as IEmailService}
        validateService={mockValidateService as unknown as IValidateService}
      />
    );

    fireEvent.change(screen.getByPlaceholderText("Seu nome"), {
      target: { value: "John Doe" },
    });

    fireEvent.change(screen.getByPlaceholderText("Seu e-mail"), {
      target: { value: "john@example.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Sua mensagem"), {
      target: { value: "Hello world" },
    });

    fireEvent.click(screen.getByText("Cancelar"));

    expect(screen.getByPlaceholderText("Seu nome").textContent).toBe("");
    expect(screen.getByPlaceholderText("Seu e-mail").textContent).toBe("");
    expect(screen.getByPlaceholderText("Sua mensagem").textContent).toBe("");
  });

  test("should handle form submission successfully", async () => {
    render(
      <Email
        emailService={mockEmailService as unknown as IEmailService}
        validateService={mockValidateService as unknown as IValidateService}
      />
    );

    // Mock to simulate the behavior of `submit`
    const submitMock = vi.spyOn(mockEmailService, "send").mockResolvedValue();

    const validateMock = vi
      .spyOn(mockValidateService, "validate")
      .mockResolvedValue(null);

    fireEvent.change(screen.getByPlaceholderText("Seu nome"), {
      target: { value: "John Doe" },
    });

    fireEvent.change(screen.getByPlaceholderText("Seu e-mail"), {
      target: { value: "john@example.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Sua mensagem"), {
      target: { value: "Hello world" },
    });

    fireEvent.click(screen.getByText("Enviar"));

    await waitFor(() => {
      expect(submitMock).toHaveBeenCalledOnce();
      expect(validateMock).toHaveBeenCalledOnce();
    });
  });
});
