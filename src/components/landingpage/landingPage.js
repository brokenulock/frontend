import React, { useState, useEffect } from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import "./index.css";
import { Route } from "react-router-dom";
import { Home, About, PostsPage, Userpage } from "./routes/exportRoutes";
import axios from "axios";

export default function LandingPage(props) {
  const [allPosts, setAllposts] = useState();

  useEffect(() => {
    axios
      .get("https://broken-u-lock.herokuapp.com/api/posts/")
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
      {/* <Route exact path="/posts" component={PostsPage} /> */}
      <Route
        exact
        path="/posts"
        render={() => <PostsPage posts={allPosts} />}
        
      />
      <Route exact path="/userpage" component={Userpage} />
      <Footer />
    </div>
  );
}
