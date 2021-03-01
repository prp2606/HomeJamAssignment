import React from "react";
import "./body.css";
import Shows from "../Shows/shows.js";
import Reviews from "../Reviews/review.js";

const Body = () => {
  return (
    <div id="body">
      <div id="shows">
        <header className="bodyHeader">
          <div className="name">
            <h3>Upcoming Shows</h3>
            <div className="underline">&nbsp;</div>
          </div>
          <p>View All</p>
        </header>
        <Shows />
      </div>
      <div id="reviews">
        <header className="bodyHeader">
          <div className="name">
            <h3>Reviews</h3>
            <div className="underline">&nbsp;</div>
          </div>
          <p className="oneOfTwelve">
            <p id="one">1</p>
            <p id="of">/</p>
            <p id="twelve">12</p>
            <div id="arrows">
              <p>&larr;</p>
              <p>&rarr;</p>
            </div>
          </p>
        </header>
        <Reviews />
      </div>
    </div>
  );
};

export default Body;
