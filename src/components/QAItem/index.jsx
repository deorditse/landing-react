import React from "react";
import "./QAItem.css";
import IcQuestion3 from "../../assets/img/ic-question-3@2x.svg";

function QAItem(props) {
  const { title, subtitle } = props;

  return (
    <div className="qa-item">
      <div className="container-15">
        <img className="ic_question" src={IcQuestion3} alt="ic_question" />
        <div className="title-subtitle-1">
          <p className="title-4 sbsansdisplay-normal-shark-24px">{title}</p>
          <p className="subtitle-8 sbsanstext-regular-normal-shark-19px">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default QAItem;
