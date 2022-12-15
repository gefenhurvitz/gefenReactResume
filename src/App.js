import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import {Outlet} from "react-router-dom";
import { useState } from "react";
import { ColorContext } from "./Contexts/ColorContext";
// import Header from "./pages/Header";


function App() {
  const [color, setColor] = useState('')
  return (
    <div className="container">

    <ColorContext.Provider value={{color, setColor}}>

      {/* <Header/> */}
      <Navbar />
      <br/>
      <br/>
      <br/>
      <Outlet/>
      <Footer />

      </ColorContext.Provider>
    </div>
  );
}

export default App;
