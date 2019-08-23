import React from "react";
import Navigation from "./navigation";
import Home from "./home";
import Footer from "./footer";
import './index.css'
export default function LandingPage() {
  return (
    <div className="landingPage">
      <Navigation />
      <Home />
      {/* <Footer /> */}
    </div>
  );
}
