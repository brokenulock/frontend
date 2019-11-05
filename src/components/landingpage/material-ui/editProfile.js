import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as Yup from "yup";
import { Form, Field, withFormik } from "formik";
import axiosWithAuth from "../../configurations/axiosConfig";
import axios from 'axios'

export default function EditProfile(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const PostForm = ({ errors, touched, values, status }) => {
    return (
        <Form className="newPostForm">
          <Field type="text" name="bio" placeholder="Enter bio" className="inputField"/>
          {/* <Field type="text" name="year" placeholder="Enter year" />
          <Field
            type="text"
            name="serial_number"
            placeholder="Enter serial number"
          />
          <Field type="text" name="size" placeholder="Enter size" />
          <Field type="text" name="reward" placeholder="Enter reward" /> */}
          {/* <button type="submit" className="formButton">send</button> */}
          <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button  type="submit" color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
        </Form>
    );
  };

  const FormikPostForm = withFormik({
    mapPropsToValues({
      bio
    }) {
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

      axiosWithAuth()
      .put(
        `${process.env.REACT_APP_DOMAIN_NAME}api/users/${props.user.id}`,
        values
      )
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
    }
  })(PostForm);
  

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
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
          {console.log(props.user)}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
