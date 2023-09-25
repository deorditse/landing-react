import React from "react";
import Button from "../Button";
import "./Header3.css";
import OlineSignLogo14 from "../../assets/img/oline-sign-logo-1@2x.svg";

function Header3(props) {
  const { onclick, buttonProps } = props;

  return (
    <div className="header-4">
      <div className="container-55">
        <img
          className="oline-sign-logo-7"
          src={OlineSignLogo14}
          alt="Oline-sign Logo"
        />
        <div className="buttons-3">
          <Button onclick={onclick} className={buttonProps.className} />
        </div>
      </div>
    </div>
  );
}

export default Header3;
