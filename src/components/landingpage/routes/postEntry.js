import React from "react";
import axiosWithAuth from "../../axiosConfig";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

export default function PostEntry(props) {
  const PostForm = ({ errors, touched, values, status }) => {
    return (
      <div>
        <Form>
          {touched.description && errors.description && (
            <p>{errors.description}</p>
          )}
          <Field
            type="text"
            name="description"
            placeholder="Enter description"
          />
          {touched.image && errors.image && <p>{errors.image}</p>}
          <Field type="text" name="image" placeholder="Enter image" />
          <Field type="text" name="manufacturer" placeholder="Enter manufacturer" />
          <Field type="text" name="model" placeholder="Enter model" />
          <Field type="text" name="year" placeholder="Enter year" />
          <Field
            type="text"
            name="serial_number"
            placeholder="Enter serial number"
          />
                    <Field
            type="text"
            name="size"
            placeholder="Enter size"
          />
          <Field
            type="date"
            name="date_stolen"
            placeholder="Enter date stolen"
          />
          <Field
            type="time"
            name="time_stolen"
            placeholder="Enter time stolen"
          />
          <Field type="text" name="location" placeholder="Enter location" />
          <Field type="text" name="reward" placeholder="Enter reward" />

          <button type="submit">send</button>
        </Form>
      </div>
    );
  };

  const FormikPostForm = withFormik({
    mapPropsToValues({
      description,
      image,
      manufacturer,
      model,
      size,
      year,
      serial_number,
      date_stolen,
      time_stolen,
      location,
      reward
    }) {
      return {
        description: description || "",
        image: image || "",
        manufacturer: manufacturer || null,
        model: model || null,
        year: year || null,
        size: size || null,
        serial_number: serial_number || null,
        date_stolen: date_stolen || null,
        time_stolen: time_stolen || null,
        location: location || null,
        reward: reward || null
      };
    },
    validationSchema: Yup.object().shape({
      description: Yup.string().required("Please enter a description"),
      image: Yup.string().required("Please enter a image")
    }),

    handleSubmit(values, { setStatus }) {
      axiosWithAuth()
        .post(`${process.env.REACT_APP_DOMAIN_NAME}api/posts/`, values)
        .then(res => {
          setStatus(res.data);
          console.log(res.data);
          props.history.push(`posts/${res.data.post_id}`);
        })
        .catch(err => console.log(err.response));
    }
  })(PostForm);
  return (
    <div className="postFormPage">
      <div className="formContainer">
        new post
        <FormikPostForm />
      </div>
    </div>
  );
}
