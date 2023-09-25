import React from "react";
// import { Linking } from "react-native";
import "./tariff_card.css";
import IcSberProfile3 from "../../../assets/img/ic-sber-profile-3@2x.svg";

function TariffCard(props) {
  const {
    title,
    amountDays,
    quantity,
    priceDescription,
    allPrice,
    backgroundColorIcon,
    srcUrl,
    className,
  } = props;

  return (
    <div
      className="card-item"
      style={{
        marginBottom: className ? "20px" : null,
      }}
    >
      <div className="row-icon">
        <div
          className="image-container"
          style={{
            backgroundColor: backgroundColorIcon,
          }}
        >
          <img className="icon" src={srcUrl || IcSberProfile3} alt="icon" />
        </div>
        <p className=" sbsansdisplay-normal-shark-24px">{title}</p>
      </div>

      <div>
        <div
          className="rowQuantint"
          style={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "24px",
          }}
        >
          <p
            className="bacground-days sbsanstext-regular-normal-shark-16px"
            style={{
              color: "#2A72F8",
            }}
          >
            {amountDays}
          </p>

          <p
            className="sbsanstext-regular-normal-shark-16px"
            style={styleQuantituy}
          >
            {quantity}
          </p>
        </div>
        <p className="sbsansdisplay-normal-shark-22px">{priceDescription}</p>
        <p
          className="sbsanstext-regular-normal-shark-16px"
          style={{
            paddingTop: "8px",
          }}
        >
          {allPrice}
        </p>
      </div>

      <a
        href={`wa/#/dashboard/balance/buy-product`}
        target="_blank"
        rel="noreferrer"
      >
        <div className={"button-7"}>
          <div className="frame-270988836-4">
            <div className="button-8 sbsanstext-regular-normal-white-19px">
              Попробовать
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
const styleQuantituy = {
  color: "#2A72F8",
  marginLeft: "10px",
};

export default TariffCard;
