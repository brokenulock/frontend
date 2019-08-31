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

  return (
    <div>
      <p
        class="fa fa-share-alt share"
        style={{ color: "grey", fontSize: "25px", margin: "0 10px" }}
        onClick={handleClick}
      >
        <Button style={{ display: "none" }}>Open Menu</Button>
      </p>
      {console.log(props.post)}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          {" "}
          <TwitterShareButton
            title={`Stolen ${props.post.manufacturer} in ${props.post.location}`}
            children={`Please contact ${props.post.username}`}
            url={`brokenulock.com/posts/${props.post.post_id}`}
          >
            <TwitterIcon round={true} width="10" height="10"></TwitterIcon>
          </TwitterShareButton>{" "}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <FacebookShareButton
            title={`Stolen ${props.post.brand} in ${props.post.location}`}
            children={`Please contact ${props.post.username}`}
            url={`brokenulock.com/posts/${props.post.id}`}
          >
            <FacebookIcon round={true} width="10" height="10"></FacebookIcon>
          </FacebookShareButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <LinkedinShareButton
            title={`Stolen ${props.post.brand} in ${props.post.location}`}
            children={`Please contact ${props.post.username}`}
            url={`brokenulock.com/posts/${props.post.id}`}
          >
            <LinkedinIcon round={true} width="10" height="10"></LinkedinIcon>
          </LinkedinShareButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <EmailShareButton
            title={`Stolen ${props.post.brand} in ${props.post.location}`}
            children={`Please contact ${props.post.username}`}
            url={`brokenulock.com/posts/${props.post.id}`}
          >
            <EmailIcon round={true} width="10" height="10"></EmailIcon>
          </EmailShareButton>
        </MenuItem>
      </Menu>
    </div>
  );
}
