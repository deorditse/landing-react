import React from "react";
import "./AdvantageItem5.css";

function AdvantageItem5(props) {
  const { src, title, subtitle, className } = props;

  return (
    <div className={`advantage-item-8 ${className || ""}`}>
      <div className="container-36">
        <img className="ic-sber" src={src} alt="Ic Sber wallet" />
        <div className="title-subtitle-8">
          <div className="title-16 sbsansdisplay-normal-shark-24px">
            {title}
          </div>
          <p className="subtitle-22 sbsanstext-regular-normal-shark-19px">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdvantageItem5;
