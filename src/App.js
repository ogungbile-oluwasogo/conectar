import React, { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AboutUs from "./pages/AboutUs";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import AuthModal from "./components/AuthModal";
import NotFound from "./components/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { ToastContainer } from "react-toastify";

function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState(""); // "signup" or "login"

  const openAuthModal = (mode) => {
    console.log("Opening AuthModal with mode:", mode);
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    console.log("Closing AuthModal");
    setAuthModalOpen(false);
    setAuthMode("");
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout openAuthModal={openAuthModal} />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="about"
          element={<AboutUs />}
        />
        <Route
          path="privacy"
          element={<Privacy />}
        />
        <Route
          path="categories"
          element={<Categories />}
        >
          <Route
            path="hairdressing"
            element=""
          />
        </Route>
        <Route
          path="/login"
          element={<SignIn />}
        />
        <Route
          path="/signup"
          element={<SignUp />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    )
  );

  <ToastContainer />;

  return (
    <>
      <RouterProvider router={router}>
        <div>
          <nav>
            {/* Open the Sign Up modal */}
            <button onClick={() => openAuthModal("signup")}>Sign Up</button>

            {/* Open the Log In modal */}
            <button onClick={() => openAuthModal("login")}>Log In</button>
          </nav>
          <AuthModal
            isOpen={authModalOpen}
            onClose={closeAuthModal}
            mode={authMode}
          />
        </div>
      </RouterProvider>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      ;
    </>
  );
}

export default App;
