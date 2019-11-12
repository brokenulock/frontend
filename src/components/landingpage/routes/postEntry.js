import React, { useState, useEffect } from "react";
import { storage } from "../../configurations/firebaseConfig";
import axiosWithAuth from "../../configurations/axiosConfig";
import { Form, Field, withFormik } from "formik";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import * as Yup from "yup";
import Grid from "@material-ui/core/Grid";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

import { GoogleComponent } from "react-google-location";

export default function PostEntry(props) {
  const [address, setAddress] = useState({ place: null, lat: null, lng: null });
  const [location, setLocation] = useState(false);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const time =
    selectedDate.getHours() +
    ":" +
    selectedDate.getMinutes() +
    ":" +
    selectedDate.getSeconds();


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
          {touched.description && errors.description && (
            <p style={{ color: "red" }}>{errors.description}</p>
          )}
          <Field
            type="text"
            name="description"
            placeholder="Enter description"
          />
          {touched.image && errors.image && (
            <p style={{ color: "red" }}>{errors.image}</p>
          )}
          <Field
            type="text"
            name="manufacturer"
            placeholder="Enter manufacturer"
          />
          <Field type="text" name="model" placeholder="Enter model" className="inputField"/>
          <Field type="text" name="year" placeholder="Enter year" />
          <Field
            type="text"
            name="serial_number"
            placeholder="Enter serial number"
          />
          <Field type="text" name="size" placeholder="Enter size" />
          <Field type="text" name="reward" placeholder="Enter reward" />
          <button type="submit" className="formButton">send</button>
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
        description: description || "",
        manufacturer: manufacturer || null,
        model: model || null,
        year: year || null,
        size: size || null,
        serial_number: serial_number || null,
        date_stolen: selectedDate.toISOString(),
        time_stolen: time,
        location: address.place,
        latitude: address.lat,
        longitude: address.lng,
        reward: reward || null
      };
    },
    validationSchema: Yup.object().shape({
      description: Yup.string().required("Please enter a description")
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
                values.image = url;
                axiosWithAuth()
                  .post(
                    `${process.env.REACT_APP_DOMAIN_NAME}api/posts/`,
                    values
                  )
                  .then(res => {
                    setStatus(res.data);
                    console.log(res.data);
                    props.history.push(`posts/${res.data.post_id}`);
                  })
                  .catch(err => console.log(err.response));
              });
          }
        );
      } else {
        setError("Error please choose an image to upload");
      }
    }
  })(PostForm);
  
  return (
    <div className="postFormPage">
      <div className="formContainer">
        <div className="newPostHeader">
         <p>New post</p> 
        </div>
        {progress > 0 ? (
          <progress value={progress} max="100" className="progress" />
        ) : (
          <div>
            {locationInput()}
            <p style={{ color: "red" }}>{error}</p>
            <input type="file" onChange={handleChange} />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  name="date_stolen"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={setSelectedDate}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Time picker"
                  name="time_stolen"
                  value={selectedDate}
                  onChange={setSelectedDate}
                  KeyboardButtonProps={{
                    "aria-label": "change time"
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <FormikPostForm />
          </div>
        )}
      </div>
    </div>
  );
}
