import React from "react";
import Modal from "react-modal";
import { ReactComponent as CloseIcon } from "../../images/close.-icon.svg";
import styles from "./AuthModal.module.css"; // Import the CSS module
import SignUp from "../../pages/SignUp";
import SignIn from "../../pages/SignIn";

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
const AuthModal = ({ isOpen, closeModal, mode }) => {
  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement(document.getElementById("root"));

  const handleAuthSuccess = () => {
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      portalClassName="ReactModal__body"
      shouldCloseOnEsc
      // If you want to close the close when the overlay is clicked, then change this to true
      shouldCloseOnOverlayClick={false}
      style={{ ...customStyles }}
    >
      <>
        <button
          type="button"
          onClick={closeModal}
          className={styles["close"]}
          aria-label="Close"
          data-testid="close-react-modal"
        >
          <CloseIcon />
        </button>
        <div>
          {/* Apply the CSS module class */}
          {mode === "signup" ? (
            <SignUp onSuccess={handleAuthSuccess} />
          ) : (
            <SignIn onSuccess={handleAuthSuccess} />
          )}
        </div>
      </>
    </Modal>
  );
};

export default AuthModal;
