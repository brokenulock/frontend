import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import axiosWithAuth from "../../../configurations/axiosConfig";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import PostTopContent from "./postTopContent";
import PostComments from "./postComments";
import PostMap from "../../googleMap/postMap";
import PostInfo from "./postInfo.js";
import {UserContext} from '../../../context'
import EditPost from '../../material-ui/editPost'

export default function Post(props) {
  const [post, setPost] = useState(false);
  const [button, setbutton] = useState(false);
  const [comment, setComment] = useState(false);
const user = useContext(UserContext)

  const postId = props.match.params.id;
  const url = `${process.env.REACT_APP_DOMAIN_NAME}api/posts/${postId}`;

  useEffect(() => {
    axios
      .get(url)
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
      console.log(values);
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
          `${process.env.REACT_APP_DOMAIN_NAME}api/comments/post/${postId}`,
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
       {/* {console.log("userContext",user)}
       {console.log("post info", post)} */}
      <PostTopContent post={post} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "white"
        }}
      >
        {!!user.signedIn && user.userData.id === post.user_id? <EditPost post_id={post.post_id}/> : ""}
        {!!user.signedIn && user.userData.id === post.user_id? <EditPost location="location"  post_id={post.post_id}/> : ""}
        <PostInfo post={post} />
        {console.log(post)}
        <div>
          <PostComments postId={postId} commentAdded={button} />
          <FormikPostForm id={postId} />
        </div>

        <div>{post.location ? <PostMap post={post} /> : ""}</div>
      </div>
    </div>
  );
}
