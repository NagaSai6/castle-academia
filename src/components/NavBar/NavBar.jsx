import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import siginLogo from "./signin.svg";
import CountdownTimer from "./CountDownTimer";
import Cookies from "universal-cookie";
import { BsSearch } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import "./navbar.css";

export default function NavBar(props) {
  const cookies = new Cookies();
  const token = cookies.get("auth-token");


  if (token) {
    var email = props.userData.data.email;
    var name = email.split("@")[0];
  }

  function triggerLogOut(){
    cookies.remove('auth-token',[{path : '/'}]);
    window.location.href = '/';
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
            {!token && (
              <Nav.Link href="/sign-in" className="my-auto mx-auto">
                <button className="navbar_button">
                  <img src={siginLogo} />
                  <span className="mx-2">Sign In</span>
                </button>
              </Nav.Link>
            )}
            {token && (
              <DropdownButton
                id="dropdown-item-button"
                className="my-auto"
                title={
                  <span className="pull-left">
                    <span className="nav_user_container">
                      <img
                        className="thumbnail-image mx-2"
                        src={
                          "https://randomuser.me/api/portraits/thumb/men/75.jpg"
                        }
                        alt="user pic"
                      />
                    </span>
                    {name}
                  </span>
                }
              >
                <Dropdown.ItemText className="nav_drop_down_item_text">
                  <div className="d-flex">
                    <div>
                      <span className="nav_user_container">
                        <img
                          className="thumbnail-image mx-2"
                          src={
                            "https://randomuser.me/api/portraits/thumb/men/75.jpg"
                          }
                          alt="user pic"
                        />
                      </span>
                    </div>
                    <div className="my-auto d-flex flex-column">
                      <p>{name}</p>
                      <p>Developer</p>
                    </div>
                  </div>
                </Dropdown.ItemText>
                <Dropdown.Item as ="InputGroup">
                  <InputGroup className="mt-2 mb-3">
                    <Form.Control
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">
                      {" "}
                      <BsSearch />
                    </InputGroup.Text>
                  </InputGroup>
                </Dropdown.Item>
                <Dropdown.Item as="button">
                  <div className="d-flex justify-content-between">
                    <p>Messages</p>
                    <p
                      className="bg-dark rounded-circle nav_message_number"
                      style={{ color: "#FDD03B" }}
                    >
                      03
                    </p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item as="button">Manage Subscription</Dropdown.Item>
                <Dropdown.Item as="button">Certifications</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as="button">settings</Dropdown.Item>
                <Dropdown.Item as="button" onClick={triggerLogOut}>Log out</Dropdown.Item>
              </DropdownButton>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
