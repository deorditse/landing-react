import React from "react";
import ImageSm from "../ImageSm";
import "./Column4.css";

function Column4(props) {
  const { src, title, caption, subtitle, imageSmProps } = props;

  return (
    <div className="column-5">
      <ImageSm src={src} className={imageSmProps.className} />
      <div className="frame-270988932-2">
        <div className="title-17 sbsansdisplay-normal-shark-22px">{title}</div>
        <div className="frame-270988931-2">
          <div className="caption-2 sbsansdisplay-normal-shark-28px">
            {caption}
          </div>
          <p className="subtitle-23 sbsanstext-regular-normal-shark-19px-2">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Column4;
