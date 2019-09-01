import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function MenuButton(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  const darkmode = () => {
      localStorage.setItem("mapmode", "darkmode");
      window.location.reload();
  };
  const lightmode = () => {
      localStorage.setItem("mapmode", "lightmode");
      window.location.reload();
    
  };

  const buttonDisplay = () => {
    if (localStorage.getItem("mapmode") === "darkmode") {
      return <MenuItem onClick={lightmode}>Light Mode</MenuItem>;
    }
    if (localStorage.getItem("mapmode") === "lightmode") {
      return <MenuItem onClick={darkmode}>Dark Mode</MenuItem>;
    } else {
      return (
        <>
          <MenuItem onClick={lightmode}>Light Mode</MenuItem>
          <MenuItem onClick={darkmode}>Dark Mode</MenuItem>{" "}
        </>
      );
    }
  };
  return (
    <div style={{ position: "absolute", top: "150px", left: "10px" }}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
        style={{fontSize:"10px"}}
      >
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <MenuItem onClick={props.handleMapMode}>Switch Mode</MenuItem> */}
        {/* <MenuItem onClick={lightmode}>Light Mode</MenuItem>
        <MenuItem onClick={darkmode}>Dark Mode</MenuItem> */}
        {buttonDisplay()}
        <MenuItem>
          {" "}
          <a
            href="https://github.com/fixmylifedesigns/googlemaps-geolocation"
            style={{ textDecoration: "none", color: "black" }}
          >
            GitHub Repo
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="https://www.duranirving.com"
            style={{ textDecoration: "none", color: "black" }}
          >
            Contact
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}
