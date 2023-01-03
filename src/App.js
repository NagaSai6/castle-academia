import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import SignIn from "./components/SignIn/SignIn";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
import ChatBotForm from "./components/ChatBot/ChatBot";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <ChatBotForm />
    </Router>
  );
}

export default App;
