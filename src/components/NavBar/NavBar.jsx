import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import siginLogo from "./signin.svg";
import CountdownTimer from "./CountDownTimer";
import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import "./navbar.css";

export default function NavBar(props) {
  const cookies = new Cookies();
  const token = cookies.get("auth-token");

 console.log(props.userData)

   if(token){
    var email = props.userData.data.email;
    var name = email.split('@')[0];
   }

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
          {!token &&  <Nav.Link href="/sign-in" className="my-auto mx-auto">
              <button className="navbar_button">
                <img src={siginLogo} />
                <span className="mx-2">Sign In</span>
              </button>
            </Nav.Link>}
          {token &&     
          <DropdownButton id="dropdown-item-button" className="my-auto" title={
            <span className="pull-left">
              <span className="nav_user_container">
              <img className="thumbnail-image mx-2" 
                    src={'https://randomuser.me/api/portraits/thumb/men/75.jpg'} 
                    alt="user pic"
                />
              </span>
                {name}
            </span>
        } >
      <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
      <Dropdown.Item as="button">Action</Dropdown.Item>
      <Dropdown.Item as="button">Another action</Dropdown.Item>
      <Dropdown.Item as="button">Something else</Dropdown.Item>
    </DropdownButton>}
    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
