import React from "react";
import "./review.css";
import celebrity from "../../Images/celebrity.jpg";
import india from "../../Images/india.png";

const Reviews = () => {
  return (
    <div id="reviewContainer">
      <div className="review">
        <div className="top">
          <img src={celebrity} />
          <div>
            <h3 className="name">Hellen Jummy</h3>
            <div className="place">
              <img src={india} />
              <p>PALO ALTO, CA</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
            donec in nisi vitae. Vestibulum pellentesque eget laoreet
            adipiscing.{" "}
          </p>
        </div>
        <div className="bgEffect2"></div>
      </div>

      <div className="review">
        <div className="top">
          <img src={celebrity} />
          <div>
            <h3 className="name">Isaac Oluwatemilorun</h3>
            <div className="place">
              <img src={india} />
              <p>PALO ALTO, CA</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
            donec in nisi vitae. Vestibulum pellentesque eget laoreet
            adipiscing.{" "}
          </p>
        </div>
        <div className="bgEffect2"></div>
      </div>

      <div className="review">
        <div className="top">
          <img src={celebrity} />
          <div>
            <h3 className="name">Hellen Jummy</h3>
            <div className="place">
              <img src={india} />
              <p>PALO ALTO, CA</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
            donec in nisi vitae. Vestibulum pellentesque eget laoreet
            adipiscing.{" "}
          </p>
        </div>
        <div className="bgEffect2"></div>
      </div>
    </div>
  );
};

export default Reviews;
