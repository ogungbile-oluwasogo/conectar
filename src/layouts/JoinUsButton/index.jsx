import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const JoinUsButton = (props) => {
  const joinUsRef = useRef(null);

  useEffect(() => {
    const el = joinUsRef.current;
    gsap.fromTo(
      el,
      { x: -90, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          end: "top 10%",
        },
      }
    );
  }, []);

  return (
    <div className="join-us-wrapper">
      <button ref={joinUsRef} className="join-us-button">
        {props.children}
      </button>
    </div>
  );
};

export default JoinUsButton;
