import React, { useContext } from "react";
import { AuthContext } from "../../components/AuthContext";
import OAuth from "../../components/OAuth";
import styles from "./ForgetPassword.module.css";
import { Form, Formik } from "formik";
import CustomInput from "../../components/CustomInputs";

import doorKey from "../../images/lock.png";
import { advancedSchema } from "../../schemas";
import { BsEnvelope } from "react-icons/bs";

export default function ForgetPassword() {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const { openAuthModal } = useContext(AuthContext);

  // const [email, setEmail] = useState("");

  // function onChange(e) {
  //   setEmail(e.target.value);
  // }

  // async function onSubmit(e) {
  //   e.preventDefault();
  //   try {

  //     const auth = getAuth();
  //     await sendPasswordResetEmail(auth, email);

  //     toast.success("Email sent successfully")
  //   } catch (error) {
  //     toast.error("Could not send reset email");
  //   }
  // }

  return (
    <section className={styles["forget-password-container"]}>
      <h1 className={styles["forget-password-heading"]}>Forgot Password</h1>

      <div className={styles["forget-password"]}>
        <div className={styles["forget-password-image-container"]}>
          <img
            src={doorKey}
            alt="door-with-key"
            className={styles["forget-password-image"]}
          />
        </div>

        <div className={styles["forget-password-form-container"]}>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={advancedSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className={styles["forget-password-form"]}>
                <div className={styles["forget-password-input-container"]}>
                  <label
                    htmlFor="email"
                    className={styles["hidden-label"]}
                  >
                    Email
                  </label>
                  <div className={styles["forget-password-icon"]}>
                    <BsEnvelope aria-hidden="true" />
                  </div>
                  <CustomInput
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    aria-required
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className={styles["forget-password-button"]}
                >
                  Reset Password
                </button>

                <div className={styles["forget-password-account"]}>
                  <div>
                    {`Don't have an account?`}
                    <button
                      onClick={() => openAuthModal("signup")}
                      className={styles["forget-password-signup"]}
                    >
                      Sign Up
                    </button>
                  </div>
                  <div>
                    <button
                      className={styles["forget-password-signin"]}
                      onClick={() => openAuthModal("login")}
                    >
                      Login
                    </button>
                  </div>
                </div>

                <div className={styles["forget-password-divider"]}>
                  <div className={styles["forget-password-divider-line"]}></div>
                  <p className={styles["forget-password-divider-text"]}>OR</p>
                  <div className={styles["forget-password-divider-line"]}></div>
                </div>
                <OAuth />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}
