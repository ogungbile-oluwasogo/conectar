import { useField } from "formik";
import styles from ".././pages/SignUp.module.css";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={styles["input-flex-container"]}>
      <div>
        <input
          {...field}
          {...props}
          className={`${styles["signup-input"]} ${
            meta.touched && meta.error ? styles["signup-input-error"] : ""
          }`}
        />
      </div>
      <div >
        {meta.touched && meta.error && (
          <span className={styles["error"]}>{meta.error}</span>
        )}
      </div>
    </div>
  );
};
export default CustomInput;
