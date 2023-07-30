import React from "react";
import Logo from "../pages/Logo";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={style["footer-wrapper"]}>
        <Logo />
        <div className={style["footer-inner-flex"]}>
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">About CONECTAR</a>
            </li>
            <li>
              <a href="/">Terms of services</a>
            </li>
            <li>
              <a href="/">Privacy & Policy</a>
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
              <a href="/">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={style["footer-copyright"]}>
        <p>All right reserved:</p>
        <p>2023 @ Nigeria Conectar.com</p>
      </div>
    </div>
  );
};

export default Footer;
