import React from "react";

const ArrowSvg = () => {
  return (
    <div className="arrow-div">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="arrow-svg"
        // style={styling}
      >
        <g id="SVGRepo_bgCarrier"></g>
        <g
          id="SVGRepo_tracerCarrier"
          //   stroke-linecap="round"
          //   stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M5.63574 7.75737L7.04996 6.34315L12.7068 12L7.04998 17.6568L5.63577 16.2426L9.87839 12L5.63574 7.75737Z"
            fill="#fff"
          ></path>{" "}
          <path
            d="M12.7068 6.34315L11.2926 7.75737L15.5352 12L11.2926 16.2426L12.7068 17.6568L18.3637 12L12.7068 6.34315Z"
            fill="#fff"
          ></path>{" "}
        </g>
      </svg>
    </div>
  );
};

export default ArrowSvg;
