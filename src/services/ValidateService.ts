import { object, string, InferType, ValidationError } from "yup";
import { IValidateService } from "./IValidateService";

let formSchema = object({
  name: string().min(3).required(),
  email: string().email().min(6).required(),
  message: string().min(6).max(500).required(),
});

type FormValidadeProps = InferType<typeof formSchema>;

export class ValidateService implements IValidateService {
  constructor() {}

  async validate({ name, email, message }: FormValidadeProps) {
    try {
      const result = await formSchema.validate(
        { name, email, message },
        { abortEarly: false }
      );

      return { result: true, content: result };
    } catch (error) {
      const yupError = error as ValidationError;
      const validateErrors: Record<string, string> = {};

      yupError.inner.forEach((error) => {
        if (!error.path) return;

        validateErrors[error.path] = error.message;
      });

      return { result: false, content: validateErrors };
    }
  }
}
