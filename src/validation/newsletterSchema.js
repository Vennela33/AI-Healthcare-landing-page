export const newsletterSchema = Yup.object({

 email: Yup.string()
  .email("Invalid Email")
  .required("Required"),

});