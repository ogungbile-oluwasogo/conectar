import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../pages/Logo";
import style from "./RootLayout.module.css";

const RootLayout = () => {
  return (
    <Fragment>
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
            <button className={style["header-search-button"]}>Search</button>
            <input
              type="text"
              placeholder="&#128269; Find services"
              className={style["header-input"]}
            />
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
        <h4>Menu</h4>
      </div>

      {/* Blur Background */}
      <div className={style["blur-bacground"]}></div>

      {/* SUB HEADING SECTION */}
      <div className={style["welcome-header"]}>
        <p>
          <marquee behavior="scroll" scrollamount="9" direction="">
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
