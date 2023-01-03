import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ChatBotForm from "./components/ChatBot/ChatBot";
import SignIn from "./components/SignIn/SignIn";
// pages
import HomePage from "./Pages/HomePage/HomePage";
import CoursesOverView from "./Pages/CoursesOverView/CoursesOverView";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/courses-overview" element={<CoursesOverView />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <ChatBotForm />
    </Router>
  );
}

export default App;
