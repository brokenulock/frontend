import React, { useState, useEffect } from "react";
import LandingPage from "./components/landingpage/landingPage";
import firebase from "firebase";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState({ isSignedIn: false });
  const [signedIn, setSignedin] = useState(false);
  const [welcome, setWelcome] = useState();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUserData({ isSignedIn: !!user });
      if (!!user) {
        setSignedin(true);
        if (!localStorage.getItem("token")) {
          const send = {
            email: user.email,
            lastSignInTime: user.metadata.lastSignInTime
          };
          axios
            .post("http://localhost:4000/api/firebase/", send)
            .then(res => {
              console.log(res.data);
              setWelcome(res.data.message);
              localStorage.setItem("token", res.data.token);
            })
            .catch(err => {
              console.log(err.response);
            });
        }
      }
    });
  }, [signedIn]);

  const signOut = () => {
    firebase.auth().signOut();
    localStorage.removeItem("token");
    setSignedin(false);
  };

  return (
    <div className="App">
      {console.log(userData)}
      <LandingPage signOut={signOut} signedin={signedIn} />
      <div className="welcome">
        <h5>{welcome}</h5>
      </div>
    </div>
  );
}

export default App;
