import React, { useState, useEffect } from "react";
import LandingPage from "./components/landingpage/landingPage";
import firebase from "firebase";
import axios from "axios";

function App() {
  const [firebaseLogin, setFirebaseLogin] = useState({ isSignedIn: false });
  const [signedIn, setSignedin] = useState(false);
  const [userData, setUserData] = useState(false);
  const [welcome, setWelcome] = useState();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setFirebaseLogin({ isSignedIn: !!user });
      if (!!user) {
        setSignedin(true);
        if (!localStorage.getItem("token")) {
          const send = {
            email: user.email,
            lastSignInTime: user.metadata.lastSignInTime
          };
          axios
            .post(`${process.env.REACT_APP_DOMAIN_NAME}api/firebase/`, send)
            .then(res => {
              // console.log(res.data);
              setWelcome(res.data.message);
              localStorage.setItem("token", res.data.token);
              authRequest(user)
            })
            .catch(err => {
              console.log(err);
            });
        } else if (localStorage.getItem("token")) {
          authRequest(user)
        }
      }
    });
  }, [signedIn]);

const authRequest = user => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token")
    }
  };

  axios
    .get(`${process.env.REACT_APP_DOMAIN_NAME}api/users/`, config)
    .then(res => {
      user = res.data
      console.log(res.data);
      setUserData(user);
    })
    .catch(err => {
      console.log(err.response);
    });
}

  const signOut = () => {
    firebase.auth().signOut();
    localStorage.removeItem("token");
    setSignedin(false);
  };

  return (
    <div className="App">
      <LandingPage signOut={signOut} signedin={signedIn} userData={userData} firebaseLogin={firebaseLogin} />
      <div className="welcome">
        <h5>{welcome}</h5>
      </div>
    </div>
  );
}

export default App;
