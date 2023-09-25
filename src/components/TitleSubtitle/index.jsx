import React from "react";
import "./TitleSubtitle.css";

function TitleSubtitle(props) {
  const { title, subtitle } = props;

  return (
    <div className="title-subtitle-9">
      <div className="title-21 sbsansdisplay-normal-shark-24px">{title}</div>
      <p className="subtitle-28 sbsanstext-regular-normal-shark-19px">{subtitle}</p>
    </div>
  );
}

export default TitleSubtitle;
