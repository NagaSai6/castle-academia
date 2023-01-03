import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import siginLogo from "./signin.svg";
import CountdownTimer from "./CountDownTimer";

import "./navbar.css";

export default function NavBar() {
    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
  
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <Navbar bg="dark" expand="lg" className="navbar_container" fixed="top">
      <Container>
        <Navbar.Brand href="/">
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
          <Nav className="mx-auto ">
            <Container className="navbar_countdown_container">
              <p style={{ color: "#fff" }} className="navbar_countdown_text">
                Only last 10 seats are left. Hurry up!! The Sale will end soon.
                <CountdownTimer targetDate={dateTimeAfterThreeDays} />
              </p>
            </Container>

            
          </Nav>
          <Nav className="ml-auto">
          <Nav.Link href="/sign-in" className="my-auto mx-auto">
              <button className="navbar_button">
                <img src={siginLogo} />
                <span className="mx-2">Sign In</span>
              </button>
            </Nav.Link>
            <Nav.Link href="/courses-overview" className="my-auto mx-auto">
              <button className="navbar_button">
                <img src={siginLogo} />
                <span className="mx-2">Courses Overview</span>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
