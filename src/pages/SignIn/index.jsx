import React, { useContext, useState } from "react";
import { Form, Formik } from "formik";
import CustomInput from "../../components/CustomInputs";
import { advancedSchema } from "../../schemas";
import styles from "./SignIn.module.css";
import { BsEnvelope, BsLock } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../../components/OAuth";
import CustomCheckBox from "../../components/CustomCheckBox";
import { AuthContext } from "../../components/AuthContext";

export default function SignIn() {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const [showPassword, setShowPassword] = useState(false);

  const { openAuthModal } = useContext(AuthContext);

   function handleShowPassword() {
     setShowPassword((prevState) => !prevState);
   }



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
            <div className={styles["signin-input-container"]}>
              <div className={styles["signin-input-icon"]}>
                <BsEnvelope />
              </div>
              <CustomInput
                name="email"
                type="email"
                placeholder="Email Address"
                aria-required
              />
            </div>
            <div className={styles["signin-input-container"]}>
              <div className={styles["signin-input-icon"]}>
                <BsLock />
              </div>
              <CustomInput
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                aria-required
              />
              {showPassword ? (
                <AiFillEye
                  className={styles["signin-password"]}
                  onClick={handleShowPassword}
                />
              ) : (
                <AiFillEyeInvisible
                  className={styles["signin-password"]}
                  onClick={handleShowPassword}
                />
              )}
            </div>
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className={styles["signin-button"]}
          >
            Submit
          </button>

          <div className={styles["signin-check"]}>
            <CustomCheckBox
              name="rememberMe"
              aria-required
              type="checkbox"
              showError={false}
              message="Remember me"
            />
            <button
              className={styles["signin-forgetPassword"]}
              onClick={() => openAuthModal("forget-password")}
            >
              Forget Password
            </button>
          </div>

          <div className={styles["signin-divider"]}>
            <div className={styles["signin-divider-line"]}>
              <div className={styles["divider-knob"]}></div>
            </div>
            <p className={styles["signin-divider-text"]}>OR</p>
            <div className={styles["signin-divider-line"]}>
              <div className={styles["divider-knob"]}></div>
            </div>
          </div>
          <div className={styles["signin-auth-signup"]}>
            <OAuth />
            <p>
              New to Conectar?{" "}
              <button
                className={styles["signin-link-signin"]}
                onClick={ () => openAuthModal("signup")}
              >
                Join Us
              </button>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
}
