import React from "react";
import NavBar from "../NavBar/navBar";
import "./circles.css";
import heart from "../../Images/heart.png";
import icon2 from "../../Images/icon2.png";

const Circles = () => {
  return (
    <div id="circleContainer">
      <div id="circleCards">
        <div className="circles" id="heart">
          <img src={heart} alt="heart" />
          <p className="zeroes">0</p>
          <p className="label">Label</p>
        </div>
        <div className="circles">
          <img src={icon2} alt="icon2" />
          <p className="zeroes">0</p>
          <p className="label">Label</p>
        </div>
        <div className="circles">
          <img src={icon2} alt="icon2" />
          <p className="zeroes">0</p>
          <p className="label">Label</p>
        </div>
        <div className="circles">
          <img src={icon2} alt="icon2" />
          <p className="zeroes">0</p>
          <p className="label">Label</p>
        </div>
      </div>
    </div>
  );
};

export default Circles;
