import React, { useState, useEffect } from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import "./index.css";
import GeoLocation from "./googleMap/geoLocation";
import { Route } from "react-router-dom";
import {
  Home,
  About,
  PostsPage,
  Userpage,
  LoggedInPage,
  Post,
  PostEntry,
  Instagram
} from "./routes/exportRoutes";
import PrivateRoute from '../protectedRoutes/PrivateRoute'
import axios from "axios";

export default function LandingPage(props) {
  const [allPosts, setAllposts] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_DOMAIN_NAME}api/posts/`)
      .then(res => {
        setAllposts(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="landingPage">
      <Navigation signOut={props.signOut} signedin={props.signedin} />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/instagram" component={Instagram} />
      {/* <Route exact path="/posts" component={PostsPage} /> */}
      <Route
        exact
        path="/posts"
        render={() => <PostsPage posts={allPosts} />}
      />
      <PrivateRoute exact path="/new-post" component={PostEntry} />
      <PrivateRoute
        exact
        path="/user"
        component={() => <LoggedInPage userData={props.userData} />}
      />
      <Route exact path="/user/:id" component={Userpage} />
      <Route
        exact
        path="/map"
        render={() => <GeoLocation posts={allPosts} />}
      />
      <Route exact path="/posts/:id" component={Post} />
      <Footer />
    </div>
  );
}
