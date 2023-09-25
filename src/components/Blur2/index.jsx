import React from "react";
import "./Blur2.css";

function Blur2(props) {
  const { className } = props;

  return (
    <div className={`blur-6 ${className || ""}`}>
      <div className="ellipse-2166-4"></div>
      <div className="ellipse-2167-9"></div>
    </div>
  );
}

export default Blur2;
