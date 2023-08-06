import classes from "./PopularServices.module.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PopularServices = ({ services }) => {
  const popImageRef = useRef(null);

  useEffect(() => {
    const el = popImageRef.current;
    gsap.fromTo(
      el,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: "top 65%",
          end: "top 10%",
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div className={classes["popular-section"]}>
      <h3>Popular Services</h3>
      <div className={classes["services-wrapper"]} ref={popImageRef}>
        {services.map((service, index) => (
          <div key={index} className={classes["inner-wrapper"]}>
            <img src={service.image} alt="" />
            <p>{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularServices;
