export type ValidadeSuccessResult = {
  result: boolean;
  content: object;
};

export type ValidadeErrorResult = {
  result: boolean;
  content: Record<string, string>;
};

export type FormValidadeProps = {
  name: string;
  email: string;
  message: string;
};

export interface IValidateService {
  validate(
    props: FormValidadeProps
  ): Promise<ValidadeSuccessResult | ValidadeErrorResult>;
}
