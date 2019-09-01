import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {
  TwitterShareButton,
  FacebookShareButton,
  EmailShareButton,
  LinkedinShareButton,
  TwitterIcon,
  FacebookIcon,
  EmailIcon,
  LinkedinIcon
} from "react-share";

export default function ShareMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const title = `Stolen ${props.post.manufacturer}:${props.post.model} in ${props.post.location}` ;
  const children = `Please contact ${props.post.username}`;
  const url = `brokenulock.com/posts/${props.post.post_id}`;

  return (
    <div>
      <p
        class="fa fa-share-alt share"
        style={{ color: "grey", fontSize: "25px", margin: "0 10px" }}
        onClick={handleClick}
      >
        <Button style={{ display: "none" }}>Open Menu</Button>
      </p>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <TwitterShareButton title={title} children={children} url={url}>
            <TwitterIcon round={true} width="10" height="10"></TwitterIcon>
          </TwitterShareButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <FacebookShareButton title={title} children={children} url={url}>
            <FacebookIcon round={true} width="10" height="10"></FacebookIcon>
          </FacebookShareButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <LinkedinShareButton title={title} children={children} url={url}>
            <LinkedinIcon round={true} width="10" height="10"></LinkedinIcon>
          </LinkedinShareButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <EmailShareButton title={title} children={children} url={url}>
            <EmailIcon round={true} width="10" height="10"></EmailIcon>
          </EmailShareButton>
        </MenuItem>
      </Menu>
    </div>
  );
}
