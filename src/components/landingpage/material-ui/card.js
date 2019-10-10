import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
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
  const [expandedButton, setExpandedButton] = useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
    setExpandedButton(!expandedButton);
  }

  return (
    <Card className={classes.card}>
      <Link
        to={`/user/${props.post.user_id}`}
        title="View User"
        style={{ color: "black" }}
      >
        {!props.infoWindow ? (
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
            title={<h5>{props.post.username}</h5>}
            subheader={<p>{props.post.location}</p>}
            href={`/user/${props.post.user_id}`}
          />
        ) : (
          ""
        )}
      </Link>
      <Link to={`/posts/${props.post.post_id}`} title="View Full Post">
        <CardMedia className={classes.media} image={props.post.image} />
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
      </Link>
      {!props.infoWindow ? (
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
              title={`Email ${props.post.username}`}
            >
              <p style={{ display: "none" }}>envelope</p>
            </a>
            <a
              href={`tel:${props.post.phone}`}
              class="fa fa-phone phone-alt"
              style={{ color: "grey", fontSize: "25px", margin: "0 10px" }}
              title={`Call ${props.post.username}`}
            >
              <p style={{ display: "none" }}>phone</p>
            </a>
            <a
              href={`sms:+${props.post.phone}`}
              class="fa fa-comment comment-dots"
              style={{ color: "grey", fontSize: "25px", margin: "0 10px" }}
              title={`Text ${props.post.username}`}
            >
              <p style={{ display: "none" }}>comment</p>
            </a>
            <button
              style={{
                background: "none",
                padding: "0",
                margin: "0",
                border: "none"
              }}
              title={`Share ${props.post.username}'s post`}
            >
              <ShareMenu post={props.post} />
            </button>
          </div>

          <button
            // className={clsx(classes.expand, {
            //   [classes.expandOpen]: expanded
            // })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            style={{
              alignSelf: "flex-end",
              background: "#33B8F3",
              color: "white",
              // padding: "0 4px",
              // margin: "0",
              border: "none"
            }}
            title="Show More"
          >
            {/* <ExpandMoreIcon /> */}

            {!expandedButton ? (
              <p
                class="fa fa-chevron-down chevron"
                style={{
                  fontSize: "20px",
                  margin: "5px 0",
                  color: "white"
                }}
              ></p>
            ) : (
              <p
                class="fa fa-times times"
                style={{
                  fontSize: "20px",
                  margin: "5px 0",
                  color: "white"
                }}
              ></p>
            )}
          </button>
          {/* </div> */}
        </CardActions>
      ) : (
        ""
      )}
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
