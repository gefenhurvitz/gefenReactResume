import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import Header from "./pages/Header";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
// import Products from "./pages/Products";
import ProdTest from "./pages/ProdTest";
import Products from "./pages/Products";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<MainPage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="header" element={<Header />} />
          <Route path="team" element={<Team />} />
          <Route path="products" element={<Products />} />


        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
