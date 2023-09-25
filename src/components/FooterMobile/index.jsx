import React from "react";
import "./FooterMobile.css";
import OlineSignLogo from "../../assets/img/oline-sign-logo-1@2x.svg";
// import { Linking } from "react-native";

function FooterMobile(props) {
  const { text1, phone, podpisSberRu } = props;

  return (
    <div className="footer-mobile">
      <img
        className="oline-sign-logo-1"
        src={OlineSignLogo}
        alt="Oline-sign Logo mobile"
      />

      <div className="sbsansdisplay-normal-shark-24px">
        <div className="phone">{phone}</div>
        <div className="podpissberru">{podpisSberRu}</div>
      </div>
      <div>
        {" "}
        <a href={`legal/user_agreement.pdf`} target="_blank" rel="noreferrer">
          <div className={`buttons button-header`}>
            <div className={"button-header"}>
              <div className="frame-270988836">
                <div className={`sbsanstext-regular-normal-white-19px`}>
                  <div className={`button-2 button-header`}>
                    Пользовательское соглашение
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href={`legal/privacy_policy.pdf`} target="_blank" rel="noreferrer">
          <div className={`buttons button-header`}>
            <div className={"button-header"}>
              <div className="frame-270988836">
                <div className={`sbsanstext-regular-normal-white-19px`}>
                  <div className={`button-2 button-header`}>
                    Политика конфиденциальности
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <p className="text-1-mobile sbsanstext-regular-normal-shark-16px">
        {text1}
      </p>
    </div>
  );
}

export default FooterMobile;
