import { object, string, InferType, ValidationError } from "yup";

let formSchema = object({
  name: string().required().min(3),
  lastName: string().required().min(3),
  email: string().email().required().min(6),
  company: string().required().min(3),
  message: string().required().max(1000),
});

type FormValidadeProps = InferType<typeof formSchema>;

export const formValidade = async ({
  company,
  email,
  lastName,
  message,
  name,
}: FormValidadeProps) => {
  try {
    const result = await formSchema.validate(
      {
        name,
        lastName,
        email,
        company,
        message,
      },
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
};
