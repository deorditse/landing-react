import React from "react";
import "./Container.css";

function Container(props) {
  const { src, title, subtitle, className } = props;

  return (
    <div className={`container-5-1 ${className || ""}`}>
      <img className="x-sber" src={src} alt="Ic Sber wallet" />
      <div className="title-subtitle">
        <div className="title-1 sbsansdisplay-normal-shark-24px">{title}</div>
        <p className="subtitle-2 sbsanstext-regular-normal-shark-19px">{subtitle}</p>
      </div>
    </div>
  );
}

export default Container;
