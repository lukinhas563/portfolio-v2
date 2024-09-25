import emailjs from "@emailjs/browser";
import IEmailService, { EmailParams } from "./IEmailService";

export interface EmailTemplate {
  serviceID: string;
  templateID: string;
  publicKey: string;
}

export class EmailService implements IEmailService {
  constructor(private emailTemplate: EmailTemplate) {}

  async send(params: EmailParams): Promise<{ result: boolean }> {
    try {
      await emailjs.send(
        this.emailTemplate.serviceID,
        this.emailTemplate.templateID,
        params,
        this.emailTemplate.publicKey
      );

      return { result: true };
    } catch (error) {
      console.error(error);

      return { result: false };
    }
  }
}
