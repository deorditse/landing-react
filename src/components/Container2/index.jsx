import React from "react";
import "./Container2.css";

function Container2(props) {
  const { src, title, subtitle, className } = props;

  return (
    <div className={`container-26 ${className || ""}`}>
      <img className="x-sber-6" src={src} alt="Ic Sber wallet" />
      <div className="title-subtitle-6">
        <div className="title-11 sbsansdisplay-normal-shark-24px">{title}</div>
        <p className="subtitle-16 sbsanstext-regular-normal-shark-19px">{subtitle}</p>
      </div>
    </div>
  );
}

export default Container2;
