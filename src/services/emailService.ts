import emailjs from "@emailjs/browser";

export const emailService = async (
  name: string,
  lastName: string,
  email: string,
  company: string,
  message: string
) => {
  const templateParams = {
    from_name: name,
    from_lastname: lastName,
    from_email: email,
    from_company: company,
    message: message,
  };

  try {
    await emailjs.send(
      "service_zp1xhny",
      "template_xbqnznw",
      templateParams,
      "mgaqTfNRE2UGAteAD"
    );

    return { result: true };
  } catch (err) {
    return { result: false };
  }
};
