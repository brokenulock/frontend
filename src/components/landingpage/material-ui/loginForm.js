import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { uiConfig } from "../../firebaseConfig";
// import axios from "axios";

export default function LoginForm(props) {
  const [open, setOpen] = useState(false);

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
    <div>
      <p
        className={props.class}
        style={{ marginRight: "15px" }}
        onClick={!props.signedin ? handleClickOpen : props.signOut}
      >
        {localStorage.getItem("token") || props.signedin ? "Logout" : "Login"}
      </p>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent onClick={() => handleClose()}>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
            onClose={handleClose}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
