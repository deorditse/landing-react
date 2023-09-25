import React from "react";
import TitleSubtitle2 from "../TitleSubtitle2";
import "./AdvantageItem7.css";


function AdvantageItem7(props) {
  const { className, titleSubtitle2Props } = props;

  return (
    <div className={`advantage-item-12 ${className || ""}`}>
      <div className="container-56">
        <img className="ic-sber-2" src={titleSubtitle2Props.src} alt="Ic Sber wallet" />
        <TitleSubtitle2 title={titleSubtitle2Props.title} subtitle={titleSubtitle2Props.subtitle} />
      </div>
    </div>
  );
}

export default AdvantageItem7;
