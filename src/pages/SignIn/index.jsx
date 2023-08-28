import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "../../components/CustomInputs";
import { advancedSchema } from "../../schemas";
import styles from "./SignIn.module.css";
import { BsEnvelope } from "react-icons/bs";

export default function SignIn() {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        service: "",
        password: "",
        confirmPassword: "",
        acceptedTos: false,
      }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles["signin-form"]}>
          <div>
            <p className={styles["signin-form-text"]}>Sign In</p>
          </div>
          <div>
            <div>
              {" "}
              <div>
                <BsEnvelope />
              </div>
              <CustomInput
                name="email"
                type="email"
                placeholder="Email Address"
                aria-required
              />
            </div>
            <div>
              <div>
                <BsEnvelope />
              </div>
              <CustomInput
                name="password"
                type="password"
                placeholder="Password"
                aria-required
              />
            </div>
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
