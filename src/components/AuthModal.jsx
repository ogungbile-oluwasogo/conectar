import React from "react";
import Modal from "react-modal";
import styles from "./AuthModal.module.css"; // Import the CSS module
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const AuthModal = ({ isOpen, onClose, mode }) => {
  console.log("AuthModal is rendering");
  const handleAuthSuccess = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      bodyOpenClassName={styles["ReactModal__Body"]}
      overlayClassName={styles["ReactModal__Overlay"]}
    >
      <div>
        {/* Apply the CSS module class */}
        {mode === "signup" ? (
          <SignUp onSuccess={handleAuthSuccess} />
        ) : (
          <SignIn onSuccess={handleAuthSuccess} />
        )}
      </div>
    </Modal>
  );
};

export default AuthModal;
