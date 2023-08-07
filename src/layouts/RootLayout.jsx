import { Fragment, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MenuBar from "../images/svgs/MenuBar";
import Logo from "../pages/Logo";
import style from "./RootLayout.module.css";

const RootLayout = () => {
  const [showNav, setShowNav] = useState(false);

  const showMenuBar = () => {
    setShowNav((onshow) => !onshow);
  };

  return (
    <Fragment>
      {/* MOBILE NAV BAR MENU */}
      {showNav && (
        <div className={style["mobile-nav-modal"]} onClick={showMenuBar}></div>
      )}
      <div className={showNav ? "mobile-navbar-show" : "mobile-navbar-hide"}>
        {showNav && (
          <div className={style["mobile-nav-list"]}>
            <Logo />

            <div>
              <button className={style["signin-mobile"]}>Sign In</button>
            </div>
            <div>
              <button className={style["signup-mobile"]}>Sign Up</button>
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

      <div className={style["flex-wrapper"]}>
        <div className={style["inner-flex"]}>
          <NavLink to="/">
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
          <NavLink to="categories" className={style.categories}>
            CATEGORIES
          </NavLink>
        </div>
        <div>
          <button className={style.signin}>Sign In</button>
        </div>
        <div>
          <button className={style.signup}>Sign Up</button>
        </div>

        <span className={style["mobile-menu"]} onClick={showMenuBar}>
          <MenuBar showNav={showNav} />
        </span>
      </div>
      {/* Blur Background */}
      <div className={style["blur-bacground"]}></div>
      {/* SUB HEADING SECTION */}
      <div className={style["welcome-header"]}>
        <p>
          <marquee behavior="scroll" scrollamount="5" direction="">
            You are welcome to CONECTAR your number one platform in Nigeria to
            hire someone capable to do all your home services for you within
            short period of TIME.
          </marquee>
        </p>
      </div>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default RootLayout;
