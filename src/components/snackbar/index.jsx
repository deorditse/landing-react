import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";

function TransitionLeft(props) {
  return <Slide {...props} direction="up" />;
}
export default function MySnackBar(props) {
  const { isMobile } = props;
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = React.useState(undefined);

  useEffect(() => {
    const isSnackbarAccepted = localStorage.getItem("snackbarAccepted");
    if (!isSnackbarAccepted) {
      setTransition(() => TransitionLeft);
      setOpen(true);
    }
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    localStorage.setItem("snackbarAccepted", true);
    setTransition(() => TransitionLeft);
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <div
        style={{
          display: isMobile ? "flex" : "flex",
          flexDirection: isMobile ? "column" : "row",
          padding: "10px",
          alignItems: "stretch",
        }}
      >
        <div
          className={`sbsanstext-regular-normal-shark-16px`}
          style={{
            margin: "auto",
          }}
        >
          Мы используем cookies для улучшения работы сайта и повышения удобства
          его использования. Условия использования описаны
          <a
            href={`/legal/privacy_policy.pdf`}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#2ea440" }}
          >
            {" "}
            в Политике конфиденциальности.
          </a>
        </div>
        <div style={{ marginTop: isMobile ? "20px" : null }}>
          <a onClick={async () => await handleClose()} href={() => {}}>
            <div
              className={"button-7"}
              style={{
                alignSelf: "stretch",

                // margin: "auto",
              }}
            >
              <div className="button-8 sbsanstext-regular-normal-white-19px">
                Принять
              </div>
            </div>
          </a>
        </div>
      </div>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={600000}
        onClose={handleClose}
        ContentProps={{
          sx: {
            padding: "10px",
            flexWrap: "inherit",
            margin: "auto",
            background: "#f2f5f7",
            borderRadius: "16px",
            width: "90%",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
          },
        }}
        TransitionComponent={transition}
        action={action}
      />
    </div>
  );
}
