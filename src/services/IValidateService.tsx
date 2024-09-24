export type ValidateSuccessResult = {
  result: boolean;
  content: object;
};

export class ValidateErrorResult extends Error {
  public content: Record<string, string>;

  constructor(content: Record<string, string>) {
    super("Validation Error");
    this.content = content;
  }
}

export type FormValidateProps = {
  name: string;
  email: string;
  message: string;
};

export interface IValidateService {
  validate(
    props: FormValidateProps
  ): Promise<ValidateSuccessResult | ValidateErrorResult>;
}
