import React from "react";
import "./TitleSubtitle2.css";

function TitleSubtitle2(props) {
  const { title, subtitle } = props;

  return (
    <div className="title-subtitle-10">
      <div className="title-26 sbsansdisplay-normal-shark-24px">{title}</div>
      <p className="subtitle-36 sbsanstext-regular-normal-shark-19px">{subtitle}</p>
    </div>
  );
}

export default TitleSubtitle2;
