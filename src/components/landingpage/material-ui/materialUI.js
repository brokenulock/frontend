import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import LoginForm from "./loginForm";
import MobileLoginForm from './MobileLoginForm'

export default function TabletMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <nav
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        class="fa fa-bars"
      />
      <nav
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        class="fa fa-chevron-circle-down"
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <a href="https://reactlocation.netlify.com/" className="menuFont">
              Prototype Map
            </a>
            <a
              href="https://documenter.getpostman.com/view/7133880/SVfMUAdJ?version=latest"
              className="menuFont"
            >
              Api Doc
            </a>
            <a href="https://github.com/brokenulock" className="menuFont">
              Github Repo
            </a>
            <MobileLoginForm signOut={props.signOut} signedin={props.signedin} class="menuFont"/>
            {/* <LoginForm signOut={props.signOut} signedin={props.signedin} class="menuFont"/> */}
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
