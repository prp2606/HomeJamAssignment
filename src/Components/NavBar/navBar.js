import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./navBar.css";
import search from "../../Images/search.png";
import bag from "../../Images/bag.png";

{
  /* <Navbar bg="light" expand="lg" id="navigation">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.liider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar> */
}

const NavBar = () => {
  // const hamBurgerMenu = document.getElementById("hamBurger");
  // console.log(hamBurgerMenu);
  // const navigation = document.getElementById("navigation");
  // const navItems = Array.from(document.getElementsByClassName("navItems"));
  // let menuOpen = false;

  // hamBurgerMenu.addEventListener("click", () => {
  //   if (!menuOpen) {
  //     hamBurgerMenu.classList.add("open");
  //     // navItems.forEach((element) => {
  //     //   element.style.height = "90vh";
  //     //   element.style.clipPath = "circle(1000px at 93.3% 7.8%)";
  //     // });
  //     menuOpen = true;
  //   } else {
  //     hamBurgerMenu.classList.remove("open");
  //     // navItems.forEach((element) => {
  //     //   element.style.height = "0vh";
  //     //   element.style.clipPath = "circle(0px at 93.3% 7.8%)";
  //     // });
  //     menuOpen = false;
  //   }
  // });

  return (
    <nav id="navigation">
      <h3 id="logo">HOMEJAM</h3>
      {/* <img
        src="https://www.myhomejam.com/wp-content/uploads/2020/09/asdfasdfasdfHomejam.png"
        alt="Homejam"
      /> */}
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
        <li id="hamBurger">
          <div class="hamBurgerBtn" id="slide1"></div>
          <div class="hamBurgerBtn" id="slide2"></div>
          <div class="hamBurgerBtn" id="slide3"></div>
        </li>
        <ul id="drop">
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
