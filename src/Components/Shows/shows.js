import React from "react";
import "./shows.css";
import celebrity from "../../Images/celebrity.jpg";
import ticket from "../../Images/ticket.png";

const Shows = () => {
  return (
    <div id="showContainer">
      <div className="show" id="one">
        <div className="image">
          <img src={celebrity} alt="celebrity" />
        </div>
        <div className="showContent">
          <div className="style">Folk</div>
          <h2 className="celebrityName">Benny Dayal</h2>
          <div className="footer">
            <div className="moreInfo">More Info &rarr;</div>
            <div className="ticket">
              <img src={ticket} alt="ticket" />
            </div>
          </div>
        </div>
        <div className="bgEffect"></div>
      </div>
      <div className="show" id="two">
        <div className="image">
          <img src={celebrity} alt="celebrity" />
        </div>
        <div className="showContent">
          <div className="style">Bollywood</div>
          <h2 className="celebrityName">Vijay Yesudas</h2>
          <div className="footer">
            <div className="moreInfo">More Info &rarr;</div>
            <div className="ticket">
              <img src={ticket} alt="ticket" />
            </div>
          </div>
        </div>
        <div className="bgEffect"></div>
      </div>
      <div className="show" id="three">
        <div className="image">
          <img src={celebrity} alt="celebrity" />
        </div>
        <div className="showContent">
          <div className="style">Folk</div>
          <h2 className="celebrityName">Andrea Jeremiah</h2>
          <div className="footer">
            <div className="moreInfo">More Info &rarr;</div>
            <div className="ticket">
              <img src={ticket} alt="ticket" />
            </div>
          </div>
        </div>
        <div className="bgEffect"></div>
      </div>
      <div className="show" id="four">
        <div className="image">
          <img src={celebrity} alt="celebrity" />
        </div>
        <div className="showContent">
          <div className="style">Folk</div>
          <h2 className="celebrityName">Shilpa Rao</h2>
          <div className="footer">
            <div className="moreInfo">More Info &rarr;</div>
            <div className="ticket">
              <img src={ticket} alt="ticket" />
            </div>
          </div>
        </div>
        <div className="bgEffect"></div>
      </div>
    </div>
  );
};

export default Shows;
