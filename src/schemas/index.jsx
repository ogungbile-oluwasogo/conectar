import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const formSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  fullName: yup.string().required("Required"),
  service: yup.string().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export const advancedSchema = yup.object().shape({
  fullName: yup
    .string()
    .min(3, "Please Enter your Full Name")
    .required("Required"),

  email: yup.string().email("Please enter a valid email").required("Required"),

  service: yup.string().required("Required"),

  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the Terms of Service and Private Policy "),

  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        "min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit",
    })
    .required("Required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});
