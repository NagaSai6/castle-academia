import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ChatBotForm from "./components/ChatBot/ChatBot";
import SignIn from "./components/SignIn/SignIn";
// lib
import ProtectedRoutes from "./lib/ProtectedRoutes";
// pages
import HomePage from "./Pages/HomePage/HomePage";
import CoursesOverView from "./Pages/CoursesOverView/CoursesOverView";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import jwt_decode from "jwt-decode";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

function App() {
  // state

  let [cookies] = useCookies(["auth-token"]);
  let [userData, setUserData] = useState({ isExist: false, data: {} });
  let [isPremiumUser, setPremiumUser] = useState(false);
  let decode;
  if (cookies["auth-token"] && !userData.isExist) {
    let decoded_data = jwt_decode(cookies["auth-token"]);
    console.log(decoded_data);
    if (decoded_data) {
      setUserData({ isExist: true, data: decoded_data });
      if (decoded_data.user.role === "paid") {
        setPremiumUser(true);
      }
      const configuration = {
        method: "get",
        // url: "https://castle-academia-server.onrender.com/google-sign-in",
        url: `http://localhost:9000/check-user-role?id=${decoded_data.user._id}`,
        headers: {
          Authorization: `Bearer ${cookies["auth-token"]}`,
        },
      };
      axios(configuration)
        .then((res) => {
          let role = res.data.data;
          console.log(role);
       
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  console.log(userData);
  console.log(isPremiumUser);

  return (
    <>
      <Router>
        <NavBar userData={userData} />

        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route
              path="/courses-overview"
              exact
              element={
                <ProtectedRoutes isPremiumUser={isPremiumUser}>
                  <CoursesOverView />
                </ProtectedRoutes>
              }
            />

          {/* {!cookies["auth-token"] && <Route path="/sign-in" exact element={<SignIn />} />} */}
          {/* <Route path="/sign-in" element={<Navigate replace to={"/"} />} /> */}

          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <ChatBotForm />
      </Router>
    </>
  );
}

export default App;
