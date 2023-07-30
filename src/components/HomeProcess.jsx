import React from "react";
import ArrowSvg from "../images/svgs/ArrowSvg";
import Naira from "../images/svgs/Naira";
import SearchSvg from "../images/svgs/SearchSvg";
import Thumps from "../images/svgs/Thumps";
import style from "./HomeProcess.module.css";

const HomeProcess = () => {
  return (
    <div className={style["process-wrapper"]}>
      <div className={style["process-blur-background"]}>
        <div className={style["process-background-color"]}></div>
      </div>
      <h4>Discover how thing is DONE with Conectar:</h4>
      <div className={style["process-services-wrapper"]}>
        <div className={style["find-services"]}>
          <div className={style["svg-styling"]}>
            <SearchSvg />
          </div>
          <div className={style["process-text"]}>
            <h5>Find Any Home Service Provider</h5>
            <p>
              Explain and find any service suitable for you & assign it to a
              capable service provider
            </p>
          </div>
        </div>
        <div className={style["arrow-services "]}>
          <div className={style["arrow-styling"]}>
            <ArrowSvg />
          </div>
        </div>
        <div className={style["find-services"]}>
          <div className={style["svg-styling"]}>
            <Naira />
          </div>
          <div className={style["process-text"]}>
            <h5>Release Funds</h5>
            <p>Release your service funds to CONNECTAR</p>
          </div>
        </div>
        <div className={style["arrow-services "]}>
          <div className={style["arrow-styling"]}>
            <ArrowSvg />
          </div>
        </div>
        <div className={style["find-services"]}>
          <div className={style["svg-styling"]}>
            <Thumps />
          </div>
          <div className={style["process-text"]}>
            <h5>Get Quality Service</h5>
            <p>
              Funds will not be released <br /> to service provider until your
              satisfactory are met
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProcess;
