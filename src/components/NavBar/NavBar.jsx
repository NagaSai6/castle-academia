import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import siginLogo from "./signin.svg";

import "./navbar.css";

export default function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" className="navbar_container" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <div className="navbar_navbrand">
            <h1 className="navbar_header">
              <span style={{ color: "#FDD03B" }}>CASTLE</span> ACADEMIA
            </h1>
            <p className="navbar_desc">A home for your dream career</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="ml-4 justify-content-center ">
            <Container className="navbar_countdown_container">
              <p style={{ color: "red" }}>
                Only last 10 seats are left. Hurry up!! The Sale will end soon.
              </p>
            </Container>

            <Nav.Link href="#link" className="ml-auto">
              <button className="navbar_button">
                <img src={siginLogo} />
                <span className="mx-2">Sign Up</span>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
