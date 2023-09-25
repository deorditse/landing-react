import React from "react";
import TitleSubtitle from "../TitleSubtitle";
import "./AdvantageItem6.css";

function AdvantageItem6(props) {
  const { className, titleSubtitleProps } = props;

  return (
    <div className={`advantage-item-10-1 ${className || ""}`}>
      <div className="container-43">
        <img className="ic-sber-1" src={titleSubtitleProps.src} alt="Ic Sber wallet" />
        <TitleSubtitle title={titleSubtitleProps.title} subtitle={titleSubtitleProps.subtitle} />
      </div>
    </div>
  );
}

export default AdvantageItem6;
