import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as Yup from "yup";
import { Form, Field, withFormik } from "formik";
import axiosWithAuth from "../../configurations/axiosConfig";
import axios from "axios";
import { storage } from "../../configurations/firebaseConfig";

export default function EditProfile(props) {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = e => {
    e.preventDefault();
    const file = e.target.files[0];

    if (file) {
      const fileType = file["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setError("");
        setImage(file);
      } else {
        console.log("error");
        setError("error please upload a image file");
      }
    }
  };
  const PostForm = ({ errors, touched, values, status }) => {
    return (
      <Form className="newPostForm">
        <p style={{ color: "red" }}>{error}</p>
        <Field
          type="text"
          name="bio"
          placeholder="Change bio"
          className="inputField"
        />
        <Field
          type="text"
          name="facebook"
          placeholder="Change facebook"
          className="inputField"
        />
        <Field
          type="text"
          name="instagram"
          placeholder="Change instagram"
          className="inputField"
        />
        <Field
          type="text"
          name="twitter"
          placeholder="Change twitter"
          className="inputField"
        />
        <Field
          type="text"
          name="phone"
          placeholder="Change number"
          className="inputField"
        />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Form>
    );
  };

  const FormikPostForm = withFormik({
    mapPropsToValues({ bio }) {
      return {
        bio: bio
      };
    },
    validationSchema: Yup.object().shape({
      //   description: Yup.string().required("Please enter a description")
      // image: Yup.string().required("Please enter a image")
    }),

    handleSubmit(values, { setStatus }) {
      // handleUpload(values, setStatus);
      console.log(values);
      if (image) {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          error => {
            console.log(error);
            setError(error);
          },
          () => {
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then(url => {
                console.log(url);
                setUrl(url);
                setProgress(0);
                values.avatar = url;
                axiosWithAuth()
                  .put(
                    `${process.env.REACT_APP_DOMAIN_NAME}api/users/${props.user.id}`,
                    values
                  )
                  .then(res => {
                    setStatus(res.data);
                    console.log(res.data);
                    setStatus(res.data);
                    setOpen(false);
                    props.history.push(`user/`);
                  })
                  .catch(err => console.log(err.response));
              });
          }
        );
      } else {
        axiosWithAuth()
          .put(
            `${process.env.REACT_APP_DOMAIN_NAME}api/users/${props.user.id}`,
            values
          )
          .then(res => {
            setStatus(res.data);
            setOpen(false);
          })
          .catch(err => console.log(err.response));
      }
    }
  })(PostForm);

  return (
    <div>
  
      <button onClick={handleClickOpen}>
        Edit
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Update Account Information here"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p>Change Avatar</p>
            <input type="file" onChange={handleChange} />
            <FormikPostForm />
            {console.log(props.user)}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
