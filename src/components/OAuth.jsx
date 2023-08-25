import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import styles from "./OAuth.module.css"

export default function OAuth() {
  return (
    <div className={styles["icon-container"]}>
      <div className={styles["icons-button-container"]}>
        <button className={styles["facebook-icon-btn"]}>
          <RiFacebookFill className={styles["facebook-icon"]} />
        </button>
        <button className={styles["google-icon-btn"]}>
          <AiOutlineGoogle className={styles["google-icon"]} />
        </button>
      </div>
    </div>
  );
}
