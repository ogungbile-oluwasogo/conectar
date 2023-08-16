import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Facebook from "../images/svgs/Facebook";
import Google from "../images/svgs/Google";
import LinkedIn from "../images/svgs/LinkedIn";
import Twitter from "../images/svgs/Twitter";
import Logo from "../pages/Logo";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <Fragment>
      <div className={style["footer-wrapper"]}>
        <div className={style["footer-wrapper-flex"]}>
          <Logo />
          <div className={style["footer-inner-flex"]}>
            <ul>
              <li>
                <Link to="/about">About CONECTAR</Link>
              </li>
              <li>
                <Link to="/terms">Terms of services</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy & Policy</Link>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">
                  <h3>Popular Services</h3>
                </a>
              </li>
              <li>
                <a href="/">Hairdressing</a>
              </li>
              <li>
                <a href="/">Barbing</a>
              </li>
              <li>
                <a href="/">Laundry</a>
              </li>
              <li>
                <a href="/">Electrical</a>
              </li>
              <li>
                <a href="/">Plumbing</a>
              </li>
              <li>
                <a href="/">Gardener</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">
                  <h3>Support</h3>
                </a>
              </li>
              <li>
                <a href="/">Help & Support</a>
              </li>
              <li>
                <a href="/">Dispute Resolution</a>
              </li>
              <li>
                <a href="/">Safety & Trust</a>
              </li>
              <li>
                <Link to="faqs">FAQs</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={style["social-media"]}>
          <a href="/">
            <Twitter />
          </a>
          <a href="/">
            <LinkedIn />
          </a>
          <a href="/">
            <Facebook />
          </a>
          <a href="/">
            <Google />
          </a>
        </div>
      </div>
      <div className={style["footer-copyright"]}>
        <p>All right reserved:</p>
        <p>2023 @ Nigeria Conectar.com</p>
      </div>
    </Fragment>
  );
};

export default Footer;
