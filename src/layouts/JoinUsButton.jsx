import React from "react";

const JoinUsButton = (props) => {
  return (
    <div className="join-us-wrapper">
      <button className="join-us-button">{props.children}</button>
    </div>
  );
};

export default JoinUsButton;
