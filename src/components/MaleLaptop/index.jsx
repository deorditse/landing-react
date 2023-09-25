import React from "react";
import "./MaleLaptop.css";

function MaleLaptop(props) {
  const { className, isMobile } = props;

  return (
    <div
      className={
        isMobile ? className || "" : `male-laptop-1 ${className || ""}`
      }
    ></div>
  );
}

export default MaleLaptop;
