import React from "react";
import Column4 from "../Column4";
import "./Row.css";

function Row(props) {
  const { className, column41Props, column42Props, column43Props } = props;

  return (
    <div className={`row-5 ${className || ""}`}>
      <Column4
        src={column41Props.src}
        title={column41Props.title}
        caption={column41Props.caption}
        subtitle={column41Props.subtitle}
        imageSmProps={column41Props.imageSmProps}
      />
      <Column4
        src={column42Props.src}
        title={column42Props.title}
        caption={column42Props.caption}
        subtitle={column42Props.subtitle}
        imageSmProps={column42Props.imageSmProps}
      />
      <Column4
        src={column43Props.src}
        title={column43Props.title}
        caption={column43Props.caption}
        subtitle={column43Props.subtitle}
        imageSmProps={column43Props.imageSmProps}
      />
    </div>
  );
}

export default Row;
