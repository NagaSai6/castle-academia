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

import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";

function App() {
  const cookies = new Cookies();
  const token = cookies.get("auth-token");
  let decode ;
  if(token){
   decode = jwt_decode(token);
  }
  return (
    <Router>
      <NavBar  userData={decode}/>

      <Routes>
        <Route path="/" exact element={<HomePage userData={decode}/>} />
        {token && <Route path="/courses-overview" exact element={<CoursesOverView />} />}
        {!token && <Route path="/sign-in" exact element={<SignIn />} />}
         <Route path="/sign-in" element={<Navigate replace to={'/'} />} />

        <Route path="*" element={<ErrorPage />} />
        <Route path="/courses-overview" exact element={<Navigate replace to={'/sign-in'}/>} />
      </Routes>

      <ChatBotForm />
    </Router>
  );
}

export default App;
