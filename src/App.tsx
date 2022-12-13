import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.scoped.css";
import axios from "axios";
import Header from "./components/header";
import BackgroundImage from "./assets/background.jpeg";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <img src={BackgroundImage} alt="" className="background-image" />
      </div>
    </>
  );
}

export default App;
