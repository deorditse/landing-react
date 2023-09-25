import React from "react";
import HandsHeart from "../HandsHeart";
import "./ImageHands4.css";
import Vector2Stroke5 from "../../assets/img/vector-2--stroke-@2x.svg";

function ImageHands4(props) {
  const { className, handsHeartProps } = props;

  return (
    <div className={`image-hands-6 ${className || ""}`}>
      <div className="overlap-group-6">
        <HandsHeart
          src={handsHeartProps.src}
          className={handsHeartProps.className}
        />
        <img
          className="vector-2-stroke-1"
          src={Vector2Stroke5}
          alt="Vector 2 (Stroke)"
        />
      </div>
    </div>
  );
}

export default ImageHands4;
