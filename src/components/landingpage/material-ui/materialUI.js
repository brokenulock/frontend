import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MobileLoginForm from "./MobileLoginForm";
import { Link } from "react-router-dom";

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
            <Link
              to="/instagram"
              className="menuFont"
            >
              Instagram
            </Link>
            <Link to={`/map/`} className="menuFont">
              Map
            </Link>
            <Link to="/posts" className="menuFont">
              Posts
            </Link>
            {localStorage.getItem("token") || props.signedin ? (
              <>
                <Link
                  to="/new-post"
                  className="menuFont"
                  style={{ marginRight: "15px" }}
                >
                  New Post
                </Link>
                <Link
                  to={`/user/`}
                  className="menuFont"
                  style={{ marginRight: "15px" }}
                >
                  Profile
                </Link>
              </>
            ) : (
              ""
            )}
            <MobileLoginForm
              signOut={props.signOut}
              signedin={props.signedin}
              class="menuFont"
            />
            {/* <LoginForm signOut={props.signOut} signedin={props.signedin} class="menuFont"/> */}
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
