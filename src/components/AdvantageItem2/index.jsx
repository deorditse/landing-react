import React from "react";
import Container from "../Container";
import "./AdvantageItem2.css";
import IcQuestionCircle from "../../assets/img/ic-question-circle@2x.svg";


function AdvantageItem2(props) {
  const { containerProps } = props;

  return (
    <div className="advantage-item-2">
      <Container src={containerProps.src} title={containerProps.title} subtitle={containerProps.subtitle} className={containerProps.className} />
      <img data-tip data-for="registerTip" className="ic-question-circle" src={IcQuestionCircle} alt="ic question-circle" />
    </div>
  );
}

export default AdvantageItem2;
