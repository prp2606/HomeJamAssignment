import React from "react";
import Body from "../Body/body";
import Hero from "../Hero/hero";
import Circles from "../Circles/circles";
import NavBar from "../NavBar/navBar";
import "./home.css";

const HomeJam = () => {
  return (
    <div id="home">
      <NavBar />
      <Hero />
      <Circles />
      <Body />
    </div>
  );
};

export default HomeJam;
