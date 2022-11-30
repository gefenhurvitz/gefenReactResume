import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import About from "./components/pages/About";
import Header from "./components/pages/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<MainPage />} />
          <Route path="about" element={<About />} />
          <Route path="header" element={<Header />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
