import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
        <div className="min-h-[calc(100vh-136)]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
