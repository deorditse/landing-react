import React from "react";
import "./HandsHeart.css";

function HandsHeart(props) {
  const { src, className } = props;

  return <div className={`hands-heart ${className || ""}`} style={{ backgroundImage: `url(${src})` }}></div>;
}

export default HandsHeart;
