import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Form, Field, withFormik } from "formik";
import axiosWithAuth from "../../configurations/axiosConfig";
import { storage } from "../../configurations/firebaseConfig";
import { GoogleComponent } from "react-google-location";

export default function EditPost(props) {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [location, setLocation] = useState(false);
  const [address, setAddress] = useState({ place: null, lat: null, lng: null });

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

  const locationInput = () => {
    if (location === false) {
      return (
        <GoogleComponent
          apiKey={process.env.REACT_APP_GOOGLE_KEY}
          language={"en"}
          coordinates={true}
          locationBoxStyle={"custom-style-location"}
          locationListStyle={"custom-style-list"}
          onChange={event => {
            if (event.coordinates) {
              console.log(event.coordinates);
              setLocation(true);
              setAddress({
                place: event.place,
                lat: event.coordinates.lat,
                lng: event.coordinates.lng
              });
            }
          }}
        />
      );
    } else if (location === true) {
      return (
        <div>
          {console.log(address)}
          <p>
            {address.place}
            <button
              onClick={() => {
                setLocation(false);
                setAddress({ place: null, lat: null, lng: null });
              }}
            >
              Clear
            </button>
          </p>
        </div>
      );
    }
  };

  const PostForm = ({ errors, touched, values, status }) => {
    return (
      <Form className="newPostForm">
        {props.location ? (
          locationInput()
        ) : (
          <div>
            <Field
              type="text"
              name="description"
              placeholder="Enter description"
            />
            <Field
              type="text"
              name="manufacturer"
              placeholder="Enter manufacturer"
            />
            <Field
              type="text"
              name="model"
              placeholder="Enter model"
              className="inputField"
            />
            <Field type="text" name="year" placeholder="Enter year" />
            <Field
              type="text"
              name="serial_number"
              placeholder="Enter serial number"
            />
            <Field type="text" name="size" placeholder="Enter size" />
            <Field type="text" name="reward" placeholder="Enter reward" />
          </div>
        )}
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
    mapPropsToValues({
      description,
      manufacturer,
      model,
      size,
      year,
      serial_number,
      reward
    }) {
      return {
        // description: description || "",
        // manufacturer: manufacturer || null,
        // model: model || null,
        // year: year || null,
        // size: size || null,
        // serial_number: serial_number || null,
        // // date_stolen: selectedDate.toISOString(),
        // // time_stolen: time,
        // reward: reward || null
      };
    },

    handleSubmit(values, { setStatus }) {
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
      }
      if (address.place) {
        axiosWithAuth()
          .put(
            `${process.env.REACT_APP_DOMAIN_NAME}api/posts/${props.post_id}`,
            {
              last_seen_location: address.place,
              last_latitude: address.lat,
              last_longitude: address.lng
            }
          )
          .then(res => {
            setStatus(res.data);
            setOpen(false);
            console.log(res)
          })
          .catch(err => console.log(err.response));
      } 
      // else {
      //   axiosWithAuth()
      //     .put(
      //       `${process.env.REACT_APP_DOMAIN_NAME}api/posts/${props.post_id}`,
      //       values
      //     )
      //     .then(res => {
      //       setStatus(res.data);
      //       setOpen(false);
      //     })
      //     .catch(err => console.log(err.response));
      // }
    }
  })(PostForm);

  return (
    <div>
      <button onClick={handleClickOpen}>
        {props.location ? "Update Last Time Seen" : "Edit post"}
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
            <FormikPostForm />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
