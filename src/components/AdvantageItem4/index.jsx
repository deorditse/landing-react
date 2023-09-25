import React from "react";
import Container2 from "../Container2";
import "./AdvantageItem4.css";
import IcQuestionCircle from "../../assets/img/ic-question-circle@2x.svg";
import ReactTooltip from "react-tooltip";

function AdvantageItem4(props) {
  const { container2Props } = props;

  return (
    <div className="advantage-item-5">
      <Container2
        src={container2Props.src}
        title={container2Props.title}
        subtitle={container2Props.subtitle}
        className={container2Props.className}
      />
      <img data-tip data-for="registerTip" className="ic-question-circle-1" src={IcQuestionCircle} alt="ic question-circle" />
      <ReactTooltip 
        id="registerTip" 
        place="bottom" 
        afterHide={true} 
        scrollHide={true}
        backgroundColor="white"
        multiline={true}
        textColor="rgba(38, 38, 38, 0.7)"
        border="1px"
        borderColor="rgba(38, 38, 38, 0.08)"
      >
        УНЭП — это усиленная неквалифицированная подпись
      </ReactTooltip>
    </div>
  );
}

export default AdvantageItem4;
