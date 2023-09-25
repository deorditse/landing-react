import React from "react";
import ImageSm from "../ImageSm";
import "./Column2.css";

function Column2(props) {
  const { src, title, caption, subtitle, imageSmProps } = props;

  return (
    <div className="column-2">
      <ImageSm src={src} className={imageSmProps.className} />
      <div className="frame-270988932-1">
        <div className="title-12 sbsansdisplay-normal-shark-22px">{title}</div>
        <div className="frame-270988931-1">
          <div className="sbsansdisplay-normal-shark-18px">{caption}</div>
          <p className="sbsanstext-regular-normal-14px subtitle-17">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Column2;
