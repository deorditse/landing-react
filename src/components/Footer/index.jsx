import React from "react";
import "./Footer.css";
import OlineSignLogo from "../../assets/img/oline-sign-logo-3@2x.svg";
// import { Linking } from "react-native";

function Footer(props) {
  const { text1, phone, podpisSberRu, isTablet } = props;

  return (
    <div
      className="footer"
      style={{
        padding: isTablet ? "96px 32px" : null,
      }}
    >
      <div className="container-20">
        <img
          className="oline-sign-logo-1"
          src={OlineSignLogo}
          alt="Oline-sign Logo"
        />

        <div className="row-1">
          <p
            className={
              isTablet
                ? "text-1 sbsanstext-regular-normal-14px "
                : "text-1  sbsanstext-regular-normal-shark-16px"
            }
          >
            {text1}
          </p>

          <div
            style={{
              flexDirection: "row",
              display: "flex",
            }}
          >
            <div className="column-1">
              <p
                className={
                  isTablet
                    ? "phone sbsansdisplay-normal-shark-18px"
                    : "phone sbsansdisplay-normal-shark-24px"
                }
              >
                {phone}
              </p>
              <a
                href={`legal/user_agreement.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                <div className={`buttons button-header`}>
                  <div className={"button-header"}>
                    <div className="frame-270988836">
                      <div className={`sbsanstext-regular-normal-white-19px`}>
                        <div
                          className={
                            isTablet
                              ? "button-2 sbsanstext-regular-normal-14px"
                              : "button-2 button-header"
                          }
                        >
                          Пользовательское соглашение
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="column-1">
              <p
                className={
                  isTablet
                    ? "phone sbsansdisplay-normal-shark-18px"
                    : "phone sbsansdisplay-normal-shark-24px"
                }
              >
                {podpisSberRu}
              </p>
              <a
                href={`legal/privacy_policy.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                <div className={`buttons button-header`}>
                  <div className={"button-header"}>
                    <div className="frame-270988836">
                      <div className={`sbsanstext-regular-normal-white-19px`}>
                        <div
                          className={
                            isTablet
                              ? "button-2 sbsanstext-regular-normal-14px"
                              : "button-2 button-header"
                          }
                        >
                          Политика конфиденциальности
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div />
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Footer;
