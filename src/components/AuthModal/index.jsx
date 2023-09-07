
import React from "react";
import Modal from "react-modal";
import { ReactComponent as CloseIcon } from "../../images/close.-icon.svg";
import styles from "./AuthModal.module.css"; // Import the CSS module
import SignUp from "../../pages/SignUp";
import SignIn from "../../pages/SignIn";
import ForgetPassword from "../../pages/ForgetPassword";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

const customStyles = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10000,
    background: "rgba(84, 22, 22, 0.75)",
  },

  content: {
    position: "absolute",
    inset: "unset",
    top: "10px",
    bottom: "20px",
    width: "600px",
    maxWidth: "95vw",
    margin: "0 auto",
    overflow: "auto",
    borderRadius: "15px",
    border: "1px solid #707070",
    height: "max-content",
    maxHeight: "99vh",
  },
};

const AuthModal = () => {
  const { authModalOpen, closeAuthModal, authMode } = useContext(AuthContext);

  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement(document.getElementById("root"));

  const handleAuthSuccess = () => {
    closeAuthModal(); // Close the modal when authentication is successful
  };

  return (
    <Modal
      isOpen={authModalOpen} // Use authModalOpen to determine whether the modal should be open
      onRequestClose={closeAuthModal}
      portalClassName="ReactModal__body"
      shouldCloseOnEsc
      shouldCloseOnOverlayClick={false}
      style={{ ...customStyles }}
    >
      <>
        <button
          type="button"
          onClick={closeAuthModal}
          className={styles["close"]}
          aria-label="Close"
          data-testid="close-react-modal"
        >
          <CloseIcon />
        </button>
        <div>
          {authMode === "signup" ? (
            <SignUp onSuccess={handleAuthSuccess} />
          ) : authMode === "forget-password" ? (
            <ForgetPassword onSuccess={handleAuthSuccess} />
          ) : (
            <SignIn onSuccess={handleAuthSuccess} />
          )}
        </div>
      </>
    </Modal>
  );
};

export default AuthModal;
