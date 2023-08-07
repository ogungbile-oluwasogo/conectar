import { Fragment, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import style from "../pages/Home.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const homeSearch = useRef(null);

  useEffect(() => {
    const el = homeSearch.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
          end: "top 10%",
        },
      }
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevImage) =>
        prevImage === slides.length - 1 ? 0 : prevImage + 1
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [slides]);

  const slideStyle = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "41% 59%",
    height: "430px",
    width: "100%",
    zIndex: "3",
    transition: "2.5s ease-in-out",
    overflow: "hidden",
  };

  return (
    <Fragment>
      <div className="homeslider-wrapper">
        <div style={slideStyle}>
          <div className={style["bg-color"]}></div>
        </div>
        <div className={style["home-search-area"]} ref={homeSearch}>
          <form action="">
            <label htmlFor="">
              Find your Home Service provider in just a click!!!
            </label>
            <input
              type="text"
              placeholder="&#128269; Search for Services e.g (plumbing)"
              className={style["home-search-input"]}
            />
            <button className={style["home-search-button"]}>Search</button>
          </form>
          <div className={style["popular-jobs"]}>
            <p>Popular: </p>
            <Link to="/categories/hairdressing">Hairdressing</Link>
            <a href="/">Barbing</a>
            <a href="/">Plumbing</a>
            <a href="/">House Cleaner</a>
          </div>
        </div>
      </div>

      {/* proudly supported section */}
      <div className={style["support-wrapper"]}>
        <p>Proudly supported by:</p>
      </div>
    </Fragment>
  );
};

export default HomeImageSlider;
