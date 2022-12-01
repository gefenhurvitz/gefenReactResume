import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import {Outlet} from "react-router-dom";
// import Header from "./pages/Header";


function App() {
  return (
    <div className="container">
      {/* <Header/> */}
      <Navbar />
      <br/>
      <br/>
      <br/>
      <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
