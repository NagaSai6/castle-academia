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

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";
import { useState,useEffect } from "react";



function App() {

  function handleCallbackResponse(resp){
    console.log(jwt_decode(resp.credential))
  }
  
  useEffect(()=>{
   

    
    window.google.accounts.id.initialize({
      client_id : "928028449034-u237u6o9dc52fnbl562vmitb1ce9i78g.apps.googleusercontent.com",
      callback : handleCallbackResponse

    });
    
    window.google.accounts.id.renderButton(
      document.getElementById("googleSignInButton"),
      {theme : "outline",size:"medium"}
    );

    window.google.accounts.id.prompt();

  },[])



  const [isPremiumUser, setPremiumUser] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get("auth-token");
  let decode;

  if (token) {
    decode = jwt_decode(token);
    console.log(decode)
    if (decode && !isPremiumUser) {
      // const configuration = {
      //   method: "post",
      //   // url: "https://castle-academia-server.onrender.com/sign-in",
      //   url: "http://localhost:9000/sign-in",
      //   data: {
      //     email: decode.data.email,
      //     password: decode.data.password,
      //   },
      // };
      // axios(configuration)
      //   .then((result) => {
      //     cookies.set("auth-token", result.data.token, {
      //       path: "/",
      //     });
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //   });
      if (decode.data.role === "paid") {
        setPremiumUser(true);
      }
    }
  }
  return (
    <>

    <Router>
      <NavBar userData={decode} />

      <Routes>
        <Route path="/" exact element={<HomePage userData={decode} />} />
        {isPremiumUser && (
          <Route path="/courses-overview" exact element={<CoursesOverView />} />
        )}
        {!token && <Route path="/sign-in" exact element={<SignIn />} />}
        <Route path="/sign-in" element={<Navigate replace to={"/"} />} />

        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/courses-overview"
          exact
          element={<Navigate replace to={"/sign-in"} />}
        />
      </Routes>

      <ChatBotForm />
    </Router>
    </>
  );
}

export default App;
