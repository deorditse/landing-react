import React from "react";
import ImageHands2 from "../ImageHands2";
import "./BannerContactsDesktop.css";
// import { Linking } from "react-native";

function BannerContactsDesktop(props) {
  const { title, subtitle, imageHands2Props, isMobile } = props;

  return (
    <div
      className="section-banner"
      style={{
        width: isMobile ? "100%" : null,
        padding: isMobile ? "96px 32px 96px 32px" : null,
      }}
    >
      <div
        className="banner-contacts-desktop"
        style={{ width: isMobile ? "100%" : null }}
      >
        <div className="container-11">
          <div className="head-1">
            <p className="title-3 sbsansdisplay-normal-shark-34px">{title}</p>
            <p className="subtitle-4 sbsanstext-regular-normal-shark-24px-2">
              {subtitle}
            </p>
          </div>
          <a
            href={`wa/#/signatureVerification-all`}
            target="_blank"
            rel="noreferrer"
          >
            <div className={"button-7"}>
              <div className="frame-270988836-4">
                <div className="button-8 sbsanstext-regular-normal-white-19px">
                  Проверить подпись
                </div>
              </div>
            </div>
          </a>
        </div>
        <ImageHands2 handsHeartProps={imageHands2Props.handsHeartProps} />
      </div>
    </div>
  );
}

export default BannerContactsDesktop;
