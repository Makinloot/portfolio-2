import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required field").min(2, "Minimum 2 characters"),
  email: Yup.string()
    .test("is-valid-email", "Enter valid E-Mail", (value) => {
      if (!value) {
        return true;
      }
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
      return emailRegex.test(value) && !/\s+$/.test(value);
    })
    .required("Required field"),
  subject: Yup.string().required("Required field"),
  message: Yup.string()
    .required("Required field")
    .max(1500, "Maximum 1500 characters"),
});

export default validationSchema;
