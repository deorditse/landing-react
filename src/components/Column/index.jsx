import React from "react";
import ImageSm from "../ImageSm";
import "./Column.css";

function Column(props) {
  const { src, title, caption, subtitle, imageSmProps } = props;

  return (
    <div className="column">
      <ImageSm src={src} className={imageSmProps.className} />
      <div
        className="frame-270988932"
        style={{
          width: 300,
        }}
      >
        <div className="title-2 sbsansdisplay-normal-shark-22px">{title}</div>
        <div className="frame-270988931">
          <div className="caption sbsansdisplay-normal-shark-28px">
            {caption}
          </div>
          <p className="subtitle-3 sbsanstext-regular-normal-shark-19px-2">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Column;
