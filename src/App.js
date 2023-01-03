import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import ChatBotForm from "./components/ChatBot/ChatBot";


function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <Footer />
      <ChatBotForm />
    </>
  );
}

export default App;
