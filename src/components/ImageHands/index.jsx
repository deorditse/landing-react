import React from "react";
import OtherchandsPhone from "../OtherchandsPhone";
import "./ImageHands.css";
import Vector2Stroke1 from "../../assets/img/vector-2--stroke--1@2x.svg";

function ImageHands(props) {
  const { className, otherchandsPhoneProps, styleCust } = props;

  return (
    <div className={`image-hands ${className || ""}`}>
      <div className="overlap-group">
        <OtherchandsPhone
          src={otherchandsPhoneProps.src}
          className={otherchandsPhoneProps.className}
          styleCust={styleCust}
        />
        <img
          className="vector-2-stroke"
          src={Vector2Stroke1}
          alt="Vector 2 (Stroke)"
        />
      </div>
    </div>
  );
}

export default ImageHands;
