import { useField } from "formik";
import styles from './CustomCheckBox.module.css'

const CustomCheckbox = ({ label, message, showError, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className={styles["checkbox"]}>
        <input
          {...field}
          {...props}
        />
        <p className={styles["signup-tos"]}>
          {message}
        </p>
      </div>

      {meta.touched && meta.error && (
        <span className={styles["error"]}>{meta.error}</span>
      )}
    </>
  );
};

export default CustomCheckbox;
