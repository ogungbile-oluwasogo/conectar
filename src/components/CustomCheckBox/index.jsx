import { useField } from "formik";
import styles from '../../pages/SignUp/SignUp.module.css'


const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  

  return (
    <>
      <div className={styles["checkbox"]}>
        <input
          {...field}
          {...props}
        />
        <p className={styles['signup-tos']}>
          I have read, understand and accept Conectar
          <span link="#" className={styles["signup-tos__span"]}> Terms of service</span>, <span link="#" className={styles["signup-tos__span"]}>Privacy Policy</span>, and agree
          to receive emails from Conectar.
        </p>
      </div>

      {meta.touched && meta.error && <div className={styles["error"]}>{meta.error}</div>}
    </>
  );
};
export default CustomCheckbox;
