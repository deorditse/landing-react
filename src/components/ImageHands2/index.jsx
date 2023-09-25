import React from "react";
import HandsHeart from "../HandsHeart";
import "./ImageHands2.css";

function ImageHands2(props) {
  const { className, handsHeartProps } = props;

  return (
    <div className={`image-hands-3 ${className || ""}`}>
      <HandsHeart
        src={handsHeartProps.src}
        className={handsHeartProps.className}
      />
    </div>
  );
}

export default ImageHands2;
