import { Fragment, useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import MenuBar from "../../images/svgs/MenuBar";
import Logo from "../../pages/Logo";
import { AuthContext } from "../../components/AuthContext";
import AuthModal from "../../components/AuthModal";
import Home from "../../pages/Home";
import style from "./RootLayout.module.css";

const RootLayout = () => {
  const [showNav, setShowNav] = useState(false);

  const showMenuBar = () => {
    setShowNav((onshow) => !onshow);
  };

  const { openAuthModal } = useContext(AuthContext);

  return (
    <Fragment>
      {/* MOBILE NAV BAR MENU */}
      {showNav && (
        <div
          className={style["mobile-nav-modal"]}
          onClick={showMenuBar}
          aria-hidden="true"
        ></div>
      )}

      <div className={showNav ? "mobile-navbar-show" : "mobile-navbar-hide"}>
        {showNav && (
          <div className={style["mobile-nav-list"]}>
            <Logo />

            <div>
              <button
                className={style["signin-mobile"]}
                onClick={() => openAuthModal("login")}
              >
                Sign In
              </button>
            </div>

            <div>
              <button
                className={style["signup-mobile"]}
                onClick={() => openAuthModal("signup")}
              >
                Sign Up
              </button>
            </div>

            <div>
              <NavLink
                to="categories"
                className={style["categories-mobile"]}
                onClick={showMenuBar}
              >
                CATEGORIES
              </NavLink>
            </div>
          </div>
        )}
      </div>

      {/* NAVIGATION SECTION */}

      <nav className={style["flex-wrapper"]}>
        <div className={style["inner-flex"]}>
          <NavLink
            to="/"
            exact
          >
            <span>
              <Logo />
            </span>
          </NavLink>
        </div>

        <div>
          <form action="">
            <input
              type="text"
              placeholder="&#128269; Find services"
              className={style["header-input"]}
            />
            <button className={style["header-search-button"]}>Search</button>
          </form>
        </div>

        <div>
          <NavLink
            to="/categories"
            className={style["categories"]}
          >
            CATEGORIES
          </NavLink>
        </div>

        <div>
          <button
            className={style["signin"]}
            onClick={() => openAuthModal("login")}
          >
            Login
          </button>
        </div>

        <div>
          <button
            className={style["signup"]}
            onClick={() => openAuthModal("signup")}
          >
            Sign up
          </button>
        </div>

        <span
          className={style["mobile-menu"]}
          onClick={showMenuBar}
        >
          <MenuBar showNav={showNav} />
        </span>
      </nav>

      {/* Blur Background */}
      <div className={style["blur-background"]}></div>

      {/* SUB HEADING SECTION */}
      <header className={style["welcome-header"]}>
        <p
          className={style["scrolling-text"]}
          aria-label="Welcome Message"
        >
          You are welcome to CONECTAR your number one platform in Nigeria to
          hire someone capable to do all your home services for you within short
          period of TIME.
        </p>
      </header>

      <main>
        <Outlet />
        <Home />
      </main>

      <footer>
        <Footer />
      </footer>

      <AuthModal />
    </Fragment>
  );
};

export default RootLayout;
