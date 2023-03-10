import React, {useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import saleLogo from "./resources/images/saleIcon.svg";
import CountdownTimer from "./CountDownTimer";
import Cookies from "universal-cookie";
import { BsSearch } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {useCookies} from "react-cookie";
import axios from "axios";
import Logo from "./resources/images/Logo.svg";
import notificationLogo from "./resources/images/bell_ring.svg";


import "./navbar.css";


export default function NavBar(props) {
  const cookiesz = new Cookies();
  const token = cookiesz.get("auth-token");


 

 

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;


  const [cookies,setCookie,removeCookie] = useCookies(['auth-token']);

  function triggerLogOut(){
    removeCookie('auth-token',[{path : '/'}])
    window.location.href = '/';
  }




  function handleCallbackResponse(resp) {
    let token = resp.credential;
    const configuration = {
      method: "post",
      url: "https://server.castleacademia.com/google-sign-in",
      // url : "http://localhost:9000/google-sign-in",
      data: {token},
    };

    axios(configuration)
      .then((res) => {
        let data = res.data.data ;
        setCookie('auth-token',data,{path : '/',maxAge : 5000});
        window.location.href = '/courses-overview'
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setTimeout(() => {
      window.google.accounts.id.initialize({
        client_id:
          "14703353359-l8dlidoi9af2ob762s508btjd5o4q3t7.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("googleSignInButton"),
        { theme: "outline", size: "medium" }
      );

      if(!cookies["auth-token"]){
        window.google.accounts.id.prompt();
      }
    }, 1000);
  }, []);






  return (
    <Navbar bg="dark" expand="md" className="navbar_container" fixed="top">
     
        <Navbar.Brand href="/">
                <img className="navbar_brand_img" src={Logo} alt="castle-academia-logo" srcset="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="mx-auto">
            <Container className="navbar_countdown_container">
              <p style={{ color: "#fff" }} className="navbar_countdown_text">
                Only last 10 seats are left. Hurry up!! The Sale will end soon.
                <CountdownTimer targetDate={dateTimeAfterThreeDays} />
              </p>
            </Container>
          </Nav>
          <Nav className="mr-auto" >
          <div className="saleLogoContainer" >
           <img src={saleLogo} alt="castle-academia-sale-logo" srcset="" className="saleLogo" />
           </div>
          </Nav>
          <Nav className="ml-auto">

           {!cookies["auth-token"] && (
              <Nav.Link href="#" className="my-auto mx-auto">
                <div id="googleSignInButton">

                </div>
              </Nav.Link>
            )}
            {cookies["auth-token"] && (
              <div className="d-flex">
                <div className="my-auto">
                <a href="#ads">
               <img src={notificationLogo} alt="" />
               </a>
                </div>
             
              <DropdownButton
               align={'end'}
                id="dropdown-item-button"
                className="my-auto"
                title={
                  <span className="pull-left">
                    <span className="nav_user_container">
                      <img
                        className="thumbnail-image mx-2"
                        src={
                          `${props.userData.data.user.google.details.picture}`
                        }
                        alt="user pic"
                        referrerPolicy="no-referrer"
                      />
                    </span>
                    {}
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
                            `${props.userData.data.user.google.details.picture}`
                          }
                          referrerPolicy="no-referrer"
                          alt="user pic"
                        />
                      </span>
                    </div>
                    <div className="my-auto d-flex flex-column">
                      <p>{props.userData.data.user.google.name}</p>
                      
                    </div>
                  </div>
                </Dropdown.ItemText>
                {/* <Dropdown.Item as ="InputGroup">
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
                </Dropdown.Item> */}
                {/* <Dropdown.Item as="button">
                  <div className="d-flex justify-content-between">
                    <p>Messages</p>
                    <p
                      className="bg-dark rounded-circle nav_message_number"
                      style={{ color: "#FDD03B" }}
                    >
                      03
                    </p>
                  </div>
                </Dropdown.Item> */}
                {/* <Dropdown.Item as="button">Manage Subscription</Dropdown.Item> */}
                {/* <Dropdown.Item as="button">Certifications</Dropdown.Item> */}
                <Dropdown.Divider />
                <Dropdown.Item as="a" href="/courses-overview">Courses Overview</Dropdown.Item>
                {/* <Dropdown.Item as="button">settings</Dropdown.Item> */}
                <Dropdown.Item as="button" onClick={triggerLogOut}>Log out</Dropdown.Item>
              </DropdownButton>
              </div>
            )}
           
  

          </Nav>
        </Navbar.Collapse>

    </Navbar>
  );
}
