import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { uiConfig } from "../../firebaseConfig";
import Logo from '../../../bulfmlimg/brokenulocklogo.png'

const useStyles = makeStyles(theme => ({

 hide: {
    
   
 },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  wholeBackground: {
    background: "#33B8F3",
    height:"100vh",
    display:"flex",
    flexDirection:"column",
    alignContent:"center",
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(false);
  }, [props.signedin]);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className={classes.hide}>
      <p
        className={props.class}
        style={{ marginRight: "15px" }}
        onClick={!props.signedin ? handleClickOpen : props.signOut}
      >
        {props.signedin ? "Logout" : "Login"}
      </p>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar style={{background:"white"}}>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon style={{color:"black"}}/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <List className={classes.wholeBackground}>
           <div className="navImgContainer">
            <img src={Logo} className="mobileLogo"/></div>
        <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
            onClose={handleClose}
          />
        </List>
      </Dialog>
    </div>
  );
}