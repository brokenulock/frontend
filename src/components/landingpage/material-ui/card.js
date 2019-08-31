import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
// import ShareIcon from "@material-ui/icons/Share";
// import CallIcon from "@material-ui/icons/Call";
// import TextsmsIcon from "@material-ui/icons/Textsms";
// import EmailIcon from "@material-ui/icons/Email";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShareMenu from "../material-ui/shareMenu";

const useStyles = makeStyles(theme => ({
  card: {
    width: 345,
    margin: "20px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    width: "70px",
    height: "70px",
    border: "solid 2px black",
    positon: "relative"
  }
}));

export default function PostCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <div
            aria-label="recipe"
            className={classes.avatar}
            style={{ borderRadius: "100%", overflow: "hidden" }}
          >
            <img src={props.post.avatar} alt="avatar" />
          </div>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={<h6>{props.post.username}</h6>}
        subheader={<p>{props.post.location}</p>}
      />
      <CardMedia
        className={classes.media}
        image={props.post.image}
        title="Paella dish"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ height: "40px", fontSize: "12px" }}
        >
          {props.post.description}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%"
        }}
      >
        {/* <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width:"100%"
          }}
        > */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <a
            href={`mailto:${props.post.email}`}
            class="fa fa-envelope envelope"
            style={{ color: "grey", fontSize: "25px", margin: "0 10px" }}
          >
            <p style={{ display: "none" }}>envelope</p>
          </a>
          <a
            href={`tel:${props.post.phone}`}
            class="fa fa-phone phone-alt"
            style={{ color: "grey", fontSize: "25px", margin: "0 10px" }}
          >
            <p style={{ display: "none" }}>phone</p>
          </a>
          <a
            href={`sms:+${props.post.phone}`}
            class="fa fa-comment comment-dots"
            style={{ color: "grey", fontSize: "25px", margin: "0 10px" }}
          >
            <p style={{ display: "none" }}>comment</p>
          </a>
          <ShareMenu post={props.post} />
        </div>
        <div
          // className={clsx(classes.expand, {
          //   [classes.expandOpen]: expanded
          // })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          style={{ alignSelf: "flex-end" }}
        >
          {/* <ExpandMoreIcon /> */}
          <p
            class="fa fa-chevron-down
          chevron"
            style={{ color: "grey", fontSize: "20px", margin: "5px 0" }}
          ></p>
        </div>
        {/* </div> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details:</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Typography paragraph>Specs:</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
            aliquam sem et tortor consequat id porta nibh. Amet porttitor eget
            dolor morbi.
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
            aliquam sem et tortor consequat id porta nibh. Amet porttitor eget
            dolor morbi.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
