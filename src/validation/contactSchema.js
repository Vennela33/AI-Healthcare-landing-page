import * as Yup from "yup";

export const contactSchema = Yup.object({

  fullName: Yup.string()
    .required("Required"),

  email: Yup.string()
    .email("Invalid Email")
    .required("Required"),

  phone: Yup.string()
    .matches(
      /^[6-9]\d{9}$/,
      "Invalid Phone"
    )
    .required("Required"),

  message: Yup.string()
    .required("Required"),
});