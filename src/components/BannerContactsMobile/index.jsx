import React from "react";
import ImageHands2 from "../ImageHands2";
import "./BannerContactsMobile.css";
// import { Linking } from "react-native";

function BannerContactsMobile(props) {
  const { title, subtitle, imageHands2Props } = props;

  return (
    <div className="section-banner-mobile">
      <div className="banner-contacts-mobile">
        <div className="container-11-mobile ">
          <div className="head-1-mobile ">
            <p className="title-3-mobile  sbsansdisplay-normal-shark-24px">
              {title}
            </p>
            <p className="subtitle-4-mobile  sbsanstext-regular-normal-14px">
              {subtitle}
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "40px",
          }}
        >
          <ImageHands2
            className="mobile-photo"
            handsHeartProps={imageHands2Props.handsHeartProps}
          />
        </div>
        <a href={`wa/#/signatureVerification`} target="_blank" rel="noreferrer">
          <div className={"button-7"}>
            <div className="frame-270988836-4">
              <div className="button-8 sbsanstext-regular-normal-white-19px">
                Проверить подпись
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default BannerContactsMobile;
