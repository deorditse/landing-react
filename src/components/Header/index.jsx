import OlineSignLogo2 from "../../assets/img/oline-sign-logo-2@2x.svg";
import React from "react";
// import { Linking } from "react-native";
import "./Header.css";

function Header(props) {
  // const { menuLinkWa, onTapTarif, className } = props;
  const { onTapTarif, className } = props;

  return (
    <div className={`header ${className || ""}`}>
      <div className="container-4">
        <img
          className="oline-sign-logo"
          src={OlineSignLogo2}
          alt="Oline-sign Logo"
        />
        <div className="advatages-buttons-row">
          {/* <a onClick={onTapTarif} href={() => {}}>
            <div className={`buttons button-header`}>
              <div className={"button-header"}>
                <div className="frame-270988836">
                  <div className={`sbsanstext-regular-normal-white-19px`}>
                    <div className={`button-2 button-header`}>Тарифы</div>
                  </div>
                </div>
              </div>
            </div>
          </a> */}
          <button
            style={{ border: 0, background: "transparent" }}
            onClick={onTapTarif}
          >
            <div className={`buttons button-header`}>
              <div className={"button-header"}>
                <div className="frame-270988836">
                  <div className={`sbsanstext-regular-normal-white-19px`}>
                    <div className={`button-2 button-header`}>Тарифы</div>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <a
            href={`wa/#/signatureVerification-all`}
            target="_blank"
            rel="noreferrer"
          >
            <div className={`buttons button-header`}>
              <div className={"button-header"}>
                <div className="frame-270988836">
                  <div className={`sbsanstext-regular-normal-white-19px`}>
                    <div className={`button-2 button-header`}>
                      Проверить подпись
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href={`wa/#/sign_up`} target="_blank" rel="noreferrer">
            <div className={"button-outline"}>
              <div className="frame-270988836-4">
                <div className="sbsanstext-medium-blue-19px">
                  Зарегистрироваться
                </div>{" "}
              </div>
            </div>
          </a>

          <div
            style={{
              marginLeft: "10px",
            }}
          >
            <a href={`wa/#/sign_in`} target="_blank" rel="noreferrer">
              <div className={"button-7"}>
                <div className="frame-270988836-4">
                  <div className="button-8 sbsanstext-regular-normal-white-19px">
                    Войти
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
