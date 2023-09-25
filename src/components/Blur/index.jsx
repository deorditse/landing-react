import React from "react";
import "./Blur.css";

function Blur(props) {
  const { className } = props;

  return (
    <div className={`blur-5 ${className || ""}`}>
      <div className="ellipse-container-1">
        <div className="ellipse-2166-1"></div>
        <div className="ellipse-2167-1"></div>
      </div>
    </div>
  );
}

export default Blur;
