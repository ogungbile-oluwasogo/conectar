import React, { useContext, useState } from "react";
import { Form, Formik } from "formik";
import { advancedSchema, formSchema } from "../../schemas/index";
import styles from "./SignUp.module.css"; // Import the CSS module
import {
  BsFillPersonFill,
  BsEnvelope,
  BsLock,
  BsBriefcase,
  BsBriefcaseFill,
} from "react-icons/bs";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import CustomInput from "../../components/CustomInputs";
import CustomCheckbox from "../../components/CustomCheckBox";
import OAuth from "../../components/OAuth";
import { AuthContext } from "../../components/AuthContext";

const SignUp = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeType, setActiveType] = useState("owner");

  const { openAuthModal } = useContext(AuthContext);

  function handleShowPassword() {
    setShowPassword((prevState) => !prevState);
  }

  function handleShowConfirmPassword() {
    setShowConfirmPassword((prevState) => !prevState);
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
        <Form className={styles["signup-form"]}>
          <div className={styles["signup-service-type"]}>
            <button
              type="button"
              className={`${styles["signup-form-type"]} ${
                styles["signup-form-type_owner"]
              } ${
                activeType === "owner" ? styles["signup-provider-active"] : ""
              }`}
              onClick={() => setActiveType("owner")}
            >
              Service Owner
            </button>
            <button
              type="button"
              className={`${styles["signup-form-type"]} ${
                styles["signup-form-type_provider"]
              } ${
                activeType === "provider"
                  ? styles["signup-provider-active"]
                  : ""
              }`}
              onClick={() => setActiveType("provider")}
            >
              Service Provider
            </button>
          </div>

          <div className={styles["input-flex-container"]}>
            <div className={styles["signup-input-container"]}>
              <div className={styles["signup-input-icon"]}>
                <BsFillPersonFill />
              </div>

              <CustomInput
                name="fullName"
                placeholder="Enter your Full Name"
                aria-required
              />
            </div>

            <div className={styles["signup-input-container"]}>
              <div className={styles["signup-input-icon"]}>
                <BsEnvelope />
              </div>

              <CustomInput
                name="email"
                type="email"
                placeholder="Enter your Full Name"
                aria-required
              />
            </div>

            {activeType === "provider" && (
              <div className={styles["signup-input-container"]}>
                <div className={styles["signup-input-icon"]}>
                  <BsBriefcaseFill />
                </div>

                <CustomInput
                  name="service"
                  placeholder="Indicate your service"
                  aria-required
                />
              </div>
            )}

            <div className={styles["signup-input-container"]}>
              <div className={styles["signup-input-icon"]}>
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
                  className={styles["signup-password"]}
                  onClick={handleShowPassword}
                />
              ) : (
                <AiFillEyeInvisible
                  className={styles["signup-password"]}
                  onClick={handleShowPassword}
                />
              )}
            </div>

            <div className={styles["signup-input-container"]}>
              <div className={styles["signup-input-icon"]}>
                <BsLock />
              </div>
              <CustomInput
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                aria-required
              />
              {showConfirmPassword ? (
                <AiFillEye
                  className={styles["signup-password"]}
                  onClick={handleShowConfirmPassword}
                />
              ) : (
                <AiFillEyeInvisible
                  className={styles["signup-password"]}
                  onClick={handleShowConfirmPassword}
                />
              )}
            </div>
          </div>

          <div>
            <CustomCheckbox
              name="acceptedTos"
              aria-required
              type="checkbox"
              showError={true}
              message={
                <>
                  I have read, understand and accept Conectar
                  <a
                    href="/terms-of-service"
                    className={styles["signup-tos__link"]}
                  >
                    {" "}
                    Terms of service
                  </a>
                  ,{" "}
                  <a
                    href="/privacy"
                    target="_blank"
                    className={styles["signup-tos__link"]}
                  >
                    Privacy Policy
                  </a>
                  , and agree to receive emails from Conectar.
                </>
              }
            />
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className={styles["signup-button"]}
          >
            Submit
          </button>

          <div className={styles["signup-divider"]}>
            <div className={styles["signup-divider-line"]}>
              <div className={styles["divider-knob"]}></div>
            </div>
            <p className={styles["signup-divider-text"]}>OR</p>
            <div className={styles["signup-divider-line"]}>
              <div className={styles["divider-knob"]}></div>
            </div>
          </div>
          <OAuth />
          <div className={styles["signup-link-signin-container"]}>
            Already have an account
            <button
              className={styles["signup-link-signin"]}
              onClick={ () => openAuthModal("login")}
            >
              Sign In
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
