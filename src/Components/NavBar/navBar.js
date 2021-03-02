import React, { useState } from "react";
import "./navBar.css";
import search from "../../Images/search.png";
import bag from "../../Images/bag.png";

const NavBar = () => {
  let menuOpen = false;
  const [classname1, setClassname1] = useState("hamBurger");
  const [classname2, setClassname2] = useState("dropUp");

  const openMenu = () => {
    if (!menuOpen) {
      setClassname1("hamBurger open");
      setClassname2("dropDown");
      menuOpen = true;
    } else {
      setClassname1("hamBurger");
      setClassname2("dropUp");
      menuOpen = false;
    }
  };

  return (
    <nav id="navigation">
      <h3 id="logo">HOMEJAM</h3>
      <ul id="navLinks">
        <li id="search">
          <img src={search} alt="Search" />
          <a href="#">
            <p>Search</p>
          </a>
        </li>
        <li id="help">
          <a href="#">
            <p>Help</p>
          </a>
        </li>
        <li id="account">
          <a href="#">
            <p>Account</p>
          </a>
        </li>
        <li id="bag">
          <a href="#">
            <img src={bag} alt="Account" />
          </a>
        </li>
      </ul>
      <ul id="responsive">
        <li id="search">
          <a href="#">
            <img src={search} alt="Search" />
          </a>
        </li>
        <li id="bag">
          <a href="#">
            <img src={bag} alt="Account" />
          </a>
        </li>
        <li className={classname1} onClick={openMenu}>
          <div className="hamBurgerBtn" id="slide1"></div>
          <div className="hamBurgerBtn" id="slide2"></div>
          <div className="hamBurgerBtn" id="slide3"></div>
        </li>
        <ul className={classname2}>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default NavBar;
