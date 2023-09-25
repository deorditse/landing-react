import React from "react";
import "./rates.css";
import Icon1 from "../../assets/img/briefcase.svg";
import Icon2 from "../../assets/img/star.svg";
import Icon3 from "../../assets/img/ranking.svg";
import TariffCard from "./tariff_card";

function Rates(props) {
  const { isMobile, className, menuLinkWa } = props;

  return (
    <div>
      <div
        className={
          isMobile
            ? "h2-1 sbsansdisplay-mobile-white"
            : "h2-1 sbsansdisplay-normal-shark-48px"
        }
      >
        Тарифы
      </div>

      <div
        className={className ?? "rates"}
        style={{
          gap: isMobile ? "30px" : null,
        }}
      >
        <TariffCard
          menuLinkWa={menuLinkWa}
          className={className ?? ""}
          backgroundColorIcon="rgba(198, 244, 198, 0.5)"
          srcUrl={Icon1}
          title="Старт"
          amountDays="30 дней"
          quantity="10 подписаний"
          priceDescription="43 ₽ за 1 подписание"
          allPrice="всего 430 ₽"
        />
        <TariffCard
          menuLinkWa={menuLinkWa}
          className={className ?? ""}
          backgroundColorIcon="rgba(255, 245, 204, 0.5)"
          srcUrl={Icon2}
          title="Оптимал"
          amountDays="60 дней"
          quantity="35 подписаний"
          priceDescription="35 ₽ за 1 подписание"
          allPrice="всего 1 225 ₽"
        />
        <TariffCard
          menuLinkWa={menuLinkWa}
          className={className ?? ""}
          backgroundColorIcon="rgba(252, 208, 210, 0.5)"
          srcUrl={Icon3}
          title="Премиум"
          amountDays="365 дней"
          quantity="80 подписаний"
          priceDescription="33 ₽ за 1 подписание"
          allPrice="всего 2 640 ₽"
        />
      </div>
    </div>
  );
}

export default Rates;
