import React from "react";
import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import Hamburger from "hamburger-react";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <br /> <br />
        <ListItemButton
          component="a"
          href={`wa/#/signatureVerification-all`}
          target="_blank"
          rel="noreferrer"
        >
          <ListItemText primary="Проверить подпись" />
        </ListItemButton>
        <ListItemButton
          component="a"
          href={`wa/#/sign_up`}
          target="_blank"
          rel="noreferrer"
        >
          <ListItemText primary="Зарегистрироваться" />
        </ListItemButton>
        <ListItemButton
          component="a"
          href={`wa/#/sign_in`}
          target="_blank"
          rel="noreferrer"
        >
          <ListItemText primary="Войти" />
        </ListItemButton>
      </List>
    </div>
  );

  return (
    <div>
      <Hamburger size={25} toggle={toggleDrawer(true)} />

      <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
