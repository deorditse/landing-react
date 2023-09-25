import React from "react";
import Container2 from "../Container2";
import "./AdvantageItem3.css";

function AdvantageItem3(props) {
  const { className, container2Props } = props;

  return (
    <div className={`advantage-item-4 ${className || ""}`}>
      <Container2
        src={container2Props.src}
        title={container2Props.title}
        subtitle={container2Props.subtitle}
        className={container2Props.className}
      />
    </div>
  );
}

export default AdvantageItem3;
