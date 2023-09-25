import React, { useRef } from "react";
import Header2 from "../Header2";
import MaleLaptop from "../MaleLaptop";
import Blur2 from "../Blur2";
import AdvantageItem6 from "../AdvantageItem6";
import ImageHands4 from "../ImageHands4";
import Column5 from "../Column5";
import BannerContactsMobile from "../BannerContactsMobile";
import Blur3 from "../Blur3";
import QAItem from "../QAItem";
import FooterMobile from "../FooterMobile";
import "./X375px.css";
import Rates from "../rates";
import ImageDocChips from "../../assets/img/image-doc-chips@2x.svg";
import MySnackBar from "../snackbar";
import bannerGradientMobile from "./assets/banner-gradient-mobile.png";

function X375px(props) {
  const {
    heroBannerMobile,
    h1,
    subtitle1,
    h21,
    h22,
    h23,
    subtitle2,
    title2,
    maleLaptopProps,
    advantageItem61Props,
    advantageItem62Props,
    titleSubtitleProps,
    advantageItem63Props,
    imageHands4Props,
    column50Props,
    column51Props,
    column52Props,
    column53Props,
    qAItem1Props,
    qAItem2Props,
    qAItem3Props,
    footerProps,
    qAItem4Props,
    bannerContactsDesktopProps,
    menuLinkWa,
  } = props;

  const scollToRef = useRef(null);
  const scollToRefOther = useRef(null);
  const scrollToRefOther = () =>
    scollToRefOther.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="x375px screen">
      <div className="hero">
        <MySnackBar isMobile={true} />
        <Header2
          isMobile={true}
          menuLinkWa={menuLinkWa}
          onTapTarif={() =>
            scollToRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />

        <div
          className="hero-banner-mobile"
          style={{
            backgroundImage: `url(${bannerGradientMobile})`,
          }}
        >
          <MaleLaptop
            isMobile="true"
            className="imagePhoto"
            maleLaptop08Props={maleLaptopProps.maleLaptop08Props}
          />
          <div className="text-container-buttons-3">
            <div className="text-container-3">
              <div className="h1-3 sbsansdisplay-mobile-white">{h1}</div>
              <div className="subtitle-25 sbsanstext-regular-normal-shark-24px-mobile">
                {subtitle1}
              </div>
            </div>
          </div>
          <div
            className="image-banner"
            style={{
              backgroundImage: `url(${heroBannerMobile})`,
            }}
          >
            <button
              style={{
                width: "100%",
                border: 0,
                background: "transparent",
              }}
              onClick={scrollToRefOther}
            >
              <div className={"button-7"}>
                <div className="frame-270988836-4">
                  <div className="button-8 sbsanstext-regular-normal-white-19px">
                    Подробнее
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="rectangle-1-3"></div>
      </div>
      <div className="advantages">
        <div className="container-38">
          <Blur2 />
          <div className="h2-9 sbsansdisplay-mobile-white">{h21}</div>
          <div className="adva">
            <AdvantageItem6
              className={advantageItem62Props.className}
              titleSubtitleProps={advantageItem62Props.titleSubtitleProps}
            />

            <AdvantageItem6
              className={titleSubtitleProps.className}
              titleSubtitleProps={titleSubtitleProps.titleSubtitleProps}
            />
            <AdvantageItem6
              titleSubtitleProps={advantageItem61Props.titleSubtitleProps}
            />

            <AdvantageItem6
              className={advantageItem63Props.className}
              titleSubtitleProps={advantageItem63Props.titleSubtitleProps}
            />
          </div>
        </div>
      </div>
      <div className="about">
        <div className="frame-270988950">
          <div className="h2-10 sbsansdisplay-mobile-white">{h22}</div>

          <img
            className="image-doc-chips-3"
            src={ImageDocChips}
            alt="Doc Chips"
          />

          <ImageHands4 handsHeartProps={imageHands4Props.handsHeartProps} />
        </div>
      </div>
      <div ref={scollToRefOther} className="section-steps-1">
        <div className="container-41">
          <div className="head-6">
            <div className="h2-11 sbsansdisplay-mobile-white">{h23}</div>
            <p className="subtitle-26 sbsanstext-regular-normal-shark-24px-mobile">
              {subtitle2}
            </p>
          </div>
          <div className="row-7">
            <Column5
              src={column50Props.src}
              title={column50Props.title}
              caption={column50Props.caption}
              subtitle={column50Props.subtitle}
              imageSmProps={column50Props.imageSmProps}
            />
            <Column5
              src={column51Props.src}
              title={column51Props.title}
              caption={column51Props.caption}
              subtitle={column51Props.subtitle}
              imageSmProps={column51Props.imageSmProps}
            />
            <Column5
              src={column52Props.src}
              title={column52Props.title}
              caption={column52Props.caption}
              subtitle={column52Props.subtitle}
              imageSmProps={column52Props.imageSmProps}
            />
            <Column5
              src={column53Props.src}
              title={column53Props.title}
              caption={column53Props.caption}
              subtitle={column53Props.subtitle}
              imageSmProps={column53Props.imageSmProps}
            />
          </div>
        </div>
      </div>
      <div ref={scollToRef} className="section-about-mobile">
        <Rates
          menuLinkWa={menuLinkWa}
          className="rates-mobile"
          isMobile={true}
        />
      </div>
      <BannerContactsMobile
        menuLinkWa={menuLinkWa}
        title={bannerContactsDesktopProps.title}
        subtitle={bannerContactsDesktopProps.subtitle}
        frame270988944Props={bannerContactsDesktopProps.frame270988944Props}
        imageHands2Props={bannerContactsDesktopProps.imageHands2Props}
      />
      <div className="qa">
        <Blur3 />
        <div className="container-42">
          <div className="title-20  sbsansdisplay-mobile-white">{title2}</div>
          <div className="adva">
            <QAItem
              title={qAItem1Props.title}
              subtitle={qAItem1Props.subtitle}
            />
            <QAItem
              title={qAItem2Props.title}
              subtitle={qAItem2Props.subtitle}
            />
            <QAItem
              title={qAItem3Props.title}
              subtitle={qAItem3Props.subtitle}
            />
            <QAItem
              title={qAItem4Props.title}
              subtitle={qAItem4Props.subtitle}
            />
          </div>
        </div>
      </div>
      <FooterMobile
        mainUrl={menuLinkWa.mainUrl}
        text1={footerProps.text1}
        phone={footerProps.phone}
        podpisSberRu={footerProps.podpisSberRu}
      />
    </div>
  );
}

export default X375px;
