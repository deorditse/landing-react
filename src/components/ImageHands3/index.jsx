import React from "react";
import HandsHeart2 from "../HandsHeart2";
import "./ImageHands3.css";

function ImageHands3(props) {
  const { handsHeart2Props } = props;

  return (
    <div className="image-hands-5">
      <HandsHeart2 src={handsHeart2Props.src} />
    </div>
  );
}

export default ImageHands3;
