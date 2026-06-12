import * as Yup from "yup";

export const contactSchema = Yup.object({

  fullName: Yup.string()
    .required("Required"),

  email: Yup.string()
    .email("Invalid Email")
    .required("Required"),

  phone: Yup.string()
    .matches(
      /^[0-9]{10}$/,
      "Enter valid Phone Number"
    )
    .required("Required"),

  message: Yup.string()
    .required("Required"),
});