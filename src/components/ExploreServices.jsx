import classes from "./ExploreServices.module.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ExploreServices = () => {
  const expImageRef = useRef(null);
  const expTextRef = useRef(null);

  useEffect(() => {
    const el = expImageRef.current;
    gsap.fromTo(
      el,
      { x: 80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 10%",
          // markers: true,
        },
      }
    );
  }, []);
  useEffect(() => {
    const el = expTextRef.current;
    gsap.fromTo(
      el,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        delay: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 10%",
        },
      }
    );
  }, []);

  return (
    <div className={classes["explore-wrapper"]}>
      <h3 ref={expImageRef}>Explore all our HOME SERVICES</h3>
      <div className={classes["explore-background"]}></div>
      <div className={classes.grid} ref={expTextRef}>
        <a href="/">HAIRDRESSING</a>
        <a href="/">BARBING</a>
        <a href="/">PLUMBING</a>
        <a href="/">HOUSE CLEANING</a>
        <a href="/">PAINTING</a>
        <a href="/">LAUNDRY</a>
        <a href="/">ELECTRICAL</a>
        <a href="/">CARPENTRY</a>
        <a href="/">GARDENER</a>
        <a href="/">PAINTING</a>
        <a href="/">MAKE-UP</a>
        <a href="/">AC INSTALLATION</a>
      </div>
    </div>
  );
};

export default ExploreServices;
