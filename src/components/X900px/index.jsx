import React, { useRef } from "react";
import Blur from "../Blur";
import AdvantageItem3 from "../AdvantageItem3";
import ImageHands from "../ImageHands";
import Column2 from "../Column2";
import MySnackBar from "../snackbar";
import Header2 from "../Header2";
import QAItem from "../QAItem";
import Footer from "../Footer";
import "./X900px.css";
import BannerContactsDesktop from "../BannerContactsDesktop";
import Rates from "../rates";
import bannerGradientTablet from "./assets/banner-gradient-tablet.png";

import ImageDocChimps from "../../assets/img/image-doc-chips@2x.svg";

function X900px(props) {
  const {
    img,
    h21,
    h22,
    h23,
    subtitle2,
    title2,
    blur1Props,
    advantageItem31Props,
    advantageItem32Props,
    advantageItem4Props,
    advantageItem33Props,
    imageHandsProps,
    column21Props,
    column22Props,
    column23Props,
    column24Props,
    blur2Props,
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
    <div className="x900px screen">
      <MySnackBar isMobile={true} mainUrl={menuLinkWa.mainUrl} />
      <Header2
        menuLinkWa={menuLinkWa}
        onTapTarif={() =>
          scollToRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />

      <div
        style={{
          backgroundImage: `url(${bannerGradientTablet})`,
        }}
        className="hero-banner-tablet"
      >
        <div className="text-container-1">
          <div className="h1 sbsansdisplay-normal-white-48px">
            Подписывайте
            <br />
            документы онлайн
          </div>
          <p className="subtitle sbsanstext-regular-normal-shark-24px">
            Договаривайтесь быстро
            <br />и безопасно
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
            height: "390px",
            alignSelf: "self-end",
            alignItems: "self-end",
          }}
          src={img}
          alt="img"
        />
      </div>

      <div className="rectangle-mobule"></div>
      <div className="section-advantages-1">
        <Blur className={blur1Props.className} />
        <div className="container-21">
          <div className="h2-3 sbsansdisplay-tablet-white-48px">{h21}</div>
          <div className="advantages-container-1">
            <div className="advatages-items-row-2">
              <AdvantageItem3
                className={advantageItem33Props.className}
                container2Props={advantageItem32Props.container2Props}
              />
              <AdvantageItem3
                className={advantageItem33Props.className}
                container2Props={advantageItem4Props.container2Props}
              />
            </div>
            <div className="advatages-items-row-2">
              <AdvantageItem3
                className={advantageItem33Props.className}
                container2Props={advantageItem31Props.container2Props}
              />
              <AdvantageItem3
                className={advantageItem33Props.className}
                container2Props={advantageItem33Props.container2Props}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section-about-1">
        <div className="container-22">
          <div
            className="h2-4 sbsansdisplay-tablet-white-48px"
            style={{
              alignSelf: "center",
            }}
          >
            {h22}
          </div>
          <div className="container-24">
            <ImageHands
              className={imageHandsProps.className}
              otherchandsPhoneProps={imageHandsProps.otherchandsPhoneProps}
            />
            <img
              className="image-doc-chips-1"
              src={ImageDocChimps}
              alt="Doc Chips"
            />
          </div>
        </div>
      </div>
      <div ref={scollToRefOther} className="section">
        <div className="container-22">
          <div className="head-2">
            <div className="h2-5 sbsansdisplay-tablet-white-48px">{h23}</div>
            <p className="subtitle-14 sbsanstext-regular-normal-shark-24px">
              {subtitle2}
            </p>
          </div>
          <div className="row-2">
            <Column2
              src={column21Props.src}
              title={column21Props.title}
              caption={column21Props.caption}
              subtitle={column21Props.subtitle}
              imageSmProps={column21Props.imageSmProps}
            />
            <Column2
              src={column22Props.src}
              title={column22Props.title}
              caption={column22Props.caption}
              subtitle={column22Props.subtitle}
              imageSmProps={column22Props.imageSmProps}
            />
            <Column2
              src={column23Props.src}
              title={column23Props.title}
              caption={column23Props.caption}
              subtitle={column23Props.subtitle}
              imageSmProps={column23Props.imageSmProps}
            />
            <Column2
              src={column24Props.src}
              title={column24Props.title}
              caption={column24Props.caption}
              subtitle={column24Props.subtitle}
              imageSmProps={column24Props.imageSmProps}
            />
          </div>
        </div>
      </div>
      <div ref={scollToRef} className="section-about-rates">
        <Rates menuLinkWa={menuLinkWa} isMobile={false} />
      </div>

      <BannerContactsDesktop
        isMobile="true"
        menuLinkWa={menuLinkWa}
        title={bannerContactsDesktopProps.title}
        subtitle={bannerContactsDesktopProps.subtitle}
        frame270988944Props={bannerContactsDesktopProps.frame270988944Props}
        imageHands2Props={bannerContactsDesktopProps.imageHands2Props}
      />

      <div className="section-qa-1">
        <Blur className={blur2Props.className} />
        <div className="container-21">
          <div className="title-10 sbsansdisplay-tablet-white-48px">
            {title2}
          </div>

          <div className="advatages-items-row-3">
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
      {/* <Footer2 column3Props={footer2Props.column3Props} /> */}

      <Footer
        isTablet={true}
        mainUrl={menuLinkWa.mainUrl}
        text1={footerProps.text1}
        phone={footerProps.phone}
        podpisSberRu={footerProps.podpisSberRu}
      />
    </div>
  );
}

export default X900px;
