// import './App.css'
import Chat from "./components/Chat";
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/chats" element={<Chat/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;



/*import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomeWithChat />} />
        </Routes>
      </Router>
    </div>
  );
}

function HomeWithChat() {
  return (
    <>
      <Home />
      <Chat />
    </>
  );
}

export default App;*/