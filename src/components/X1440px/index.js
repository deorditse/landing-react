import React, { useRef } from "react";
import Header from "../Header";
import Blur from "../Blur";
import AdvantageItem from "../AdvantageItem";
import ImageHands from "../ImageHands";
import Column from "../Column";
import BannerContactsDesktop from "../BannerContactsDesktop";
import QAItem from "../QAItem";
import Footer from "../Footer";
import "./X1440px.css";
import Rates from "../rates";
import MySnackBar from "../snackbar";
import bannerGradient from "./assets/banner-gradient.png";

import ImageDocChimps from "../../assets/img/image-doc-chips-1@2x.svg";

function X1440px(props) {
  const {
    subtitle1,
    h21,
    h22,
    h23,
    subtitle2,
    title,
    maleLaptop08Props,
    advantageItem1Props,
    advantageItem2Props,
    advantageItem2Props2,
    advantageItem3Props,
    imageHandsProps,
    column1Props,
    column2Props,
    column3Props,
    column4Props,
    bannerContactsDesktopProps,
    qAItem1Props,
    qAItem2Props,
    qAItem3Props,
    qAItem4Props,
    footerProps,
    menuLinkWa,
  } = props;

  const scollToRef = useRef(null);

  const scollToRefOther = useRef(null);
  const scrollToRefOther = () =>
    scollToRefOther.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="x1440px screen">
      {/* <div className="section-hero"> */}
      <MySnackBar mainUrl={menuLinkWa.mainUrl} />{" "}
      <Header
        menuLinkWa={menuLinkWa}
        onTapTarif={() =>
          scollToRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      <div
        className="wrapper-banner "
        style={{
          backgroundImage: `url(${bannerGradient})`,
        }}
      >
        <div className="banner">
          <div className="text-container">
            <div className="h1 sbsansdisplay-normal-shark-48px">
              Подписывайте
              <br />
              документы онлайн
            </div>
            <p className="subtitle sbsanstext-regular-normal-shark-24px">
              {subtitle1}
            </p>
            <br />
            <button
              style={{ border: 0, background: "transparent" }}
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
          <img
            style={{
              zIndex: "1",
              height: "400px",
              alignItems: "flex-end",
              alignSelf: "flex-end",
              paddingRight: "40px",
            }}
            src={maleLaptop08Props.src}
            alt="private_2 1"
          />
        </div>
      </div>{" "}
      <div className="rectangle_1"></div>
      <div className="section-advantages">
        <Blur />
        <div className="container">
          <div className="h2 sbsansdisplay-normal-white-48px">{h21}</div>
          <div className="advantages-container">
            <div className="advatages-items-row">
              <AdvantageItem
                className={advantageItem2Props.className}
                containerProps={advantageItem2Props.containerProps}
              />{" "}
              <AdvantageItem
                containerProps={advantageItem2Props2.containerProps}
              />
            </div>
            <div className="advatages-items-row">
              <AdvantageItem
                containerProps={advantageItem1Props.containerProps}
              />
              <AdvantageItem
                className={advantageItem3Props.className}
                containerProps={advantageItem3Props.containerProps}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section-about" style={{ paddingBottom: "0px" }}>
        <div className="container-1">
          <div className="h2-1 sbsansdisplay-normal-shark-48px">{h22}</div>
          <div className="container-3">
            <ImageHands
              otherchandsPhoneProps={imageHandsProps.otherchandsPhoneProps}
            />
            <img
              className="image-doc-chips"
              src={ImageDocChimps}
              alt="Doc Chips"
            />
          </div>
        </div>
      </div>
      <div ref={scollToRefOther} className="section-steps">
        <div className="container-1">
          <div className="head">
            <div className="h2-2 sbsansdisplay-normal-shark-48px">{h23}</div>
            <p className="subtitle-1 sbsanstext-regular-normal-shark-24px">
              {subtitle2}
            </p>
          </div>
          <div className="row">
            <Column
              src={column1Props.src}
              title={column1Props.title}
              caption={column1Props.caption}
              subtitle={column1Props.subtitle}
              imageSmProps={column1Props.imageSmProps}
            />
            <Column
              src={column2Props.src}
              title={column2Props.title}
              caption={column2Props.caption}
              subtitle={column2Props.subtitle}
              imageSmProps={column2Props.imageSmProps}
            />
            <Column
              src={column3Props.src}
              title={column3Props.title}
              caption={column3Props.caption}
              subtitle={column3Props.subtitle}
              imageSmProps={column3Props.imageSmProps}
            />
            <Column
              src={column4Props.src}
              title={column4Props.title}
              caption={column4Props.caption}
              subtitle={column4Props.subtitle}
              imageSmProps={column4Props.imageSmProps}
            />
          </div>
        </div>
      </div>
      <div ref={scollToRef} className="section-about">
        <Rates menuLinkWa={menuLinkWa} />
      </div>
      <BannerContactsDesktop
        menuLinkWa={menuLinkWa}
        title={bannerContactsDesktopProps.title}
        subtitle={bannerContactsDesktopProps.subtitle}
        frame270988944Props={bannerContactsDesktopProps.frame270988944Props}
        imageHands2Props={bannerContactsDesktopProps.imageHands2Props}
      />
      <div className="section-qa">
        <Blur />
        <div className="container">
          <div className="title sbsansdisplay-normal-white-48px">{title}</div>
          <div className="advatages-items-row-1">
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
      <Footer
        mainUrl={menuLinkWa.mainUrl}
        text1={footerProps.text1}
        phone={footerProps.phone}
        podpisSberRu={footerProps.podpisSberRu}
      />
    </div>
  );
}

export default X1440px;
