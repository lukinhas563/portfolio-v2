export type EmailParams = {
  from_name: string;
  from_email: string;
  message: string;
};

export default interface IEmailService {
  send(params: EmailParams): Promise<{ result: boolean }>;
}
