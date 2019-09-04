import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import axiosWithAuth from "../../axiosConfig";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import PostTopContent from "./postTopContent";

export default function Post(props) {
  const [post, setPost] = useState(false);
  const [button, setbutton] = useState(false);
  const [comment, setComment] = useState(false);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_DOMAIN_NAME}api/posts/${props.match.params.id}`
      )
      .then(res => {
        console.log(res.data);
        setPost(res.data);
        setComment(false);
        setbutton(false);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, [button]);

  const PostForm = ({ errors, touched, values, status }) => {
    useEffect(() => {
      if (status) {
        setComment([comment, status]);
      }
    }, [comment]);

    return (
      <div>
        <Form>
          <Field type="text" name="comment" placeholder="Enter comment" />
          {touched.comment && errors.comment && <p>{errors.comment}</p>}
          <button type="submit">send</button>
        </Form>
      </div>
    );
  };

  const FormikPostForm = withFormik({
    mapPropsToValues({ comment }) {
      return {
        comment: comment || ""
      };
    },
    validationSchema: Yup.object().shape({
      comment: Yup.string().required("Please enter a comment")
    }),

    handleSubmit(values, { setStatus }) {
      axiosWithAuth()
        .post(
          `${process.env.REACT_APP_DOMAIN_NAME}api/comments/post/${props.match.params.id}`,
          values
        )
        .then(res => {
          setStatus(res.data);
          setbutton(true);
        })
        .catch(err => console.log(err.response));
    }
  })(PostForm);

  return (
    <div className="postPage">
      <PostTopContent post={post} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "white"
        }}
      >
        {post.comments && post.comments.length > 0 ? (
          post.comments.map(comment => {
            return (
              <div style={{ display: "flex", borderBottom: "solid" }}>
                {comment.username}
                <h3>{comment.comment}</h3>
              </div>
            );
          })
        ) : (
          <div>no posts</div>
        )}
        <FormikPostForm id={props.match.params.id} />
      </div>
    </div>
  );
}
