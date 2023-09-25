import "./Header2.css";
import OlineSignLogo14 from "../../assets/img/oline-sign-logo-1@2x.svg";
import React from "react";
import TemporaryDrawer from "../MobileMenu";
function Header2(props) {
  const { menuLinkWa, onTapTarif, isMobile } = props;

  return (
    <div className="header-3">
      <img
        className="oline-sign-logo-4"
        src={OlineSignLogo14}
        alt="Oline-sign Logo"
        style={{
          height: isMobile ? "40px" : null,
        }}
      />
      <TemporaryDrawer menuLinkWa={menuLinkWa} onTapTarif={onTapTarif} />
    </div>
  );
}

export default Header2;
