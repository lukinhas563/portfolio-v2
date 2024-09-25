import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { ValidateService } from "./ValidateService";
import { ValidateErrorResult } from "./IValidateService";

describe("ValidateService", () => {
  let validateService: ValidateService;

  beforeEach(() => {
    validateService = new ValidateService();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should validate successfully with valid data", async () => {
    const validData = {
      name: "John Doe",
      email: "john@example.com",
      message: "This is a valid message.",
    };

    const result = await validateService.validate(validData);

    expect(result).toEqual({ result: true, content: validData });
  });

  test("should throw a ValidateErrorResult with invalid data", async () => {
    const invalidData = {
      name: "JD", // menos de 3 caracteres
      email: "invalid-email", // formato de email inválido
      message: "Hi", // menos de 6 caracteres
    };

    // Verifique se o erro é lançado
    await expect(validateService.validate(invalidData)).rejects.toThrow(
      ValidateErrorResult
    );

    await expect(validateService.validate(invalidData)).rejects.toThrow(
      expect.objectContaining({
        content: expect.objectContaining({
          name: "name must be at least 3 characters",
          email: "email must be a valid email",
          message: "message must be at least 6 characters",
        }),
      })
    );
  });
});
