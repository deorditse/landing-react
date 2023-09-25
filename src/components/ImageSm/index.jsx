import React from "react";
import "./ImageSm.css";

function ImageSm(props) {
  const { src, className } = props;

  return (
    <div className={`image-sm-5 ${className || ""}`}>
      <div className="overlap-group-1">
        <div className="ellipse-2167-4"></div>
        <div className="container-6">
          <img className="x-sber-1" src={src} alt="Ic Sber profile" />
        </div>
      </div>
    </div>
  );
}

export default ImageSm;
