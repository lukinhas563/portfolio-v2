import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
  Mock,
} from "vitest";
import { EmailService, EmailTemplate } from "./EmailService";
import IEmailService, { EmailParams } from "./IEmailService";
import emailjs from "@emailjs/browser";

vi.mock("@emailjs/browser", () => ({
  __esModule: true,
  default: {
    send: vi.fn(),
  },
}));

describe("EmailService", () => {
  let emailService: IEmailService;

  const emailTemplate: EmailTemplate = {
    serviceID: "service_id",
    templateID: "template_id",
    publicKey: "public_key",
  };

  beforeEach(() => {
    emailService = new EmailService(emailTemplate);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should send an email successfully", async () => {
    const params: EmailParams = {
      from_name: "John Doe",
      from_email: "john@example.com",
      message: "Hello World",
    };

    // Simulates successful sending of email
    (emailjs.send as Mock).mockResolvedValueOnce({});

    // Act
    const result = await emailService.send(params);

    // Assert
    expect(emailjs.send).toHaveBeenCalledWith(
      emailTemplate.serviceID,
      emailTemplate.templateID,
      params,
      emailTemplate.publicKey
    );
    expect(result).toEqual({ result: true });
  });

  test("should handle errors when sending email", async () => {
    const params: EmailParams = {
      from_name: "John Doe",
      from_email: "john@example.com",
      message: "Hello World",
    };

    // Simulates failure to send email
    (emailjs.send as Mock).mockRejectedValueOnce(
      new Error("Failed to send email")
    );

    // Act
    const result = await emailService.send(params);

    // Assert
    expect(emailjs.send).toHaveBeenCalledWith(
      emailTemplate.serviceID,
      emailTemplate.templateID,
      params,
      emailTemplate.publicKey
    );
    expect(result).toEqual({ result: false });
  });
});
